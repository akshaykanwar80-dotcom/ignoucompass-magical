const portalData = [
  {
    title: "IGNOU Home",
    category: "Core",
    description: "The main university website — the root source for every other official page.",
    url: "https://www.ignou.ac.in/"
  },
  {
    title: "Student Zone",
    category: "Core",
    description: "IGNOU's student information hub for academic services, downloads, and notices.",
    url: "https://www.ignou.ac.in/studentZone/index"
  },
  {
    title: "Samarth Student Portal",
    category: "Login",
    description: "Primary student login portal for profile access and academic workflows.",
    url: "https://ignou.samarth.edu.in/"
  },
  {
    title: "Fresh Admission",
    category: "Admission",
    description: "Official admission portal for applying to IGNOU programmes.",
    url: "https://ignouadmission.samarth.edu.in/"
  },
  {
    title: "Re-Registration",
    category: "Registration",
    description: "Official re-registration portal for continuing students.",
    url: "https://onlinerr.ignou.ac.in/"
  },
  {
    title: "Online Programmes",
    category: "Online",
    description: "Portal for IGNOU online programmes, support, and learner services.",
    url: "https://iop.ignouonline.ac.in/"
  },
  {
    title: "Exam Form",
    category: "Exams",
    description: "Submit or manage term-end examination forms.",
    url: "https://exam.ignou.ac.in/"
  },
  {
    title: "Term-End Result",
    category: "Results",
    description: "Check term-end exam results through the official result service.",
    url: "https://termendresult.ignou.ac.in/"
  },
  {
    title: "Grade Card",
    category: "Results",
    description: "Track assignment, theory, and practical completion status.",
    url: "https://gradecard.ignou.ac.in/gradecard/"
  },
  {
    title: "Assignments Download",
    category: "Downloads",
    description: "Official assignment question papers across sessions and programmes.",
    url: "https://www.ignou.ac.in/studentService/download/assignments"
  },
  {
    title: "Previous Question Papers",
    category: "Downloads",
    description: "Previous term-end question papers for practice and revision.",
    url: "https://webservices.ignou.ac.in/Pre-Question/"
  },
  {
    title: "eGyanKosh",
    category: "Books",
    description: "Digital repository for IGNOU learning material, blocks, and programme resources.",
    url: "https://egyankosh.ac.in/"
  },
  {
    title: "Digital Library",
    category: "Library",
    description: "IGNOU library access and scholarly resources.",
    url: "https://library.ignou.ac.in/"
  },
  {
    title: "Regional Centres",
    category: "Support",
    description: "Find your regional centre for counselling, practicals, and local notices.",
    url: "https://www.ignou.ac.in/regional-centers"
  },
  {
    title: "Student Grievance (iGRAM)",
    category: "Support",
    description: "Official grievance and support channel for escalating issues.",
    url: "https://igram.ignou.ac.in/"
  }
];

// Honest, non-fabricated pointers to where real announcements are posted.
// Deliberately no invented headlines or dates here — deadlines and notices
// change often, so we link to the live official source instead of guessing.
const updatesData = [
  {
    title: "Student Zone — notices and circulars",
    type: "Primary source",
    description: "The first place to check for anything official: circulars, forms, and cross-programme notices.",
    url: "https://www.ignou.ac.in/studentZone/index"
  },
  {
    title: "Admission portal — session announcements",
    type: "Admissions",
    description: "Fresh admission windows, extended dates, and new programme listings appear here first.",
    url: "https://ignouadmission.samarth.edu.in/"
  },
  {
    title: "Re-registration portal",
    type: "Registration",
    description: "Re-registration windows and extensions for continuing students are posted here.",
    url: "https://onlinerr.ignou.ac.in/"
  },
  {
    title: "Exam portal — form and datesheet updates",
    type: "Exams",
    description: "Term-end exam form deadlines and datesheets are published directly on this portal.",
    url: "https://exam.ignou.ac.in/"
  },
  {
    title: "Regional Centre pages",
    type: "Local notices",
    description: "Regional centres sometimes post local extensions or centre-specific instructions before they appear nationally.",
    url: "https://www.ignou.ac.in/regional-centers"
  },
  {
    title: "Assignments download page",
    type: "Assignments",
    description: "New assignment sets for a session are uploaded here, usually without a separate announcement.",
    url: "https://www.ignou.ac.in/studentService/download/assignments"
  }
];

