{
  const welcome = () => {
    console.log("Cześć wszystkim!");
  };

  let button = document.querySelector(".js-image__remove");
  let imageRemove = document.querySelector(".image");

  const oneClickImageRemove = () => {
    let button = document.querySelector(".js-image__remove");
    let imageRemove = document.querySelector(".image");
    imageRemove.classList.toggle("hidden__image");
    button.innerText = imageRemove.classList.contains("hidden__image")
      ? "Pokaż zdjęcie"
      : "Ukryj zdjęcie";
  };

  const oneClickMenuToggle = () => {
    const buttonMenu = document.querySelector(".js-menu__remove");
    const navigation = document.querySelector(".navigation");

    navigation.classList.toggle("hide__navigation");

    buttonMenu.innerText = navigation.classList.contains("hide__navigation")
      ? "Pokaż menu"
      : "Ukryj menu";
  };

  const init = () => {
    const buttonMenu = document.querySelector(".js-menu__remove");
    buttonMenu.addEventListener("click", oneClickMenuToggle);
    button.addEventListener("click", oneClickImageRemove);
  };

  welcome();

  init();
}
