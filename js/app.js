// ════════════════════════════════════════════════════════════
//  DERM MA PORTAL — APP.JS
//  Main application logic: navigation, search, rendering.
// ════════════════════════════════════════════════════════════

// ──────────────────────────────────────────── INIT
document.addEventListener('DOMContentLoaded', () => {
  // Today's date
  const dateEl = document.getElementById('todayDate');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric', year:'numeric' });
  }

  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      goTo(link.dataset.section);
    });
  });

  // Mobile sidebar toggle
  const toggle = document.getElementById('menuToggle');
  if (toggle) toggle.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Initialize all modules
  initDashboard();
  initHandouts();
  initDosing();
  initMDM();
  initPedsGuide();
  initILCalc();
  initPatientQA();
  initPriorAuth();
  initDermLibrary();
  initLabMonitoring();
  initSteroidChart();
  initTriage();
  initPregnancy();
  initProcedures();
  initMelanomaFU();
  initICD10();
});

// ──────────────────────────────────────────── NAVIGATION
function goTo(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const section = document.getElementById('section-' + sectionId);
  if (section) section.classList.add('active');
  const link = document.querySelector(`[data-section="${sectionId}"]`);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

// ──────────────────────────────────────────── MODAL
function openModal(html) {
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ──────────────────────────────────────────── DASHBOARD
function initDashboard() {
  document.getElementById('qa-count').textContent    = `${getMergedQA().length} questions`;
  document.getElementById('pa-count').textContent    = `${getMergedPA().length} PA guides`;
  document.getElementById('lib-count').textContent   = `${getMergedLib().length} conditions`;
  document.getElementById('lab-count').textContent   = `${LAB_MONITORING.length} medications`;
  document.getElementById('triage-count').textContent = `${TRIAGE_SCENARIOS.length} scenarios`;
  document.getElementById('preg-count').textContent  = `${PREGNANCY_DATA.length} medications`;
  document.getElementById('proc-count').textContent  = `${PROCEDURE_DATA.length} procedures`;
  document.getElementById('icd-count').textContent      = `${ICD10_CODES.length} codes`;
  document.getElementById('handout-count').textContent  = `${HANDOUTS_DATA.length} handouts`;
  document.getElementById('dosing-count').textContent   = `${DOSING_DATA.length} medications`;
  document.getElementById('mdm-count').textContent      = `${MDM_DATA.length} diagnoses`;
  document.getElementById('peds-count').textContent     = `${TOPICAL_AGE_DATA.length} topicals · ${PEDS_BIOLOGIC_DATA.length} biologics`;
}

// ══════════════════════════════════════════════════════════════
//  PATIENT Q&A MODULE
// ══════════════════════════════════════════════════════════════
let qaActiveCategory = 'All';

function initPatientQA() {
  // Build category chips
  const merged = getMergedQA();
  const categories = ['All', ...new Set(merged.map(q => q.category))];
  const chipsEl = document.getElementById('qaCategories');
  chipsEl.innerHTML = categories.map(cat =>
    `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setQACategory('${cat}')">${cat}</span>`
  ).join('');
  renderQA(merged);
}

function setQACategory(cat) {
  qaActiveCategory = cat;
  document.querySelectorAll('#qaCategories .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cat);
  });
  filterQA();
}

function filterQA() {
  const query = document.getElementById('qaSearch').value.toLowerCase().trim();
  let results = getMergedQA();
  if (qaActiveCategory !== 'All') {
    results = results.filter(q => q.category === qaActiveCategory);
  }
  if (query) {
    results = results.filter(q =>
      q.question.toLowerCase().includes(query) ||
      q.script.toLowerCase().includes(query) ||
      q.category.toLowerCase().includes(query)
    );
  }
  renderQA(results);
}

function renderQA(items) {
  const container = document.getElementById('qaResults');
  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No questions found. Try a different search term or category.</p></div>`;
    return;
  }
  const addBtn = adminMode ? `<button class="admin-add-btn" onclick="addNewItem('qa')">＋ Add New Q&A</button>` : '';
  container.innerHTML = addBtn + items.map(qa => `
    <div class="qa-card">
      <div class="qa-question" onclick="toggleQA('${qa.id}')">
        <span>${qa.question}</span>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          <span class="q-badge">${qa.category}</span>
          <span class="qa-chevron" id="chevron-${qa.id}">▼</span>
        </div>
        ${adminMode ? `<div class="admin-card-actions"><button class="admin-btn-edit" onclick="event.stopPropagation(); editItem('${qa.id}', 'qa')" title="Edit">✏️</button><button class="admin-btn-delete" onclick="event.stopPropagation(); deleteItem('${qa.id}', 'qa')" title="Delete">🗑️</button></div>` : ''}
      </div>
      <div class="qa-answer" id="qa-answer-${qa.id}">
        <p class="answer-label">📢 Scripted Response for Patient</p>
        <div class="script">"${qa.script}"</div>
        ${qa.note ? `<div class="note">📌 <strong>MA Note:</strong> ${qa.note}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleQA(id) {
  const answer = document.getElementById('qa-answer-' + id);
  const chevron = document.getElementById('chevron-' + id);
  const isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.qa-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.qa-chevron').forEach(c => c.textContent = '▼');
  // Open clicked
  if (!isOpen) {
    answer.classList.add('open');
    chevron.textContent = '▲';
  }
}

// ══════════════════════════════════════════════════════════════
//  PRIOR AUTH MODULE
// ══════════════════════════════════════════════════════════════
function initPriorAuth() {
  renderPAList(getMergedPA());
}

function filterPA() {
  const query = document.getElementById('paSearch').value.toLowerCase().trim();
  const merged = getMergedPA();
  const results = query
    ? merged.filter(pa =>
        pa.drug.toLowerCase().includes(query) ||
        pa.brand.toLowerCase().includes(query) ||
        pa.indication.toLowerCase().includes(query) ||
        pa.summary.toLowerCase().includes(query)
      )
    : merged;
  renderPAList(results);
  document.getElementById('paDetail').style.display = 'none';
}

function renderPAList(items) {
  const list = document.getElementById('paList');
  list.style.display = '';
  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No PA guides found.</p></div>`;
    return;
  }
  const addBtn = adminMode ? `<button class="admin-add-btn" onclick="addNewItem('pa')">＋ Add New PA Guide</button>` : '';
  list.innerHTML = addBtn + items.map(pa => `
    <div class="pa-card" onclick="showPADetail('${pa.id}')">
      ${adminMode ? `<div class="admin-card-actions" style="position:relative;top:-5px;right:-10px;"><button class="admin-btn-edit" onclick="event.stopPropagation(); editItem('${pa.id}', 'pa')" title="Edit">✏️</button><button class="admin-btn-delete" onclick="event.stopPropagation(); deleteItem('${pa.id}', 'pa')" title="Delete">🗑️</button></div>` : ''}
      <div class="pa-drug">${pa.drug}</div>
      <div class="pa-brand">${pa.brand}</div>
      <span class="pa-indication">${pa.indication}</span>
      <p>${pa.summary}</p>
    </div>
  `).join('');
}

function showPADetail(id) {
  const pa = getMergedPA().find(p => p.id === id);
  if (!pa) return;
  const list = document.getElementById('paList');
  const detail = document.getElementById('paDetail');
  list.style.display = 'none';
  detail.style.display = 'block';
  detail.innerHTML = `
    <button class="back-btn" onclick="backToPA()">← Back to PA Guides</button>
    <div class="pa-detail-header">
      <h2>${pa.drug} <span style="color:var(--text-muted);font-weight:400;font-size:18px;">(${pa.brand})</span></h2>
      <div class="pa-meta">
        <span class="pa-tag indication">🏥 ${pa.indication}</span>
      </div>
      <p style="margin-top:10px;font-size:14px;color:var(--text-muted);">${pa.summary}</p>
    </div>

    ${pa.codes && pa.codes.length ? `
    <div class="pa-section">
      <h3>📋 Diagnosis & Billing Codes</h3>
      <table class="icd-table">
        <thead><tr><th>Code</th><th>Description</th></tr></thead>
        <tbody>
          ${pa.codes.map(c => `<tr><td><strong>${c.code}</strong></td><td>${c.description}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>` : ''}

    <div class="pa-section">
      <h3>📝 Step-by-Step PA Process</h3>
      <ol class="step-list">
        ${pa.steps.map((s, i) => `<li><span class="step-num">${i + 1}</span><span>${s}</span></li>`).join('')}
      </ol>
    </div>

    ${pa.tips && pa.tips.length ? `
    <div class="pa-section">
      <h3>💡 Tips & Resources</h3>
      ${pa.tips.map(t => `<div class="tip-box">✅ ${t}</div>`).join('')}
    </div>` : ''}

    ${pa.appeal ? `
    <div class="pa-section">
      <h3>⚖️ If Denied — Appeal Strategy</h3>
      <div class="appeal-box">⚠️ ${pa.appeal}</div>
    </div>` : ''}
  `;
  window.scrollTo(0, 0);
}

function backToPA() {
  document.getElementById('paList').style.display = '';
  document.getElementById('paDetail').style.display = 'none';
  window.scrollTo(0, 0);
}

// ══════════════════════════════════════════════════════════════
//  DERM LIBRARY MODULE
// ══════════════════════════════════════════════════════════════
let libActiveCategory = 'All';

function initDermLibrary() {
  const merged = getMergedLib();
  const categories = ['All', ...new Set(merged.map(d => d.category))];
  const chipsEl = document.getElementById('libCategories');
  chipsEl.innerHTML = categories.map(cat =>
    `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setLibCategory('${cat}')">${cat}</span>`
  ).join('');
  renderLibrary(merged);
}

function setLibCategory(cat) {
  libActiveCategory = cat;
  document.querySelectorAll('#libCategories .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cat);
  });
  filterLibrary();
}

function filterLibrary() {
  const query = document.getElementById('libSearch').value.toLowerCase().trim();
  let results = getMergedLib();
  if (libActiveCategory !== 'All') {
    results = results.filter(d => d.category === libActiveCategory);
  }
  if (query) {
    results = results.filter(d =>
      d.name.toLowerCase().includes(query) ||
      d.summary.toLowerCase().includes(query) ||
      d.category.toLowerCase().includes(query)
    );
  }
  renderLibrary(results);
}

