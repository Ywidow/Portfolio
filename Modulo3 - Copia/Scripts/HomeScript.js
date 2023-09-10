const homeSection = document.getElementById('Home');

const buttonFromHomeSection = homeSection.getElementsByClassName('section__button');
buttonFromHomeSection[0].addEventListener(
  'click', function(){
    const divDisabled = homeSection.getElementsByClassName('disabled');

    if(buttonFromHomeSection[0].classList.contains('button-more')){
      divDisabled[0].style.display = 'block';

      buttonFromHomeSection[0].classList.add('button-less');
      buttonFromHomeSection[0].classList.remove('button-more');
      buttonFromHomeSection[0].textContent = 'LESS';
    }
    else if(buttonFromHomeSection[0].classList.contains('button-less')){
      divDisabled[0].style.display = 'none';

      buttonFromHomeSection[0].classList.add('button-more');
      buttonFromHomeSection[0].classList.remove('button-less');
      buttonFromHomeSection[0].textContent = 'MORE';
    }
  }
);

function HamburguerClick(button){
  let buttonListItem = button.parentNode;
  let buttonList = buttonListItem.parentNode;
  let allButtonsNavBarItem = buttonList.getElementsByTagName('li');

  let toRight = true;

  if(allButtonsNavBarItem[0].classList.contains('buttons-container-list__list-item--display--none')){
    buttonListItem.classList.add('buttons-container-list__hamburguer-button--animation--rotate--left');

    toRight = false;
  }
  else{
    buttonListItem.classList.add('buttons-container-list__hamburguer-button--animation--rotate--right');

    toRight = true;
  }

  setTimeout(
    function(){
      if(toRight){
        buttonListItem.classList.remove('buttons-container-list__hamburguer-button--animation--rotate--right');
      }
      else{
        buttonListItem.classList.remove('buttons-container-list__hamburguer-button--animation--rotate--left');
      }

      if(allButtonsNavBarItem[0].classList.contains('buttons-container-list__list-item--display--none')){
        allButtonsNavBarItem[0].classList.remove('buttons-container-list__list-item--display--none');
      }
      else{
        allButtonsNavBarItem[0].classList.add('buttons-container-list__list-item--display--none');
      }
    }, 500
  )
}

const alturaRolagem = window.scrollY;
console.log(`A altura de rolagem é ${alturaRolagem} pixels.`);