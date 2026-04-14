// ════════════════════════════════════════════════════════════
//  ADMIN MODULE — Full Admin/Customization System
//  PIN-based authentication, branding, data merging, CRUD
// ════════════════════════════════════════════════════════════

let adminMode = false;
const DEFAULT_PIN = "1234";

// ──────────────────────────────────────────── INITIALIZATION
function initAdmin() {
  // Create modals container if not exists
  if (!document.getElementById('admin-modals-container')) {
    const container = document.createElement('div');
    container.id = 'admin-modals-container';
    document.body.appendChild(container);
  }

  // Apply any stored branding on load
  applyBranding();
}

// Hook admin button
function adminSettingsClicked() {
  const pinInput = prompt("Enter PIN to access admin settings:");
  if (pinInput === null) return; // Cancelled

  const storedPin = localStorage.getItem('dermPortal_pin');
  const correctPin = storedPin ? atob(storedPin) : DEFAULT_PIN;

  if (pinInput !== correctPin) {
    alert("❌ Incorrect PIN");
    return;
  }

  // Toggle admin mode
  adminMode = !adminMode;
  if (adminMode) {
    document.body.classList.add('admin-active');
    showAdminBanner();
    showAdminSettings();
  } else {
    document.body.classList.remove('admin-active');
    removeAdminBanner();
  }
}

// ──────────────────────────────────────────── ADMIN BANNER
function showAdminBanner() {
  let banner = document.getElementById('admin-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'admin-banner';
    banner.className = 'admin-banner';
    banner.textContent = '🔴 ADMIN MODE';
    document.body.appendChild(banner);
  }
}

function removeAdminBanner() {
  const banner = document.getElementById('admin-banner');
  if (banner) banner.remove();
}

// ──────────────────────────────────────────── BRANDING & CONFIG
function applyBranding() {
  const stored = localStorage.getItem('dermPortal_branding');
  if (!stored) return;

  const branding = JSON.parse(stored);

  // Update logo title
  const logoTitle = document.querySelector('.logo-title');
  if (logoTitle && branding.practiceName) {
    logoTitle.textContent = branding.practiceName;
  }

  // Update page title
  if (branding.practiceName) {
    document.title = branding.practiceName + ' - Derm MA Portal';
  }

  // Update sidebar footer
  const footerP = document.querySelector('.sidebar-footer p');
  if (footerP && branding.practiceName) {
    footerP.textContent = branding.practiceName;
  }

  // Remove any previously saved color override (feature removed)
  const existing = document.getElementById('admin-branding-overrides');
  if (existing) existing.remove();
}

function showAdminSettings() {
  const modal = createModal(
    'Admin Settings',
    buildAdminSettingsHTML(),
    [
      { label: 'Close', class: 'btn-secondary', onclick: 'closeAdminModal()' }
    ]
  );
  modal.classList.add('admin-modal-wide');
}