function renderLibrary(items) {
  const container = document.getElementById('libResults');
  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No conditions found.</p></div>`;
    return;
  }
  const addBtn = adminMode ? `<button class="admin-add-btn" onclick="addNewItem('lib')">＋ Add New Condition</button>` : '';
  container.innerHTML = addBtn + items.map(item => `
    <div class="lib-card" onclick="showLibDetail('${item.id}')" style="position:relative;">
      ${adminMode ? `<div class="admin-card-actions"><button class="admin-btn-edit" onclick="event.stopPropagation(); editItem('${item.id}', 'lib')" title="Edit">✏️</button><button class="admin-btn-delete" onclick="event.stopPropagation(); deleteItem('${item.id}', 'lib')" title="Delete">🗑️</button></div>` : ''}
      <div class="lib-card-top">
        <span class="lib-emoji">${item.emoji}</span>
        <div>
          <h3>${item.name}</h3>
          <div class="lib-category-badge">${item.category}</div>
        </div>
      </div>
      <div class="lib-card-bottom">${item.summary}</div>
      <div class="lib-card-footer">View details & MA talking points →</div>
    </div>
  `).join('');
}

function showLibDetail(id) {
  const item = getMergedLib().find(d => d.id === id);
  if (!item) return;
  openModal(`
    <h2>${item.emoji} ${item.name}</h2>
    <div style="margin-bottom:16px;">
      <span style="background:var(--light-blue);color:var(--blue);padding:3px 12px;border-radius:12px;font-size:12px;font-weight:700;">${item.category}</span>
    </div>

    <div style="margin-bottom:18px;">
      <h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);margin-bottom:8px;">What Is It?</h3>
      <p style="font-size:14px;line-height:1.7;">${item.whatItIs}</p>
    </div>

    <div style="margin-bottom:18px;">
      <h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);margin-bottom:8px;">Key Facts</h3>
      <ul style="font-size:14px;line-height:1.7;padding-left:20px;">
        ${item.keyFacts.map(f => `<li style="margin-bottom:5px;">${f}</li>`).join('')}
      </ul>
    </div>

    <div style="margin-bottom:18px;">
      <h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);margin-bottom:8px;">Patient-Friendly Explanation</h3>
      <div style="background:var(--light-blue);border-left:3px solid var(--sky);padding:12px 16px;border-radius:0 8px 8px 0;font-size:14px;line-height:1.7;font-style:italic;color:#1e3a5f;">"${item.patientExplanation}"</div>
    </div>

    <div>
      <h3 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted);margin-bottom:8px;">MA Talking Points</h3>
      <ul style="font-size:14px;line-height:1.7;padding-left:20px;">
        ${item.maTalkingPoints.map(p => `<li style="margin-bottom:6px;">${p}</li>`).join('')}
      </ul>
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════
//  BIOPSY INTERPRETER MODULE — AI-powered via Claude API
//  Primary: calls /api/interpret-biopsy (Vercel serverless function)
//  Fallback: local keyword matching via BIOPSY_PATTERNS
// ══════════════════════════════════════════════════════════════

