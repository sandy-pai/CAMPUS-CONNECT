// Campus Connect Application JavaScript
// =====================================
// NOTE: All core functionality is encapsulated in functions below.
// The script executes initializeApp() immediately because the script tag
// is placed at the end of <body>, ensuring all DOM elements are present.

//--------------------------------------
// 1. DATA
//--------------------------------------
const blocksData = {"blocks":[{"id":"civil","name":"CV RAMAN","image":"images/cvraman.jpeg","description":"Advanced electrical engineering facility with power systems labs and electronics workshops.","floors":{"ground":[{"type":"lab","room":"LAB1","name":"SKILL DEVELOPMENT LAB-ISE DEPT","contact":"ext. 101"},{"type":"SHOP","room":"","name":"XEROX SHOP","contact":"ext. 102"},{"type":"office","room":"SR-01","name":"DR.NARASIMHA K BAILKERI","contact":"DEAN-STUDENT WELFARE PROFESSOR"},{"type":"classroom","room":"CLASSROOMS","name":"LC-01,LC-02,LC-04","contact":"Capacity: 70 students"}],"first":[{"type":"office","room":"CE-101","name":"Prof. Anita Sharma","contact":"anita.sharma@college.edu"},{"type":"office","room":"CE-102","name":"Prof. Suresh Patel","contact":"suresh.patel@college.edu"},{"type":"classroom","room":"CE-103","name":"Classroom CE-A","contact":"Capacity: 40 students"},{"type":"office","room":"CE-104","name":"Prof. Maya Singh","contact":"maya.singh@college.edu"}],"second":[{"type":"office","room":"CE-201","name":"Prof. Vikram Gupta","contact":"vikram.gupta@college.edu"},{"type":"lab","room":"CE-202","name":"Surveying Lab","contact":"ext. 201"},{"type":"office","room":"CE-203","name":"Prof. Priya Mehta","contact":"priya.mehta@college.edu"},{"type":"classroom","room":"CE-204","name":"Classroom CE-B","contact":"Capacity: 45 students"}],"third":[{"type":"office","room":"CE-301","name":"Prof. Arjun Reddy","contact":"arjun.reddy@college.edu"},{"type":"conference","room":"CE-302","name":"Conference Room","contact":"Booking: ext. 301"},{"type":"office","room":"CE-303","name":"Prof. Kavita Joshi","contact":"kavita.joshi@college.edu"},{"type":"office","room":"CE-304","name":"Prof. Rohit Verma","contact":"rohit.verma@college.edu"}]}} ,{"id":"mechanical","name":"RAMANUJAN ","image":"images/ramanujan.jpg","description":"One of the oldest building in the campus, contains the library","floors":{"ground":[{"type":"lab","room":"ME-G01","name":"Manufacturing Lab","contact":"ext. 111"},{"type":"lab","room":"ME-G02","name":"Thermodynamics Lab","contact":"ext. 112"},{"type":"office","room":"ME-G03","name":"HOD Office - Dr. Sanjay Agarwal","contact":"sanjay.agarwal@college.edu"},{"type":"classroom","room":"ME-G04","name":"Lecture Hall ME-1","contact":"Capacity: 70 students"}],"first":[{"type":"office","room":"ME-101","name":"Prof. Deepak Sharma","contact":"deepak.sharma@college.edu"},{"type":"office","room":"ME-102","name":"Prof. Neha Bansal","contact":"neha.bansal@college.edu"},{"type":"classroom","room":"ME-103","name":"Classroom ME-A","contact":"Capacity: 50 students"},{"type":"office","room":"ME-104","name":"Prof. Amit Kumar","contact":"amit.kumar@college.edu"}],"second":[{"type":"office","room":"ME-201","name":"Prof. Ravi Singh","contact":"ravi.singh@college.edu"},{"type":"lab","room":"ME-202","name":"CAD Lab","contact":"ext. 211"},{"type":"office","room":"ME-203","name":"Prof. Sunita Rao","contact":"sunita.rao@college.edu"},{"type":"classroom","room":"ME-204","name":"Classroom ME-B","contact":"Capacity: 40 students"}],"third":[{"type":"office","room":"ME-301","name":"Prof. Manoj Tiwari","contact":"manoj.tiwari@college.edu"},{"type":"conference","room":"ME-302","name":"Faculty Meeting Room","contact":"Booking: ext. 311"},{"type":"office","room":"ME-303","name":"Prof. Pooja Gupta","contact":"pooja.gupta@college.edu"},{"type":"office","room":"ME-304","name":"Prof. Rajesh Yadav","contact":"rajesh.yadav@college.edu"}]}} ,{"id":"computer","name":"SIR M VISHVESVARAYA","image":"images/visvesvaraya.jpeg","description":"State-of-the-art facility for Computer Science with modern labs and technology infrastructure.","floors":{"ground":[{"type":"lab","room":"CS-G01","name":"Programming Lab 1","contact":"ext. 121"},{"type":"lab","room":"CS-G02","name":"Network Lab","contact":"ext. 122"},{"type":"office","room":"CS-G03","name":"HOD Office - Dr. Priya Jain","contact":"priya.jain@college.edu"},{"type":"classroom","room":"CS-G04","name":"Lecture Hall CS-1","contact":"Capacity: 80 students"}],"first":[{"type":"office","room":"CS-101","name":"Prof. Rahul Mishra","contact":"rahul.mishra@college.edu"},{"type":"office","room":"CS-102","name":"Prof. Swati Dubey","contact":"swati.dubey@college.edu"},{"type":"classroom","room":"CS-103","name":"Classroom CS-A","contact":"Capacity: 45 students"},{"type":"office","room":"CS-104","name":"Prof. Vivek Agrawal","contact":"vivek.agrawal@college.edu"}],"second":[{"type":"office","room":"CS-201","name":"Prof. Anjali Verma","contact":"anjali.verma@college.edu"},{"type":"lab","room":"CS-202","name":"Programming Lab 2","contact":"ext. 221"},{"type":"office","room":"CS-203","name":"Prof. Kiran Bhatt","contact":"kiran.bhatt@college.edu"},{"type":"classroom","room":"CS-204","name":"Classroom CS-B","contact":"Capacity: 50 students"}],"third":[{"type":"office","room":"CS-301","name":"Prof. Sandeep Malhotra","contact":"sandeep.malhotra@college.edu"},{"type":"conference","room":"CS-302","name":"Seminar Hall","contact":"Booking: ext. 321"},{"type":"office","room":"CS-303","name":"Prof. Meera Saxena","contact":"meera.saxena@college.edu"},{"type":"office","room":"CS-304","name":"Prof. Nitin Khanna","contact":"nitin.khanna@college.edu"}]}} ,{"id":"electrical","name":"APJ ABDUL KALAM","image":"images/apj.jpeg","description":"Main administrative building housing principal's office, admissions, and student services.","floors":{"ground":[{"type":"lab","room":"EE-G01","name":"Power Systems Lab","contact":"ext. 131"},{"type":"lab","room":"EE-G02","name":"Electronics Lab","contact":"ext. 132"},{"type":"office","room":"EE-G03","name":"HOD Office - Dr. Ashok Pandey","contact":"ashok.pandey@college.edu"},{"type":"classroom","room":"EE-G04","name":"Lecture Hall EE-1","contact":"Capacity: 65 students"}],"first":[{"type":"office","room":"EE-101","name":"Prof. Lakshmi Iyer","contact":"lakshmi.iyer@college.edu"},{"type":"office","room":"EE-102","name":"Prof. Ramesh Pillai","contact":"ramesh.pillai@college.edu"},{"type":"classroom","room":"EE-103","name":"Classroom EE-A","contact":"Capacity: 45 students"},{"type":"office","room":"EE-104","name":"Prof. Geeta Nair","contact":"geeta.nair@college.edu"}],"second":[{"type":"office","room":"EE-201","name":"Prof. Sunil Menon","contact":"sunil.menon@college.edu"},{"type":"lab","room":"EE-202","name":"Control Systems Lab","contact":"ext. 231"},{"type":"office","room":"EE-203","name":"Prof. Divya Srinivasan","contact":"divya.srinivasan@college.edu"},{"type":"classroom","room":"EE-204","name":"Classroom EE-B","contact":"Capacity: 40 students"}],"third":[{"type":"office","room":"EE-301","name":"Prof. Arun Krishnan","contact":"arun.krishnan@college.edu"},{"type":"conference","room":"EE-302","name":"Department Meeting Room","contact":"Booking: ext. 331"},{"type":"office","room":"EE-303","name":"Prof. Radha Subramanian","contact":"radha.subramanian@college.edu"},{"type":"office","room":"EE-304","name":"Prof. Vijay Raghavan","contact":"vijay.raghavan@college.edu"}]}} ,{"id":"admin","name":"ATAL INCUBATION CENTER","image":"images/incubation.jpeg","description":"","floors":{"ground":[{"type":"office","room":"AD-G01","name":"Principal's Office","contact":"principal@college.edu"},{"type":"office","room":"AD-G02","name":"Vice Principal's Office","contact":"vp@college.edu"},{"type":"office","room":"AD-G03","name":"Admissions Office","contact":"admissions@college.edu"},{"type":"office","room":"AD-G04","name":"Student Services","contact":"student.services@college.edu"}],"first":[{"type":"office","room":"AD-101","name":"Registrar's Office","contact":"registrar@college.edu"},{"type":"office","room":"AD-102","name":"Examination Office","contact":"exams@college.edu"},{"type":"office","room":"AD-103","name":"Accounts Office","contact":"accounts@college.edu"},{"type":"office","room":"AD-104","name":"HR Department","contact":"hr@college.edu"}],"second":[{"type":"office","room":"AD-201","name":"Training & Placement","contact":"placement@college.edu"},{"type":"conference","room":"AD-202","name":"Board Room","contact":"Booking: ext. 241"},{"type":"office","room":"AD-203","name":"Library Admin","contact":"library@college.edu"},{"type":"office","room":"AD-204","name":"IT Support","contact":"it.support@college.edu"}],"third":[{"type":"conference","room":"AD-301","name":"Conference Hall","contact":"Booking: ext. 341"},{"type":"office","room":"AD-302","name":"Research Office","contact":"research@college.edu"},{"type":"office","room":"AD-303","name":"International Relations","contact":"international@college.edu"},{"type":"office","room":"AD-304","name":"Alumni Relations","contact":"alumni@college.edu"}]}} ]};

