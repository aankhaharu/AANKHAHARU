// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight current section in nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Read More functionality
const readMoreBtn = document.getElementById('readMoreBtn');
const shortBio = document.getElementById('about-short');
const fullBio = document.getElementById('about-full');

let isExpanded = false;

readMoreBtn.addEventListener('click', () => {
  if (isExpanded) {
    fullBio.style.display = 'none';
    shortBio.style.display = 'block';
    readMoreBtn.textContent = 'Read More';
  } else {
    fullBio.style.display = 'block';
    shortBio.style.display = 'none';
    readMoreBtn.textContent = 'Read Less';
  }
  isExpanded = !isExpanded;
});



