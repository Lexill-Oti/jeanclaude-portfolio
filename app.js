"use strict";


/* =========================================================
   JEAN-CLAUDE OTIENO OCHIENG
   PERSONAL PORTFOLIO
   JAVASCRIPT FOUNDATION
========================================================= */


/* =========================================================
   1. APPLICATION STATE
========================================================= */

const appState = {

    theme:
        localStorage.getItem("portfolio-theme") || "dark"

};


/* =========================================================
   2. DOM REFERENCES
========================================================= */

const themeToggle =
    document.querySelector("#theme-toggle");


/* =========================================================
   3. THEME MANAGEMENT
========================================================= */

function applyTheme(theme) {

    document.body.dataset.theme = theme;

    appState.theme = theme;

    localStorage.setItem(
        "portfolio-theme",
        theme
    );

    updateThemeButton();

}


/* =========================================================
   4. THEME BUTTON
========================================================= */

function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    if (appState.theme === "dark") {

        themeToggle.textContent =
            "Light";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light theme"
        );

    } else {

        themeToggle.textContent =
            "Dark";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );

    }

}


/* =========================================================
   5. THEME TOGGLE
========================================================= */

function toggleTheme() {

    const newTheme =
        appState.theme === "dark"
            ? "light"
            : "dark";

    applyTheme(newTheme);

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


/* =========================================================
   6. INITIALISE APPLICATION
========================================================= */

function initialisePortfolio() {

    applyTheme(
        appState.theme
    );

}


/* =========================================================
   7. START APPLICATION
========================================================= */

initialisePortfolio();