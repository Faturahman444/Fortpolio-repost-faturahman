/*============================ toogle icon navbar ============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============================ scroll section active link ============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
        };
    });
    /*============================ sticky navbar ============================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================ remove toogle icon and navbar when click navbar link (scroll) ============================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*============================ scroll reveal ============================*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============================ Social Media Smooth Animation ============================*/
const socialIcons = document.querySelectorAll('.social-media a');

socialIcons.forEach((icon, index) => {
    icon.style.opacity = '0'; // Set initial opacity to 0
    icon.style.transform = 'translateY(20px)'; // Start with a slight downward translation

    // Add animation with delay based on index
    setTimeout(() => {
        icon.style.opacity = '1'; // Fade in
        icon.style.transform = 'translateY(0)'; // Move to its final position
        icon.style.transition = `all 0.5s ease ${index * 100}ms`; // Delay based on index
    }, index * 200);
});




/*============================ Download btn ============================*/
ScrollReveal().reveal('.btn', { origin: 'bottom' });


/*============================ typed js ============================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Learning Engineer', 'Administrator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 200,
    loop: true
});

// Pilih elemen .about-img
const aboutImage = document.querySelector('.about-img img');
// Menambahkan event listener untuk klik
aboutImage.addEventListener('click', () => {
  // Tambahkan kelas 'clicked' saat gambar diklik
  aboutImage.classList.add('clicked');

  // Hapus kelas 'clicked' setelah animasi selesai (0.8 detik)
  setTimeout(() => {
    aboutImage.classList.remove('clicked');
  }, 800);
});

// Untuk memastikan animasi juga bekerja dengan sentuhan (misalnya di perangkat mobile)
aboutImg.addEventListener('touchstart', function () {
  aboutImg.classList.add('clicked');
  setTimeout(() => {
    aboutImg.classList.remove('clicked');
  }, 800);
});


  
  




