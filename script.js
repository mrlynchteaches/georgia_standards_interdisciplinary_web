const SUBJECTS = [
  { key: 'mathematics', label: 'Mathematics' },
  { key: 'science', label: 'Science' },
  { key: 'socialStudies', label: 'Social Studies' },
  { key: 'ela', label: 'English Language Arts' },
  { key: 'fineArts', label: 'Fine Arts' },
  { key: 'ctae', label: 'CTAE' },
  { key: 'worldLanguages', label: 'World Languages' }
];

const STORAGE_KEYS = {
  endpointConfig: 'standardsWeb.endpointConfig.v3',
  savedMaps: 'standardsWeb.savedMaps.v1',
  draft: 'standardsWeb.draft.v3'
};

const STATE_FUNDED_COURSE_LIST_JSON = 'data/state-funded-course-list.json';

const ENDPOINT_DEFINITIONS = [
  { key: 'mathematics', group: 'Core disciplines', label: 'Mathematics', subjectKey: 'mathematics', subjectLabel: 'Mathematics', endpoint: 'mathematics.json' },
  { key: 'science', group: 'Core disciplines', label: 'Science', subjectKey: 'science', subjectLabel: 'Science', endpoint: 'science.json' },
  { key: 'socialStudies', group: 'Core disciplines', label: 'Social Studies', subjectKey: 'socialStudies', subjectLabel: 'Social Studies', endpoint: 'socialStudies.json' },
  { key: 'ela', group: 'Core disciplines', label: 'English Language Arts', subjectKey: 'ela', subjectLabel: 'English Language Arts', endpoint: 'ela.json' },
  { key: 'worldLanguages', group: 'Core disciplines', label: 'World Languages', subjectKey: 'worldLanguages', subjectLabel: 'World Languages', endpoint: 'worldLanguages.json' },
  { key: 'fineArtsDance', group: 'Fine Arts', label: 'Dance', subjectKey: 'fineArts', subjectLabel: 'Fine Arts', courseLabel: 'Dance', subdiscipline: 'Dance', endpoint: 'fineArtsDance.json' },
  { key: 'fineArtsDramaticTheatre', group: 'Fine Arts', label: 'Dramatic Arts / Theatre', subjectKey: 'fineArts', subjectLabel: 'Fine Arts', courseLabel: 'Dramatic Arts / Theatre', subdiscipline: 'Dramatic Arts / Theatre', endpoint: 'fineArtsDramaticTheatre.json' },
  { key: 'fineArtsMusic', group: 'Fine Arts', label: 'Music', subjectKey: 'fineArts', subjectLabel: 'Fine Arts', courseLabel: 'Music', subdiscipline: 'Music', endpoint: 'fineArtsMusic.json' },
  { key: 'fineArtsVisualArt', group: 'Fine Arts', label: 'Visual Art', subjectKey: 'fineArts', subjectLabel: 'Fine Arts', courseLabel: 'Visual Art', subdiscipline: 'Visual Art', endpoint: 'fineArtsVisualArt.json' },
  { key: 'ctaeAgricultureFoodNaturalResources', group: 'CTAE clusters', label: 'Agriculture, Food, and Natural Resources', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Agriculture, Food, and Natural Resources', courseLabel: 'Agriculture, Food, and Natural Resources', endpoint: 'ctaeAgricultureFoodNaturalResources.json' },
  { key: 'ctaeArchitectureConstruction', group: 'CTAE clusters', label: 'Architecture and Construction', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Architecture and Construction', courseLabel: 'Architecture and Construction', endpoint: 'ctaeArchitectureConstruction.json' },
  { key: 'ctaeAudioVideoTechnologyCommunication', group: 'CTAE clusters', label: 'Arts, Audio-Video Technology & Communications', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Arts, Audio-Video Technology & Communications', courseLabel: 'Arts, Audio-Video Technology & Communications', endpoint: 'ctaeAudioVideoTechnologyCommunication.json' },
  { key: 'ctaeBusinessManagementAdministration', group: 'CTAE clusters', label: 'Business Management & Administration', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Business Management & Administration', courseLabel: 'Business Management & Administration', endpoint: 'ctaeBusinessManagementAdministration.json' },
  { key: 'ctaeEducationTraining', group: 'CTAE clusters', label: 'Education and Training', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Education and Training', courseLabel: 'Education and Training', endpoint: 'ctaeEducationTraining.json' },
  { key: 'ctaeEnergy', group: 'CTAE clusters', label: 'Energy', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Energy', courseLabel: 'Energy', endpoint: 'ctaeEnergy.json' },
  { key: 'ctaeFinance', group: 'CTAE clusters', label: 'Finance', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Finance', courseLabel: 'Finance', endpoint: 'ctaeFinance.json' },
  { key: 'ctaeGovernmentPublicAdministration', group: 'CTAE clusters', label: 'Government and Public Administration', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Government and Public Administration', courseLabel: 'Government and Public Administration', endpoint: 'ctaeGovernmentPublicAdministration.json' },
  { key: 'ctaeHealthScience', group: 'CTAE clusters', label: 'Health Science', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Health Science', courseLabel: 'Health Science', endpoint: 'ctaeHealthScience.json' },
  { key: 'ctaeHospitalityTourism', group: 'CTAE clusters', label: 'Hospitality and Tourism', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Hospitality and Tourism', courseLabel: 'Hospitality and Tourism', endpoint: 'ctaeHospitalityTourism.json' },
  { key: 'ctaeHumanServices', group: 'CTAE clusters', label: 'Human Services', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Human Services', courseLabel: 'Human Services', endpoint: 'ctaeHumanServices.json' },
  { key: 'ctaeInformationTechnology', group: 'CTAE clusters', label: 'Information Technology', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Information Technology', courseLabel: 'Information Technology', endpoint: 'ctaeInformationTechnology.json' },
  { key: 'ctaeLawPublicSafetyCorrectionsSecurity', group: 'CTAE clusters', label: 'Law, Public Safety, Corrections & Security', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Law, Public Safety, Corrections & Security', courseLabel: 'Law, Public Safety, Corrections & Security', endpoint: 'ctaeLawPublicSafetyCorrectionsSecurity.json' },
  { key: 'ctaeManufacturing', group: 'CTAE clusters', label: 'Manufacturing', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Manufacturing', courseLabel: 'Manufacturing', endpoint: 'ctaeManufacturing.json' },
  { key: 'ctaeMarketing', group: 'CTAE clusters', label: 'Marketing', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Marketing', courseLabel: 'Marketing', endpoint: 'ctaeMarketing.json' },
  { key: 'ctaeSTEM', group: 'CTAE clusters', label: 'Science, Technology, Engineering & Mathematics', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Science, Technology, Engineering & Mathematics', courseLabel: 'Science, Technology, Engineering & Mathematics', endpoint: 'ctaeSTEM.json' },
  { key: 'ctaeTransportationDistributionLogistics', group: 'CTAE clusters', label: 'Transportation, Distribution & Logistics', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Transportation, Distribution & Logistics', courseLabel: 'Transportation, Distribution & Logistics', endpoint: 'ctaeTransportationDistributionLogistics.json' },
  { key: 'ctaeWorkforceReady', group: 'CTAE clusters', label: 'Workforce Ready', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Workforce Ready', courseLabel: 'Workforce Ready', endpoint: 'ctaeWorkforceReady.json' },
  { key: 'ctaeMiddleGrades', group: 'CTAE clusters', label: 'Middle Grades CTAE', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Middle Grades CTAE', courseLabel: 'Middle Grades CTAE', endpoint: 'ctaeMiddleGrades.json' },
  { key: 'computerScience', group: 'Optional additional frameworks', label: 'Computer Science', subjectKey: 'ctae', subjectLabel: 'CTAE', cluster: 'Computer Science', courseLabel: 'Computer Science', endpoint: 'computerScience.json' },
  { key: 'health', group: 'Optional additional frameworks', label: 'Health', subjectKey: 'science', subjectLabel: 'Science', courseLabel: 'Health', endpoint: 'health.json' },
  { key: 'physicalEducation', group: 'Optional additional frameworks', label: 'Physical Education', subjectKey: 'science', subjectLabel: 'Science', courseLabel: 'Physical Education', endpoint: 'physicalEducation.json' }
];

const DEFAULT_ENDPOINTS = Object.fromEntries(ENDPOINT_DEFINITIONS.map(item => [item.key, item.endpoint]));

//is this the issue? I think the site only pulling these demo standards. 
//Site was definitely pulling only the demo standards that were listed here. I've removed them.

//Do I need to add this for all subjects? Easy enough if I do...

const SUBJECT_PREFIX_MAP = {
  mathematics: [
    { pattern: /^(ALG|ALGEBRA)/i, course: 'Algebra: Concepts and Connections' },
    { pattern: /^(GEO|GEOM)/i, course: 'Geometry: Concepts and Connections' },
    { pattern: /^(AA|ADV|AALG)/i, course: 'Advanced Algebra: Concepts and Connections' },
    { pattern: /^(STAT|SR|APSTAT)/i, course: 'Statistical Reasoning' },
    { pattern: /^(PC|PRECALC|PRECAL)/i, course: 'Precalculus' },
    { pattern: /^(CALC|APCALC)/i, course: 'Calculus' },
    { pattern: /^(QR)/i, course: 'Quantitative Reasoning' },
    { pattern: /^(DS|DATASCI)/i, course: 'Data Science' },
    { pattern: /^(NUM)/i, course: 'Number Talks / Numeracy' }
  ],
  science: [
    { pattern: /^(SB|BIO)/i, course: 'Biology' },
    { pattern: /^(SCHEM|SCH|CHEM)/i, course: 'Chemistry' },
    { pattern: /^(SPS|PHYSCI)/i, course: 'Physical Science' },
    { pattern: /^(SPHY|PHY)/i, course: 'Physics' },
    { pattern: /^(SES|ENV)/i, course: 'Environmental Science' },
    { pattern: /^(SASTR|ASTR)/i, course: 'Astronomy' },
    { pattern: /^(SBO|BOT)/i, course: 'Botany' },
    { pattern: /^(SEC|ECO)/i, course: 'Ecology' },
    { pattern: /^(SENT|ENTO)/i, course: 'Entomology' },
    { pattern: /^(SEP|EPI)/i, course: 'Epidemiology' },
    { pattern: /^(SFS|FORENSIC)/i, course: 'Forensic Science' },
    { pattern: /^(SG|GEOL)/i, course: 'Geology' },
    { pattern: /^(SHAP|ANAT)/i, course: 'Human Anatomy & Physiology' },
    { pattern: /^(SMET|METEOR)/i, course: 'Meteorology' },
    { pattern: /^(SMIC|MICRO)/i, course: 'Microbiology' },
    { pattern: /^(SOCN|OCEAN)/i, course: 'Oceanography' },
    { pattern: /^(SZ|ZOO)/i, course: 'Zoology' }
  ]
};

const state = {
  endpointConfig: { ...DEFAULT_ENDPOINTS },
  standards: [], visiblePickerItems: [], selectedStandards: [], manualTargets: [], results: [],
  graphNodes: [], graphLinks: [], graph: null, graphZoom: null, adjacency: new Map(), tooltip: null,
  activeCardId: null, loadLog: [],
  courseCatalog: { loaded: false, raw: [], bySubject: new Map(), aliases: new Map() },
  diagnostics: { missingCourseAssignments: [], inferredCourseAssignments: [] }
};

const el = {};
document.addEventListener('DOMContentLoaded', init);

function init() {
  cacheElements();
  loadEndpointConfig();
  buildStaticUi();
  bindEvents();
  renderSelectedChips();
  restoreDraft();
}

function cacheElements() {
  ['subjectSelect','gradeBandSelect','courseSelect','keywordInput','standardSearchInput','openPickerBtn','pickerResults','selectedStandards','manualTargets','searchForm','findConnectionsBtn','statusBadge','apiConfigGrid','graphContainer','emptyState','resultsList','resultsSubhead','filterSubject','filterGradeBand','filterCourse','filterStrength','filterKeyword','saveMapBtn','printBtn','resetBtn','saveConfigBtn','clearConfigBtn','nodeDialog','dialogTitle','dialogBody','graphLoadLabel'].forEach(id => el[id] = document.getElementById(id));
  el.resultCardTemplate = document.getElementById('resultCardTemplate');
}

function buildStaticUi() {
  fillSelect(el.subjectSelect, SUBJECTS.map(s => ({ value: s.key, label: s.label })), 'All subjects');
  fillSelect(el.filterSubject, SUBJECTS.map(s => ({ value: s.label, label: s.label })), 'All');
  fillSelect(el.gradeBandSelect, collectGradeBandOptions(), 'All grade bands');
  fillSelect(el.filterGradeBand, collectGradeBandOptions(), 'All');
  buildApiConfigGrid();
  refreshCourseOptions();
  refreshPickerResults();
}

function bindEvents() {
  el.subjectSelect.addEventListener('change', onSearchFilterChange);
  el.gradeBandSelect.addEventListener('change', onSearchFilterChange);
  el.courseSelect.addEventListener('change', onSearchFilterChange);
  el.keywordInput.addEventListener('input', onSearchFilterChange);
  el.standardSearchInput.addEventListener('input', refreshPickerResults);
  el.openPickerBtn.addEventListener('click', refreshPickerResults);
  el.searchForm.addEventListener('submit', handleSearchSubmit);
  el.manualTargets.addEventListener('input', saveDraft);
  ['filterSubject','filterGradeBand','filterCourse','filterStrength','filterKeyword'].forEach(id => el[id].addEventListener(id === 'filterKeyword' ? 'input' : 'change', onResultFilterChange));
  el.saveMapBtn.addEventListener('click', saveLessonMap);
  el.printBtn.addEventListener('click', () => window.print());
  el.resetBtn.addEventListener('click', resetAll);
  el.saveConfigBtn.addEventListener('click', saveEndpointConfigFromUi);
  el.clearConfigBtn.addEventListener('click', clearEndpointConfig);
  window.addEventListener('beforeunload', saveDraft);
  window.addEventListener('resize', debounce(() => { if (state.results.length) renderGraph(); }, 150));
}

function onSearchFilterChange() { refreshCourseOptions(); refreshPickerResults(); saveDraft(); }
function onResultFilterChange() { renderResults(); renderGraph(); }

function collectGradeBandOptions() {
  return [...new Set(['K-5','6-8','9-10','11-12','9-12','Unspecified'])].map(v => ({ value: v, label: v }));
}

function buildApiConfigGrid() {
  el.apiConfigGrid.innerHTML = '';
  const groups = [...new Set(ENDPOINT_DEFINITIONS.map(item => item.group))];
  groups.forEach(groupName => {
    const defs = ENDPOINT_DEFINITIONS.filter(item => item.group === groupName);
    const group = document.createElement('div'); group.className = 'api-group';
    const header = document.createElement('div'); header.className = 'api-group-title';
    header.innerHTML = `<h4>${escapeHtml(groupName)}</h4><p>${defs.length} JSON file${defs.length === 1 ? '' : 's'}</p>`;
    group.appendChild(header);
    const grid = document.createElement('div'); grid.className = 'api-config-grid';
    defs.forEach(def => {
      const wrapper = document.createElement('div'); wrapper.className = 'field-group';
      const extra = def.cluster || def.subdiscipline || def.subjectLabel;
      const defaultPath = def.endpoint || '';
      wrapper.innerHTML = `<label for="api-${def.key}">${escapeHtml(def.label)}</label><input id="api-${def.key}" data-endpoint-key="${def.key}" type="text" value="${escapeHtml(state.endpointConfig[def.key] || defaultPath)}" placeholder="data/${escapeHtml(def.key)}.json" /><span class="endpoint-meta">Maps to ${escapeHtml(def.subjectLabel)}${extra && extra !== def.subjectLabel ? ` → ${escapeHtml(extra)}` : ''}</span>`;
      grid.appendChild(wrapper);
    });
    group.appendChild(grid); el.apiConfigGrid.appendChild(group);
  });
}

function loadEndpointConfig() {
  try { state.endpointConfig = { ...DEFAULT_ENDPOINTS, ...(JSON.parse(localStorage.getItem(STORAGE_KEYS.endpointConfig) || '{}')) }; }
  catch { state.endpointConfig = { ...DEFAULT_ENDPOINTS }; }
}

function saveEndpointConfigFromUi() {
  const next = { ...DEFAULT_ENDPOINTS };
  document.querySelectorAll('[data-endpoint-key]').forEach(input => next[input.dataset.endpointKey] = input.value.trim());
  state.endpointConfig = next;
  localStorage.setItem(STORAGE_KEYS.endpointConfig, JSON.stringify(next));
  setStatus('JSON file config saved locally');
}

function clearEndpointConfig() {
  state.endpointConfig = { ...DEFAULT_ENDPOINTS };
  localStorage.removeItem(STORAGE_KEYS.endpointConfig);
  buildApiConfigGrid();
  setStatus('JSON file config reset to defaults');
}

function restoreDraft() {
  try {
    const draft = JSON.parse(localStorage.getItem(STORAGE_KEYS.draft) || '{}');
    if (draft.subject) el.subjectSelect.value = draft.subject;
    if (draft.gradeBand) el.gradeBandSelect.value = draft.gradeBand;
    refreshCourseOptions();
    if (draft.course) el.courseSelect.value = draft.course;
    if (draft.keyword) el.keywordInput.value = draft.keyword;
    if (draft.standardSearch) el.standardSearchInput.value = draft.standardSearch;
    if (draft.manualTargets) el.manualTargets.value = draft.manualTargets;
    if (Array.isArray(draft.selectedStandards)) {
      const map = new Map(state.standards.map(s => [s.id, s]));
      state.selectedStandards = draft.selectedStandards.map(id => map.get(id)).filter(Boolean);
      renderSelectedChips();
    }
    refreshPickerResults();
  } catch {}
}

function saveDraft() {
  const draft = {
    subject: el.subjectSelect.value,
    gradeBand: el.gradeBandSelect.value,
    course: el.courseSelect.value,
    keyword: el.keywordInput.value.trim(),
    standardSearch: el.standardSearchInput.value.trim(),
    manualTargets: el.manualTargets.value,
    selectedStandards: state.selectedStandards.map(s => s.id)
  };
  localStorage.setItem(STORAGE_KEYS.draft, JSON.stringify(draft));
}

function refreshCourseOptions() {
  const subjectKey = el.subjectSelect.value, gradeBand = el.gradeBandSelect.value;
  const courses = collectCoursesForSubject(subjectKey, gradeBand);
  const current = el.courseSelect.value;
  fillSelect(el.courseSelect, courses.map(c => ({ value: c, label: c })), 'All courses');
  if (courses.includes(current)) el.courseSelect.value = current;
}

function populateFilterOptions() {
  const allCourses = [...new Set([
    ...state.standards.map(s => s.course).filter(Boolean),
    ...[...state.courseCatalog.bySubject.values()].flat().map(item => item.course).filter(Boolean)
  ])].sort();
  fillSelect(el.filterCourse, allCourses.map(c => ({ value: c, label: c })), 'All');
}

function collectCoursesForSubject(subjectKey = '', gradeBand = '') {
  const fromStandards = state.standards
    .filter(item => (!subjectKey || item.subjectKey === subjectKey) && (!gradeBand || item.gradeBand === gradeBand))
    .map(item => item.course)
    .filter(Boolean);

  const fromCatalog = !subjectKey
    ? [...state.courseCatalog.bySubject.values()].flat().map(item => item.course)
    : (state.courseCatalog.bySubject.get(subjectKey) || []).map(item => item.course);

  return [...new Set([...fromStandards, ...fromCatalog].filter(Boolean))].sort();
}

function refreshPickerResults() {
  const query = el.standardSearchInput.value.trim().toLowerCase();
  const matches = filterStandardsForPicker().filter(item => !query || searchableText(item).includes(query)).slice(0, 50);
  state.visiblePickerItems = matches;
  el.pickerResults.innerHTML = '';
  if (!matches.length) {
    const none = document.createElement('div');
    none.className = 'picker-item';
    none.innerHTML = '<div><strong>No matching standards</strong><p>Try broadening the current filters or loading live data.</p></div>';
    el.pickerResults.appendChild(none);
    return;
  }
  matches.forEach(item => {
    const wrapper = document.createElement('div'); wrapper.className = 'picker-item';
    const selected = state.selectedStandards.some(s => s.id === item.id);
    wrapper.innerHTML = `<div><strong>${escapeHtml(item.code)} · ${escapeHtml(item.subject)}</strong><small>${escapeHtml(item.gradeBand)} · ${escapeHtml(item.course || 'Unspecified course')}</small><p>${escapeHtml(item.description)}</p></div><button class="btn ${selected ? 'btn-ghost' : 'btn-secondary'}" type="button" ${selected ? 'disabled' : ''}>${selected ? 'Added' : 'Add'}</button>`;
    wrapper.querySelector('button').addEventListener('click', () => addSelectedStandard(item.id));
    el.pickerResults.appendChild(wrapper);
  });
}

function filterStandardsForPicker() {
  const subjectKey = el.subjectSelect.value;
  const gradeBand = el.gradeBandSelect.value;
  const course = el.courseSelect.value;
  const keyword = el.keywordInput.value.trim().toLowerCase();
  return state.standards.filter(item => (!subjectKey || item.subjectKey === subjectKey) && (!gradeBand || item.gradeBand === gradeBand) && (!course || item.course === course) && (!keyword || searchableText(item).includes(keyword)));
}

function searchableText(item) {
  return [item.code, item.description, item.subject, item.course, item.cluster, item.subdiscipline, ...(item.tags || []), ...(item.skills || [])].filter(Boolean).join(' ').toLowerCase();
}

function addSelectedStandard(id) {
  const item = state.standards.find(s => s.id === id);
  if (!item || state.selectedStandards.some(s => s.id === id)) return;
  state.selectedStandards.push(item); renderSelectedChips(); refreshPickerResults(); saveDraft();
}

function removeSelectedStandard(id) {
  state.selectedStandards = state.selectedStandards.filter(s => s.id !== id);
  renderSelectedChips(); refreshPickerResults(); saveDraft();
}

function renderSelectedChips() {
  el.selectedStandards.innerHTML = '';
  if (!state.selectedStandards.length) {
    const helper = document.createElement('p'); helper.className = 'field-help'; helper.textContent = 'No standards selected yet.'; el.selectedStandards.appendChild(helper); return;
  }
  state.selectedStandards.forEach(item => {
    const chip = document.createElement('div'); chip.className = 'chip';
    chip.innerHTML = `<span>${escapeHtml(item.code)} · ${escapeHtml(item.subject)}</span><button type="button" aria-label="Remove ${escapeHtml(item.code)}">✕</button>`;
    chip.querySelector('button').addEventListener('click', () => removeSelectedStandard(item.id));
    el.selectedStandards.appendChild(chip);
  });
}

async function handleSearchSubmit(event) {
  event.preventDefault();
  setStatus('Finding connections...');
  state.manualTargets = parseManualTargets(el.manualTargets.value);
  if (!state.selectedStandards.length && !state.manualTargets.length) {
    setStatus('Select at least one standard or add a manual learning target');
    return;
  }
  await fetchConfiguredSubjectsIfNeeded();
  state.results = buildConnections(state.selectedStandards, state.manualTargets);
  populateFilterOptions();
  el.emptyState.style.display = 'none';
  renderResults(); renderGraph(); updateGraphFooter(); saveDraft();
  const missingCount = state.diagnostics.missingCourseAssignments.length;
  setStatus(`${state.results.length} connections found${missingCount ? ` · ${missingCount} standards still missing course assignments` : ''}`);
}

async function fetchConfiguredSubjectsIfNeeded() {
  state.diagnostics.missingCourseAssignments = [];
  state.diagnostics.inferredCourseAssignments = [];
  await ensureCourseCatalogLoaded();
  const activeDefs = ENDPOINT_DEFINITIONS.filter(def => String(state.endpointConfig[def.key] || '').trim());
  if (!activeDefs.length) return;
  const settled = await Promise.allSettled(activeDefs.map(def => fetchSubjectStandards(def)));
  state.loadLog = [];
  const normalized = [];
  settled.forEach((result, index) => {
    const def = activeDefs[index];
    if (result.status === 'fulfilled') {
      normalized.push(...result.value);
      state.loadLog.push({ label: def.label, ok: true, count: result.value.length });
    } else {
      console.error(result.reason);
      state.loadLog.push({ label: def.label, ok: false, count: 0 });
    }
  });
  const merged = new Map(DEMO_STANDARDS.map(item => [item.id, { ...item, source: 'demo' }]));
  normalized.forEach(item => merged.set(item.id, item));
  state.standards = [...merged.values()];
  refreshCourseOptions(); refreshPickerResults(); populateFilterOptions();
  publishDiagnostics();
}


async function loadJsonFile(path, label = 'JSON file') {
  const response = await fetch(path, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Failed to load ${label}: ${response.status} (${path})`);
  return response.json();
}

async function ensureCourseCatalogLoaded() {
  if (state.courseCatalog.loaded) return;
  try {
    const data = await loadJsonFile(STATE_FUNDED_COURSE_LIST_JSON, 'state-funded course list');
    const catalog = parseCourseCatalogPayload(data);
    state.courseCatalog = { ...catalog, loaded: true };
    window.__standardsWebCourseCatalog = state.courseCatalog;
  } catch (error) {
    console.error(error);
    state.courseCatalog = { loaded: true, raw: [], bySubject: new Map(), aliases: new Map() };
  }
}

function parseCourseCatalogPayload(data) {
  const arrays = extractCaseArrays(data);
  const records = [];
  arrays.forEach(arr => arr.forEach((item, index) => {
    const title = firstNonEmpty(
      item.title,
      item.statementLabel,
      item.abbreviatedStatement,
      item.fullStatement,
      item.description,
      item.notes,
      item.humanCodingScheme,
      item.listEnumeration
    );
    const description = firstNonEmpty(item.description, item.fullStatement, item.notes, '');
    const subjectText = [title, description, item.subject, item.listEnumeration].filter(Boolean).join(' ');
    const subjectKey = inferSubjectKeyFromText(subjectText);
    if (!subjectKey) return;
    const course = normalizeCourseTitle(title);
    if (!course || course.length < 3) return;
    records.push({ id: `course-list-${subjectKey}-${sanitizeId(course)}-${index}`, subjectKey, subject: SUBJECTS.find(s => s.key === subjectKey)?.label || subjectKey, course, description });
  }));

  const deduped = dedupeBy(records, item => `${item.subjectKey}::${normalizeForLookup(item.course)}`);
  const bySubject = new Map();
  const aliases = new Map();
  deduped.forEach(record => {
    if (!bySubject.has(record.subjectKey)) bySubject.set(record.subjectKey, []);
    bySubject.get(record.subjectKey).push(record);
    buildCourseAliases(record).forEach(alias => aliases.set(`${record.subjectKey}::${alias}`, record.course));
  });
  return { raw: deduped, bySubject, aliases };
}

async function fetchSubjectStandards(def) {
  const jsonPath = state.endpointConfig[def.key];
  if (!jsonPath) return [];
  const data = await loadJsonFile(jsonPath, def.key);
  return normalizeCasePayload(data, def);
}

function normalizeCasePayload(data, def) {
  const arrays = extractCaseArrays(data);
  const normalized = [];
  arrays.forEach(arr => arr.forEach((item, index) => {
    const norm = normalizeCaseEntry(item, def, index);
    if (norm) normalized.push(norm);
  }));
  return dedupeBy(normalized, item => item.id);
}

function extractCaseArrays(data) {
  const arrays = [];
  if (Array.isArray(data)) arrays.push(data);
  if (Array.isArray(data?.CFItems)) arrays.push(data.CFItems);
  if (Array.isArray(data?.items)) arrays.push(data.items);
  if (Array.isArray(data?.children)) arrays.push(data.children);
  if (Array.isArray(data?.CFPackage?.CFItems)) arrays.push(data.CFPackage.CFItems);
  if (Array.isArray(data?.CFPackage?.items)) arrays.push(data.CFPackage.items);
  if (!arrays.length && data && typeof data === 'object' && (data.humanCodingScheme || data.fullStatement || data.statementLabel)) arrays.push([data]);
  return arrays;
}

function normalizeCaseEntry(item, def, index = 0) {
  if (!item || typeof item !== 'object') return null;
  const code = firstNonEmpty(item.humanCodingScheme, item.identifier, item.abbreviatedStatement, item.fullStatement, `${def.label}-${index + 1}`);
  const description = firstNonEmpty(item.fullStatement, item.statementLabel, item.description, item.notes, '');
  if (!description && !code) return null;
  const educationText = Array.isArray(item.educationLevel) ? item.educationLevel.join(' ') : firstNonEmpty(item.educationLevel, item.gradeLevel, '');
  const gradeBand = inferGradeBandFromText(`${code} ${description} ${educationText}`);
  const explicitCourse = pickExplicitCourse(item, def);
  const resolved = resolveCourseAssignment({ item, def, code, description, explicitCourse });
  const course = resolved.course || 'Unspecified course';
  const tokens = tokenize(`${code} ${description} ${course}`);
  return {
    id: `${def.key}-${sanitizeId(code)}-${index}`,
    code,
    subject: def.subjectLabel,
    subjectKey: def.subjectKey,
    gradeBand,
    course,
    cluster: def.cluster || null,
    subdiscipline: def.subdiscipline || null,
    description,
    tags: tokens.slice(0, 14),
    skills: inferSkills(tokens),
    raw: item,
    source: 'api',
    courseSource: resolved.source || 'unassigned'
  };
}

function pickExplicitCourse(item, def) {
  const candidates = [
    item.course,
    item.courseTitle,
    item.listEnumeration,
    item.subject,
    item.parentTitle,
    item.parentLabel,
    item.educationLevel && !Array.isArray(item.educationLevel) ? item.educationLevel : '',
    def.courseLabel,
    def.cluster,
    def.subdiscipline
  ].filter(Boolean);
  const generic = new Set(['mathematics','science','social studies','english language arts','fine arts','ctae','world languages','k-5','6-8','9-12','11-12','9-10']);
  for (const candidate of candidates) {
    const cleaned = normalizeCourseTitle(candidate);
    if (!cleaned) continue;
    if (generic.has(cleaned.toLowerCase())) continue;
    if (/^\d{2}$/.test(cleaned)) continue;
    return cleaned;
  }
  return '';
}

function resolveCourseAssignment({ item, def, code, description, explicitCourse }) {
  if (explicitCourse) return { course: explicitCourse, source: 'explicit' };
  if (def.cluster) return { course: def.cluster, source: 'definition-cluster' };
  if (def.subdiscipline) return { course: def.subdiscipline, source: 'definition-subdiscipline' };

  const inferred = inferCourseFromCodeAndText(code, description, def.subjectKey);
  if (inferred) {
    state.diagnostics.inferredCourseAssignments.push({ subject: def.subjectLabel, code, inferredCourse: inferred, reason: 'prefix/text inference' });
    return { course: inferred, source: 'inferred-prefix' };
  }

  const catalogMatched = matchCourseFromCatalog(def.subjectKey, code, description);
  if (catalogMatched) {
    state.diagnostics.inferredCourseAssignments.push({ subject: def.subjectLabel, code, inferredCourse: catalogMatched, reason: 'course catalog alias match' });
    return { course: catalogMatched, source: 'catalog-match' };
  }

  state.diagnostics.missingCourseAssignments.push({ subject: def.subjectLabel, subjectKey: def.subjectKey, code, description: truncateForLog(description), endpointKey: def.key });
  return { course: 'Unspecified course', source: 'unassigned' };
}

function inferCourseFromCodeAndText(code, description, subjectKey) {
  const source = `${code} ${description}`;
  const rules = SUBJECT_PREFIX_MAP[subjectKey] || [];
  for (const rule of rules) {
    if (rule.pattern.test(source)) return rule.course;
  }
  return '';
}

function matchCourseFromCatalog(subjectKey, code, description) {
  const aliases = state.courseCatalog.aliases;
  const rawText = `${code} ${description}`;
  const exactAliases = buildAliasCandidates(rawText);
  for (const alias of exactAliases) {
    const hit = aliases.get(`${subjectKey}::${alias}`);
    if (hit) return hit;
  }
  return '';
}

function inferSubjectKeyFromText(text) {
  const t = String(text || '').toLowerCase();
  if (/(algebra|geometry|precalculus|calculus|statistics|mathematics|quantitative|data science)/.test(t)) return 'mathematics';
  if (/(biology|chemistry|physics|environmental|astronomy|botany|ecology|entomology|epidemiology|forensic|geology|anatomy|meteorology|microbiology|oceanography|zoology|science)/.test(t)) return 'science';
  if (/(history|geography|civics|government|economics|social studies)/.test(t)) return 'socialStudies';
  if (/(english|language arts|literature|composition|reading|writing)/.test(t)) return 'ela';
  if (/(art|dance|music|theatre|theater|dramatic)/.test(t)) return 'fineArts';
  if (/(world languages|spanish|french|german|latin|language)/.test(t)) return 'worldLanguages';
  if (/(career|technical|agriculture|technology|manufacturing|marketing|hospitality|finance|health science|information technology|ctae|workforce)/.test(t)) return 'ctae';
  return '';
}

function inferGradeBandFromText(text) {
  const t = String(text || '').toLowerCase();
  if (/\b(k|kindergarten)\b|grade\s?[0-5]\b/.test(t)) return 'K-5';
  if (/grade\s?[6-8]\b|middle/.test(t)) return '6-8';
  if (/11-12/.test(t)) return '11-12';
  if (/9-10/.test(t)) return '9-10';
  if (/grade\s?(9|10|11|12)\b|high school|9-12|secondary/.test(t)) return '9-12';
  return 'Unspecified';
}

function inferSkills(tokens) {
  const known = ['analyze','evaluate','communicate','model','justify','compare','interpret','present','create','design','solve','write','reason','investigate','explain','support','apply','obtain','develop'];
  return known.filter(skill => tokens.includes(skill));
}

function parseManualTargets(value) {
  return value.split('\n').map(line => line.trim()).filter(Boolean).map((text, index) => ({
    id: `manual-${index + 1}`,
    code: `Target ${index + 1}`,
    subject: 'Manual target',
    subjectKey: 'manual',
    gradeBand: el.gradeBandSelect.value || 'Unspecified',
    course: el.courseSelect.value || 'Teacher-entered target',
    description: text,
    tags: tokenize(text).slice(0, 12),
    skills: inferSkills(tokenize(text)),
    source: 'manual'
  }));
}

function buildConnections(selectedStandards, manualTargets = []) {
  const anchors = [...selectedStandards, ...manualTargets];
  const resultsMap = new Map();
  anchors.forEach(anchor => {
    state.standards.forEach(candidate => {
      if (selectedStandards.some(item => item.id === candidate.id)) return;
      const crossSubjectBoost = anchor.subjectKey && candidate.subjectKey !== anchor.subjectKey ? 1 : 0.82;
      const scoreData = scoreConnection(anchor, candidate) * crossSubjectBoost;
      if (scoreData < 0.11) return;
      const record = { ...candidate, score: Number(scoreData.toFixed(3)), strength: classifyStrength(scoreData), explanation: explainConnection(anchor, candidate), anchoredTo: anchor.code, sharedTerms: sharedTerms(anchor, candidate) };
      const existing = resultsMap.get(candidate.id);
      if (!existing || existing.score < record.score) resultsMap.set(candidate.id, record);
    });
  });
  return [...resultsMap.values()].sort((a, b) => b.score - a.score);
}

function scoreConnection(a, b) {
  const tagScore = jaccard(a.tags || [], b.tags || []);
  const skillScore = jaccard(a.skills || [], b.skills || []);
  const textScore = jaccard(tokenize(a.description), tokenize(b.description));
  const courseScore = a.course === b.course ? 0.08 : 0;
  const cultureBoost = sharedTerms(a, b).includes('culture') ? 0.04 : 0;
  return (tagScore * 0.42) + (skillScore * 0.34) + (textScore * 0.2) + courseScore + cultureBoost;
}

function classifyStrength(score) {
  if (score >= 0.34) return 'strong';
  if (score >= 0.22) return 'medium';
  return 'weak';
}

function explainConnection(a, b) {
  const terms = sharedTerms(a, b), pieces = [];
  if (terms.length) pieces.push(`Both emphasize ${terms.slice(0, 5).join(', ')}.`);
  const sharedSkillList = intersect(a.skills || [], b.skills || []);
  if (sharedSkillList.length) pieces.push(`They also share disciplinary actions such as ${sharedSkillList.join(', ')}.`);
  if (!pieces.length) pieces.push('The descriptions show overlapping language and concepts across subjects.');
  return pieces.join(' ');
}

function sharedTerms(a, b) {
  const stop = new Set(['using','major','through','about','their','across','different','clear','valid','relevant','sufficient']);
  return intersect(uniqueTokens(a), uniqueTokens(b)).filter(token => token.length > 3 && !stop.has(token)).slice(0, 10);
}

function uniqueTokens(item) {
  return [...new Set([...(item.tags || []), ...(item.skills || []), ...tokenize(item.description), ...tokenize(item.course), ...(item.cluster ? tokenize(item.cluster) : [])])];
}

function renderResults() {
  const filtered = filterResults();
  el.resultsSubhead.textContent = filtered.length ? `${filtered.length} connected standards found` : 'No connections match the current filters.';
  el.resultsList.innerHTML = '';
  if (!filtered.length) {
    const none = document.createElement('div'); none.className = 'card inset-card result-card';
    none.innerHTML = '<p class="result-description">No connections match your current filters. Try removing one or more filters.</p>';
    el.resultsList.appendChild(none); return;
  }
  filtered.forEach(item => {
    const node = el.resultCardTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.resultId = item.id;
    node.querySelector('.result-meta').textContent = `${item.subject} · ${item.gradeBand} · ${item.course}`;
    node.querySelector('.result-title').textContent = item.code;
    node.querySelector('.result-description').textContent = item.description;
    node.querySelector('.result-explanation').textContent = item.explanation;
    const pill = node.querySelector('.strength-pill'); pill.textContent = item.strength; pill.classList.add(`strength-${item.strength}`);
    const tagRow = node.querySelector('.tag-row');
    (item.sharedTerms || []).forEach(text => { const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = text; tagRow.appendChild(tag); });
    if (state.activeCardId === item.id) node.classList.add('active-card');
    node.tabIndex = 0;
    node.addEventListener('mouseenter', () => highlightNode(item.id));
    node.addEventListener('mouseleave', clearHighlight);
    node.addEventListener('click', () => { state.activeCardId = item.id; showNodeDetails(item); highlightNode(item.id); renderResults(); });
    node.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); state.activeCardId = item.id; showNodeDetails(item); highlightNode(item.id); renderResults();
      }
    });
    el.resultsList.appendChild(node);
  });
}

function filterResults() {
  const filters = { subject: el.filterSubject.value, gradeBand: el.filterGradeBand.value, course: el.filterCourse.value, strength: el.filterStrength.value, keyword: el.filterKeyword.value.trim().toLowerCase() };
  return state.results.filter(item => (!filters.subject || item.subject === filters.subject) && (!filters.gradeBand || item.gradeBand === filters.gradeBand) && (!filters.course || item.course === filters.course) && (!filters.strength || item.strength === filters.strength) && (!filters.keyword || [item.code, item.description, item.explanation, item.subject, item.course, item.cluster, ...(item.tags || []), ...(item.skills || [])].filter(Boolean).join(' ').toLowerCase().includes(filters.keyword)));
}

function renderGraph() {
  const filteredResults = filterResults();
  const container = el.graphContainer; container.innerHTML = '';
  if ((!state.selectedStandards.length && !state.manualTargets.length) || !filteredResults.length) {
    if (!filteredResults.length && (state.selectedStandards.length || state.manualTargets.length)) el.emptyState.style.display = 'grid';
    return;
  }
  el.emptyState.style.display = 'none';
  const width = container.clientWidth || 900, height = container.clientHeight || 760, cx = width / 2, cy = height / 2;
  const anchors = [...state.selectedStandards, ...state.manualTargets];
  const rootNode = {
    id: 'root', type: 'root', label: anchors.length === 1 ? anchors[0].code : 'Selected Unit', radius: 38,
    data: { code: anchors.length === 1 ? anchors[0].code : 'Selected Unit', subject: 'Selected unit', course: anchors.map(a => a.course).filter(Boolean).join(' · '), gradeBand: [...new Set(anchors.map(a => a.gradeBand).filter(Boolean))].join(', '), description: anchors.map(a => `${a.code}: ${a.description}`).join(' ') || 'Selected standards' },
    ring: 0, fx: cx, fy: cy
  };
  const nodes = [rootNode], links = [];
  const grouped = groupBy(filteredResults, item => item.subject);
  [...grouped.entries()].forEach(([subject, items], subjectIndex) => {
    const disciplineId = `discipline-${sanitizeId(subject)}`;
    nodes.push({ id: disciplineId, type: 'discipline', label: subject, radius: 32, ring: 1, orbitIndex: subjectIndex, data: { subject, description: `${items.length} matching standards in ${subject}` } });
    links.push({ source: 'root', target: disciplineId, strength: 'strong', score: 1 });
    const courseGroups = groupBy(items, item => item.subjectKey === 'ctae' && item.cluster ? item.cluster : item.course);
    [...courseGroups.entries()].forEach(([courseLabel, courseItems], courseIndex) => {
      const courseId = `course-${sanitizeId(subject)}-${sanitizeId(courseLabel)}`;
      nodes.push({ id: courseId, type: 'course', label: courseLabel, radius: 20, ring: 2, orbitIndex: (subjectIndex * 7) + courseIndex, data: { subject, course: courseLabel, description: `${courseItems.length} linked standards` } });
      links.push({ source: disciplineId, target: courseId, strength: 'medium', score: 0.7 });
      courseItems.forEach((item, itemIndex) => {
        nodes.push({ id: item.id, type: 'standard', label: item.code, radius: item.strength === 'strong' ? 15 : item.strength === 'medium' ? 13 : 11, ring: 3, orbitIndex: (courseIndex * 17) + itemIndex, data: item, strength: item.strength });
        links.push({ source: courseId, target: item.id, strength: item.strength, score: item.score, explanation: item.explanation });
      });
    });
  });
  state.graphNodes = nodes; state.graphLinks = links; buildAdjacency(nodes, links);
  const svg = d3.select(container).append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('width', width).attr('height', height).attr('role', 'img').attr('aria-label', 'Radial standards relationship graph');
  const defs = svg.append('defs');
  const glow = defs.append('filter').attr('id', 'soft-glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
  glow.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
  const merge = glow.append('feMerge'); merge.append('feMergeNode').attr('in', 'blur'); merge.append('feMergeNode').attr('in', 'SourceGraphic');
  const zoomLayer = svg.append('g').attr('class', 'zoom-layer');
  const ringGroup = zoomLayer.append('g').attr('class', 'rings');
  [132, 236, 334].forEach(radius => ringGroup.append('circle').attr('cx', cx).attr('cy', cy).attr('r', radius).attr('fill', 'none').attr('stroke', 'rgba(124,183,255,0.06)').attr('stroke-dasharray', '4 10'));
  ringGroup.append('circle').attr('cx', cx).attr('cy', cy).attr('r', 54).attr('fill', 'rgba(124,183,255,0.08)').attr('filter', 'url(#soft-glow)');
  const linkGroup = zoomLayer.append('g').attr('class', 'link-group');
  const path = linkGroup.selectAll('path').data(links).join('path').attr('fill', 'none').attr('stroke-linecap', 'round').attr('stroke', d => strengthColor(d.strength, 0.56)).attr('stroke-width', d => d.strength === 'strong' ? 2.4 : d.strength === 'medium' ? 1.6 : 1.1).attr('opacity', 0.88);
  const nodeGroup = zoomLayer.append('g').selectAll('g').data(nodes).join('g').attr('tabindex', 0).attr('role', 'button').attr('aria-label', d => `${d.type}: ${d.label}`).on('click', (_, d) => handleNodeClick(d)).on('keydown', (event, d) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); handleNodeClick(d); } }).on('mouseenter', (_, d) => highlightNode(d.id)).on('mouseleave', clearHighlight).on('mousemove', (event, d) => showTooltip(event, d));
  nodeGroup.append('circle').attr('r', d => d.radius).attr('fill', d => nodeColor(d)).attr('stroke', 'rgba(255,255,255,0.16)').attr('stroke-width', d => d.type === 'discipline' ? 1.8 : 1.2).attr('filter', 'url(#soft-glow)');
  nodeGroup.append('text').attr('class', d => `node-label ${d.type === 'standard' ? 'node-label-faded' : ''}`).attr('text-anchor', 'middle').attr('dy', d => d.type === 'standard' ? -(d.radius + 6) : 4).text(d => labelForNode(d));
  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(linkDistance).strength(d => d.target.type === 'standard' ? 0.32 : 0.54))
    .force('charge', d3.forceManyBody().strength(d => d.type === 'root' ? -80 : d.type === 'discipline' ? -260 : -160))
    .force('collision', d3.forceCollide().radius(d => d.radius + (d.type === 'standard' ? 8 : 14)))
    .force('x', d3.forceX(d => ringTargetX(d, cx)).strength(d => d.type === 'root' ? 1 : 0.12))
    .force('y', d3.forceY(d => ringTargetY(d, cy)).strength(d => d.type === 'root' ? 1 : 0.12))
    .alpha(1).alphaDecay(0.025).on('tick', ticked);
  state.graph = simulation;
  const zoom = d3.zoom().scaleExtent([0.7, 2.2]).on('zoom', event => zoomLayer.attr('transform', event.transform));
  svg.call(zoom); state.graphZoom = zoom;
  function ticked() { path.attr('d', d => linkPath(d.source, d.target)); nodeGroup.attr('transform', d => `translate(${d.x}, ${d.y})`); }
}

function linkPath(source, target) {
  const dx = target.x - source.x, dy = target.y - source.y, dr = Math.sqrt((dx * dx) + (dy * dy)) * 1.08;
  return `M${source.x},${source.y}A${dr},${dr} 0 0,1 ${target.x},${target.y}`;
}

function labelForNode(node) {
  if (node.type === 'root') return truncateLabel(node.label, 18);
  if (node.type === 'discipline') return truncateLabel(node.label, 18);
  if (node.type === 'course') return truncateLabel(node.label, 20);
  return truncateLabel(node.label, 12);
}

function linkDistance(link) {
  if (link.source.id === 'root') return 156;
  if (String(link.source.id).startsWith('discipline-')) return 112;
  return 88;
}

function ringTargetX(node, cx) {
  if (node.type === 'root') return cx;
  const angle = stableAngle(node.id, node.orbitIndex || 0);
  return cx + Math.cos(angle) * ringRadius(node);
}

function ringTargetY(node, cy) {
  if (node.type === 'root') return cy;
  const angle = stableAngle(node.id, node.orbitIndex || 0);
  return cy + Math.sin(angle) * ringRadius(node);
}

function ringRadius(node) {
  if (node.ring === 1) return 156;
  if (node.ring === 2) return 246;
  return 336;
}

function nodeColor(node) {
  if (node.type === 'root') return '#7cb7ff';
  if (node.type === 'discipline') return '#53e3c2';
  if (node.type === 'course') return '#8a6bff';
  return strengthColor(node.strength || node.data?.strength || 'weak', 0.94);
}

function strengthColor(strength, opacity = 1) {
  if (strength === 'strong') return `rgba(74,222,128,${opacity})`;
  if (strength === 'medium') return `rgba(251,191,36,${opacity})`;
  return `rgba(251,113,133,${opacity})`;
}

function buildAdjacency(nodes, links) {
  state.adjacency = new Map(nodes.map(node => [node.id, new Set([node.id])]));
  links.forEach(link => {
    const s = typeof link.source === 'object' ? link.source.id : link.source;
    const t = typeof link.target === 'object' ? link.target.id : link.target;
    state.adjacency.get(s)?.add(t);
    state.adjacency.get(t)?.add(s);
  });
}

function handleNodeClick(node) {
  if (node.type === 'standard' || node.type === 'root') {
    state.activeCardId = node.id === 'root' ? null : node.id;
    showNodeDetails(node.data || node);
    highlightNode(node.id);
    renderResults();
    return;
  }
  if (node.type === 'discipline') el.filterSubject.value = node.label;
  if (node.type === 'course') el.filterCourse.value = node.label;
  renderResults(); renderGraph();
}

function highlightNode(nodeId) {
  const activeSet = state.adjacency.get(nodeId) || new Set([nodeId]);
  d3.select(el.graphContainer).selectAll('.link-group path').attr('opacity', d => {
    const s = typeof d.source === 'object' ? d.source.id : d.source;
    const t = typeof d.target === 'object' ? d.target.id : d.target;
    return activeSet.has(s) && activeSet.has(t) ? 0.95 : 0.12;
  });
  d3.select(el.graphContainer).selectAll('g[role="button"]').attr('opacity', d => activeSet.has(d.id) ? 1 : 0.22);
  d3.select(el.graphContainer).selectAll('.node-label').attr('opacity', function(_, i, nodes){ const datum = d3.select(nodes[i].parentNode).datum(); return activeSet.has(datum.id) ? 1 : 0.18; });
}

function clearHighlight() {
  d3.select(el.graphContainer).selectAll('.link-group path').attr('opacity', 0.88);
  d3.select(el.graphContainer).selectAll('g[role="button"]').attr('opacity', 1);
  d3.select(el.graphContainer).selectAll('.node-label').attr('opacity', 1);
}

function showNodeDetails(item) {
  el.dialogTitle.textContent = item.code || item.label || 'Connection details';
  el.dialogBody.innerHTML = `<p><strong>Subject:</strong> ${escapeHtml(item.subject || 'Selected unit')}</p><p><strong>Grade band:</strong> ${escapeHtml(item.gradeBand || 'Unspecified')}</p><p><strong>Course / cluster:</strong> ${escapeHtml(item.course || item.cluster || 'Unit')}</p>${item.strength ? `<p><strong>Connection strength:</strong> ${escapeHtml(item.strength)}</p>` : ''}<p><strong>Description:</strong> ${escapeHtml(item.description || '')}</p>${item.explanation ? `<p><strong>Why it connects:</strong> ${escapeHtml(item.explanation)}</p>` : ''}${(item.tags || []).length ? `<p><strong>Tags:</strong> ${escapeHtml((item.tags || []).join(', '))}</p>` : ''}<p><strong>Course source:</strong> ${escapeHtml(item.courseSource || 'manual')}</p>`;
  if (typeof el.nodeDialog.showModal === 'function') el.nodeDialog.showModal();
}

function showTooltip(event, node) {
  if (!state.tooltip) {
    state.tooltip = document.createElement('div');
    state.tooltip.className = 'graph-tooltip';
    document.body.appendChild(state.tooltip);
  }
  const description = node.data?.description || node.label;
  state.tooltip.innerHTML = `<strong>${escapeHtml(node.label)}</strong><div>${escapeHtml(truncateLabel(description, 150))}</div>`;
  state.tooltip.style.left = `${event.clientX + 14}px`;
  state.tooltip.style.top = `${event.clientY + 14}px`;
}

function hideTooltip() {
  if (state.tooltip) state.tooltip.remove();
  state.tooltip = null;
}
document.addEventListener('mouseleave', hideTooltip);

function saveLessonMap() {
  const payload = { savedAt: new Date().toISOString(), selectedStandards: state.selectedStandards, manualTargets: state.manualTargets, filters: { subject: el.subjectSelect.value, gradeBand: el.gradeBandSelect.value, course: el.courseSelect.value, keyword: el.keywordInput.value.trim() }, results: state.results.slice(0, 40) };
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.savedMaps) || '[]');
  existing.unshift(payload);
  localStorage.setItem(STORAGE_KEYS.savedMaps, JSON.stringify(existing.slice(0, 20)));
  setStatus('Lesson map saved locally on this device');
}

function resetAll() {
  el.searchForm.reset();
  ['filterSubject','filterGradeBand','filterCourse','filterStrength','filterKeyword'].forEach(id => el[id].value = '');
  state.selectedStandards = []; state.manualTargets = []; state.results = []; state.activeCardId = null;
  renderSelectedChips(); refreshCourseOptions(); refreshPickerResults();
  el.resultsList.innerHTML = ''; el.resultsSubhead.textContent = 'Connections will appear here.'; el.graphContainer.innerHTML = ''; el.emptyState.style.display = 'grid';
  saveDraft(); updateGraphFooter(); setStatus('Reset complete');
}

function fillSelect(selectEl, options, placeholder = 'All') {
  const current = selectEl.value;
  selectEl.innerHTML = '';
  const first = document.createElement('option'); first.value = ''; first.textContent = placeholder; selectEl.appendChild(first);
  options.forEach(option => { const opt = document.createElement('option'); opt.value = option.value; opt.textContent = option.label; selectEl.appendChild(opt); });
  if ([...selectEl.options].some(opt => opt.value === current)) selectEl.value = current;
}

function updateGraphFooter() {
  if (!el.graphLoadLabel) return;
  const loaded = state.loadLog.filter(item => item.ok).reduce((sum, item) => sum + item.count, 0);
  const okCount = state.loadLog.filter(item => item.ok).length;
  const missing = state.diagnostics.missingCourseAssignments.length;
  if (!state.loadLog.length) {
    el.graphLoadLabel.textContent = 'Demo + local JSON data ready';
  } else {
    el.graphLoadLabel.textContent = `${okCount} JSON file${okCount === 1 ? '' : 's'} loaded · ${loaded.toLocaleString()} standards processed${missing ? ` · ${missing} missing course links` : ''}`;
  }
}

function publishDiagnostics() {
  window.__standardsWebDebug = {
    diagnostics: state.diagnostics,
    courseCatalog: state.courseCatalog,
    standards: state.standards
  };
  console.groupCollapsed('[Standards Web] Course assignment diagnostics');
  console.log('Course catalog loaded:', state.courseCatalog.raw.length);
  console.log('Inferred course assignments:', state.diagnostics.inferredCourseAssignments.length);
  if (state.diagnostics.inferredCourseAssignments.length) console.table(state.diagnostics.inferredCourseAssignments.slice(0, 50));
  console.log('Missing course assignments:', state.diagnostics.missingCourseAssignments.length);
  if (state.diagnostics.missingCourseAssignments.length) console.table(state.diagnostics.missingCourseAssignments.slice(0, 100));
  console.groupEnd();
}

function setStatus(message) { el.statusBadge.textContent = message; }

function tokenize(text) {
  const stopWords = new Set(['the','and','for','with','that','from','into','using','use','this','will','their','about','through','major','while','such','have','been','also','more','than','across','which','other','these','those','they','them','your','under','within','where','when']);
  return String(text || '').toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter(Boolean).filter(word => word.length > 2 && !stopWords.has(word));
}

function normalizeCourseTitle(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function normalizeForLookup(value) {
  return normalizeCourseTitle(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function buildCourseAliases(record) {
  const aliases = new Set();
  const normalized = normalizeForLookup(record.course);
  if (normalized) aliases.add(normalized);
  buildAliasCandidates(record.course).forEach(alias => aliases.add(alias));
  return [...aliases];
}

function buildAliasCandidates(text) {
  const normalized = normalizeForLookup(text);
  const tokens = normalized.split(' ').filter(Boolean);
  const aliases = new Set([normalized]);
  if (tokens.length > 1) aliases.add(tokens.join(' '));
  if (/algebra/.test(normalized)) aliases.add('algebra');
  if (/geometry/.test(normalized)) aliases.add('geometry');
  if (/advanced algebra/.test(normalized)) aliases.add('advanced algebra');
  if (/statistics|statistical/.test(normalized)) aliases.add('statistics');
  if (/precalculus/.test(normalized)) aliases.add('precalculus');
  if (/calculus/.test(normalized)) aliases.add('calculus');
  if (/biology/.test(normalized)) aliases.add('biology');
  if (/chemistry/.test(normalized)) aliases.add('chemistry');
  if (/physical science/.test(normalized)) aliases.add('physical science');
  if (/environmental science/.test(normalized)) aliases.add('environmental science');
  if (/astronomy/.test(normalized)) aliases.add('astronomy');
  if (/forensic science/.test(normalized)) aliases.add('forensic science');
  if (/microbiology/.test(normalized)) aliases.add('microbiology');
  if (/oceanography/.test(normalized)) aliases.add('oceanography');
  if (/zoology/.test(normalized)) aliases.add('zoology');
  return [...aliases];
}

function firstNonEmpty(...values) {
  for (const value of values) {
    if (Array.isArray(value) && value.length) return value[0];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return '';
}

function truncateForLog(text, max = 160) {
  const value = String(text || '');
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

function jaccard(a, b) {
  const setA = new Set(a), setB = new Set(b);
  const intersection = [...setA].filter(item => setB.has(item)).length;
  const union = new Set([...setA, ...setB]).size;
  return union ? intersection / union : 0;
}

function intersect(a, b) {
  const setB = new Set(b);
  return [...new Set(a)].filter(item => setB.has(item));
}

function dedupeBy(items, keyFn) {
  const map = new Map();
  items.forEach(item => map.set(keyFn(item), item));
  return [...map.values()];
}

function groupBy(items, keyFn) {
  const map = new Map();
  items.forEach(item => { const key = keyFn(item); if (!map.has(key)) map.set(key, []); map.get(key).push(item); });
  return map;
}

function truncateLabel(value, max = 20) {
  const str = String(value || '');
  return str.length > max ? `${str.slice(0, max - 1)}…` : str;
}

function sanitizeId(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function stableAngle(seed, offset = 0) {
  let hash = 0; const str = `${seed}-${offset}`;
  for (let i = 0; i < str.length; i += 1) { hash = ((hash << 5) - hash) + str.charCodeAt(i); hash |= 0; }
  return (Math.abs(hash % 360) * Math.PI) / 180;
}

function debounce(fn, wait = 120) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), wait); };
}

function escapeHtml(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
