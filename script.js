const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const scrollTopBtn = document.querySelector(".scroll-top");
const header = document.querySelector(".header");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }

  if (window.scrollY > 0) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });

      mobileMenuBtn.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-dot-outline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  setTimeout(() => {
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
  }, 100);
});

const projects = [
  {
    title: "BloodSync",
    description:
      "Full-stack web application using Java, JDBC & MySQL. Secure user authentication, donor registration, and responsive UI.",
    technologies: ["Java (Servlets,JDBC)","MySQL","HTML","CSS","JavaScript"],
    github: "https://github.com/AbhinavSaxena0211/BloodSyncApplication",
    live: "",
    image: "BloodSync.jpg"
  },
  {
    title: "Image Manipulation",
    description:
      "Interactive web application for image editing: resizing, filtering, color adjustments.",
    technologies: ["HTML","CSS","JavaScript"],
    github: "https://github.com/AbhinavSaxena0211/Image-Manipulation-App", 
    live: "https://image-manipulation-seven.vercel.app/",
    image: "ImageManipulation.png"
  },
  {
    title: "Weather Forecast Web App",
    description: 
      "Weather Forecast Web Application with API integration, dynamic city search, error handling, responsive UI.",
    technologies: ["HTML","CSS","JavaScript","REST APIs"],
    github: "https://github.com/AbhinavSaxena0211/Weather-Api-App", 
    live: "https://weather-api-app-coral.vercel.app/",
    image: "WeatherApp.png"
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "JAVA (Servlets & JDBC)", level: 75 },
      { name: "MYSQL", level: 70 },
      { name: "REST APIs(Basic)", level: 65 },
    ],
  },
];

const education = [
  {
    year: "2022 - Present",
    degree: "Bachelor of Technology (CSE-DS)",
    school: "LNCTE - RGPV",
    description:
      "Studying computer science with focus on web development and software engineering.",
  },
  {
    year: "2021 - 2022",
    degree: "Senior Secondary School",
    school: "St. Raphael",
    description:
      "Completed high school with focus on science, mathematics and computer science.",
  },
  {
    year: "2019 - 2020",
    degree: "Secondary School",
    school: "St. Raphael",
    description:
      "Completed secondary school with focus on science, mathematics .",
  },
];

function renderProjects() {
  const projectsGrid = document.querySelector(".projects-grid");
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
    <div class="project-card">
      <div class="project-image">
  <img src="${project.image}" alt="${project.title}">
  <div class="project-overlay">
    <div class="project-links">
      ${project.github ? `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>` : ""}
      ${project.live ? `<a href="${project.live}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i></a>` : ""}
    </div>
  </div>
</div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
  ${project.technologies.map((tech, index) => `<span>${tech}${index < project.technologies.length - 1 ? ', ' : ''}</span>`).join("")}
</div>
      </div>
    </div>
  `
    )
    .join("");
  document.querySelectorAll('.project-links a').forEach(link => {
    link.addEventListener('click', (e) => e.stopPropagation());
  });
}

function renderSkills() {
  const skillsContainer = document.querySelector(".skills-container");
  skillsContainer.innerHTML = skills
    .map(
      (category) => `
    <div class="skills-category">
      <h3>${category.category}</h3>
      <div class="skills-grid">
        ${category.items
          .map(
            (skill) => `
          <div class="skill-item">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

function renderEducation() {
  const timelineContainer = document.querySelector(".education-timeline");
  timelineContainer.innerHTML = education
    .map(
      (item, index) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>${item.degree}</h3>
        <span class="timeline-date">${item.year}</span>
        <p>${item.school}</p>
        <p>${item.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderEducation();
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      element.classList.add("animated");
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const particleCount = 80;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.radius = random(2, 5);
    this.vx = random(-0.5, 0.5);
    this.vy = random(-0.5, 0.5);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fill();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
    this.draw();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => p.update());
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

animate();














