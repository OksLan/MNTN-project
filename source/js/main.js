const scaleItems = document.querySelectorAll('.hero__aside-scale-item');

scaleItems.forEach(item => {
  item.addEventListener('click', () => {
    const target = document.getElementById(item.dataset.target);

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