// Original lines written for this page — no misattributed quotes from real people.
const quotesData = [
  "A degree earned while working, waiting, and never giving up isn't a lesser degree. It's the strongest kind.",
  "You didn't choose the harder road because it was easy. You chose it because nothing was going to stop you.",
  "IGNOU doesn't ask where you started. It only asks that you keep going.",
  "Every assignment you submit today is a brick in a life your family will be proud of.",
  "The campus you don't have doesn't define the degree you will earn.",
  "Nobody sees the study hours after a full day's work. But everyone will see the result.",
  "One page today. One paper next month. One certificate that changes everything.",
  "You are not behind. You are on a path built for people who refuse to be stopped by circumstance.",
  "Distance is just the space between you and your goal — not the reason you won't reach it.",
  "Where you start was never in your hands. Where you end up still is."
];

let quoteIndex = Math.floor(Math.random() * quotesData.length);
let quoteTimer = null;
const quoteTextEl = document.getElementById("quote-text");
const quoteNextButton = document.getElementById("quote-next");

function showQuote(index) {
  if (!quoteTextEl) {
    return;
  }

  quoteTextEl.classList.add("is-fading");
  window.setTimeout(() => {
    quoteTextEl.textContent = quotesData[index];
    quoteTextEl.classList.remove("is-fading");
  }, 220);
}

function nextQuote() {
  quoteIndex = (quoteIndex + 1) % quotesData.length;
  showQuote(quoteIndex);
}

function startQuoteRotation() {
  if (quoteTimer) {
    window.clearInterval(quoteTimer);
  }
  quoteTimer = window.setInterval(nextQuote, 7000);
}

if (quoteTextEl) {
  quoteTextEl.textContent = quotesData[quoteIndex];
  startQuoteRotation();
}

quoteNextButton?.addEventListener("click", () => {
  nextQuote();
  startQuoteRotation();
});

function celebrateSave() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const colors = ["#a9761f", "#7a2e3b", "#1c2541"];
  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 140;
    piece.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
    piece.style.setProperty("--rot", `${Math.random() * 360}deg`);
    piece.style.background = colors[i % colors.length];
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 950);
  }
}

function showSaveToast(message) {
  const toast = document.createElement("div");
  toast.className = "save-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  window.requestAnimationFrame(() => toast.classList.add("is-visible"));

  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 300);
  }, 2600);
}

const sampleDesk = {
  studentName: "Aarav Sharma",
  programme: "BCA",
  semester: "Semester 2",
  studyMode: "ODL",
  courseCodes: ["BCS-011", "BCS-012", "BCSL-013", "FEG-02"]
};

const storageKey = "ignou-compass-desk";

const portalGrid = document.getElementById("portal-grid");
const updatesGrid = document.getElementById("updates-grid");
const globalActions = document.getElementById("global-actions");
const profileCard = document.getElementById("profile-card");
const studentForm = document.getElementById("student-form");
const resourceResults = document.getElementById("resource-results");

document.getElementById("portal-count").textContent = String(portalData.length);
document.getElementById("update-count").textContent = String(updatesData.length);

function makeOfficialSearchUrl(courseCode, target) {
  const encodedCode = encodeURIComponent(courseCode.trim());

  if (target === "books") {
    return `https://www.google.com/search?q=site%3Aegyankosh.ac.in+${encodedCode}`;
  }

  if (target === "assignments") {
    return `https://www.google.com/search?q=site%3Aignou.ac.in+${encodedCode}+assignment+IGNOU`;
  }

  return `https://www.google.com/search?q=site%3Awebservices.ignou.ac.in%2FPre-Question+${encodedCode}`;
}

