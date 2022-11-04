const headerElement = document.getElementsByClassName('header');
// const mainElement = document.getElementById('main');

window.addEventListener('load', () => {
  document.body.style.paddingTop = headerElement[0].offsetHeight + 'px';
  console.log('Custom Script Loaded');
});

window.addEventListener('resize', () => {
  document.body.style.paddingTop = headerElement[0].offsetHeight + 'px';
});