//--------------------------------------
// 2. STATE VARIABLES
//--------------------------------------
let currentBlock = null;
let allRooms = [];

//--------------------------------------
// 3. INITIALISATION (RUNS IMMEDIATELY)
//--------------------------------------
initializeApp();

//--------------------------------------
// 4. CORE FUNCTIONS
//--------------------------------------
function initializeApp() {
  populateBlocks();
  buildSearchIndex();
  setupEventListeners();
}

//---------------- populateBlocks() ------------------
function populateBlocks() {
  const blocksGrid = document.getElementById('blocks-grid');
  blocksGrid.innerHTML = '';

  blocksData.blocks.forEach(block => {
    const card = document.createElement('div');
    card.className = 'block-card';
    card.innerHTML = `
      <img src="${block.image}" alt="${block.name}">
      <div class="block-card-content">
        <h4>${block.name}</h4>
        <p>${block.description}</p>
      </div>
    `;
    card.addEventListener('click', () => navigateToBlock(block.id));
    blocksGrid.appendChild(card);
  });
}

//---------------- buildSearchIndex() ----------------
function buildSearchIndex() {
  allRooms = [];
  blocksData.blocks.forEach(block => {
    Object.keys(block.floors).forEach(floorKey => {
      block.floors[floorKey].forEach(room => {
        allRooms.push({ ...room, blockId: block.id, blockName: block.name, floor: floorKey });
      });
    });
  });
}

