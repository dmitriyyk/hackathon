const scrollContainer = document.querySelector('.page');
const scrollItems = document.querySelectorAll('section');

window.addEventListener('load', () => {
  scrollItems.forEach((item) => {
    item.classList.add('show-animate');
  });
});

scrollContainer.addEventListener('scroll', () => {
  scrollItems.forEach((item) => {
    const isInViewport = item.getBoundingClientRect().top >= 0 && item.getBoundingClientRect().top <= window.innerHeight - 150;

    if (isInViewport) {
      item.classList.add('show-animate');
    } else {
      item.classList.remove('show-animate');
    }
  });
});