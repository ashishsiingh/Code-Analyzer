var history = document.getElementById("history");

const languageSelector = document.querySelector(".language-selector");
const btn = languageSelector.querySelector(".btn");
const languageOptions = languageSelector.querySelector(".language-options");

btn.addEventListener("click", function() {
  languageOptions.style.display = (languageOptions.style.display === "block") ? "none" : "block";
});

languageOptions.addEventListener("click", function(event) {
  const selectedLanguage = event.target;
  btn.textContent = selectedLanguage.textContent;
  languageOptions.style.display = "none";
});


var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    document.getElementById("editor").style.backgroundColor = '#000000';
    editor.session.setMode("ace/mode/c_cpp");