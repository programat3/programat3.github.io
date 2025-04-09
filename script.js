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
  if (!article || !article["page-1"]) return;

  document.getElementById("title").innerText = article["page-1"]["title"][lang];
  document.getElementById("subtitle").innerText = article["page-1"]["subtitle"][lang];
  document.getElementById("byline").innerText = article["page-1"]["content"][lang] + " Lía Da Silva"; // puedes reemplazar "Lía" dinámicamente también
}