function buildAdminSettingsHTML() {
  const branding = getStoredBranding();

  return `
    <div class="admin-tabs">
      <button class="admin-tab-btn active" onclick="switchAdminTab('branding')">🎨 Branding</button>
      <button class="admin-tab-btn" onclick="switchAdminTab('pin')">🔐 Change PIN</button>
      <button class="admin-tab-btn" onclick="switchAdminTab('importexport')">💾 Import / Export</button>
      <button class="admin-tab-btn" onclick="switchAdminTab('reset')">⚠️ Reset All</button>
    </div>

    <div id="tab-branding" class="admin-tab-content">
      <h3>Practice Branding</h3>
      <div class="admin-field">
        <label>Practice Name</label>
        <input type="text" id="adminPracticeName" value="${branding.practiceName || ''}" />
      </div>
      <div class="admin-field">
        <label>Logo URL</label>
        <input type="text" id="adminLogoUrl" value="${branding.logoUrl || ''}" />
      </div>
      <div class="admin-field">
        <label>Primary Phone</label>
        <input type="text" id="adminPhone" value="${branding.phone || ''}" />
      </div>
      <div class="admin-field">
        <label>Address</label>
        <input type="text" id="adminAddress" value="${branding.address || ''}" />
      </div>
      <button class="btn-primary" onclick="saveBrandingSettings()">Save Branding</button>
    </div>

    <div id="tab-pin" class="admin-tab-content" style="display:none;">
      <h3>Change PIN</h3>
      <div class="admin-field">
        <label>Current PIN</label>
        <input type="password" id="adminCurrentPin" />
      </div>
      <div class="admin-field">
        <label>New PIN</label>
        <input type="password" id="adminNewPin" />
      </div>
      <div class="admin-field">
        <label>Confirm New PIN</label>
        <input type="password" id="adminConfirmPin" />
      </div>
      <button class="btn-primary" onclick="changePin()">Change PIN</button>
    </div>

    <div id="tab-importexport" class="admin-tab-content" style="display:none;">
      <h3>Export Configuration</h3>
      <p>Download all custom data (branding, edits, additions) as JSON.</p>
      <button class="btn-primary" onclick="exportConfig()">📥 Export Config</button>

      <hr class="admin-section-divider" />

      <h3>Import Configuration</h3>
      <p>Upload a previously exported JSON config file to restore all settings.</p>
      <input type="file" id="importConfigFile" accept=".json" />
      <button class="btn-primary" onclick="importConfig()">📤 Import Config</button>
    </div>

    <div id="tab-reset" class="admin-tab-content" style="display:none;">
      <h3>Reset All Custom Data</h3>
      <p style="color: #dc2626; font-weight: 600;">⚠️ WARNING: This will delete all customizations, edits, and additions. This cannot be undone.</p>
      <button class="admin-danger-btn" onclick="resetAllCustomData()">Delete All Custom Data</button>
    </div>
  `;
}

function switchAdminTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.admin-tab-content').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));

  // Show selected tab
  const tab = document.getElementById('tab-' + tabName);
  if (tab) tab.style.display = 'block';

  // Mark button active
  event.target.classList.add('active');
}

function saveBrandingSettings() {
  const branding = {
    practiceName: document.getElementById('adminPracticeName').value,
    logoUrl: document.getElementById('adminLogoUrl').value,
    phone: document.getElementById('adminPhone').value,
    address: document.getElementById('adminAddress').value,
    accentColor: null
  };

  localStorage.setItem('dermPortal_branding', JSON.stringify(branding));
  applyBranding();
  alert('✅ Branding saved! Reload the page to see all changes.');
}

function changePin() {
  const currentInput = document.getElementById('adminCurrentPin').value;
  const newPin = document.getElementById('adminNewPin').value;
  const confirmPin = document.getElementById('adminConfirmPin').value;

  const storedPin = localStorage.getItem('dermPortal_pin');
  const correctPin = storedPin ? atob(storedPin) : DEFAULT_PIN;

  if (currentInput !== correctPin) {
    alert('❌ Current PIN is incorrect');
    return;
  }

  if (newPin !== confirmPin) {
    alert('❌ New PIN and confirm PIN do not match');
    return;
  }

  if (newPin.length < 4) {
    alert('❌ PIN must be at least 4 characters');
    return;
  }

  localStorage.setItem('dermPortal_pin', btoa(newPin));
  alert('✅ PIN changed successfully');
  document.getElementById('adminCurrentPin').value = '';
  document.getElementById('adminNewPin').value = '';
  document.getElementById('adminConfirmPin').value = '';
}

