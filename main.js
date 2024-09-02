/*togglebar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Function to toggle the navbar visibility
const toggleNavbar = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// Add click event to menu icon
menuIcon.onclick = () => {
    toggleNavbar();
};

// Function to close the navbar
const closeNavbar = () => {
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// Add click events to all nav links to close the navbar on click (for mobile view)
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Adjust the width as needed
            closeNavbar();
        }
    });
});

/*scroll*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*removetoggle*/
    if (window.innerWidth > 768) { // Only remove toggle on larger screens
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    }
};

/*scroll reveal*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .certify-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*typed js*/
const typed = new Typed('.multiple-text', {
    strings: ['UI/UX Designer', 'Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