//---------------- setupEventListeners() -------------
function setupEventListeners() {
  const searchBtn   = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  const backBtn     = document.getElementById('back-btn');

  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keyup', e => { if (e.key === 'Enter') handleSearch(); });
  backBtn.addEventListener('click', navigateToHome);

  document.querySelectorAll('.floor-btn').forEach(btn => {
    btn.addEventListener('click', () => selectFloor(btn.dataset.floor));
  });

  // Close search results when clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) hideSearchResults();
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#home') navigateToHome();
    });
  });
}

//--------------------------------------
// 5. SEARCH HANDLERS
//--------------------------------------
function handleSearch() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (query.length < 2) { hideSearchResults(); return; }

  const results = allRooms.filter(room => {
    return room.name.toLowerCase().includes(query) ||
           room.room.toLowerCase().includes(query) ||
           room.blockName.toLowerCase().includes(query);
  });
  displaySearchResults(results);
}

function displaySearchResults(results) {
  const container = document.getElementById('search-results');
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<div class="search-result-item">No results found</div>';
  } else {
    results.forEach(item => {
      const div = document.createElement('div');
      div.className = 'search-result-item';
      div.innerHTML = `
        <div class="result-room">${item.room}</div>
        <div class="result-name">${item.name}</div>
        <div class="result-contact">${item.contact}</div>
        <div class="result-block">${item.blockName} - ${getFloorName(item.floor)}</div>
      `;
      div.addEventListener('click', () => {
        navigateToBlock(item.blockId);
        setTimeout(() => selectFloor(item.floor), 50);
        hideSearchResults();
        document.getElementById('search-input').value = '';
      });
      container.appendChild(div);
    });
  }
  container.classList.remove('hidden');
}

