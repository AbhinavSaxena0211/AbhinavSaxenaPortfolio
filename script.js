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
      "Developed a full-stack web application using Java (Servlets, JDBC) and MySQL for backend functionality. Implemented secure user authentication, donor registration, and request matching. Designed a responsive UI using HTML, CSS, and JavaScript to enhance user interaction and experience.",
    technologies: [
      "Java (Servlets, JDBC)",
      ",",
      "MySQL",
      ",",
      "HTML",
      ",",
      "CSS",
      ",",
      "JavaScript",
    ],
  },
  {
    title: "Image Manipulation",
    description:
      "Developed an interactive web application for image editing, including resizing, filtering, and color adjustments.",
    technologies: ["HTML", ",", "CSS", ",", "JavaScript"],
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
        <div class="project-overlay">
          <div class="project-links">
            <a href="https://github.com/AbhinavSaxena0211/BloodSyncApplication" class="project-link"><i class="fas fa-link"></i></a>
            <a href="https://github.com/AbhinavSaxena0211/ImageManipulationApp" class="project-link"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");
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