function exportConfig() {
  const config = {
    branding: getStoredBranding(),
    custom: getCustomData()
  };

  const json = JSON.stringify(config, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'derm-portal-config.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importConfig() {
  const fileInput = document.getElementById('importConfigFile');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const config = JSON.parse(e.target.result);
      if (config.branding) {
        localStorage.setItem('dermPortal_branding', JSON.stringify(config.branding));
      }
      if (config.custom) {
        localStorage.setItem('dermPortal_custom', JSON.stringify(config.custom));
      }
      alert('✅ Configuration imported successfully. Reloading page...');
      location.reload();
    } catch (err) {
      alert('❌ Invalid JSON file: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetAllCustomData() {
  if (!confirm('⚠️ Are you ABSOLUTELY SURE? This will delete all custom data. This cannot be undone.')) {
    return;
  }

  if (!confirm('Last chance: Delete all custom data? Type "DELETE" in the next prompt to confirm.')) {
    return;
  }

  const confirmed = prompt('Type DELETE to confirm permanent deletion:');
  if (confirmed !== 'DELETE') {
    alert('Cancelled.');
    return;
  }

  localStorage.setItem('dermPortal_custom', JSON.stringify(getEmptyCustomData()));
  alert('✅ All custom data reset. Reloading page...');
  location.reload();
}

function closeAdminModal() {
  const modal = document.querySelector('.admin-modal-overlay');
  if (modal) modal.remove();
}

// ──────────────────────────────────────────── CUSTOM DATA LAYER
function getEmptyCustomData() {
  return {
    lib_add: [],
    lib_edit: {},
    lib_del: [],
    qa_add: [],
    qa_edit: {},
    qa_del: [],
    pa_add: [],
    pa_edit: {},
    pa_del: []
  };
}

function getCustomData() {
  const stored = localStorage.getItem('dermPortal_custom');
  if (!stored) return getEmptyCustomData();
  return JSON.parse(stored);
}

function saveCustomData(data) {
  localStorage.setItem('dermPortal_custom', JSON.stringify(data));
}

function getStoredBranding() {
  const stored = localStorage.getItem('dermPortal_branding');
  if (!stored) {
    return {
      practiceName: '',
      logoUrl: '',
      phone: '',
      address: '',
      accentColor: '#2563a8'
    };
  }
  return JSON.parse(stored);
}

// ──────────────────────────────────────────── DATA MERGING
function getMergedLib() {
  const custom = getCustomData();
  let merged = [...DERM_LIBRARY];

  // Apply edits
  merged = merged.map(item => {
    if (custom.lib_edit[item.id]) {
      return { ...item, ...custom.lib_edit[item.id] };
    }
    return item;
  });

  // Remove deleted
  merged = merged.filter(item => !custom.lib_del.includes(item.id));

  // Add new
  merged = [...merged, ...custom.lib_add];

  return merged;
}

function getMergedQA() {
  const custom = getCustomData();
  let merged = [...PATIENT_QA];

  merged = merged.map(item => {
    if (custom.qa_edit[item.id]) {
      return { ...item, ...custom.qa_edit[item.id] };
    }
    return item;
  });

  merged = merged.filter(item => !custom.qa_del.includes(item.id));
  merged = [...merged, ...custom.qa_add];

  return merged;
}

function getMergedPA() {
  const custom = getCustomData();
  let merged = [...PRIOR_AUTH_GUIDES];

  merged = merged.map(item => {
    if (custom.pa_edit[item.id]) {
      return { ...item, ...custom.pa_edit[item.id] };
    }
    return item;
  });

  merged = merged.filter(item => !custom.pa_del.includes(item.id));
  merged = [...merged, ...custom.pa_add];

  return merged;
}

// ──────────────────────────────────────────── ADMIN CARD BUTTONS
function adminCardButtons(id, type) {
  if (!adminMode) return '';
  return `
    <div class="admin-card-actions">
      <button class="admin-btn-edit" onclick="editItem('${id}', '${type}')" title="Edit">✏️</button>
      <button class="admin-btn-delete" onclick="deleteItem('${id}', '${type}')" title="Delete">🗑️</button>
    </div>
  `;
}

function addNewButton(type) {
  if (!adminMode) return '';
  const typeLabel = type === 'lib' ? 'Condition' : (type === 'qa' ? 'Q&A' : 'PA Guide');
  return `<button class="admin-add-btn" onclick="addNewItem('${type}')">＋ Add New ${typeLabel}</button>`;
}

// ──────────────────────────────────────────── EDIT / DELETE / ADD ITEMS
function addNewItem(type) {
  if (type === 'lib') showLibModal();
  else if (type === 'qa') showQAModal();
  else if (type === 'pa') showPAModal();
}

function editItem(id, type) {
  const data = type === 'lib' ? getMergedLib() : (type === 'qa' ? getMergedQA() : getMergedPA());
  const item = data.find(i => i.id === id);
  if (!item) {
    alert('Item not found');
    return;
  }

  if (type === 'lib') showLibModal(item);
  else if (type === 'qa') showQAModal(item);
  else if (type === 'pa') showPAModal(item);
}

function deleteItem(id, type) {
  if (!confirm(`Delete this ${type === 'lib' ? 'condition' : (type === 'qa' ? 'Q&A' : 'PA guide')}?`)) return;

  const custom = getCustomData();
  const delKey = type === 'lib' ? 'lib_del' : (type === 'qa' ? 'qa_del' : 'pa_del');
  const addKey = type === 'lib' ? 'lib_add' : (type === 'qa' ? 'qa_add' : 'pa_add');

  // If it's a custom added item, just remove from lib_add
  const addIndex = custom[addKey].findIndex(i => i.id === id);
  if (addIndex >= 0) {
    custom[addKey].splice(addIndex, 1);
  } else {
    // Mark for deletion
    custom[delKey].push(id);
  }

  saveCustomData(custom);

  // Reload the section
  if (type === 'lib') {
    filterLibrary();
  } else if (type === 'qa') {
    filterQA();
  } else if (type === 'pa') {
    filterPA();
  }

  alert('✅ Deleted');
}

// ──────────────────────────────────────────── MODALS: DERM LIBRARY
function showLibModal(item = null) {
  const isEdit = !!item;
  const defaultItem = {
    id: 'new-' + Date.now(),
    emoji: '🔵',
    name: '',
    category: 'Inflammatory',
    summary: '',
    whatItIs: '',
    keyFacts: [],
    patientExplanation: '',
    maTalkingPoints: []
  };

  const data = item || defaultItem;

  const html = `
    <div class="admin-field">
      <label>Emoji (2 chars)</label>
      <input type="text" id="libEmoji" value="${data.emoji}" maxlength="2" />
    </div>
    <div class="admin-field">
      <label>Condition Name</label>
      <input type="text" id="libName" value="${data.name}" />
    </div>
    <div class="admin-field">
      <label>Category</label>
      <select id="libCategory">
        <option ${data.category === 'Inflammatory' ? 'selected' : ''}>Inflammatory</option>
        <option ${data.category === 'Viral' ? 'selected' : ''}>Viral</option>
        <option ${data.category === 'Skin Cancer' ? 'selected' : ''}>Skin Cancer</option>
        <option ${data.category === 'Hair & Nails' ? 'selected' : ''}>Hair & Nails</option>
        <option ${data.category === 'Pigmentation' ? 'selected' : ''}>Pigmentation</option>
        <option ${data.category === 'Benign Growths' ? 'selected' : ''}>Benign Growths</option>
        <option ${data.category === 'Vascular' ? 'selected' : ''}>Vascular</option>
        <option ${data.category === 'Other' ? 'selected' : ''}>Other</option>
      </select>
    </div>
    <div class="admin-field">
      <label>Summary (1-2 sentences)</label>
      <textarea id="libSummary">${data.summary}</textarea>
    </div>
    <div class="admin-field">
      <label>What It Is (detailed explanation)</label>
      <textarea id="libWhatItIs">${data.whatItIs}</textarea>
    </div>
    <div class="admin-field">
      <label>Key Facts (one per line)</label>
      <div id="libKeyFacts"></div>
      <button class="admin-add-list-btn" onclick="addDynamicListItem('libKeyFacts')">＋ Add fact</button>
    </div>
    <div class="admin-field">
      <label>Patient Explanation</label>
      <textarea id="libPatientExplanation">${data.patientExplanation}</textarea>
    </div>
    <div class="admin-field">
      <label>MA Talking Points (one per line)</label>
      <div id="libMATalkingPoints"></div>
      <button class="admin-add-list-btn" onclick="addDynamicListItem('libMATalkingPoints')">＋ Add point</button>
    </div>
  `;

  const modal = createModal(
    isEdit ? 'Edit Condition' : 'Add New Condition',
    html,
    [
      { label: 'Cancel', class: 'btn-secondary', onclick: 'closeAdminModal()' },
      { label: 'Save', class: 'btn-primary', onclick: 'saveLibItem()' }
    ]
  );

  // Build dynamic lists
  buildDynamicList('libKeyFacts', data.keyFacts);
  buildDynamicList('libMATalkingPoints', data.maTalkingPoints);

  // Store current item ID for save
  window.currentLibItem = item ? item.id : null;
}

function saveLibItem() {
  const id = window.currentLibItem || ('new-' + Date.now());
  const item = {
    id: id,
    emoji: document.getElementById('libEmoji').value,
    name: document.getElementById('libName').value,
    category: document.getElementById('libCategory').value,
    summary: document.getElementById('libSummary').value,
    whatItIs: document.getElementById('libWhatItIs').value,
    keyFacts: getDynamicListValues('libKeyFacts'),
    patientExplanation: document.getElementById('libPatientExplanation').value,
    maTalkingPoints: getDynamicListValues('libMATalkingPoints')
  };

  const custom = getCustomData();
  const isNew = !DERM_LIBRARY.find(i => i.id === id);

  if (isNew) {
    custom.lib_add.push(item);
  } else {
    custom.lib_edit[id] = item;
  }

  saveCustomData(custom);
  closeAdminModal();
  filterLibrary();
  alert('✅ Saved');
}

// ──────────────────────────────────────────── MODALS: PATIENT Q&A
function showQAModal(item = null) {
  const isEdit = !!item;
  const defaultItem = {
    id: 'new-' + Date.now(),
    category: '',
    question: '',
    script: '',
    note: ''
  };

  const data = item || defaultItem;

  const html = `
    <div class="admin-field">
      <label>Category</label>
      <input type="text" id="qaCategory" value="${data.category}" placeholder="e.g., General, Procedures, Insurance" />
    </div>
    <div class="admin-field">
      <label>Question</label>
      <input type="text" id="qaQuestion" value="${data.question}" />
    </div>
    <div class="admin-field">
      <label>Script (what MA says)</label>
      <textarea id="qaScript">${data.script}</textarea>
    </div>
    <div class="admin-field">
      <label>Internal Note (optional)</label>
      <textarea id="qaNote">${data.note || ''}</textarea>
    </div>
  `;

  const modal = createModal(
    isEdit ? 'Edit Q&A' : 'Add New Q&A',
    html,
    [
      { label: 'Cancel', class: 'btn-secondary', onclick: 'closeAdminModal()' },
      { label: 'Save', class: 'btn-primary', onclick: 'saveQAItem()' }
    ]
  );

  window.currentQAItem = item ? item.id : null;
}

function saveQAItem() {
  const id = window.currentQAItem || ('new-' + Date.now());
  const item = {
    id: id,
    category: document.getElementById('qaCategory').value,
    question: document.getElementById('qaQuestion').value,
    script: document.getElementById('qaScript').value,
    note: document.getElementById('qaNote').value || undefined
  };

  const custom = getCustomData();
  const isNew = !PATIENT_QA.find(i => i.id === id);

  if (isNew) {
    custom.qa_add.push(item);
  } else {
    custom.qa_edit[id] = item;
  }

  saveCustomData(custom);
  closeAdminModal();
  filterQA();
  alert('✅ Saved');
}

// ──────────────────────────────────────────── MODALS: PRIOR AUTH
function showPAModal(item = null) {
  const isEdit = !!item;
  const defaultItem = {
    id: 'new-' + Date.now(),
    drug: '',
    brand: '',
    indication: '',
    summary: '',
    codes: [],
    steps: [],
    tips: [],
    appeal: ''
  };

  const data = item || defaultItem;

  const html = `
    <div class="admin-field">
      <label>Drug (generic name)</label>
      <input type="text" id="paDrug" value="${data.drug}" />
    </div>
    <div class="admin-field">
      <label>Brand Name</label>
      <input type="text" id="paBrand" value="${data.brand}" />
    </div>
    <div class="admin-field">
      <label>Indication</label>
      <input type="text" id="paIndication" value="${data.indication}" />
    </div>
    <div class="admin-field">
      <label>Summary</label>
      <textarea id="paSummary">${data.summary}</textarea>
    </div>
    <div class="admin-field">
      <label>Steps (one per line)</label>
      <div id="paSteps"></div>
      <button class="admin-add-list-btn" onclick="addDynamicListItem('paSteps')">＋ Add step</button>
    </div>
    <div class="admin-field">
      <label>Tips (one per line, optional)</label>
      <div id="paTips"></div>
      <button class="admin-add-list-btn" onclick="addDynamicListItem('paTips')">＋ Add tip</button>
    </div>
    <div class="admin-field">
      <label>Appeal Strategy (optional)</label>
      <textarea id="paAppeal">${data.appeal || ''}</textarea>
    </div>
  `;

  const modal = createModal(
    isEdit ? 'Edit Prior Auth Guide' : 'Add New Prior Auth Guide',
    html,
    [
      { label: 'Cancel', class: 'btn-secondary', onclick: 'closeAdminModal()' },
      { label: 'Save', class: 'btn-primary', onclick: 'savePAItem()' }
    ]
  );

  buildDynamicList('paSteps', data.steps);
  buildDynamicList('paTips', data.tips);

  window.currentPAItem = item ? item.id : null;
}

function savePAItem() {
  const id = window.currentPAItem || ('new-' + Date.now());
  const item = {
    id: id,
    drug: document.getElementById('paDrug').value,
    brand: document.getElementById('paBrand').value,
    indication: document.getElementById('paIndication').value,
    summary: document.getElementById('paSummary').value,
    codes: [], // TODO: Allow editing codes if needed
    steps: getDynamicListValues('paSteps'),
    tips: getDynamicListValues('paTips'),
    appeal: document.getElementById('paAppeal').value || ''
  };

  const custom = getCustomData();
  const isNew = !PRIOR_AUTH_GUIDES.find(i => i.id === id);

  if (isNew) {
    custom.pa_add.push(item);
  } else {
    custom.pa_edit[id] = item;
  }

  saveCustomData(custom);
  closeAdminModal();
  filterPA();
  alert('✅ Saved');
}

// ──────────────────────────────────────────── DYNAMIC LIST HELPERS
function buildDynamicList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, idx) => `
    <div class="dynamic-list-item">
      <input type="text" class="dynamic-list-input" value="${item}" />
      <button type="button" onclick="removeDynamicListItem(this)">✕</button>
    </div>
  `).join('');
}

