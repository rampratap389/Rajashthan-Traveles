/*=====================================
        ROYAL RAJASTHAN TRAVELS
======================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
        MOBILE MENU
    ==========================*/

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuBtn.innerHTML = navLinks.classList.contains("active")
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            });

        });

    }

    /*==========================
        STICKY HEADER
    ==========================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*==========================
        SMOOTH SCROLL
    ==========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*==========================
        FAQ
    ==========================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            faqItems.forEach(i => {

                if (i !== item)
                    i.classList.remove("active");

            });

            item.classList.toggle("active");

        });

    });

    /*==========================
        COUNTER
    ==========================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length) {

        const animateCounter = counter => {

            const target = +counter.dataset.target || +counter.innerText;

            let current = 0;

            const increment = target / 120;

            const update = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        };

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        });

        counters.forEach(counter => observer.observe(counter));

    }

    /*==========================
        CONTACT FORM
    ==========================*/

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", e => {

            e.preventDefault();

            alert("Thank you! Your enquiry has been submitted.");

            form.reset();

        });

    });

});

/*==============================
    BACK TO TOP
===============================*/

const backTop = document.getElementById("backToTop");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.style.display = "flex";

        } else {

            backTop.style.display = "none";

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==============================
    LOADER
===============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*==============================
    AOS
===============================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        offset: 80

    });

}