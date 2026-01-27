/**
 * Developer Dashboard - Main Application
 * A dynamic resource manager for developer tools, tutorials, and documentation
 */

// Developer Resources Data
const developerResources = [
  {
    name: 'MDN Web Docs',
    category: 'Documentation',
    link: 'https://developer.mozilla.org',
    description:
      'Comprehensive web development documentation and learning resources',
  },
  {
    name: 'React Documentation',
    category: 'Framework',
    link: 'https://react.dev',
    description: 'Official React documentation with guides and API reference',
  },
  {
    name: 'Vite',
    category: 'Build Tool',
    link: 'https://vitejs.dev',
    description: 'Next generation frontend tooling for modern web development',
  },
  {
    name: 'ESLint',
    category: 'Code Quality',
    link: 'https://eslint.org',
    description: 'Pluggable linting utility for JavaScript and JSX',
  },
  {
    name: 'Prettier',
    category: 'Code Quality',
    link: 'https://prettier.io',
    description: 'Opinionated code formatter supporting multiple languages',
  },
  {
    name: 'CSS Tricks',
    category: 'Tutorial',
    link: 'https://css-tricks.com',
    description: 'Tips, tricks, and techniques on using CSS',
  },
  {
    name: 'JavaScript.info',
    category: 'Tutorial',
    link: 'https://javascript.info',
    description: 'Modern JavaScript tutorial from basics to advanced',
  },
  {
    name: 'GitHub',
    category: 'Tool',
    link: 'https://github.com',
    description: 'Platform for version control and collaboration',
  },
  {
    name: 'Stack Overflow',
    category: 'Community',
    link: 'https://stackoverflow.com',
    description: 'Q&A platform for developers and programmers',
  },
  {
    name: 'Node.js Documentation',
    category: 'Documentation',
    link: 'https://nodejs.org/docs',
    description: 'Official Node.js documentation and API reference',
  },
  {
    name: 'TypeScript Handbook',
    category: 'Documentation',
    link: 'https://www.typescriptlang.org/docs',
    description: 'Complete guide to TypeScript language features',
  },
  {
    name: 'Webpack',
    category: 'Build Tool',
    link: 'https://webpack.js.org',
    description: 'Static module bundler for modern JavaScript applications',
  },
  {
    name: 'VS Code',
    category: 'Tool',
    link: 'https://code.visualstudio.com',
    description: 'Powerful and customizable code editor',
  },
  {
    name: 'FreeCodeCamp',
    category: 'Tutorial',
    link: 'https://www.freecodecamp.org',
    description: 'Learn to code with free online courses and certifications',
  },
  {
    name: 'Can I Use',
    category: 'Tool',
    link: 'https://caniuse.com',
    description: 'Browser support tables for modern web technologies',
  },
];

// State management
let filteredResources = [...developerResources];

/**
 * Renders resources to the DOM
 * @param {Array} resources - Array of resource objects to render
 */
function renderResources(resources) {
  const container = document.getElementById('resources');
  const countElement = document.getElementById('resourceCount');

  if (!container) return;

  // Update count
  countElement.textContent = `Showing ${resources.length} ${resources.length === 1 ? 'resource' : 'resources'}`;

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
        <button onclick="clearFilters()" class="clear-btn">Clear Filters</button>
      </div>
    `;
  }
}

/**
 * Escapes HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Filters resources based on search query and category
 */
function filterResources() {
  const searchQuery = document
    .getElementById('searchInput')
    .value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;

  filteredResources = developerResources.filter((resource) => {
    const matchesSearch =
      resource.name.toLowerCase().includes(searchQuery) ||
      resource.category.toLowerCase().includes(searchQuery) ||
      resource.description.toLowerCase().includes(searchQuery);

    const matchesCategory =
      categoryFilter === '' || resource.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  renderResources(filteredResources);
}

/**
 * Clears all filters and shows all resources
 */
function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('categoryFilter').value = '';
  filterResources();
}

/**
 * Populates category dropdown with unique categories
 */
function populateCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;

  const categories = [
    ...new Set(developerResources.map((r) => r.category)),
  ].sort();

  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

/**
 * Initializes the application
 */
function init() {
  // Populate category filter
  populateCategoryFilter();

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
