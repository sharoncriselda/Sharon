function searchProducts() {
    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#productTable tr");

    rows.forEach(row => {
        const productName = row
            .querySelector("td")
            .textContent
            .toLowerCase();

        if (productName.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


function filterProducts() {

    const filter = document.getElementById("filterSelect").value;

    const rows = document.querySelectorAll("#productTable tr");

    rows.forEach(row => {

        const status = row.dataset.status;

        if (filter === "all") {
            row.style.display = "";

        } else if (filter === "gap" && status === "gap") {
            row.style.display = "";

        } else if (filter === "high" && status === "high") {
            row.style.display = "";

        } else if (filter === "available" && status === "available") {
            row.style.display = "";

        } else {
            row.style.display = "none";
        }

    });

}


function showGaps() {

    const rows = document.querySelectorAll("#productTable tr");

    rows.forEach(row => {

        if (row.dataset.status === "gap") {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

    document.getElementById("filterSelect").value = "gap";

    document
        .getElementById("productTable")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function showUploadMessage() {

    alert(
        "Data upload feature coming soon! You will be able to upload search interest and inventory data."
    );

}
