const $menuHamburguer = document.querySelector(".header__menu-hamburguer");
const $menu = document.querySelector(".menu");

$menuHamburguer.addEventListener("click", () => {
  $menu.classList.toggle('menu--mobile');
});