const upbtn = document.querySelector('.up-button');
const downbtn = document.querySelector('.down-button');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const mainslide = document.querySelector('.main-slide');
const slidecount = mainslide.querySelectorAll('div').length;
let activeslideindex = 0;

sidebar.style.top = `-${(slidecount - 1) * 100}vh`;

upbtn.addEventListener('click', () => {
  changeslide('up')
})

downbtn.addEventListener('click', () => {
  changeslide('down')
})

function changeslide(direction) {
  if (direction === 'up') {
    activeslideindex++;
    if (activeslideindex === slidecount) {
      activeslideindex = 0
    } 
  }
  else if (direction === 'down') {
      activeslideindex--;
      if (activeslideindex < 0) {
        activeslideindex = slidecount - 1;
      }
    }

  const heigth = container.clientHeight;

  mainslide.style.transform = `translateY(-${activeslideindex * heigth}px)`;
  sidebar.style.transform = `translateY(${activeslideindex * heigth}px)`
}