const contactSection = document.getElementById('Contato');

const formFromContactSection = contactSection.getElementsByTagName('form');
formFromContactSection[0].addEventListener(
  'submit', function(){
    localStorage.setItem("FormStatus", "Succes");
  }
);