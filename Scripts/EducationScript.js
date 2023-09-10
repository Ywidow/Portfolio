const educationSection = document.getElementById('Educação');

const buttonFromEducationSection = educationSection.getElementsByTagName('button');
buttonFromEducationSection[0].addEventListener(
  'click', function(){
    if(buttonFromEducationSection[0].classList.contains('button-more')){
      const containerDisabled = educationSection.getElementsByClassName('disabled');
      containerDisabled[0].style.display = 'flex';

      buttonFromEducationSection[0].classList.add('button-less');
      buttonFromEducationSection[0].classList.remove('button-more');

      buttonFromEducationSection[0].textContent = "LESS";
    }
    else if(buttonFromEducationSection[0].classList.contains('button-less')){
      const containerDisabled = educationSection.getElementsByClassName('disabled');
      containerDisabled[0].style.display = 'none';

      buttonFromEducationSection[0].classList.add('button-more');
      buttonFromEducationSection[0].classList.remove('button-less');

      buttonFromEducationSection[0].textContent = "MORE";
    }
  }
);