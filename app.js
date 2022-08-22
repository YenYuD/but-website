document.addEventListener("DOMContentLoaded", function () {
    const lists = document.querySelectorAll(".en-bar > li");
    document.querySelectorAll(".en-bar > li > a").forEach((item) => {
        item.style.pointerEvents = "none";
    });
    lists.forEach((item) => item.classList.add("link"));
    const ul = document.querySelector(".en-bar");
    ul.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("link")) {
            e.target.classList.add("hover");
        }
    });

    ul.addEventListener("mouseout", function (e) {
        if (e.target.classList.contains("link")) {
            e.target.classList.remove("hover");
        }
    });
});
