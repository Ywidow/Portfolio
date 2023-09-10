const portfolioSection = document.getElementById('Portfólio');

const buttonFromPortfolioSection = portfolioSection.getElementsByClassName('section__button');
buttonFromPortfolioSection[0].addEventListener(
  'click', function(){
    const ulWithImages = portfolioSection.getElementsByClassName('portfolio-section__images-list');

    if(buttonFromPortfolioSection[0].classList.contains('button-more')){
      const liFromUlWithImages = ulWithImages[0].getElementsByTagName('li');

      for(let i = 0; i < liFromUlWithImages.length; i++){
        if(liFromUlWithImages[i].classList.contains('disabled')){
          liFromUlWithImages[i].style.display = 'block';
        }
      }

      buttonFromPortfolioSection[0].classList.add('button-less');
      buttonFromPortfolioSection[0].classList.remove('button-more');
      buttonFromPortfolioSection[0].textContent = "LESS";
    }
    else if(buttonFromPortfolioSection[0].classList.contains('button-less')){
      const liFromUlWithImages = ulWithImages[0].getElementsByTagName('li');

      for(let i = 0; i < liFromUlWithImages.length; i++){
        if(liFromUlWithImages[i].classList.contains('disabled')){
          liFromUlWithImages[i].style.display = 'none';
        }
      }

      buttonFromPortfolioSection[0].classList.add('button-more');
      buttonFromPortfolioSection[0].classList.remove('button-less');
      buttonFromPortfolioSection[0].textContent = "MORE";
    }
  }
)

function AlterandoBotãoClickado(buttonsListItem, buttonListItem, button){
  for(let i = 0; i < buttonsListItem.length; i++){
    if(buttonsListItem[i] == buttonListItem){
      button.classList.add('portfolio-section__button--color-size--orange-big');

      let buttonText = button.getElementsByTagName('span');

      buttonText[0].classList.remove('portfolio-section__text');
      buttonText[0].classList.add('portfolio-section__text--display--active');
    }
    else{
      let buttonInsideButtonsListItem = buttonsListItem[i].getElementsByTagName('button');

      if(buttonInsideButtonsListItem[0].classList.contains('portfolio-section__button--color-size--orange-big')){
        buttonInsideButtonsListItem[0].classList.remove('portfolio-section__button--color-size--orange-big');

        let buttonText = buttonInsideButtonsListItem[0].getElementsByTagName('span');

        buttonText[0].classList.remove('portfolio-section__text--display--active');
        buttonText[0].classList.add('portfolio-section__text');
      }
    }
  }
}

