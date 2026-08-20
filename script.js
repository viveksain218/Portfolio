/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("theme-toggle");


// Check previously saved theme

const savedTheme =
    localStorage.getItem("theme");


// Apply saved theme

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


// Update theme icon

function updateThemeIcon() {

    if (
        document.body.classList.contains("dark")
    ) {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    }

    else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


// Initial icon

updateThemeIcon();


// Toggle theme

themeToggle.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("dark");


        // Save preference

        if (
            document.body.classList.contains("dark")
        ) {

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

        else {

            localStorage.setItem(
                "theme",
                "light"
            );

        }


        updateThemeIcon();

    }
);



/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navbar =
    document.getElementById("navbar");


// Open / close mobile menu

menuToggle.addEventListener(
    "click",
    function () {

        navbar.classList.toggle("open");


        if (
            navbar.classList.contains("open")
        ) {

            menuToggle.textContent = "✕";

        }

        else {

            menuToggle.textContent = "☰";

        }

    }
);



// Close menu after clicking link

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove(
                    "open"
                );

                menuToggle.textContent = "☰";

            }
        );

    }
);



/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );



revealElements.forEach(
    function (element) {

        revealObserver.observe(element);

    }
);



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                    sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);



/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 15px 50px rgba(0,0,0,0.15)";

        }

        else {

            header.style.boxShadow =
                "var(--shadow)";

        }

    }
);



/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }
);