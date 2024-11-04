// Scroll-to-Top Button
document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.createElement("button");
    scrollButton.innerText = "↑";
    scrollButton.id = "scrollToTop";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.display = "none";
    scrollButton.style.padding = "10px 15px";
    scrollButton.style.fontSize = "1.5rem";
    scrollButton.style.color = "white";
    scrollButton.style.backgroundColor = "#0275d8";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "50%";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    document.body.appendChild(scrollButton);

    // Show/Hide Button on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Scroll to Top on Click
    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
