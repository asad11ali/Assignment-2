const menu = document.getElementById('menu');

function hideMenu() {
  menu.style.right = '-200px';
}
function showMenu() {
  menu.style.right = '0';
}

hideMenu();
showMenu();