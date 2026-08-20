

function generateReport() {

    alert(
        "📊 Demand Report Generated!\n\n" +
        "Your report contains:\n" +
        "• High-demand products\n" +
        "• Low inventory products\n" +
        "• Search interest\n" +
        "• Estimated missed sales"
    );

}


// ==============================
// NAVIGATION
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ==============================
// SIMPLE DASHBOARD ANIMATION
// ==============================

window.addEventListener("load", function() {

    const cards = document.querySelectorAll(".stat-card");

    cards.forEach(function(card, index) {

        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";

        setTimeout(function() {

            card.style.transition =
                "all 0.5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});
