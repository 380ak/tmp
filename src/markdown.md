To support a **dark theme across new sections and tags**, you'll use a combination of CSS variables and class-based theming. Here’s a step-by-step guide on how to add new sections and ensure they support dark mode:

1. **Define CSS Variables**
In your styles.css, define CSS variables for theme colors at the root level, so you can use them consistently across your styles.

Default Light Theme

    :root {
        --bg-color: #ffffff; /* Light background */
        --text-color: #000000; /* Light text color */
        --link-color: #007bff; /* Link color */
        --border-color: #ddd; /* Border color */
    }
Dark Theme


    body.dark-theme {
        --bg-color: #000000; /* Dark background */
        --text-color: #ffffff; /* Dark text color */
        --link-color: #1a73e8; /* Dark mode link color */
        --border-color: #333; /* Dark mode border color */
    }
2. Apply CSS Variables to Your Sections
Update your CSS to use these variables. For example, in your CSS, you can apply these variables to the background, text color, borders, etc.



    /* Apply variables to body */
    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    /* Example section styling */
    section {
        background-color: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--border-color);
        padding: 20px;
        margin: 10px 0;
    }

    /* Example link styling */
    a {
        color: var(--link-color);
    }
3. Add New Sections to HTML
When adding new sections to your HTML, make sure they follow the same structure and apply classes where needed. For instance:



    <section>
        <h2>New Section Title</h2>
        <p>This is some content in a new section. It will adapt to the theme settings automatically.</p>
        <a href="#">Example Link</a>
    </section>

4. Test Dark Theme
Ensure that new sections and elements adjust correctly when the dark theme is activated. This will usually involve checking if the colors and styles update as expected when toggling the theme.

Example of Integrating with Your Existing Setup
Here’s how your HTML, CSS, and JavaScript work together:

HTML

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Theme and Language Switcher</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <section>
            <h2>Section Title</h2>
            <p>Content goes here...</p>
            <a href="#">Example Link</a>
        </section>

        <footer>
            <!-- Dark Mode Toggle -->
            <label class="ui-switch">
                <input type="checkbox" id="themeToggle">
                <div class="slider">
                    <div class="circle"></div>
                </div>
            </label>

            <!-- Language Toggle -->
            <label class="lang-toggle">
                <input type="checkbox" id="langToggle">
                <div class="lang-slider">
                    <div class="lang-circle en">EN</div>
                    <div class="lang-circle ar">AR</div>
                </div>
            </label>
        </footer>

        <script src="script.js"></script>
    </body>
    </html>
CSS (styles.css)


    :root {
        --bg-color: #ffffff;
        --text-color: #000000;
        --link-color: #007bff;
        --border-color: #ddd;
    }

    body.dark-theme {
        --bg-color: #000000;
        --text-color: #ffffff;
        --link-color: #1a73e8;
        --border-color: #333;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    section {
        background-color: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--border-color);
        padding: 20px;
        margin: 10px 0;
    }

    a {
        color: var(--link-color);
    }

    /* Dark Mode Toggle CSS */
    /* Include previous CSS for dark mode toggle */

    /* Language Toggle CSS */
    /* Include previous CSS for language toggle */
JavaScript (script.js)


    document.addEventListener('DOMContentLoaded', function () {
        const themeToggle = document.getElementById('themeToggle');
        const langToggle = document.getElementById('langToggle');

        // Theme Toggle
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.checked = true;
        }
        
        themeToggle.addEventListener('change', function () {
            document.body.classList.toggle('dark-theme', this.checked);
            localStorage.setItem('theme', this.checked ? 'dark' : 'light');
        });

        // Language Toggle
        if (localStorage.getItem('language') === 'ar') {
            langToggle.checked = true;
        }

        langToggle.addEventListener('change', function () {
            const newLanguage = this.checked ? 'ar' : 'en';
            localStorage.setItem('language', newLanguage);
            const newPage = newLanguage === 'ar' ? 'index-ar.html' : 'index-en.html';
            window.location.href = newPage;
        });
    });
Summary
Define CSS Variables for theme colors.
Use Variables in CSS to style elements.
Add New Sections in HTML, applying existing styles.
Ensure Compatibility by testing with both themes.
This approach ensures your new sections are consistent with the existing dark mode and light mode styles.