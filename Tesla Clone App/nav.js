const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('.side').className='side active';
    document.querySelector('header nav a').className = 'header nav a active';
}

const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('.side').className='side';
    document.querySelector('header nav a').className = 'header nav a';
}

document.getElementById("menu-btn").onclick = (event) => {
    event.preventDefault();
    openMenu();
}

document.querySelector('.side .buttons button').onclick = (event) => {
    closeMenu();
}

document.querySelector('.backdrop').onclick = (event) => {
    closeMenu();
}