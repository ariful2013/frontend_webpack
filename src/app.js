import pexel01 from './images/pexels-01.jpg';
import bootstrapFill from './images/bootstrap-fill.svg';
import homeIcon from './images/home_icon.ico';
import all from 'bootstrap';

const App = () => {
  const mainContainer = document.getElementById('main');

  const text = document.createElement('p');
  mainContainer.appendChild(text);
  text.innerHTML = 'Hello World';

  const imageJpg = document.createElement('img');
  mainContainer.appendChild(imageJpg);
  imageJpg.src = pexel01;
  imageJpg.style.maxWidth = '200px';

  const imageSvg = document.createElement('img');
  mainContainer.appendChild(imageSvg);
  imageSvg.src = bootstrapFill;
  imageSvg.style.width = '64px';
  imageSvg.style.height = '64px';

  const imageIcon = document.createElement('img');
  mainContainer.appendChild(imageIcon);
  imageIcon.src = homeIcon;
  imageIcon.style.width = '64px';
  imageIcon.style.height = '64px';

  const divFontTest = document.createElement('div');
  mainContainer.appendChild(divFontTest);
  divFontTest.className = 'para';
  divFontTest.textContent = 'New Para Created for Font Test';

  return mainContainer;
};

export default App;
