const pagesContainer = document.querySelector('.pages_container');
const pages = document.querySelectorAll('.page');

pagesContainer.addEventListener('scroll', function() {
  pages.forEach(page => {
    const scrollTop = pagesContainer.scrollTop;
    page.style.transform = `translateY(${-scrollTop}px)`;
  });
});