function addDynamicListItem(containerId) {
  const container = document.getElementById(containerId);
  const item = document.createElement('div');
  item.className = 'dynamic-list-item';
  item.innerHTML = `
    <input type="text" class="dynamic-list-input" />
    <button type="button" onclick="removeDynamicListItem(this)">✕</button>
  `;
  container.appendChild(item);
}

function removeDynamicListItem(btn) {
  btn.parentElement.remove();
}

function getDynamicListValues(containerId) {
  const container = document.getElementById(containerId);
  const inputs = container.querySelectorAll('.dynamic-list-input');
  return Array.from(inputs).map(i => i.value.trim()).filter(v => v);
}

// ──────────────────────────────────────────── MODAL FACTORY
function createModal(title, html, buttons = []) {
  const overlay = document.createElement('div');
  overlay.className = 'admin-modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'admin-modal';

  let buttonsHtml = '';
  if (buttons.length > 0) {
    buttonsHtml = `
      <div class="admin-modal-actions">
        ${buttons.map(btn => `
          <button class="${btn.class}" onclick="${btn.onclick}">${btn.label}</button>
        `).join('')}
      </div>
    `;
  }

  modal.innerHTML = `
    <button class="admin-modal-close" onclick="closeAdminModal()">✕</button>
    <h2>${title}</h2>
    <form onsubmit="event.preventDefault();">
      ${html}
      ${buttonsHtml}
    </form>
  `;

  overlay.appendChild(modal);
  const container = document.getElementById('admin-modals-container');
  if (container) container.appendChild(overlay);

  return modal;
}

// ──────────────────────────────────────────── HOOK UP ON PAGE LOAD
document.addEventListener('DOMContentLoaded', initAdmin);
