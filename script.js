// ============================================
// MOUSE SPOTLIGHT
// ============================================

const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (event) => {
    spotlight.style.left = event.clientX + "px";
    spotlight.style.top = event.clientY + "px";
});


// ============================================
// CREATE FLOATING PARTICLES
// ============================================

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 15 + "s";

    particle.style.animationDelay =
        Math.random() * -15 + "s";

    particle.style.width =
        2 + Math.random() * 3 + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(particle);
}


// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

const counters =
    document.querySelectorAll(".counter");

function animateCounter(counter) {

    const target =
        Number(counter.dataset.target);

    const duration = 1800;

    const startTime =
        performance.now();

    function update(currentTime) {

        const progress =
            Math.min(
                (currentTime - startTime) /
                duration,
                1
            );

        // Smooth animation curve
        const easeOut =
            1 - Math.pow(1 - progress, 4);

        const value =
            Math.floor(target * easeOut);

        counter.textContent =
            value.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            counter.textContent =
                target.toLocaleString();

        }

    }

    requestAnimationFrame(update);

}


// Start counter when visible

const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    animateCounter(
                        entry.target
                    );

                    counterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );

counters.forEach((counter) => {

    counterObserver.observe(counter);

});


// ============================================
// ANIMATE CHART BARS
// ============================================

const bars =
    document.querySelectorAll(".animated-bar");

const barObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width + "%";

                    barObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );

bars.forEach((bar) => {

    barObserver.observe(bar);

});


// ============================================
// SEARCH PRODUCTS
// ============================================

const searchInput =
    document.getElementById("searchInput");

const filterSelect =
    document.getElementById("filterSelect");

function filterProducts() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    const filter =
        filterSelect.value;

    const rows =
        document.querySelectorAll(
            "#productTable tr"
        );

    rows.forEach((row) => {

        const product =
            row.querySelector(
                ".table-product strong"
            )
            .textContent
            .toLowerCase();

        const status =
            row.dataset.status;

        const matchesSearch =
            product.includes(searchText);

        const matchesFilter =
            filter === "all" ||
            status === filter;

        if (
            matchesSearch &&
            matchesFilter
        ) {

            row.style.display = "";

            row.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "translateY(10px)"
                    },
                    {
                        opacity: 1,
                        transform:
                            "translateY(0)"
                    }
                ],
                {
                    duration: 300,
                    easing: "ease-out"
                }
            );

        } else {

            row.style.display = "none";

        }

    });

}

searchInput.addEventListener(
    "input",
    filterProducts
);

filterSelect.addEventListener(
    "change",
    filterProducts
);


// ============================================
// SHOW DEMAND GAPS BUTTON
// ============================================

function showGaps() {

    filterSelect.value = "gap";

    searchInput.value = "";

    filterProducts();

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


// ============================================
// HERO BUTTON
// ============================================

function scrollToGaps() {

    document
        .getElementById("gaps")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


// ============================================
// CONNECT DATA BUTTON
// ============================================

function showUploadMessage() {

    const button =
        document.querySelector(
            ".secondary-btn"
        );

    const original =
        button.innerHTML;

    button.innerHTML =
        '<i class="fa-solid fa-check"></i> Data Connection Ready';

    button.style.background =
        "rgba(34,197,94,0.15)";

    button.style.borderColor =
        "rgba(34,197,94,0.3)";

    setTimeout(() => {

        button.innerHTML =
            original;

        button.style.background = "";

        button.style.borderColor = "";

    }, 2500);

}


// ============================================
// ACTIVE NAVIGATION
// ============================================

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });

            this.classList.add(
                "active"
            );

        }
    );

});


// ============================================
// 3D CARD HOVER EFFECT
// ============================================

const cards =
    document.querySelectorAll(
        ".stat-card, .mini-insight"
    );

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 18;

            const rotateY =
                (centerX - x) / 18;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});
