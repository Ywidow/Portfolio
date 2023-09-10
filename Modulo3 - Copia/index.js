let formStatus = localStorage.getItem("FormStatus");

if(formStatus === "Succes"){
  const snackBarForm = document.getElementsByClassName('notification-container');
  snackBarForm[0].style.display = "flex";

  localStorage.removeItem("FormStatus");
}

setTimeout(
  function(){
    const snackBarForm = document.getElementsByClassName('notification-container');
    snackBarForm[0].style.display = "none";
  }, 5000
);

window.addEventListener(
  'scroll', function(){
    if(window.scrollY > 190){
      const opacityContainer = this.document.getElementsByClassName('opacity-container');
      opacityContainer[0].style.display = 'block'

      const headerFromHome = this.document.getElementsByClassName('presentation-container__header');
      headerFromHome[0].style.display = 'none';
    }
    else{
      const opacityContainer = this.document.getElementsByClassName('opacity-container');
      opacityContainer[0].style.display = 'none'

      const headerFromHome = this.document.getElementsByClassName('presentation-container__header');
      headerFromHome[0].style.display = 'flex';
    }
  }
)

const opacityContainer = document.getElementsByClassName('opacity-container');
opacityContainer[0].addEventListener(
  'mouseover', function(){
      opacityContainer[0].style.display = 'none'

      const headerFromHome = document.getElementsByClassName('presentation-container__header');
      headerFromHome[0].style.display = 'flex';
  }
)

opacityContainer[0].addEventListener(
  'mouseout', function(){
      opacityContainer[0].style.display = 'block'

      const headerFromHome = document.getElementsByClassName('presentation-container__header');
      headerFromHome[0].style.display = 'none';
  }
)