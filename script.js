// ============================================
// RENDERING FUNCTION
// ============================================

function renderDrugClass(className) {
  // 1. Get the drugs array from the drugClasses object
  const drugs = drugClasses[className];
  
  // 2. Get the timeline container
  const timeline = document.querySelector('#timeline');
  
  // 3. Clear the existing timeline
  timeline.innerHTML = '';
  
  // 4. Loop through each drug and create HTML elements
  drugs.forEach(drug => {
    // Create the main card container
    const card = document.createElement('div');
    card.className = `timeline-item ${drug.classKey}`;
    
    // Build the card HTML with template literal
    card.innerHTML = `
      <div class="drug-header">
        <div class="drug-name-wrapper">
          <div class="drug-name">${drug.name}</div>
          <div class="drug-type">${drug.typeAbbreviation} <span class="year">${drug.year}</span></div>
        </div>
        <div class="icon-wrapper">${drug.icon}</div>
      </div>
      <div class="description">${drug.description} <span class="expand-icon">MORE</span></div>
      <div class="details">
        <div class="detail-section">
          <div class="detail-label">Drug Class</div>
          <div class="detail-content">${drug.type} (${drug.typeAbbreviation})</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Discovered By</div>
          <div class="detail-content">${drug.discoveredBy}</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Impact</div>
          <div class="detail-content">${drug.impact}</div>
        </div>
        <div class="detail-section">
          <div class="detail-label">Controversy</div>
          <div class="detail-content">${drug.controversy}</div>
        </div>
      </div>
    `;
    
    // 5. Add the click event listener INSIDE the loop for each card
    card.addEventListener('click', () => toggleDetails(card));
    
    // 6. Append the card to the timeline
    timeline.appendChild(card);
  });
  
  // 7. Update the journey section
  updateJourneySection(className);

  // 8. Update the condition section
  updateConditionSection(className);
  
  // 9. Update the legend section
  updateLegendSection(className);
}

// ============================================
// UPDATE JOURNEY SECTION
// ============================================

function updateJourneySection(className) {
  const journeyData = journeyTexts[className];
  
  const journeySection = document.querySelector('.journey-intro');
  journeySection.querySelector('h2').textContent = journeyData.title;
  journeySection.querySelector('p').textContent = journeyData.text;
}

// ============================================
// UPDATE LEGEND SECTION
// ============================================

function updateLegendSection(className) {
  const legend = legendData[className];
  
  // Update header
  document.querySelector('.legend-icon').textContent = legend.icon;
  document.querySelector('.legend h3').textContent = legend.title;
  document.querySelector('.legend-description').textContent = legend.description;
  
  // Clear and rebuild legend items
  const legendItemsContainer = document.querySelector('.legend-items');
  legendItemsContainer.innerHTML = '';
  
  legend.items.forEach(item => {
    const legendItem = document.createElement('div');
    legendItem.className = `legend-item ${item.classKey}`;
    legendItem.onclick = () => toggleLegendItem(legendItem);
    
    legendItem.innerHTML = `
      <div class="legend-item-content">
        <div class="legend-item-header">
          <div class="legend-dot" style="background: ${item.color};"></div>
          <div>
            <div class="legend-name">${item.name}</div>
            <div class="legend-full">${item.fullName}</div>
          </div>
        </div>
        <div class="legend-mechanism">
          ${item.mechanism}
        </div>
      </div>
      <span class="legend-expand-icon">▼</span>
    `;
    
    legendItemsContainer.appendChild(legendItem);
  });
}

// ============================================
// UPDATE CONDITION SECTION
// ============================================

function updateConditionSection(className) {
  const condition = conditionInfo[className];
  
  // Update the condition content
  document.querySelector('.condition-icon').textContent = condition.icon;
  document.querySelector('.condition-name').textContent = condition.name;
  document.querySelector('.condition-description').textContent = condition.description;
  document.querySelector('.condition-pathophysiology').textContent = condition.pathophysiology;
  document.querySelector('.condition-prevalence').textContent = condition.prevalence;
  
  // Collapse the section when switching drug classes
  const conditionContent = document.querySelector('.condition-content');
  const expandBtn = document.querySelector('.condition-expand-btn');
  conditionContent.classList.remove('visible');
  expandBtn.textContent = 'Learn more ▼';
}

// ============================================
// TOGGLE CONDITION SECTION
// ============================================

function toggleConditionSection() {
  const conditionContent = document.querySelector('.condition-content');
  const expandBtn = document.querySelector('.condition-expand-btn');
  
  if (conditionContent.classList.contains('visible')) {
    conditionContent.classList.remove('visible');
    expandBtn.textContent = 'Learn more ▼';
  } else {
    conditionContent.classList.add('visible');
    expandBtn.textContent = 'Show less ▲';
  }
}

// ============================================
// TOGGLE DETAILS FUNCTION
// ============================================

function toggleDetails(element) {
  const details = element.querySelector('.details');
  const icon = element.querySelector('.expand-icon');
  
  if (details.classList.contains('visible')) {
    details.classList.remove('visible');
    icon.textContent = 'MORE';
  } else {
    details.classList.add('visible');
    icon.textContent = 'LESS';
  }
}

// ============================================
// TOGGLE LEGEND ITEM FUNCTION
// ============================================

function toggleLegendItem(element) {
  const mechanism = element.querySelector('.legend-mechanism');
  
  if (element.classList.contains('expanded')) {
    element.classList.remove('expanded');
    mechanism.classList.remove('visible');
  } else {
    element.classList.add('expanded');
    mechanism.classList.add('visible');
  }
}

// ============================================
// EVENT LISTENERS & INITIALIZATION
// ============================================

// Get the dropdown element
const drugClassSelect = document.querySelector('#drugClass');

// Add event listener to dropdown
drugClassSelect.addEventListener('change', (event) => {
  const selectedClass = event.target.value;
  renderDrugClass(selectedClass);
});

// Initialize the page with the default class (antidepressants)
document.addEventListener('DOMContentLoaded', () => {
  renderDrugClass('antidepressants');
});