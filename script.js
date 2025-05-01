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

// Add About content and toggle Read More
window.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about');
  if (!aboutSection) return;

  const readMoreBtn = document.createElement('button');
  readMoreBtn.textContent = 'Read More';
  readMoreBtn.className = 'read-more-btn';

  const profileImg = '<img src="nayan.jpg" alt="Nayan Acharya" class="profile-img" />';

  const fullText = `
    <h2>About Me</h2>
    ${profileImg}
    <p>
      I am a dedicated Survey Engineering professional with 10 years of experience in surveying and mapping. I hold a Junior Survey Training Certificate from the Land Management Training Centre, which provided me with a strong foundation in the field. Currently, I am pursuing a Bachelor’s degree in Geomatics Engineering from Kathmandu University to further enhance my expertise.
    </p>
    <p>
      I am passionate about learning, leadership, and working in dynamic environments. I enjoy collaborating with diverse teams to achieve shared goals and strive for continuous growth. Beyond my profession, I like engaging in creative and meaningful activities that fuel my drive to make a positive impact.
    </p>
  `;

  const truncatedText = `
    <h2>About Me</h2>
    ${profileImg}
    <p>
      I am a dedicated Survey Engineering professional with 10 years of experience in surveying and mapping.
    </p>
  `;

  let isExpanded = false;
  aboutSection.innerHTML = truncatedText;
  aboutSection.appendChild(readMoreBtn);

  readMoreBtn.addEventListener('click', () => {
    aboutSection.innerHTML = isExpanded ? truncatedText : fullText;
    aboutSection.appendChild(readMoreBtn);
    readMoreBtn.textContent = isExpanded ? 'Read More' : 'Read Less';
    isExpanded = !isExpanded;
  });
});
