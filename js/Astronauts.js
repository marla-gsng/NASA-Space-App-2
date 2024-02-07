
setInterval(() => {
    const slider = document.querySelector('.slider');
    const firstSlide = slider.children[0];

    slider.appendChild(firstSlide.cloneNode(true));

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translateX(0)';
        slider
.removeChild(firstSlide);
    }, 500);
}, 2000);
   