function createExternalLink(label, url) {
  const anchor = document.createElement("a");
  anchor.className = "quick-link";
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = label;
  return anchor;
}

function renderPortals() {
  portalGrid.innerHTML = "";
  portalData.forEach((portal) => {
    const article = document.createElement("article");
    article.className = "portal-card";
    article.innerHTML = `
      <div class="portal-top">
        <h3>${portal.title}</h3>
        <span class="badge teal">${portal.category}</span>
      </div>
      <p>${portal.description}</p>
    `;
    article.appendChild(createExternalLink("Open official portal", portal.url));
    portalGrid.appendChild(article);
  });
}

function renderUpdates() {
  updatesGrid.innerHTML = "";
  updatesData.forEach((item) => {
    const article = document.createElement("article");
    article.className = "update-card";
    article.innerHTML = `
      <div class="portal-top">
        <h3>${item.title}</h3>
        <span class="badge orange">${item.type}</span>
      </div>
      <p>${item.description}</p>
    `;
    article.appendChild(createExternalLink("Check this source", item.url));
    updatesGrid.appendChild(article);
  });
}

function renderGlobalActions(profile) {
  const actions = [
    { label: "Student Zone", url: "https://www.ignou.ac.in/studentZone/index" },
    { label: "Assignments", url: "https://www.ignou.ac.in/studentService/download/assignments" },
    { label: "eGyanKosh", url: "https://egyankosh.ac.in/" },
    { label: "Question Papers", url: "https://webservices.ignou.ac.in/Pre-Question/" },
    { label: "Grade Card", url: "https://gradecard.ignou.ac.in/gradecard/" },
    { label: "Results", url: "https://termendresult.ignou.ac.in/" }
  ];

  globalActions.innerHTML = "";
  actions.forEach((action) => globalActions.appendChild(createExternalLink(action.label, action.url)));

  if (profile?.courseCodes?.length) {
    profile.courseCodes.slice(0, 3).forEach((courseCode) => {
      globalActions.appendChild(
        createExternalLink(`Books for ${courseCode}`, makeOfficialSearchUrl(courseCode, "books"))
      );
    });
  }
}

function renderProfile(profile) {
  if (!profile || !profile.courseCodes?.length) {
    profileCard.innerHTML = `
      <p class="empty-state">
        Save a course list to see per-course shortcuts for books, assignments, and previous papers.
      </p>
    `;
    document.getElementById("saved-course-count").textContent = "0";
    renderGlobalActions();
    return;
  }

  document.getElementById("saved-course-count").textContent = String(profile.courseCodes.length);

  const tags = [profile.studyMode, profile.semester, profile.programme]
    .filter(Boolean)
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  const courseCards = profile.courseCodes
    .map(
      (courseCode) => `
        <article class="course-card">
          <h4>${courseCode}</h4>
          <div class="course-actions">
            <a class="quick-link" target="_blank" rel="noreferrer" href="${makeOfficialSearchUrl(courseCode, "books")}">Search books</a>
            <a class="quick-link" target="_blank" rel="noreferrer" href="${makeOfficialSearchUrl(courseCode, "assignments")}">Search assignments</a>
            <a class="quick-link" target="_blank" rel="noreferrer" href="${makeOfficialSearchUrl(courseCode, "papers")}">Search question papers</a>
          </div>
        </article>
      `
    )
    .join("");

  profileCard.innerHTML = `
    <div class="profile-header">
      <p class="panel-label">Saved course list</p>
      <h3>${profile.studentName || "IGNOU Student"}</h3>
      <p class="profile-subtext">${profile.programme} • ${profile.semester}</p>
      <div class="meta-row">${tags}</div>
    </div>
    <div class="course-list">${courseCards}</div>
  `;

  renderGlobalActions(profile);
}

function normalizeCourseCodes(input) {
  return input
    .split(",")
    .map((code) => code.trim().toUpperCase())
    .filter(Boolean);
}

function saveDesk(profile) {
  localStorage.setItem(storageKey, JSON.stringify(profile));
}