async function interpretBiopsy() {
  const text = document.getElementById('biopsyText').value.trim();
  if (!text) {
    alert('Please paste a biopsy report to interpret.');
    return;
  }

  const resultEl = document.getElementById('biopsyResult');

  // Show loading state
  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div class="biopsy-loading">
      <div class="biopsy-spinner"></div>
      <p><strong>Analyzing report with Claude AI…</strong></p>
      <p class="biopsy-loading-sub">Reading pathology terminology, extracting findings, and building MA guidance.</p>
    </div>`;
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Try AI endpoint first
  try {
    const response = await fetch('/api/interpret-biopsy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ biopsyText: text })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      renderAIBiopsyResult(data.interpretation, resultEl);
      return;
    }

    // API returned error — check if it's a setup issue
    if (data.setup) {
      // Not deployed yet — fall back to local
      interpretBiopsyLocal(text, resultEl, true);
      return;
    }

    throw new Error(data.error || `Server error ${response.status}`);

  } catch (err) {
    // Network error means running locally without backend — use local fallback
    const isNetworkError = (err instanceof TypeError && err.message.includes('fetch')) ||
                           err.message.includes('Failed to fetch') ||
                           err.message.includes('NetworkError');
    if (isNetworkError) {
      interpretBiopsyLocal(text, resultEl, true);
    } else {
      resultEl.innerHTML = `
        <div class="biopsy-ai-error">
          <h3>⚠️ AI Interpreter Error</h3>
          <p>${err.message}</p>
          <p style="margin-top:8px;font-size:0.85rem;color:#64748b;">
            Falling back to keyword-based interpretation…
          </p>
        </div>`;
      setTimeout(() => interpretBiopsyLocal(text, resultEl, false), 1200);
    }
  }
}

// ── Render AI (Claude) result ────────────────────────────────
function renderAIBiopsyResult(interp, resultEl) {
  const urgencyMap = {
    urgent:    { cls: 'urgency-urgent', label: '🔴 URGENT — Physician Contact Required' },
    expedited: { cls: 'urgency-soon',   label: '🟡 Expedited — Prompt Follow-Up Needed' },
    routine:   { cls: 'urgency-routine', label: '🟢 Routine' }
  };
  const urg = urgencyMap[interp.urgency] || urgencyMap.routine;

  const severityColors = {
    'Benign':            { bg: '#dcfce7', color: '#15803d' },
    'Pre-malignant':     { bg: '#fef3c7', color: '#b45309' },
    'Malignant in situ': { bg: '#fee2e2', color: '#b91c1c' },
    'Invasive Malignant':{ bg: '#fee2e2', color: '#7f1d1d' },
    'Inflammatory':      { bg: '#dbeafe', color: '#1d4ed8' },
    'Infectious':        { bg: '#e0f2fe', color: '#0369a1' },
    'Unclear':           { bg: '#f1f5f9', color: '#475569' }
  };
  const sev = severityColors[interp.severity] || severityColors['Unclear'];

  const marginColors = {
    'Clear':                  { bg: '#dcfce7', color: '#15803d', icon: '✅' },
    'Involved (positive margins)': { bg: '#fee2e2', color: '#b91c1c', icon: '🔴' },
    'Close margins':          { bg: '#fef3c7', color: '#b45309', icon: '⚠️' },
    'Not applicable':         { bg: '#f1f5f9', color: '#64748b', icon: '—' },
    'Not mentioned in report':{ bg: '#f1f5f9', color: '#94a3b8', icon: '?' }
  };
  const mar = marginColors[interp.marginStatus] || marginColors['Not mentioned in report'];

  resultEl.innerHTML = `
    <div class="biopsy-ai-badge-row">
      <span class="biopsy-ai-badge">🤖 Claude AI Interpretation</span>
      <span style="font-size:0.75rem;color:#64748b;">Always verify with the supervising physician before patient contact.</span>
    </div>

    <div class="biopsy-result-header">
      <div>
        <div class="biopsy-diagnosis">
          ${interp.diagnosis}
          ${interp.diagnosisCode ? `<small style="font-weight:400;opacity:0.75;">${interp.diagnosisCode}</small>` : ''}
        </div>
        <span class="biopsy-severity-chip" style="background:${sev.bg};color:${sev.color}">${interp.severity}</span>
      </div>
      <span class="urgency-badge ${urg.cls}">${urg.label}</span>
    </div>

    ${interp.maActionNote ? `
    <div class="biopsy-ma-action">
      <strong>📌 MA Action:</strong> ${interp.maActionNote}
      ${interp.urgencyReason ? `<br><span style="font-size:0.82rem;margin-top:4px;display:block;opacity:0.85;">Reason: ${interp.urgencyReason}</span>` : ''}
    </div>` : ''}

    <div class="biopsy-ai-grid">
      <div class="biopsy-section">
        <h3>Plain-Language Summary</h3>
        <p>${interp.plainSummary}</p>
      </div>

      <div class="biopsy-margin-box" style="background:${mar.bg};border-color:${mar.color}">
        <div class="biopsy-margin-label">Margin Status</div>
        <div class="biopsy-margin-val" style="color:${mar.color}">${mar.icon} ${interp.marginStatus || 'Not mentioned'}</div>
      </div>
    </div>

    ${interp.keyFindings && interp.keyFindings.length ? `
    <div class="biopsy-section">
      <h3>🔍 Key Findings From This Report</h3>
      <ul class="biopsy-findings-list">
        ${interp.keyFindings.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>` : ''}

    ${interp.specialFindings && interp.specialFindings !== 'null' && interp.specialFindings ? `
    <div class="biopsy-section biopsy-special-findings">
      <h3>⭐ Special Findings (Staging/Risk)</h3>
      <p>${interp.specialFindings}</p>
    </div>` : ''}

    <div class="biopsy-section">
      <h3>Next Steps</h3>
      <ul class="next-steps-list">
        ${(interp.nextSteps || []).map(s => `<li><span class="step-icon">→</span><span>${s}</span></li>`).join('')}
      </ul>
    </div>

    <div class="biopsy-section">
      <h3>Patient Call Script <span style="font-weight:400;font-size:0.8rem;color:#64748b;">(Use ONLY after physician review)</span></h3>
      <div class="patient-script">${interp.patientScript}</div>
    </div>

    ${interp.doNotSay && interp.doNotSay.length ? `
    <div class="biopsy-section">
      <h3>⛔ Do NOT Say to the Patient</h3>
      <ul>
        ${interp.doNotSay.map(d => `<li style="color:var(--danger);">${d}</li>`).join('')}
      </ul>
    </div>` : ''}

    <div class="biopsy-disclaimer">
      ⚠️ <strong>Reminder:</strong> This AI interpretation is a reference aid only. All biopsy results must be reviewed and approved by the supervising physician before the patient is contacted. Document all communications in the chart.
    </div>
  `;

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Local keyword-matching fallback ─────────────────────────
function interpretBiopsyLocal(text, resultEl, showFallbackNotice) {
  const normalized = text.toLowerCase();

  const scored = BIOPSY_PATTERNS.map(pattern => {
    let score = 0;
    const excluded = pattern.excludeKeywords && pattern.excludeKeywords.some(kw => normalized.includes(kw.toLowerCase()));
    if (excluded) return { pattern, score: -1 };
    pattern.keywords.forEach(kw => {
      if (normalized.includes(kw.toLowerCase())) score++;
    });
    return { pattern, score };
  }).filter(s => s.score > 0);

  scored.sort((a, b) => b.score - a.score);

  const fallbackNotice = showFallbackNotice ? `
    <div class="biopsy-fallback-notice">
      ℹ️ <strong>Using keyword-based interpretation.</strong> For full AI analysis, deploy the portal to Vercel and add your Claude API key. See the deployment guide included in the portal ZIP.
    </div>` : '';

  if (!scored.length) {
    resultEl.style.display = 'block';
    resultEl.innerHTML = `${fallbackNotice}
      <div class="no-match">
        <h3>⚠️ Diagnosis Not Recognized</h3>
        <p>The text entered does not match a recognized diagnosis pattern. This may be because the diagnosis is uncommon or the diagnosis section wasn't included in the pasted text.</p>
        <p style="margin-top:12px;"><strong>Please have the physician review this report directly.</strong></p>
      </div>`;
    return;
  }

  const match = scored[0].pattern;
  const urgencyClass = { urgent: 'urgency-urgent', soon: 'urgency-soon', routine: 'urgency-routine' }[match.urgency];
  const urgencyLabel = { urgent: '🔴 URGENT — Physician Contact Required', soon: '🟡 Prompt Follow-Up Needed', routine: '🟢 Routine' }[match.urgency];

  resultEl.style.display = 'block';
  resultEl.innerHTML = `${fallbackNotice}
    <div class="biopsy-result-header">
      <div>
        <div class="biopsy-diagnosis">${match.diagnosisLabel}<small>${match.categoryLabel}</small></div>
      </div>
      <span class="urgency-badge ${urgencyClass}">${urgencyLabel}</span>
    </div>
    ${match.maNote ? `<div style="background:var(--warning-bg);border:1px solid #fcd34d;border-radius:8px;padding:12px 16px;margin-bottom:18px;"><strong>📌 MA Action Note:</strong> <span style="font-size:13px;color:#78350f;">${match.maNote}</span></div>` : ''}
    <div class="biopsy-section"><h3>Plain-Language Summary</h3><p>${match.plainEnglish}</p></div>
    ${match.keyFindings && match.keyFindings.length ? `<div class="biopsy-section"><h3>Key Findings to Look For</h3><ul>${match.keyFindings.map(f => `<li>${f}</li>`).join('')}</ul></div>` : ''}
    <div class="biopsy-section"><h3>Next Steps</h3><ul class="next-steps-list">${match.nextSteps.map(s => `<li><span class="step-icon">→</span><span>${s}</span></li>`).join('')}</ul></div>
    <div class="biopsy-section"><h3>Patient Call Script (After Physician Review)</h3><div class="patient-script">${match.patientScript}</div></div>
    ${match.doNotSay && match.doNotSay.length ? `<div class="biopsy-section"><h3>⛔ Do NOT Say</h3><ul>${match.doNotSay.map(d => `<li style="color:var(--danger);">${d}</li>`).join('')}</ul></div>` : ''}
    <div class="biopsy-disclaimer">⚠️ <strong>Reminder:</strong> Always confirm with the physician before contacting the patient. Document all communications in the chart.</div>`;

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearBiopsy() {
  document.getElementById('biopsyText').value = '';
  document.getElementById('biopsyResult').style.display = 'none';
}

// ══════════════════════════════════════════════════════════════
//  LAB MONITORING MODULE
// ══════════════════════════════════════════════════════════════
let labActiveType = 'All';

const TYPE_COLORS = {
  'Retinoid':                          'purple',
  'Antiandrogen':                      'teal',
  'Conventional Systemic':             'navy',
  'Biologic (IL-4Rα inhibitor)':       'blue',
  'Biologic (TNF-α inhibitor)':        'blue',
  'Biologic (IL-17A inhibitor)':       'blue',
  'Biologic (IL-17A and IL-17F inhibitor)': 'blue',
  'Biologic (IL-23 inhibitor)':        'blue',
  'JAK Inhibitor (JAK1-selective)':    'orange',
  'JAK Inhibitor (JAK1/JAK2)':         'orange',
  'JAK Inhibitor (JAK3 / TEC family)': 'orange',
};

function getTypeGroup(type) {
  if (type.startsWith('JAK')) return 'JAK Inhibitor';
  if (type.startsWith('Biologic')) return 'Biologic';
  return 'Conventional';
}

function initLabMonitoring() {
  const groups = ['All', 'Conventional', 'Biologic', 'JAK Inhibitor'];
  const filtersEl = document.getElementById('labTypeFilters');
  filtersEl.innerHTML = groups.map(g =>
    `<span class="chip ${g === 'All' ? 'active' : ''}" onclick="setLabType('${g}')">${g}</span>`
  ).join('');
  renderLabGrid(LAB_MONITORING);
}

function setLabType(type) {
  labActiveType = type;
  document.querySelectorAll('#labTypeFilters .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === type);
  });
  filterLabs();
}

function filterLabs() {
  const query = document.getElementById('labSearch').value.toLowerCase().trim();
  let results = LAB_MONITORING;
  if (labActiveType !== 'All') {
    results = results.filter(m => getTypeGroup(m.type) === labActiveType);
  }
  if (query) {
    results = results.filter(m =>
      m.drug.toLowerCase().includes(query) ||
      m.brand.toLowerCase().includes(query) ||
      m.indication.toLowerCase().includes(query) ||
      m.type.toLowerCase().includes(query)
    );
  }
  renderLabGrid(results);
}

function renderLabGrid(items) {
  const container = document.getElementById('labGrid');
  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No medications found.</p></div>`;
    return;
  }
  container.innerHTML = items.map(med => {
    const colorClass = `type-${med.typeColor}`;
    const baselineCount = med.baselineLabs.filter(l => !l.test.toLowerCase().startsWith('no ')).length;
    const ongoingCount = med.ongoingLabs.filter(l => !l.test.toLowerCase().startsWith('no ')).length;
    const dangerCount = med.watchFor.filter(w => w.severity === 'danger').length;

    return `
    <div class="lab-card" onclick="showLabDetail('${med.id}')">
      <div class="lab-card-header">
        <div class="lab-card-top">
          <div>
            <div class="lab-drug-name">${med.drug}</div>
            <div class="lab-brand-name">${med.brand}</div>
          </div>
          <span class="type-badge ${colorClass}">${getTypeGroup(med.type)}</span>
        </div>
        <div class="lab-indication">${med.indication}</div>
        ${med.blackBox ? `<div class="black-box-flag">⬛ Black Box Warning</div>` : ''}
        ${med.rems ? `<div class="rems-flag">📋 REMS: ${med.rems}</div>` : ''}
      </div>
      <div class="lab-card-body">
        <div class="lab-summary-row">
          <span class="lab-summary-label">🧪 Baseline Labs</span>
          <span class="lab-summary-value">${baselineCount} test${baselineCount !== 1 ? 's' : ''} required</span>
        </div>
        <div class="lab-summary-row">
          <span class="lab-summary-label">📅 Ongoing Monitoring</span>
          <span class="lab-summary-value">${ongoingCount > 0 ? `${ongoingCount} test${ongoingCount !== 1 ? 's' : ''}` : 'None required'}</span>
        </div>
        <div class="lab-summary-row">
          <span class="lab-summary-label">🚨 Stop/Hold Thresholds</span>
          <span class="lab-summary-value" style="color:${dangerCount > 0 ? 'var(--danger)' : 'var(--success)'}; font-weight:700;">${dangerCount} critical value${dangerCount !== 1 ? 's' : ''}</span>
        </div>
      </div>
      <div class="lab-card-footer">
        View full monitoring guide →
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════════════
//  STEROID CHART MODULE
// ══════════════════════════════════════════════════════════════
function initSteroidChart() {
  document.getElementById('steroidSearch').addEventListener('input', filterSteroids);
  renderSteroidMasterTable('');

  // FTU table
  document.getElementById('steroid-ftu-panel').innerHTML = `
    <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">
      <strong>1 FTU</strong> (fingertip unit) = the amount squeezed from a tube onto the tip of the index finger to the first crease ≈ <strong>0.5 g</strong>, covers approximately <strong>2% BSA</strong> (both palms).
    </p>
    <table class="ftu-table">
      <thead><tr><th>Body Area</th><th>FTUs</th><th>~BSA</th><th>Tip</th></tr></thead>
      <tbody>${FTU_GUIDE.map(f => `
        <tr>
          <td>${f.area}</td>
          <td class="ftu-num">${f.ftus}</td>
          <td>${f.bsa}</td>
          <td style="font-size:12px;color:var(--text-muted);">${f.tip || '—'}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;

  // Vehicle table
  document.getElementById('steroid-vehicle-panel').innerHTML = `
    <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">
      The same steroid in a more occlusive vehicle (ointment > cream > lotion) delivers higher potency. Vehicle choice affects both efficacy and tolerability.
    </p>
    <table class="vehicle-table">
      <thead><tr><th>Vehicle</th><th>Penetration</th><th>Best For</th><th>Avoid</th></tr></thead>
      <tbody>${VEHICLE_GUIDE.map(v => `
        <tr>
          <td><strong>${v.vehicle}</strong></td>
          <td>${v.penetration}</td>
          <td style="font-size:12px;">${v.bestFor}</td>
          <td style="font-size:12px;color:var(--text-muted);">${v.avoid || '—'}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

function filterSteroids() {
  const q = document.getElementById('steroidSearch').value.toLowerCase().trim();
  renderSteroidMasterTable(q);
}

function renderSteroidMasterTable(query) {
  const container = document.getElementById('steroidClassGrid');
  let totalMatches = 0;

  const html = STEROID_CHART.map(cls => {
    const drugs = query
      ? cls.drugs.filter(d =>
          d.name.toLowerCase().includes(query) ||
          d.brand.toLowerCase().includes(query) ||
          (d.vehicle || '').toLowerCase().includes(query) ||
          (d.notes || '').toLowerCase().includes(query))
      : cls.drugs;
    if (!drugs.length) return '';
    totalMatches += drugs.length;

    // near-equivalent note: other drugs in the same class are alternatives
    const altNames = cls.drugs.filter(d => !drugs.includes(d) || cls.drugs.length > 1)
      .slice(0, 3).map(d => d.name.replace(/ \(.*\)/, '').split(' ').slice(0,2).join(' '));

    return `
    <div class="steroid-class-section" id="steroid-cls-${cls.classNum}">
      <div class="steroid-class-header" style="background:${cls.color};">
        <div>
          <span class="steroid-class-num">Class ${cls.classNum}</span>
          <span class="steroid-class-label">${cls.potency}</span>
        </div>
        <div class="steroid-class-meta">Max continuous use: ${cls.maxDuration}</div>
      </div>

      <div class="steroid-near-equiv">
        💊 <strong>Near-equivalent alternatives within this class:</strong>
        ${cls.drugs.length > 1
          ? cls.drugs.map(d => `<span class="equiv-pill">${d.name.split(' ').slice(0,2).join(' ')}</span>`).join('')
          : '<span style="color:var(--text-muted);font-size:12px;">Only agent in this class</span>'}
      </div>

      <div class="steroid-table-wrap">
        <table class="steroid-master-table">
          <thead>
            <tr>
              <th>Generic Name</th>
              <th>Brand Name(s)</th>
              <th>Vehicle / Formulation</th>
              <th>Concentration &amp; Notes</th>
            </tr>
          </thead>
          <tbody>
            ${drugs.map((d, i) => `
            <tr class="${i % 2 === 1 ? 'alt-row' : ''}">
              <td class="drug-generic" style="border-left:3px solid ${cls.color};">${d.name}</td>
              <td class="drug-brand">${d.brand}</td>
              <td class="drug-vehicle">${d.vehicle}</td>
              <td class="drug-notes">${d.notes || '—'}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <div class="steroid-class-footer-bar">
        <div class="steroid-uses-bar">
          <span class="steroid-bar-label uses-label">✅ Uses:</span>
          <span>${cls.uses.join(' · ')}</span>
        </div>
        <div class="steroid-avoid-bar">
          <span class="steroid-bar-label avoid-label">⛔ Avoid:</span>
          <span>${cls.avoid.join(' · ')}</span>
        </div>
      </div>
    </div>`;
  }).join('');

  container.innerHTML = totalMatches
    ? html
    : `<div class="empty-state"><div class="empty-icon">🔍</div><p>No steroids found for "<strong>${query}</strong>". Try a generic or brand name.</p></div>`;
}

function showSteroidTab(tab) {
  document.getElementById('steroid-ftu-panel').style.display     = tab === 'ftu'     ? '' : 'none';
  document.getElementById('steroid-vehicle-panel').style.display = tab === 'vehicle' ? '' : 'none';
  document.getElementById('ftu-tab').classList.toggle('active',     tab === 'ftu');
  document.getElementById('vehicle-tab').classList.toggle('active', tab === 'vehicle');
}

// ══════════════════════════════════════════════════════════════
//  TRIAGE MODULE
// ══════════════════════════════════════════════════════════════
let triageActiveCategory = 'All';

function initTriage() {
  const cats = ['All', ...new Set(TRIAGE_SCENARIOS.map(t => t.category))];
  document.getElementById('triageCategories').innerHTML = cats.map(c =>
    `<span class="chip ${c === 'All' ? 'active' : ''}" onclick="setTriageCategory('${c}')">${c}</span>`
  ).join('');
  renderTriage(TRIAGE_SCENARIOS);
}

function setTriageCategory(cat) {
  triageActiveCategory = cat;
  document.querySelectorAll('#triageCategories .chip').forEach(c => c.classList.toggle('active', c.textContent === cat));
  filterTriage();
}

function filterTriage() {
  const q = document.getElementById('triageSearch').value.toLowerCase().trim();
  let results = TRIAGE_SCENARIOS;
  if (triageActiveCategory !== 'All') results = results.filter(t => t.category === triageActiveCategory);
  if (q) results = results.filter(t =>
    t.symptom.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.script.toLowerCase().includes(q)
  );
  renderTriage(results);
}

function renderTriage(items) {
  const el = document.getElementById('triageResults');
  if (!items.length) { el.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No scenarios found.</p></div>`; return; }
  el.innerHTML = items.map(t => `
    <div class="triage-card" onclick="showTriageDetail('${t.id}')">
      <div class="triage-card-header">
        <div class="triage-level-bar ${t.triageLevel}"></div>
        <div class="triage-card-main">
          <div class="triage-symptom">${t.symptom}</div>
          <div class="triage-cat-label">${t.category}</div>
        </div>
        <span class="triage-badge ${t.triageLevel}">${t.triageLabelShort}</span>
      </div>
    </div>`).join('');
}

function showTriageDetail(id) {
  const t = TRIAGE_SCENARIOS.find(s => s.id === id);
  if (!t) return;
  const colors = { 'er-now':'#dc2626','er-soon':'#ca8a04','call-am':'#ea580c','home':'#16a34a' };
  openModal(`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
      <div>
        <h2 style="font-size:19px;font-weight:800;color:var(--navy);">${t.symptom}</h2>
        <div style="font-size:12px;color:var(--text-muted);margin-top:3px;">${t.category}</div>
      </div>
      <span class="triage-badge ${t.triageLevel}" style="font-size:13px;padding:6px 16px;">${t.triageLabelShort}</span>
    </div>

    <div style="background:var(--light-blue);border-left:3px solid var(--sky);padding:14px 18px;border-radius:0 8px 8px 0;margin-bottom:18px;">
      <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;color:var(--sky);margin-bottom:8px;">📢 PHONE SCRIPT</div>
      <div style="font-size:14px;line-height:1.7;font-style:italic;color:#1e3a5f;">"${t.script}"</div>
    </div>

    ${t.keyDetails && t.keyDetails.length ? `
    <div style="margin-bottom:16px;">
      <div style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;">🔍 Key Questions / Watch For</div>
      <ul style="font-size:13px;line-height:1.7;padding-left:20px;">
        ${t.keyDetails.map(d => `<li style="margin-bottom:4px;">${d}</li>`).join('')}
      </ul>
    </div>` : ''}

    ${t.note ? `<div style="background:var(--warning-bg);border:1px solid #fcd34d;border-radius:8px;padding:12px 16px;font-size:13px;color:#78350f;">
      📌 <strong>MA Note:</strong> ${t.note}
    </div>` : ''}
  `);
}

// ══════════════════════════════════════════════════════════════
//  PREGNANCY SAFETY MODULE
// ══════════════════════════════════════════════════════════════
let pregnancyActiveCategory = 'All';

function initPregnancy() {
  const cats = ['All', ...new Set(PREGNANCY_DATA.map(p => p.category))];
  document.getElementById('pregnancyCategories').innerHTML = cats.map(c =>
    `<span class="chip ${c === 'All' ? 'active' : ''}" onclick="setPregCategory('${c}')">${c}</span>`
  ).join('');
  renderPregnancy(PREGNANCY_DATA);
}

function setPregCategory(cat) {
  pregnancyActiveCategory = cat;
  document.querySelectorAll('#pregnancyCategories .chip').forEach(c => c.classList.toggle('active', c.textContent === cat));
  filterPregnancy();
}

function filterPregnancy() {
  const q = document.getElementById('pregnancySearch').value.toLowerCase().trim();
  let results = PREGNANCY_DATA;
  if (pregnancyActiveCategory !== 'All') results = results.filter(p => p.category === pregnancyActiveCategory);
  if (q) results = results.filter(p =>
    p.drug.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  );
  renderPregnancy(results);
}

const SAFETY_ICONS = { safe:'✅', caution:'⚠️', avoid:'🚫', contraindicated:'❌' };

function renderPregnancy(items) {
  const el = document.getElementById('pregnancyTable');
  if (!items.length) { el.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No medications found.</p></div>`; return; }
  let html = `<table class="preg-table">
    <thead><tr>
      <th class="left" style="width:22%">Medication</th>
      <th class="left" style="width:14%">Category</th>
      <th style="width:9%">T1</th>
      <th style="width:9%">T2</th>
      <th style="width:9%">T3</th>
      <th style="width:9%">BF</th>
      <th class="left" style="width:28%">Key Note</th>
    </tr></thead>
    <tbody>`;

  let lastCat = '';
  items.forEach(p => {
    const isContra = p.pregnancyT1 === 'contraindicated' || p.pregnancyT2 === 'contraindicated' || p.pregnancyT3 === 'contraindicated';
    html += `<tr class="${isContra ? 'preg-warning-row' : ''}" onclick="showPregDetail('${p.id}')">
      <td><div class="drug-cell">${p.drug}</div><div class="brand-cell">${p.brand}</div></td>
      <td class="cat-cell">${p.category}</td>
      <td class="safety-cell"><span class="safety-dot ${p.pregnancyT1}" title="${p.pregnancyT1}">${SAFETY_ICONS[p.pregnancyT1]||'?'}</span></td>
      <td class="safety-cell"><span class="safety-dot ${p.pregnancyT2}" title="${p.pregnancyT2}">${SAFETY_ICONS[p.pregnancyT2]||'?'}</span></td>
      <td class="safety-cell"><span class="safety-dot ${p.pregnancyT3}" title="${p.pregnancyT3}">${SAFETY_ICONS[p.pregnancyT3]||'?'}</span></td>
      <td class="safety-cell"><span class="safety-dot ${p.breastfeeding}" title="${p.breastfeeding}">${SAFETY_ICONS[p.breastfeeding]||'?'}</span></td>
      <td style="font-size:12px;color:${isContra?'#b91c1c':'var(--text-muted)'};">${p.keyWarning ? '⛔ '+p.keyWarning.substring(0,80)+'…' : p.pregnancyNotes.substring(0,90)+(p.pregnancyNotes.length>90?'…':'')}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}

function showPregDetail(id) {
  const p = PREGNANCY_DATA.find(d => d.id === id);
  if (!p) return;
  const row = (label, val) => `<tr><td style="font-weight:700;font-size:12px;color:var(--text-muted);padding:8px 12px;white-space:nowrap;">${label}</td>
    <td style="padding:8px 12px;"><span class="safety-dot ${val}" style="display:inline-flex;margin-right:6px;">${SAFETY_ICONS[val]||'?'}</span> <strong>${val.charAt(0).toUpperCase()+val.slice(1)}</strong></td></tr>`;
  openModal(`
    <h2 style="font-size:20px;font-weight:800;color:var(--navy);margin-bottom:3px;">${p.drug}</h2>
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">${p.brand} &bull; <span style="color:var(--sky);font-weight:600;">${p.category}</span></div>

    ${p.keyWarning ? `<div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;margin-bottom:16px;font-size:13px;color:#7f1d1d;"><strong>⛔ KEY WARNING:</strong> ${p.keyWarning}</div>` : ''}

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
      <div style="background:var(--bg);border-radius:10px;padding:14px 16px;">
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:10px;">🤰 Pregnancy Safety</div>
        <table style="width:100%;border-collapse:collapse;">${row('Trimester 1',p.pregnancyT1)}${row('Trimester 2',p.pregnancyT2)}${row('Trimester 3',p.pregnancyT3)}</table>
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:14px 16px;">
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:10px;">🍼 Breastfeeding</div>
        <table style="width:100%;border-collapse:collapse;">${row('Breastfeeding',p.breastfeeding)}</table>
        <p style="font-size:12px;color:var(--text-muted);margin-top:10px;line-height:1.5;">${p.breastfeedingNotes}</p>
      </div>
    </div>

    <div style="background:var(--bg);border-radius:10px;padding:14px 16px;">
      <div style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;">📝 Pregnancy Notes</div>
      <p style="font-size:13px;line-height:1.7;">${p.pregnancyNotes}</p>
    </div>

    <div style="margin-top:12px;font-size:12px;color:#7f1d1d;background:#fff1f2;border-radius:6px;padding:10px 14px;">
      ⚠️ Always confirm medication safety with the physician before relaying information to a patient. This is a reference tool only.
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════
//  PROCEDURE GUIDE MODULE
// ══════════════════════════════════════════════════════════════
let procActiveCategory = 'All';

function initProcedures() {
  const cats = ['All', ...new Set(PROCEDURE_DATA.map(p => p.category))];
  document.getElementById('procedureCategories').innerHTML = cats.map(c =>
    `<span class="chip ${c === 'All' ? 'active' : ''}" onclick="setProcCategory('${c}')">${c}</span>`
  ).join('');
  renderProcedures(PROCEDURE_DATA);
}

function setProcCategory(cat) {
  procActiveCategory = cat;
  document.querySelectorAll('#procedureCategories .chip').forEach(c => c.classList.toggle('active', c.textContent === cat));
  filterProcedures();
}

function filterProcedures() {
  const q = document.getElementById('procedureSearch').value.toLowerCase().trim();
  let results = PROCEDURE_DATA;
  if (procActiveCategory !== 'All') results = results.filter(p => p.category === procActiveCategory);
  if (q) results = results.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.before||[]).join(' ').toLowerCase().includes(q)
  );
  renderProcedures(results);
}

function renderProcedures(items) {
  const el = document.getElementById('procedureGrid');
  if (!items.length) { el.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No procedures found.</p></div>`; return; }
  el.innerHTML = items.map(p => {
    const preview = (p.before||[]).slice(0,2).join('; ');
    return `
    <div class="proc-card" onclick="showProcDetail('${p.id}')">
      <div class="proc-card-header">
        <div class="proc-emoji">${p.emoji}</div>
        <div class="proc-name">${p.name}</div>
        <div class="proc-cat">${p.category}</div>
        <div class="proc-duration">⏱ ${p.duration}</div>
      </div>
      <div class="proc-card-body">
        <div class="proc-preview">${preview}…</div>
      </div>
      <div class="proc-card-footer">View prep &amp; aftercare →</div>
    </div>`;
  }).join('');
}

function showProcDetail(id) {
  const p = PROCEDURE_DATA.find(d => d.id === id);
  if (!p) return;
  const listItems = (arr, icon) => (arr||[]).map(i => `<div class="proc-item"><span class="proc-bullet">${icon}</span><span>${i}</span></div>`).join('');
  openModal(`
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <span style="font-size:32px;">${p.emoji}</span>
      <div>
        <h2 style="font-size:20px;font-weight:800;color:var(--navy);">${p.name}</h2>
        <div style="font-size:12px;color:var(--sky);font-weight:700;text-transform:uppercase;">${p.category} &bull; ⏱ ${p.duration}</div>
      </div>
    </div>

    <div class="proc-detail-cols">
      <div class="proc-detail-box">
        <div class="proc-box-title before">🗓 ${p.beforeTitle || 'Before the Procedure'}</div>
        ${listItems(p.before, '✓')}
      </div>
      <div class="proc-detail-box">
        <div class="proc-box-title after">🩹 ${p.afterTitle || 'After the Procedure'}</div>
        ${listItems(p.after, '•')}
      </div>
    </div>

    ${p.healingTimeline ? `
    <div class="proc-detail-box" style="margin-bottom:14px;">
      <div class="proc-box-title heal">🕐 Healing Timeline</div>
      <p style="font-size:13px;line-height:1.6;">${p.healingTimeline}</p>
    </div>` : ''}

    <div style="display:grid;grid-template-columns:${p.goToER && p.goToER.length ? '1fr 1fr' : '1fr'};gap:14px;margin-bottom:14px;">
      <div class="proc-detail-box">
        <div class="proc-box-title call">📞 Call Our Office If…</div>
        ${listItems(p.callOffice, '⚠️')}
      </div>
      ${p.goToER && p.goToER.length ? `
      <div class="proc-detail-box" style="background:var(--danger-bg);">
        <div class="proc-box-title er">🚨 Go to ER If…</div>
        ${listItems(p.goToER, '🔴')}
      </div>` : ''}
    </div>

    ${p.maNote ? `<div style="background:var(--warning-bg);border:1px solid #fcd34d;border-radius:8px;padding:12px 16px;font-size:13px;color:#78350f;">📌 <strong>MA Note:</strong> ${p.maNote}</div>` : ''}
  `);
}

// ══════════════════════════════════════════════════════════════
//  MELANOMA F/U MODULE
// ══════════════════════════════════════════════════════════════
function initMelanomaFU() {
  const grid = document.getElementById('melanomaStageCards');
  grid.innerHTML = MELANOMA_SURVEILLANCE.map(s => `
    <div class="mel-stage-card" onclick="showMelanomaStage('${s.id}')">
      <div class="mel-stage-header" style="background:${s.color};">
        <div class="mel-stage-name">Stage ${s.stageShort}</div>
        <div class="mel-stage-sub">${s.breslow}</div>
      </div>
      <div class="mel-stage-body">
        <div class="mel-freq">${s.followUpSchedule && s.followUpSchedule[0] ? s.followUpSchedule[0].frequency : 'See detail'}</div>
        <div class="mel-imaging">${s.imaging ? s.imaging.substring(0,60)+(s.imaging.length>60?'…':'') : 'No routine imaging'}</div>
      </div>
      <div class="mel-stage-footer">View full schedule →</div>
    </div>`).join('');

  // General notes
  const notesEl = document.getElementById('melanomaNotes');
  notesEl.innerHTML = `
    <h3>📌 General Surveillance Principles</h3>
    ${(MELANOMA_GENERAL_NOTES||[]).map(n => `<div class="mel-note-item"><span>•</span><span>${n}</span></div>`).join('')}`;
}

function showMelanomaStage(id) {
  const s = MELANOMA_SURVEILLANCE.find(m => m.id === id);
  if (!s) return;
  openModal(`
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
      <div style="width:14px;min-height:50px;border-radius:4px;background:${s.color};flex-shrink:0;"></div>
      <div>
        <h2 style="font-size:20px;font-weight:800;color:var(--navy);">${s.stage}</h2>
        <p style="font-size:13px;color:var(--text-muted);">Breslow: ${s.breslow}</p>
      </div>
    </div>
    <p style="font-size:13px;line-height:1.6;margin-bottom:18px;background:var(--bg);padding:12px 16px;border-radius:8px;">${s.description}</p>

    <div class="mel-section">
      <h4>📅 Follow-Up Schedule</h4>
      <table class="mel-followup-table">
        <thead><tr><th>Time Period</th><th>Frequency</th><th>Notes</th></tr></thead>
        <tbody>${(s.followUpSchedule||[]).map(f => `
          <tr><td style="font-weight:700;">${f.period}</td><td>${f.frequency}</td><td style="font-size:12px;color:var(--text-muted);">${f.notes||''}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">
      <div style="background:var(--bg);border-radius:8px;padding:14px 16px;">
        <h4 style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;">🔬 Exam at Each Visit</h4>
        <ul style="font-size:13px;padding-left:18px;line-height:1.7;">${(s.examAtVisit||[]).map(e => `<li>${e}</li>`).join('')}</ul>
      </div>
      <div style="background:var(--bg);border-radius:8px;padding:14px 16px;">
        <h4 style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;">📷 Imaging</h4>
        <p style="font-size:13px;line-height:1.6;">${s.imaging||'No routine imaging indicated.'}</p>
        <h4 style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin:12px 0 8px;">🩸 Labs</h4>
        <p style="font-size:13px;line-height:1.6;">${s.labs||'No routine labs required.'}</p>
      </div>
    </div>

    <div style="background:var(--bg);border-radius:8px;padding:14px 16px;margin-bottom:14px;">
      <h4 style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px;">🏥 SLNB &amp; Referral</h4>
      <p style="font-size:13px;margin-bottom:8px;"><strong>SLNB:</strong> ${s.sentinel}</p>
      <p style="font-size:13px;"><strong>Referral:</strong> ${s.referral}</p>
    </div>

    <div style="background:var(--light-blue);border-radius:8px;padding:14px 16px;">
      <h4 style="font-size:12px;font-weight:800;text-transform:uppercase;color:var(--blue);margin-bottom:8px;">📋 MA Action Items</h4>
      ${(s.maActions||[]).map(a => `<div class="mel-ma-item"><span>→</span><span>${a}</span></div>`).join('')}
    </div>
  `);
}

// ══════════════════════════════════════════════════════════════
//  ICD-10 LOOKUP MODULE
// ══════════════════════════════════════════════════════════════
let icd10ActiveCategory = 'All';

function initICD10() {
  const cats = ['All', ...new Set(ICD10_CODES.map(c => c.category))];
  document.getElementById('icd10Categories').innerHTML = cats.map(c =>
    `<span class="chip ${c === 'All' ? 'active' : ''}" onclick="setICD10Category('${c}')">${c}</span>`
  ).join('');
  renderICD10(ICD10_CODES);
}

function setICD10Category(cat) {
  icd10ActiveCategory = cat;
  document.querySelectorAll('#icd10Categories .chip').forEach(c => c.classList.toggle('active', c.textContent === cat));
  filterICD10();
}

function filterICD10() {
  const q = document.getElementById('icd10Search').value.toLowerCase().trim();
  let results = ICD10_CODES;
  if (icd10ActiveCategory !== 'All') results = results.filter(c => c.category === icd10ActiveCategory);
  if (q) results = results.filter(c =>
    c.code.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.commonName.toLowerCase().includes(q)
  );
  renderICD10(results);
}

function renderICD10(items) {
  const el = document.getElementById('icd10Table');
  if (!items.length) { el.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No codes found.</p></div>`; return; }
  let html = `<table class="icd10-table">
    <thead><tr>
      <th style="width:12%">Code</th>
      <th style="width:32%">Description</th>
      <th style="width:22%">Common Name</th>
      <th style="width:16%">Category</th>
      <th style="width:18%">Notes</th>
    </tr></thead>
    <tbody>`;
  let lastCat = '';
  items.forEach(c => {
    if (icd10ActiveCategory === 'All' && c.category !== lastCat) {
      html += `<tr class="icd10-cat-header"><td colspan="5">📁 ${c.category}</td></tr>`;
      lastCat = c.category;
    }
    html += `<tr onclick="copyICD10('${c.code}')">
      <td><span class="icd-code">${c.code}</span></td>
      <td>${c.description}</td>
      <td><span class="icd-common">${c.commonName}</span></td>
      <td><span class="icd-cat">${c.category}</span></td>
      <td><span class="icd-note">${c.notes||'—'}</span></td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}

function copyICD10(code) {
  navigator.clipboard.writeText(code).catch(()=>{});
  const toast = document.getElementById('copyToast');
  toast.textContent = `✅ ${code} copied!`;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2000);
}

function showLabDetail(id) {
  const med = LAB_MONITORING.find(m => m.id === id);
  if (!med) return;
  const colorClass = `type-${med.typeColor}`;

  const sevLabel = { danger: 'STOP / DO NOT START', caution: 'HOLD & REASSESS', watch: 'MONITOR CLOSELY' };

  const html = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:6px;">
      <div>
        <h2 style="font-size:22px;font-weight:800;color:var(--navy);">${med.drug}</h2>
        <div style="font-size:14px;color:var(--text-muted);margin-top:2px;">${med.brand}</div>
      </div>
      <span class="type-badge ${colorClass}" style="font-size:13px;padding:5px 14px;">${med.type}</span>
    </div>
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">${med.indication}</div>

    ${med.blackBox ? `
    <div class="bb-box">
      <strong>⬛ BLACK BOX WARNING</strong>
      ${med.blackBoxText}
    </div>` : ''}

    ${med.rems ? `
    <div class="rems-box">
      📋 <strong>REMS Program:</strong> ${med.rems}
    </div>` : ''}

    <div class="lab-detail-grid">

      <!-- Baseline Labs -->
      <div class="lab-detail-box">
        <div class="lab-box-title baseline">🧪 Baseline Labs (Before Starting)</div>
        ${med.baselineLabs.map(lab => `
          <div class="baseline-item">
            <span class="test-check">✓</span>
            <div>
              <span class="test-name">${lab.test}</span>
              <span class="test-reason">${lab.reason}</span>
            </div>
          </div>`).join('')}
      </div>

      <!-- Ongoing Labs -->
      <div class="lab-detail-box">
        <div class="lab-box-title ongoing">📅 Ongoing Monitoring</div>
        ${med.ongoingLabs.map(lab => `
          <div class="ongoing-item">
            <span class="test-check ongoing">↻</span>
            <div>
              <span class="test-name">${lab.test}</span>
              <span class="test-freq">${lab.frequency}</span>
              ${lab.notes ? `<span class="test-reason">${lab.notes}</span>` : ''}
            </div>
          </div>`).join('')}
      </div>

      <!-- Watch-For Thresholds -->
      <div class="lab-detail-box full">
        <div class="lab-box-title watch">⚠️ Watch-For Thresholds — When to Act</div>
        <table class="threshold-table">
          <thead>
            <tr>
              <th style="width:18%">Lab / Finding</th>
              <th style="width:18%">Threshold</th>
              <th style="width:16%">Status</th>
              <th style="width:48%">Action &amp; Details</th>
            </tr>
          </thead>
          <tbody>
            ${med.watchFor.map(w => `
              <tr class="sev-${w.severity}">
                <td><strong>${w.test}</strong></td>
                <td style="font-weight:700;">${w.threshold}</td>
                <td><span class="sev-pill ${w.severity}">${sevLabel[w.severity]}</span></td>
                <td>
                  <div style="font-weight:700;font-size:12px;margin-bottom:4px;">${w.action}</div>
                  <div style="font-size:12px;color:var(--text-muted);">${w.detail}</div>
                </td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>

      <!-- Notes -->
      ${med.notes && med.notes.length ? `
      <div class="lab-detail-box full">
        <div class="lab-box-title notes">📝 Clinical Notes &amp; Reminders</div>
        ${med.notes.map(n => `
          <div class="notes-item">
            <span style="font-size:16px;flex-shrink:0;">•</span>
            <div style="font-size:13px;line-height:1.6;">${n}</div>
          </div>`).join('')}
      </div>` : ''}

    </div>

    <div style="padding:12px 16px;background:var(--danger-bg);border-radius:8px;font-size:12px;color:#7f1d1d;border:1px solid #fca5a5;margin-top:4px;">
      ⚠️ <strong>Reminder:</strong> Lab result interpretation and medication management decisions require physician review. Document all concerns in the chart and notify the physician promptly.
    </div>
  `;
  openModal(html);
}

// ══════════════════════════════════════════════════════════════
//  PATIENT HANDOUTS MODULE
// ══════════════════════════════════════════════════════════════
let handoutActiveCategory = 'All';

function initHandouts() {
  const categories = ['All', ...Object.keys(HANDOUT_CATEGORY_COLORS)];
  const chipsEl = document.getElementById('handoutCategories');
  if (chipsEl) {
    chipsEl.innerHTML = categories.map(cat =>
      `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setHandoutCategory('${cat}')">${cat}</span>`
    ).join('');
  }
  renderHandouts(HANDOUTS_DATA);
}

function setHandoutCategory(cat) {
  handoutActiveCategory = cat;
  document.querySelectorAll('#handoutCategories .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cat);
  });
  filterHandouts();
}

function filterHandouts() {
  const query = document.getElementById('handoutSearch').value.toLowerCase().trim();
  let results = HANDOUTS_DATA;
  if (handoutActiveCategory !== 'All') {
    results = results.filter(h => h.category === handoutActiveCategory);
  }
  if (query) {
    results = results.filter(h =>
      h.title.toLowerCase().includes(query) ||
      h.desc.toLowerCase().includes(query) ||
      h.category.toLowerCase().includes(query) ||
      h.keywords.some(k => k.includes(query))
    );
  }
  renderHandouts(results);
}

function renderHandouts(items) {
  const container = document.getElementById('handoutGrid');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No handouts found. Try a different search or category.</p></div>`;
    return;
  }

  // Group by category in display order
  const categoryOrder = ['AK & Field Therapy', 'Procedures', 'Viral Conditions', 'Inflammatory'];
  const grouped = {};
  items.forEach(h => {
    if (!grouped[h.category]) grouped[h.category] = [];
    grouped[h.category].push(h);
  });

  const allCategories = categoryOrder.filter(c => grouped[c]);

  container.innerHTML = allCategories.map(cat => {
    const colors = HANDOUT_CATEGORY_COLORS[cat] || { stripe: '#2563a8', badge: '#e8f4fd', badgeText: '#2563a8' };
    const catIcons = {
      'AK & Field Therapy': '☀️',
      'Procedures': '🧊',
      'Viral Conditions': '🦠',
      'Inflammatory': '🌹'
    };
    return `
      <div class="handout-category-section">
        <div class="handout-category-label">
          ${catIcons[cat] || '📄'}&nbsp; ${cat}
        </div>
        <div class="handout-cards-row">
          ${grouped[cat].map(h => `
            <div class="handout-card">
              <div class="handout-card-stripe" style="background:${colors.stripe}"></div>
              <div class="handout-card-body">
                <div class="handout-card-icon">${h.icon}</div>
                <span class="handout-badge" style="background:${colors.badge};color:${colors.badgeText}">${h.subtitle}</span>
                <div class="handout-card-title">${h.title}</div>
                <div class="handout-card-desc">${h.desc}</div>
              </div>
              <div class="handout-card-footer">
                <a class="btn-handout-open" href="${h.file}" target="_blank">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                  Open &amp; Print
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ══════════════════════════════════════════════════════════════
//  MEDICATION DOSING MODULE
// ══════════════════════════════════════════════════════════════
let dosingActiveCategory = 'All';

function initDosing() {
  const categories = ['All', ...new Set(DOSING_DATA.map(d => d.category))];
  const chipsEl = document.getElementById('dosingCategories');
  if (!chipsEl) return;
  chipsEl.innerHTML = categories.map(cat =>
    `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setDosingCategory('${cat}')">${cat}</span>`
  ).join('');
  renderDosing(DOSING_DATA);
}

function setDosingCategory(cat) {
  dosingActiveCategory = cat;
  document.querySelectorAll('#dosingCategories .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cat);
  });
  filterDosing();
}

function filterDosing() {
  const query = (document.getElementById('dosingSearch').value || '').toLowerCase().trim();
  let results = DOSING_DATA;
  if (dosingActiveCategory !== 'All') {
    results = results.filter(d => d.category === dosingActiveCategory);
  }
  if (query) {
    results = results.filter(d =>
      d.drug.toLowerCase().includes(query) ||
      d.brand.toLowerCase().includes(query) ||
      d.indication.toLowerCase().includes(query) ||
      d.category.toLowerCase().includes(query) ||
      (d.notes && d.notes.toLowerCase().includes(query))
    );
  }
  renderDosing(results);
}

function renderDosing(items) {
  const container = document.getElementById('dosingGrid');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No medications found. Try a different search or category.</p></div>`;
    return;
  }

  // Group by category
  const categoryOrder = [
    'Antibiotic', 'Antihistamine', 'Antifungal', 'Antiviral',
    'Systemic Corticosteroid', 'Corticosteroid (Intralesional)',
    'Topical Retinoid', 'Retinoid (Oral)',
    'Immunosuppressant/DMARD', 'Immunosuppressant',
    'Anti-inflammatory', 'Antiparasitic'
  ];

  const grouped = {};
  items.forEach(d => {
    if (!grouped[d.category]) grouped[d.category] = [];
    grouped[d.category].push(d);
  });

  const cats = categoryOrder.filter(c => grouped[c]);
  // Add any remaining categories not in the order list
  Object.keys(grouped).forEach(c => { if (!cats.includes(c)) cats.push(c); });

  const catIcons = {
    'Antibiotic': '🦠', 'Antihistamine': '🤧', 'Antifungal': '🍄',
    'Antiviral': '💉', 'Systemic Corticosteroid': '💊', 'Corticosteroid (Intralesional)': '💉',
    'Topical Retinoid': '🧴', 'Retinoid (Oral)': '💊',
    'Immunosuppressant/DMARD': '🧬', 'Immunosuppressant': '🧬',
    'Anti-inflammatory': '🔥', 'Antiparasitic': '🪲'
  };

  const pregnancyColor = {
    'Contraindicated': '#dc2626', 'Generally safe': '#16a34a',
    'Caution': '#d97706', 'Avoid': '#dc2626'
  };

  container.innerHTML = cats.map(cat => `
    <div class="dosing-category-section">
      <div class="dosing-category-label">${catIcons[cat] || '💊'}&nbsp; ${cat}</div>
      <div class="dosing-cards">
        ${grouped[cat].map(d => {
          const pregText = d.pregnancySafety || 'Unknown';
          const pregLower = pregText.toLowerCase();
          let pregClass = 'preg-unknown';
          if (pregLower.includes('contraindicated') || pregLower.includes('category d') || pregLower.includes('category x')) pregClass = 'preg-contra';
          else if (pregLower.includes('safe') || pregLower.includes('category b')) pregClass = 'preg-safe';
          else if (pregLower.includes('caution') || pregLower.includes('category c')) pregClass = 'preg-caution';

          return `
          <div class="dosing-card">
            <div class="dosing-card-header">
              <div class="dosing-header-top">
                <div class="dosing-header-text">
                  <div class="dosing-drug-name">${d.drug}</div>
                  <div class="dosing-brand">${d.brand}</div>
                </div>
                <span class="dosing-preg-badge ${pregClass}" title="Pregnancy safety">${pregText}</span>
              </div>
            </div>
            <div class="dosing-indication">📌 ${d.indication}</div>
            <div class="dosing-table">
              <div class="dosing-row"><span class="dosing-lbl">Dose</span><span class="dosing-val">${d.dose}</span></div>
              <div class="dosing-row"><span class="dosing-lbl">Frequency</span><span class="dosing-val">${d.frequency}</span></div>
              ${d.maxDose ? `<div class="dosing-row"><span class="dosing-lbl">Max Dose</span><span class="dosing-val">${d.maxDose}</span></div>` : ''}
              ${d.duration ? `<div class="dosing-row"><span class="dosing-lbl">Duration</span><span class="dosing-val">${d.duration}</span></div>` : ''}
              ${d.monitoring ? `<div class="dosing-row"><span class="dosing-lbl">Monitoring</span><span class="dosing-val">${d.monitoring}</span></div>` : ''}
              ${d.renalAdj ? `<div class="dosing-row"><span class="dosing-lbl">Renal Adj.</span><span class="dosing-val">${d.renalAdj}</span></div>` : ''}
            </div>
            ${d.notes ? `<div class="dosing-notes"><strong>📋 Notes:</strong> ${d.notes}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════════════════════════
//  MDM CODING MODULE
// ══════════════════════════════════════════════════════════════
let mdmActiveCategory = 'All';

function initMDM() {
  const categories = ['All', ...new Set(MDM_DATA.map(d => d.category))];
  const chipsEl = document.getElementById('mdmCategories');
  if (!chipsEl) return;
  chipsEl.innerHTML = categories.map(cat =>
    `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setMDMCategory('${cat}')">${cat}</span>`
  ).join('');
  renderMDM(MDM_DATA);
}

function setMDMCategory(cat) {
  mdmActiveCategory = cat;
  document.querySelectorAll('#mdmCategories .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cat);
  });
  filterMDM();
}

function filterMDM() {
  const query = (document.getElementById('mdmSearch').value || '').toLowerCase().trim();
  let results = MDM_DATA;
  if (mdmActiveCategory !== 'All') {
    results = results.filter(d => d.category === mdmActiveCategory);
  }
  if (query) {
    results = results.filter(d =>
      d.condition.toLowerCase().includes(query) ||
      (d.icd10 && d.icd10.toLowerCase().includes(query)) ||
      d.amaCategory.toLowerCase().includes(query) ||
      d.category.toLowerCase().includes(query) ||
      (d.clinicalContext && d.clinicalContext.toLowerCase().includes(query))
    );
  }
  renderMDM(results);
}

function renderMDM(items) {
  const container = document.getElementById('mdmTable');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No diagnoses found. Try a different search or category filter.</p></div>`;
    return;
  }

  const levelMeta = {
    minimal:  { label: 'Straightforward', cls: 'mdm-badge-minimal',  visit: '99202/99212' },
    low:      { label: 'Low Complexity',  cls: 'mdm-badge-low',      visit: '99203/99213' },
    moderate: { label: 'Mod Complexity',  cls: 'mdm-badge-moderate', visit: '99204/99214' },
    high:     { label: 'High Complexity', cls: 'mdm-badge-high',     visit: '99205/99215' }
  };

  container.innerHTML = `
    <table class="mdm-table">
      <thead>
        <tr>
          <th>Condition</th>
          <th>ICD-10</th>
          <th>Category</th>
          <th>MDM Problem Status (AMA 2021)</th>
          <th>Complexity</th>
          <th>Typical Visit</th>
          <th>Clinical Notes</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(d => {
          const meta = levelMeta[d.complexityLevel] || { label: d.complexityLevel, cls: '', visit: '—' };
          return `
          <tr class="mdm-row mdm-row-${d.complexityLevel}">
            <td class="mdm-condition"><strong>${d.condition}</strong></td>
            <td class="mdm-icd"><code>${d.icd10 || '—'}</code></td>
            <td class="mdm-cat">${d.category}</td>
            <td class="mdm-ama-status">${d.amaCategory}</td>
            <td class="mdm-level-cell"><span class="mdm-row-badge ${meta.cls}">${meta.label}</span></td>
            <td class="mdm-visit-cell">${meta.visit}</td>
            <td class="mdm-notes-cell">${d.clinicalContext || d.notes || '—'}</td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
}

// ══════════════════════════════════════════════════════════════
//  PEDIATRIC & AGE APPROVALS MODULE
// ══════════════════════════════════════════════════════════════
let pedsActiveTab = 'topical';
let topicalActiveCategory = 'All';
let pedsActiveCondition = 'All';

function showPedsTab(tab) {
  pedsActiveTab = tab;
  document.getElementById('peds-panel-topical').style.display = tab === 'topical' ? '' : 'none';
  document.getElementById('peds-panel-biologics').style.display = tab === 'biologics' ? '' : 'none';
  document.querySelectorAll('.peds-tab').forEach(t => t.classList.remove('active'));
  const activeTabEl = document.getElementById('peds-tab-' + tab);
  if (activeTabEl) activeTabEl.classList.add('active');
}

function initPedsGuide() {
  // Topical category chips
  const topCats = ['All', ...TOPICAL_CATEGORIES];
  const topChips = document.getElementById('topicalCategories');
  if (topChips) {
    topChips.innerHTML = topCats.map(cat =>
      `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setTopicalCategory('${cat}')">${cat}</span>`
    ).join('');
  }
  renderTopicalAge(TOPICAL_AGE_DATA);

  // Peds condition chips
  const condCats = ['All', ...PEDS_CONDITIONS];
  const condChips = document.getElementById('pedsConditions');
  if (condChips) {
    condChips.innerHTML = condCats.map(cat =>
      `<span class="chip ${cat === 'All' ? 'active' : ''}" onclick="setPedsCondition('${cat}')">${cat}</span>`
    ).join('');
  }
  renderPedsBiologics(PEDS_BIOLOGIC_DATA);
}

function setTopicalCategory(cat) {
  topicalActiveCategory = cat;
  document.querySelectorAll('#topicalCategories .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cat);
  });
  filterTopicalAge();
}

function filterTopicalAge() {
  const query = (document.getElementById('topicalSearch').value || '').toLowerCase().trim();
  let results = TOPICAL_AGE_DATA;
  if (topicalActiveCategory !== 'All') {
    results = results.filter(d => d.category === topicalActiveCategory);
  }
  if (query) {
    results = results.filter(d =>
      d.drug.toLowerCase().includes(query) ||
      d.brand.toLowerCase().includes(query) ||
      d.mechanism.toLowerCase().includes(query) ||
      d.category.toLowerCase().includes(query) ||
      d.indications.some(i => i.condition.toLowerCase().includes(query) || i.minAge.toLowerCase().includes(query)) ||
      (d.keyNotes && d.keyNotes.toLowerCase().includes(query))
    );
  }
  renderTopicalAge(results);
}

function renderTopicalAge(items) {
  const container = document.getElementById('topicalGrid');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No topical therapies found. Try adjusting your search.</p></div>`;
    return;
  }

  const catColors = {
    'JAK Inhibitor (Topical)':           { stripe: '#1a7f84', badge: '#ccfbf1', badgeText: '#0f766e' },
    'PDE4 Inhibitor (Topical)':          { stripe: '#2563a8', badge: '#dbeafe', badgeText: '#1d4ed8' },
    'Calcineurin Inhibitor (Topical)':   { stripe: '#d97706', badge: '#fef3c7', badgeText: '#b45309' },
    'AhR Agonist (Topical)':             { stripe: '#7c3aed', badge: '#ede9fe', badgeText: '#6d28d9' },
    'Retinoid (Topical)':                { stripe: '#db2777', badge: '#fce7f3', badgeText: '#be185d' },
    'Vitamin D Analogue (Topical)':      { stripe: '#16a34a', badge: '#dcfce7', badgeText: '#15803d' }
  };

  container.innerHTML = items.map(d => {
    const colors = catColors[d.category] || { stripe: '#1b3a6b', badge: '#e8f4fd', badgeText: '#2563a8' };
    const hasBlackBox = d.keyNotes && d.keyNotes.includes('BLACK BOX');

    return `
      <div class="peds-tcard" style="border-top: 4px solid ${colors.stripe}">
        <div class="peds-tcard-header">
          <div class="peds-tcard-drug">${d.drug}</div>
          <div class="peds-tcard-brand">${d.brand}</div>
          <span class="peds-cat-badge" style="background:${colors.badge};color:${colors.badgeText}">${d.category}</span>
        </div>
        <div class="peds-tcard-mechanism">⚙️ ${d.mechanism}</div>
        ${hasBlackBox ? `<div class="peds-blackbox-flag">⚠️ BLACK BOX WARNING</div>` : ''}
        <div class="peds-age-table">
          <div class="peds-age-header">
            <span>Indication</span><span>Min Age (FDA)</span>
          </div>
          ${d.indications.map(ind => `
            <div class="peds-age-row">
              <span class="peds-age-indication">${ind.condition}</span>
              <span class="peds-age-val">
                <strong>${ind.minAge}</strong>
                ${ind.ageNote ? `<span class="peds-age-note">${ind.ageNote}</span>` : ''}
              </span>
            </div>
          `).join('')}
        </div>
        <div class="peds-tcard-details">
          <div class="peds-tcard-row"><span class="peds-tlbl">Frequency</span><span>${d.frequency}</span></div>
          <div class="peds-tcard-row"><span class="peds-tlbl">Max Dose</span><span>${d.maxDose}</span></div>
          ${d.maxBSA ? `<div class="peds-tcard-row"><span class="peds-tlbl">Max BSA</span><span>${d.maxBSA}</span></div>` : ''}
          <div class="peds-tcard-row"><span class="peds-tlbl">Pregnancy</span><span>${d.pregnancySafety}</span></div>
        </div>
        <div class="peds-tcard-notes">${d.keyNotes}</div>
      </div>
    `;
  }).join('');
}

function setPedsCondition(cond) {
  pedsActiveCondition = cond;
  document.querySelectorAll('#pedsConditions .chip').forEach(c => {
    c.classList.toggle('active', c.textContent === cond);
  });
  filterPedsBiologics();
}

function filterPedsBiologics() {
  const query = (document.getElementById('pedsSearch').value || '').toLowerCase().trim();
  let results = PEDS_BIOLOGIC_DATA;
  if (pedsActiveCondition !== 'All') {
    results = results.filter(d => d.condition === pedsActiveCondition);
  }
  if (query) {
    results = results.filter(d =>
      d.drug.toLowerCase().includes(query) ||
      d.brand.toLowerCase().includes(query) ||
      d.drugClass.toLowerCase().includes(query) ||
      d.condition.toLowerCase().includes(query) ||
      d.minAge.toLowerCase().includes(query) ||
      (d.notes && d.notes.toLowerCase().includes(query))
    );
  }
  renderPedsBiologics(results);
}

function renderPedsBiologics(items) {
  const container = document.getElementById('pedsTable');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No results found. Try adjusting your search or condition filter.</p></div>`;
    return;
  }

  container.innerHTML = `
    <table class="peds-table">
      <thead>
        <tr>
          <th>Drug / Brand</th>
          <th>Class / Route</th>
          <th>Condition</th>
          <th>Min FDA Age</th>
          <th>Dosing (Peds)</th>
          <th>Key Notes</th>
        </tr>
      </thead>
      <tbody>
        ${items.map(d => `
          <tr class="peds-brow ${d.blackBox ? 'peds-brow-bb' : ''}">
            <td>
              <strong class="peds-drugname">${d.drug}</strong><br>
              <span class="peds-brandname">${d.brand}</span>
            </td>
            <td>
              <span class="peds-class-badge">${d.drugClass}</span>
              <div class="peds-route-tag">${d.route}</div>
            </td>
            <td class="peds-condition-cell">${d.condition}</td>
            <td class="peds-age-cell">
              <span class="peds-minage-badge">${d.minAge}</span>
              ${d.ageNote ? `<div class="peds-agenote-tag">${d.ageNote}</div>` : ''}
            </td>
            <td class="peds-dosing-cell">${d.dosingNote}</td>
            <td class="peds-notes-cell">${d.notes}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

/* ═══════════════════════════════════════════════════════════════════════════
   IL STEROID DILUTION CALCULATOR
   Dilution formula: C1·V1 = C2·V2
   V_kenalog = (desiredConc × totalVol) / startingConc
   V_saline  = totalVol - V_kenalog
════════════════════════════════════════════════════════════════════════════ */
const ILCalc = {
  vial: null,       // 10 or 40
  conc: null,       // desired mg/mL
  volume: null,     // total mL

  // Concentrations available per starting vial
  concOptions: {
    10: [1, 2.5, 5, 10],
    40: [1, 2.5, 5, 10, 20, 40]
  }
};

function initILCalc() {
  // Volume chips are static in HTML — nothing to render on init
  // Concentration chips depend on vial selection, rendered on setVial()
}

function setVial(mg) {
  ILCalc.vial = mg;
  ILCalc.conc = null; // reset downstream

  // Highlight selected vial button
  document.getElementById('vialBtn10').classList.toggle('active', mg === 10);
  document.getElementById('vialBtn40').classList.toggle('active', mg === 40);

  // Render concentration chips for this vial
  const container = document.getElementById('ilcalcConcChips');
  const options = ILCalc.concOptions[mg];
  container.innerHTML = options.map(c => {
    const label = c === mg ? `${c} mg/mL <span style="font-size:0.75rem;opacity:0.7">(no dilution)</span>` : `${c} mg/mL`;
    return `<button class="ilcalc-chip" onclick="setConc(${c})" id="concChip${c.toString().replace('.','_')}">${label}</button>`;
  }).join('');

  calculate();
}

function setConc(c) {
  ILCalc.conc = c;
  // Highlight active chip
  document.querySelectorAll('#ilcalcConcChips .ilcalc-chip').forEach(btn => btn.classList.remove('active'));
  const chipId = 'concChip' + c.toString().replace('.','_');
  const chip = document.getElementById(chipId);
  if (chip) chip.classList.add('active');
  calculate();
}

function setVolume(v) {
  ILCalc.volume = v;
  // Highlight active volume chip
  document.querySelectorAll('.ilcalc-vol-chips .ilcalc-chip').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  calculate();
}

function calculate() {
  const resultEl = document.getElementById('ilcalcResult');
  const placeholderEl = document.getElementById('ilcalcPlaceholder');

  if (!ILCalc.vial || !ILCalc.conc || !ILCalc.volume) {
    resultEl.style.display = 'none';
    placeholderEl.style.display = 'block';
    return;
  }

  const C1 = ILCalc.vial;
  const C2 = ILCalc.conc;
  const Vtotal = ILCalc.volume;

  // C1·V1 = C2·Vtotal  →  V1 = C2·Vtotal / C1
  const Vkenalog = parseFloat(((C2 * Vtotal) / C1).toFixed(2));
  const Vsaline  = parseFloat((Vtotal - Vkenalog).toFixed(2));

  // Show result
  placeholderEl.style.display = 'none';
  resultEl.style.display = 'block';

  const noDilution = (C2 === C1);

  // Draw rows
  const drawRowsEl = document.getElementById('ilcalcDrawRows');
  if (noDilution) {
    drawRowsEl.innerHTML = `
      <div class="ilcalc-draw-row kenalog">
        <span class="ilcalc-draw-icon">💉</span>
        <span class="ilcalc-draw-vol">${fmt(Vtotal)} mL</span>
        <span class="ilcalc-draw-label">
          <strong>Kenalog (${C1} mg/mL)</strong>
          Use directly from vial — no dilution needed
        </span>
      </div>`;
  } else {
    drawRowsEl.innerHTML = `
      <div class="ilcalc-draw-row kenalog">
        <span class="ilcalc-draw-icon">💉</span>
        <span class="ilcalc-draw-vol">${fmt(Vkenalog)} mL</span>
        <span class="ilcalc-draw-label">
          <strong>Kenalog (${C1} mg/mL)</strong>
          Triamcinolone acetonide
        </span>
      </div>
      <div class="ilcalc-draw-row saline">
        <span class="ilcalc-draw-icon">🧪</span>
        <span class="ilcalc-draw-vol">${fmt(Vsaline)} mL</span>
        <span class="ilcalc-draw-label">
          <strong>Bacteriostatic Normal Saline</strong>
          For dilution
        </span>
      </div>`;
  }

  // Total bar
  document.getElementById('ilcalcTotalBar').innerHTML = `
    <span class="ilcalc-total-left">Total syringe volume</span>
    <span class="ilcalc-total-right">= ${fmt(Vtotal)} mL &nbsp;@&nbsp; <strong>${C2} mg/mL</strong></span>`;

  // Step-by-step instructions
  const stepsEl = document.getElementById('ilcalcStepsBox');
  if (noDilution) {
    stepsEl.innerHTML = `
      <div class="step-title">📋 Instructions</div>
      1. Draw ${fmt(Vtotal)} mL of Kenalog (${C1} mg/mL) directly into syringe.<br>
      2. No saline needed — concentration is already ${C2} mg/mL.<br>
      3. Label syringe and confirm with physician before injecting.`;
  } else {
    stepsEl.innerHTML = `
      <div class="step-title">📋 Draw-Up Instructions</div>
      1. Draw <strong>${fmt(Vkenalog)} mL</strong> of Kenalog (${C1} mg/mL) into syringe.<br>
      2. Draw <strong>${fmt(Vsaline)} mL</strong> of bacteriostatic normal saline.<br>
      3. Mix gently by inverting syringe 2–3 times.<br>
      4. Final concentration: <strong>${C2} mg/mL</strong> in ${fmt(Vtotal)} mL total.<br>
      5. Label syringe and confirm with physician before injecting.`;
  }
}

function fmt(n) {
  // Show clean numbers: 0.50 → 0.5, 1.00 → 1
  return parseFloat(n.toFixed(2)).toString();
}
