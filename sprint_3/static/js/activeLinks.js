let currentPath = window.location.pathname;

if (currentPath.slice(-1) === '/') {
    currentPath = currentPath.slice(0, -1);
}

// Remove the leading slash
currentPath = currentPath.substring(1);

const homeLink = document.querySelector('.home-link');
const aboutLink = document.querySelector('.about-link');
const contributorsLink = document.querySelector('.contributors-link');

// Find the corresponding navigation link and add the "active" class
if (currentPath === '' || currentPath === 'home') {
    // If it's the home page
    if (aboutLink.classList.contains('active')){
        aboutLink.classList.remove('active');
    }
    if (contributorsLink.classList.contains('active')){
        contributorsLink.classList.remove('active');
    }
    homeLink.classList.add('active');
} 
if (currentPath === 'about') {
    // If it's the About page
    if (homeLink.classList.contains('active')){
        homeLink.classList.remove('active');
    }
    if (contributorsLink.classList.contains('active')){
        contributorsLink.classList.remove('active');
    }
    aboutLink.classList.add('active');
}

if (currentPath === 'contributors') {
    // If it's the Contributors page
    if (homeLink.classList.contains('active')){
        homeLink.classList.remove('active');
    }
    if(aboutLink.classList.contains('active')){
        aboutLink.classList.remove('active')
    }
    contributorsLink.classList.add('active');
} 