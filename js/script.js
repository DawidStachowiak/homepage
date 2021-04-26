console.log ("Cześć wszystkim dodano do repo  gita");

let button = document.querySelector(".js-image__remove");
let imageRemove = document.querySelector(".image");
let buttonMenu = document.querySelector(".js-menu__remove");
let navigation = document.querySelector(".navigation");



button.addEventListener("click", () => {
  imageRemove.classList.toggle("hidden__image");
  button.innerText = imageRemove.classList.contains("hidden__image") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";

});
 

buttonMenu.addEventListener("click", () =>{
navigation.classList.toggle("hide__navigation");
buttonMenu.innerText = navigation.classList.contains("hide__navigation") ? "Pokaż menu" : "Ukryj menu";
}
);



