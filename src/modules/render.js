import { escapeHtml } from '../utils/helpers.js';

/**
 * Renders resources to the DOM
 * @param {Array} resources - Array of resource objects to render
 */
export function renderResources(resources) {
  const container = document.getElementById('resources');
  const countElement = document.getElementById('resourceCount');

  if (!container) return;

  // Update count
  if (countElement) {
    countElement.textContent = `Showing ${resources.length} ${resources.length === 1 ? 'resource' : 'resources'}`;
  }

  // Clear existing content
  container.innerHTML = '';

  // Render each resource as a card
  resources.forEach((resource) => {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.innerHTML = `
      <div class="card-header">
        <h3 class="resource-name">${escapeHtml(resource.name)}</h3>
        <span class="resource-category">${escapeHtml(resource.category)}</span>
      </div>
      <p class="resource-description">${escapeHtml(resource.description)}</p>
      <a href="${escapeHtml(resource.link)}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="resource-link"
         aria-label="Visit ${escapeHtml(resource.name)}">
        Visit Resource →
      </a>
    `;
    container.appendChild(card);
  });

  // Show empty state if no resources
  if (resources.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No resources found matching your search.</p>
        <button onclick="window.clearFilters()" class="clear-btn">Clear Filters</button>
      </div>
    `;
  }
}

/**
 * Populates category dropdown with unique categories
 * @param {Array} resources - List of all resources
 */
export function populateCategoryFilter(resources) {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;

  // Clear existing options except the first one
  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1);
  }

  const categories = [...new Set(resources.map((r) => r.category))].sort();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}