function AlterandoImagens(buttonList, buttonsListItem, buttonListItem, button){
  for(let i = 0; i < buttonsListItem.length; i++){
    if(buttonsListItem[i] == buttonListItem){
      if(button.classList.contains('teste-palette__button')){
        // Pegando todas as listas (images, buttons).
        let allLists = buttonList.parentNode.getElementsByTagName('ul');

        setTimeout(
          function(){
            // Removendo a classe portfolio-teste__image (Classe retira a lista da visibilidade)..
            allLists[2].classList.remove('portfolio-teste__image');

            // Adicionando a classe portfolio-section__images-list (Classe que permite a visualização da lista das imagens).
            allLists[2].classList.add('portfolio-section__images-list');

          },200
        ); 

        allLists[2].classList.add('portfolio-section__images-list--animation--to-right');

        setTimeout(
          function(){
            container.classList.remove('portfolio-section__images-list--animation--to-right');
          },200
        ); 


        // Laço para acessar todas as listas (images, buttons).
        for(let i = 0; i < allLists.length; i++){
          // Caso a lista possua a classe portfolio-section__images-list (Classe que permite a visualização da lista das imagens).
          if(allLists[i].classList.contains('portfolio-section__images-list') && allLists[i] != allLists[2]){
            setTimeout(
              function(){
                allLists[i].classList.remove('portfolio-section__images-list');

                // e adiciona a classe que impossibilita a visualização das imagens.
                allLists[i].classList.add('portfolio-teste__image');
              }, 200
            ); 
          }
        }
      }
      else if(button.classList.contains('teste-camera__button')){
        // Pegando todas as listas (images, buttons).
        let allLists = buttonList.parentNode.getElementsByTagName('ul');

        setTimeout(
          function(){
            // Removendo a classe portfolio-teste__image (Classe retira a lista da visibilidade)..
            allLists[3].classList.remove('portfolio-teste__image');

            // Adicionando a classe portfolio-section__images-list (Classe que permite a visualização da lista das imagens).
            allLists[3].classList.add('portfolio-section__images-list');

          },200
        ); 

        allLists[3].classList.add('portfolio-section__images-list--animation--to-right');

        setTimeout(
          function(){
            container.classList.remove('portfolio-section__images-list--animation--to-right');
          },200
        ); 

        // Laço para acessar todas as listas (images, buttons).
        for(let i = 0; i < allLists.length; i++){
          // Caso a lista possua a classe portfolio-section__images-list (Classe que permite a visualização da lista das imagens).
          if(allLists[i].classList.contains('portfolio-section__images-list') && allLists[i] != allLists[3]){
            setTimeout(
              function(){
                allLists[i].classList.remove('portfolio-section__images-list');

                // e adiciona a classe que impossibilita a visualização das imagens.
                allLists[i].classList.add('portfolio-teste__image');
              }, 200
            ); 
          }
        }
      }
      else{
        // Pegando todas as listas (images, buttons).
        let allLists = buttonList.parentNode.getElementsByTagName('ul');

        setTimeout(
          function(){
            // Removendo a classe portfolio-teste__image (Classe retira a lista da visibilidade)..
            allLists[1].classList.remove('portfolio-teste__image');

            // Adicionando a classe portfolio-section__images-list (Classe que permite a visualização da lista das imagens).
            allLists[1].classList.add('portfolio-section__images-list');

          },200
        ); 

        allLists[1].classList.add('portfolio-section__images-list--animation--to-right');


        // Laço para acessar todas as listas (images, buttons).
        for(let i = 0; i < allLists.length; i++){
          // Caso a lista possua a classe portfolio-section__images-list (Classe que permite a visualização da lista das imagens).
          if(allLists[i].classList.contains('portfolio-section__images-list') && allLists[i] != allLists[1]){
            setTimeout(
              function(){
                allLists[i].classList.remove('portfolio-section__images-list');

                // e adiciona a classe que impossibilita a visualização das imagens.
                allLists[i].classList.add('portfolio-teste__image');
              }, 200
            ); 
          }
        }
      }
    }
  }
}

function Click(button){
  const buttonListItem = button.parentNode;
  const buttonList = buttonListItem.parentNode;

  const buttonsListItem = buttonList.getElementsByTagName('li');

  AlterandoBotãoClickado(buttonsListItem, buttonListItem, button);

  AlterandoImagens(buttonList, buttonsListItem, buttonListItem, button);
}

function EntradaDoMouse(imageFather, image){
  let imagesInFather = imageFather.getElementsByTagName('img');

  for(let i = 0; i < imagesInFather.length; i++){
    if(imagesInFather[i] != image){
      imagesInFather[i].classList.remove("portfolio-section__image");
      imagesInFather[i].classList.add('portfolio-section__image--size--small');
    }
    else{
      imagesInFather[i].classList.remove("portfolio-section__image");
      imagesInFather[i].classList.add('portfolio-section__image--size--big');
    }
  }
}

function SaidaDoMouse(imageFather, image){
  let imagesInFather = imageFather.getElementsByTagName('img');

  for(let i = 0; i < imagesInFather.length; i++){
    if(imagesInFather[i] != image){
      imagesInFather[i].classList.remove("portfolio-section__image--size--small");
      imagesInFather[i].classList.add('portfolio-section__image');
    }
    else{
      imagesInFather[i].classList.remove("portfolio-section__image--size--big");
      imagesInFather[i].classList.add('portfolio-section__image');
    }
  }
}