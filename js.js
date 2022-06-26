//selectors
const carousel = document.getElementById('carousel');
const carousel__list = document.getElementById('carousel__list');
const images = Array.from(carousel.children);
const widthToMove = images[0].getBoundingClientRect().width;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let currentSlideIndex = 0;

// position the images next to each other
// remove overflow: hidden from css to see it stacked next to each other
images.forEach((image, index) => {
    image.style.left = index * widthToMove + 'px'
})

// event listeners
nextBtn.onclick = function () {
    if (!validSlideIndex(currentSlideIndex + 1)) {
        return;
    }

    currentSlideIndex++;

    const currentWidthToMove = widthToMove * currentSlideIndex;
    console.log(currentWidthToMove);
    carousel.style.transform = "translateX(-" + currentWidthToMove + "px)";
}

prevBtn.onclick = function () {
    console.log(currentSlideIndex);
    if (!validSlideIndex(currentSlideIndex - 1)) {
        return;
    }

    currentSlideIndex--;

    const currentWidthToMove = widthToMove * currentSlideIndex;
    carousel.style.transform = "translateX(-" + currentWidthToMove + "px)";
}

// helpers
function validSlideIndex(slideIndex) {
    return slideIndex >= 0 && slideIndex < carousel.childElementCount;
}