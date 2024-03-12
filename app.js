const carrossel = document.querySelector('.carrossel');
const carrosselImgs = document.querySelectorAll('.carrossel img');

// Buttons
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// Counter
let counter = 1;
let size = carrosselImgs[1].clientWidth;

// Function to update size based on viewport width
const updateSize = () => {
    size = carrosselImgs[1].clientWidth;
    carrossel.style.transform = 'translateX('+ (-size * counter) +'px)';
};

// Initial size update
updateSize();

// Button listeners

nextButton.addEventListener('click', () => {
    if (counter >= carrosselImgs.length - 1) return;
    carrossel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carrossel.style.transform = 'translateX('+ (-size * counter) +'px)';
});

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    carrossel.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carrossel.style.transform = 'translateX('+ (-size * counter) +'px)';
});

carrossel.addEventListener('transitionend', () => {
    if(carrosselImgs[counter].id === 'lastClone'){
        carrossel.style.transition = "none";
        counter = carrosselImgs.length-2;
        carrossel.style.transform = 'translateX('+ (-size * counter) +'px)';
    } else if(carrosselImgs[counter].id === 'firstClone'){
        carrossel.style.transition = "none";
        counter = carrosselImgs.length-counter;
        carrossel.style.transform = 'translateX('+ (-size * counter) +'px)';
    }
});

// Event listener for window resize
window.addEventListener('resize', updateSize);

//dropdown menu 
let navigation = document.querySelector('.navigation');
document.querySelector('.menuToggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active')
};