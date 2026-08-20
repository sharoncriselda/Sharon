// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

  const target = Number(counter.dataset.target);
  const duration = 1500;
  const startTime = performance.now();

  function updateCounter(currentTime) {

    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );

    const value = Math.floor(progress * target);

    counter.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target.toLocaleString();
    }

  }

  requestAnimationFrame(updateCounter);

});


// ==============================
// SEARCH + FILTER
// ==============================

function applyFilters() {

  const searchInput = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filter = document
    .getElementById("filterSelect")
    .value;

  const rows = document.querySelectorAll(
    "#productTable tr"
  );

  rows.forEach((row) => {

    const productName = row
      .querySelector(".product strong")
      .textContent
      .toLowerCase();

    const status = row.dataset.status;

    const matchesSearch =
      productName.includes(searchInput);

    const matchesFilter =
      filter === "all" || status === filter;

    if (matchesSearch && matchesFilter) {

      row.style.display = "";

    } else {

      row.style.display = "none";

    }

  });

}


// ==============================
// SHOW DEMAND GAPS
// ==============================

function showGaps() {

  const filter = document.getElementById(
    "filterSelect"
  );

  filter.value = "gap";

  document.getElementById(
    "searchInput"
  ).value = "";

  applyFilters();

  document
    .getElementById("demandTable")
    .scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

}


// ==============================
// UPLOAD BUTTON
// ==============================

function showUploadMessage() {

  alert(
    "Data upload feature coming soon! " +
    "You will be able to upload customer search data " +
    "and inventory data."
  );

}


// ==============================
// NAVIGATION ANIMATION
// ==============================

const navItems =
  document.querySelectorAll(".nav-item");

navItems.forEach((item) => {

  item.addEventListener("click", function (event) {

    event.preventDefault();

    navItems.forEach((nav) => {
      nav.classList.remove("active");
    });

    this.classList.add("active");

  });

});
