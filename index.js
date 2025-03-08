document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");

    function changeSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        const offset = -100 * currentIndex;
        document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
    }

    setInterval(changeSlide, 5000); // Cambiar de imagen cada 5 segundos
});
