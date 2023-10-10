const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }
}

if (prefersDarkScheme.matches) {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', toggleDarkMode);