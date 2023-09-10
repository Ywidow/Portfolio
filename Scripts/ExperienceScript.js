const experienceSection = document.getElementById('Experiência');

const experienceSectionButton = experienceSection.getElementsByTagName('button');
experienceSectionButton[0].addEventListener(
  'click', function(){
    const liFromExperienceSection = experienceSection.getElementsByTagName('li');

    if(experienceSectionButton[0].classList.contains('button-more')){
      for(let i = 0; i < liFromExperienceSection.length; i++){
        if(liFromExperienceSection[i].classList.contains('disabled')){
          liFromExperienceSection[i].style.display = 'flex';
        }
      }

      experienceSectionButton[0].classList.add('button-less');
      experienceSectionButton[0].classList.remove('button-more');
      experienceSectionButton[0].textContent = "LESS";
    }
    else if(experienceSectionButton[0].classList.contains('button-less')){
      for(let i = 0; i < liFromExperienceSection.length; i++){
        if(liFromExperienceSection[i].classList.contains('disabled')){
          liFromExperienceSection[i].style.display = 'none';
        }
      }

      experienceSectionButton[0].classList.add('button-more');
      experienceSectionButton[0].classList.remove('button-less');
      experienceSectionButton[0].textContent = "LESS";
    }
  }
);