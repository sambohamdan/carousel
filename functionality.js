document.addEventListener("DOMContentLoaded", () => {

    let el = 0
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const list = document.querySelector(".slider-container .slider-list");
    let activeSlider = document.querySelector(".slider-container .slider-list .slider-slide-active");
    let hiddenSlider = document.querySelector(".slider-container .slider-list .slider-slide-hidden");
    const liNodes = Array.from(list.children);
    let item;
    let currentSlide = liNodes[el];

        next.addEventListener("click", () => {
            liNodes[el].classList.replace("active", "hidden");
            el = (el + 1) % liNodes.length;
            liNodes[el].classList.replace("hidden", "active");
        });

        prev.addEventListener("click", () => {
            liNodes[el].classList.replace("active", "hidden");
            el = (el + (liNodes.length - 1)) % liNodes.length;
            let prevSlide = liNodes[el];
            prevSlide.classList.replace("hidden", "active");
        });
    

});