function hideSearchResults() {
  document.getElementById('search-results').classList.add('hidden');
}

//--------------------------------------
// 6. NAVIGATION & DISPLAY
//--------------------------------------
function navigateToBlock(blockId) {
  currentBlock = blocksData.blocks.find(b => b.id === blockId);
  if (!currentBlock) return;

  // Update UI content
  document.getElementById('block-image').src = currentBlock.image;
  document.getElementById('block-image').alt = currentBlock.name;
  document.getElementById('block-name').textContent = currentBlock.name;
  document.getElementById('block-description').textContent = currentBlock.description;
  document.getElementById('floor-title').textContent = 'Select a floor to view rooms';
  document.getElementById('rooms-grid').innerHTML = '';
  document.querySelectorAll('.floor-btn').forEach(btn => btn.classList.remove('active'));

  // Show/Hide pages
  document.getElementById('home-page').classList.add('hidden');
  document.getElementById('block-page').classList.remove('hidden');
  window.scrollTo(0,0);
}

function navigateToHome() {
  document.getElementById('home-page').classList.remove('hidden');
  document.getElementById('block-page').classList.add('hidden');
  currentBlock = null;
  hideSearchResults();
  window.scrollTo(0,0);
}

//--------------------------------------
// 7. FLOOR & ROOMS
//--------------------------------------
function selectFloor(floorKey) {
  if (!currentBlock) return;
  document.querySelectorAll('.floor-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.floor === floorKey));
  document.getElementById('floor-title').textContent = `${getFloorName(floorKey)} - ${currentBlock.name}`;
  const rooms = currentBlock.floors[floorKey] || [];
  renderRooms(rooms);
}

function renderRooms(rooms) {
  const grid = document.getElementById('rooms-grid');
  grid.innerHTML = rooms.length ? '' : '<div class="no-rooms">No rooms available on this floor</div>';
  rooms.forEach(room => {
    const div = document.createElement('div');
    div.className = 'room-card';
    div.innerHTML = `
      <div class="room-header">
        <span class="room-number">${room.room}</span>
        <span class="room-type ${room.type}">${room.type}</span>
      </div>
      <div class="room-name">${room.name}</div>
      <div class="room-contact">${room.contact}</div>
    `;
    grid.appendChild(div);
  });
}

//--------------------------------------
// 8. UTILITIES
//--------------------------------------
function getFloorName(key){return ({ground:'Ground Floor',first:'First Floor',second:'Second Floor',third:'Third Floor'})[key]||key;}

// For manual debugging in console
autoscroll = () => window.scrollTo({top:0,behavior:'smooth'});
