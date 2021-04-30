{
  const welcome = () => {
    console.log("Cześć wszystkim!");
  }

  const ImageRemove = () => {
    const imageButton = document.querySelector(".js-image__remove");
    const imageRemove = document.querySelector(".section__aboutImage");
    imageRemove.classList.toggle("hidden__image");
    imageButton.innerText = imageRemove.classList.contains("hidden__image")
      ? "Pokaż zdjęcie"
      : "Ukryj zdjęcie";
  };

  const hideMenu = () => {
    const buttonMenu = document.querySelector(".js-menu__remove");
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("hide__navigation");
    buttonMenu.innerText = navigation.classList.contains("hide__navigation")
      ? "Pokaż menu"
      : "Ukryj menu";
  };

  const init = () => {
    const imageButton = document.querySelector(".js-image__remove");
    imageButton.addEventListener("click", ImageRemove);
    const buttonMenu = document.querySelector(".js-menu__remove");
    buttonMenu.addEventListener("click", hideMenu);
    

    
  };
  
  

  init();

  welcome();
}
