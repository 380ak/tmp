document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const langToggle = document.getElementById('langToggle');

    // Apply the theme based on localStorage value
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // Theme Toggle
    themeToggle.addEventListener('change', function () {
        const isDarkMode = this.checked;
        document.body.classList.toggle('dark-theme', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Apply the language toggle based on localStorage value
    if (localStorage.getItem('language') === 'ar') {
        langToggle.checked = true;
    }

    // Language Toggle
    langToggle.addEventListener('change', function () {
        const newLanguage = this.checked ? 'ar' : 'en';
        localStorage.setItem('language', newLanguage);
        const newPage = newLanguage === 'ar' ? 'index-ar.html' : 'index-en.html';
        window.location.href = newPage;
    });
});