function loadDesk() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function fillForm(profile) {
  document.getElementById("student-name").value = profile.studentName || "";
  document.getElementById("programme").value = profile.programme || "";
  document.getElementById("semester").value = profile.semester || "";
  document.getElementById("study-mode").value = profile.studyMode || "ODL";
  document.getElementById("course-codes").value = (profile.courseCodes || []).join(", ");
}

function buildResourceLinks(courseCode) {
  if (!courseCode) {
    resourceResults.innerHTML = `<p class="empty-state">No course code entered yet.</p>`;
    return;
  }

  const code = courseCode.trim().toUpperCase();
  const links = [
    {
      title: `${code} books and blocks`,
      description: "Search restricted to eGyanKosh, the official IGNOU learning material repository.",
      url: makeOfficialSearchUrl(code, "books")
    },
    {
      title: `${code} assignments`,
      description: "Search restricted to official IGNOU assignment pages and notices.",
      url: makeOfficialSearchUrl(code, "assignments")
    },
    {
      title: `${code} previous papers`,
      description: "Search restricted to the official IGNOU previous question paper archive.",
      url: makeOfficialSearchUrl(code, "papers")
    }
  ];

  resourceResults.innerHTML = "";
  links.forEach((link) => {
    const article = document.createElement("article");
    article.className = "resource-link panel";
    article.innerHTML = `
      <h3>${link.title}</h3>
      <p>${link.description}</p>
    `;
    article.appendChild(createExternalLink("Open search", link.url));
    resourceResults.appendChild(article);
  });
}

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const profile = {
    studentName: document.getElementById("student-name").value.trim(),
    programme: document.getElementById("programme").value.trim().toUpperCase(),
    semester: document.getElementById("semester").value.trim(),
    studyMode: document.getElementById("study-mode").value,
    courseCodes: normalizeCourseCodes(document.getElementById("course-codes").value)
  };

  saveDesk(profile);
  renderProfile(profile);
  buildResourceLinks(profile.courseCodes[0] || "");
  celebrateSave();
  showSaveToast("Saved. One step closer to your degree.");
});

document.getElementById("load-sample").addEventListener("click", () => {
  fillForm(sampleDesk);
  saveDesk(sampleDesk);
  renderProfile(sampleDesk);
  buildResourceLinks(sampleDesk.courseCodes[0]);
  celebrateSave();
  showSaveToast("This is what your saved desk will look like.");
});

document.getElementById("clear-desk").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  studentForm.reset();
  renderProfile(null);
  buildResourceLinks("");
});

document.getElementById("resource-search").addEventListener("click", () => {
  buildResourceLinks(document.getElementById("resource-course-code").value);
});

renderPortals();
renderUpdates();

const savedDesk = loadDesk();

if (savedDesk) {
  fillForm(savedDesk);
  renderProfile(savedDesk);
  buildResourceLinks(savedDesk.courseCodes[0] || "");
} else {
  renderProfile(null);
  renderGlobalActions();
}

/* ---------------------------------------------------------
   A trail of drifting gold dust behind the cursor.
   Purely decorative, capped and throttled, and skipped
   entirely for touch devices or reduced-motion preference.
   --------------------------------------------------------- */
(function enableCursorDust() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  if (prefersReducedMotion || isTouchDevice) {
    return;
  }

  let lastSpawn = 0;
  const spawnGapMs = 40;

  window.addEventListener("pointermove", (event) => {
    const now = performance.now();
    if (now - lastSpawn < spawnGapMs) {
      return;
    }
    lastSpawn = now;

    const mote = document.createElement("span");
    mote.className = "cursor-dust";
    mote.style.left = `${event.clientX}px`;
    mote.style.top = `${event.clientY}px`;
    mote.style.setProperty("--dx", `${(Math.random() - 0.5) * 40}px`);
    mote.style.setProperty("--dy", `${-20 - Math.random() * 30}px`);
    mote.style.setProperty("--dust-size", `${4 + Math.random() * 4}px`);
    document.body.appendChild(mote);

    window.setTimeout(() => mote.remove(), 900);
  });
})();
