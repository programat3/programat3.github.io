let article = {};
let lang = "es"; // idioma por defecto

// Cargar el JSON
fetch("content.json")
  .then((res) => res.json())
  .then((json) => {
    article = json;
    renderPage();
  });

function changeLanguage(newLang) {
  lang = newLang;
  renderPage();
}

function renderPage() {
  if (!article) return;

  // Títulos
  document.getElementById("title").innerText = article["page-1"]["title"][lang];
  document.getElementById("subtitle").innerText = article["page-1"]["subtitle"][lang];
  document.getElementById("byline").innerText = article["page-1"]["content"][lang] + " Lía Da Silva";

  renderExperience();
  renderAchievements();
  renderSkills();
}
function renderExperience() {
  const title = article["page-2"]["title"][lang];
  const experiences = article["page-2"]["content"][lang];
  const details = article["details"]["content"][lang];

  document.getElementById("experience-title").innerText = title;
  const container = document.getElementById("experience-container");
  container.innerHTML = "";

  experiences.forEach((item, index) => {
    const column = document.createElement("div");
    column.className = "column is-4";

    const card = document.createElement("div");
    
    card.className = "card zine-style";
    card.style.cursor = "pointer";

    if(index %3 === 0){
      card.classList.add("washi")
    }
    else{
      card.classList.add("washi2")
    }

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const titleEl = document.createElement("p");
    titleEl.className = "title is-5";
    titleEl.innerText = item.exp;

    const subtitleEl = document.createElement("p");
    subtitleEl.className = "subtitle is-6";
    subtitleEl.innerText = `${item.emp} ${item.year}`;

    const detailEl = document.createElement("div");
    detailEl.className = "content";
    detailEl.style.display = "none";
    detailEl.style.marginTop = "10px";

    // Construimos el contenido extra
    details[index].forEach(d => {
      const p = document.createElement("p");
      p.innerHTML = `🛠️ <strong>${d.desc}</strong><br><span class="has-text-grey">[${d.technologies}]</span>`;
      detailEl.appendChild(p);
    });

    // Toggle al hacer clic
    card.addEventListener("click", () => {
      detailEl.style.display = detailEl.style.display === "none" ? "block" : "none";
    });

    cardContent.appendChild(titleEl);
    cardContent.appendChild(subtitleEl);
    cardContent.appendChild(detailEl);

    card.appendChild(cardContent);
    column.appendChild(card);
    container.appendChild(column);
  });
}

function renderAchievements() {
  const title = article["page-3"]["title"][lang];
  const achievements = article["page-3"]["content"][lang];

  document.getElementById("achievements-title").innerText = title;

  const container = document.getElementById("achievements-container");
  container.innerHTML = "";

  achievements.forEach((item, index) => {
    const column = document.createElement("div");
    column.className = "column is-3";

    const card = document.createElement("div");
    card.className = "card zine-style";
    if(index%3 === 1){
      card.classList.add("washi")
    }
    else{
      card.classList.add("washi2")
    }
    const content = document.createElement("div");
    content.className = "card-content";

    content.innerHTML = `
      <p class="title is-5">${item.name}</p>
      <p class="subtitle is-size-6">${item.year}</p>
    `;

    card.appendChild(content);
    column.appendChild(card);
    container.appendChild(column);
  });
}

function renderSkills() {
  const skillsTitle = article["page-4"]["title"][lang];
  const skills = article["page-4"]["content"][lang];

  document.getElementById("skills-title").innerText = skillsTitle;

  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  skills.forEach((skill, index) => {
    const column = document.createElement("div");
    column.className = "column is-4";

    const card = document.createElement("div");
    card.className = "card zine-style";
    if(index%2 === 0){
      card.classList.add("washi")
    }
    else{
      card.classList.add("washi2")
    }
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const titleEl = document.createElement("p");
    titleEl.className = "title is-5";
    titleEl.innerText = skill.skill;

    const subtitleEl = document.createElement("p");
    subtitleEl.className = "subtitle is-6 ";
    subtitleEl.innerText = skill.type;

    cardContent.appendChild(titleEl);
    cardContent.appendChild(subtitleEl);
    card.appendChild(cardContent);
    column.appendChild(card);
    container.appendChild(column);
  });
}