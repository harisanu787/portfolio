/* togglebar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const toggleNavbar = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

menuIcon.onclick = () => {
    toggleNavbar();
};

const closeNavbar = () => {
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeNavbar();
        }
    });
});

/* scroll */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    if (window.innerWidth > 768) {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    }
};

/* scroll reveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .certify-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['SAP FICO consultant', 'Workflow Specialist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/* ===============================
   EMAILJS CONTACT FORM LOGIC
================================ */

// Initialize EmailJS
(function () {
    emailjs.init("VvX_o9rLMDbZnYI4C"); // 🔴 Replace this
})();

const contactForm = document.querySelector('.contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validate inputs
        const fullName = contactForm.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Email Address"]').value.trim();
        const mobile = contactForm.querySelector('input[placeholder="Mobile Number"]').value.trim();
        const subject = contactForm.querySelector('input[placeholder="Email Subject"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (!fullName || !email || !mobile || !subject || !message) {
            alert("Please fill in all fields");
            return;
        }

        const templateParams = {
            full_name: fullName,
            email: email,
            mobile: mobile,
            subject: subject,
            message: message
        };

        emailjs.send(
            "service_fag309l",   // 🔴 Replace this
            "template_n0g1gdq",  // 🔴 Replace this
            templateParams
        )
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Error: " + (error.text || error.message || "Unknown error"));
        });
    });
} else {
    console.warn("Contact form not found");
}
