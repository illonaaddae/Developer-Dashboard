/**
 * Developer Dashboard - Main Application
 * A dynamic resource manager for developer tools, tutorials, and documentation
 */

import { developerResources } from './data/resources.js';
import { renderResources, populateCategoryFilter } from './modules/render.js';

// State management
let filteredResources = [...developerResources];

/**
 * Filters resources based on search query and category
 */
function filterResources() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  if (!searchInput || !categoryFilter) return;

  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  filteredResources = developerResources.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery) ||
      resource.category.toLowerCase().includes(searchQuery) ||
      resource.description.toLowerCase().includes(searchQuery);

    const matchesCategory =
      selectedCategory === '' || resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  renderResources(filteredResources);
}

/**
 * Clears all filters and shows all resources
 */
function clearFilters() {
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  if (searchInput) searchInput.value = '';
  if (categoryFilter) categoryFilter.value = '';

  // Reset state
  filteredResources = [...developerResources];
  renderResources(filteredResources);
}

/**
 * Initializes the application
 */
function init() {
  // Populate category filter
  populateCategoryFilter(developerResources);

  // Initial render
  renderResources(filteredResources);

  // Set up event listeners
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');

  if (searchInput) {
    searchInput.addEventListener('input', filterResources);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterResources);
  }

  // Make clearFilters available globally for the empty state button
  window.clearFilters = clearFilters;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
