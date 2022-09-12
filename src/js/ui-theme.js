const uiButtonEl = document.querySelector('[data-theme]');
const uiIconEL = document.querySelector('.header__svg');

uiButtonEl.addEventListener('click', themeChanger);

function themeChanger() {
  if (
    uiButtonEl.innerHTML ===
    `
        <svg class="header__svg">
          <use href="/icons.adfc4680.svg#icon-sun"></use>
        </svg>
      `
  ) {
    const markup = `<svg class='header__svg'>
          <use href='/icons.adfc4680.svg#icon-brightness-contrast'></use>
        </svg>`;
    uiButtonEl.innerHTML = markup;
    document.querySelector('body').classList.add('dark-theme');
    document.querySelector('.movie-title').classList.add('dark-theme');
    localStorage.setItem('ui-theme', 'dark');
  } else if (
    uiButtonEl.innerHTML ===
    `<svg class="header__svg">
          <use href="/icons.adfc4680.svg#icon-brightness-contrast"></use>
        </svg>`
  ) {
    const markup = `
        <svg class="header__svg">
          <use href="/icons.adfc4680.svg#icon-sun"></use>
        </svg>
      `;
    uiButtonEl.innerHTML = markup;
    document.querySelector('body').classList.remove('dark-theme');
    document.querySelector('.movie-title').classList.remove('dark-theme');
    localStorage.setItem('ui-theme', 'light');
  }
}

function setTheme() {
  const currentTheme = localStorage.getItem('ui-theme');
  if (currentTheme == 'dark') {
    const markup = `<svg class='header__svg'>
          <use href='/icons.adfc4680.svg#icon-brightness-contrast'></use>
        </svg>`;
    uiButtonEl.innerHTML = markup;
    document.querySelector('body').classList.add('dark-theme');
    document.querySelector('.movie-title').classList.add('dark-theme');
  }
}

setTheme();
