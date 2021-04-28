{
  const welcome = () => {
    console.log("Cześć wszystkim!");
  }

  const oneClickImageRemove = () => {
    const button = document.querySelector(".js-image__remove");
    const imageRemove = document.querySelector(".image");
    imageRemove.classList.toggle("hidden__image");
    button.innerText = imageRemove.classList.contains("hidden__image")
      ? "Pokaż zdjęcie"
      : "Ukryj zdjęcie";
  };

  const oneClickMenuToggle = () => {
    
    const navigation = document.querySelector(".navigation");
    const buttonMenu = document.querySelector(".js-menu__remove");
    navigation.classList.toggle("hide__navigation");
    buttonMenu.innerText = navigation.classList.contains("hide__navigation")
      ? "Pokaż menu"
      : "Ukryj menu";
  };

  const init = () => {
    const button = document.querySelector(".js-image__remove");
    button.addEventListener("click", oneClickImageRemove);
    const buttonMenu = document.querySelector(".js-menu__remove");
    buttonMenu.addEventListener("click", oneClickMenuToggle);
    

    welcome();
  };
  
  

  init();
}
