const careers = [
  { title: "Engineering", description: "Engineering is the field of building, designing, and creating useful solutions using science and technology. Whether it's constructing bridges, designing machines, or coding apps, engineering offers many branches like Mechanical, Civil, Electrical, and Computer to match different interests." },
  { title: "Medical/Healthcare", description: "This field is about saving lives and improving health. From doctors and nurses to lab technicians and pharmacists, the medical world involves treating patients, preventing diseases, and ensuring overall well-being." },
  { title: "Law", description: "Law is about justice, rights, and rules. Lawyers, judges, and legal advisors work to solve disputes, protect people’s rights, and ensure fair decisions in society. It's a respected and responsible career path." },
  { title: "BMS/Business", description: "Commerce deals with money, trade, and management. It includes careers in finance, marketing, accounting, banking, and entrepreneurship. This field is perfect for those interested in business, economy, and numbers." },
  { title: "Arts & Humanities", description: "This field explores society, culture, language, and human behavior. It includes subjects like psychology, history, literature, and sociology. It’s ideal for creative thinkers and those passionate about understanding people and cultures." },
  { title: "Science & Research", description: "Science is about discovering how the world works. From physics and chemistry to biology and environmental science, this field involves experiments, studies, and innovations that solve real-world problems." },
  { title: "Media & Design", description: "Media and Design is for creative minds who love visuals, storytelling, and communication. It includes graphic design, animation, filmmaking, journalism, and advertising—shaping what we see and hear every day." },
  { title: "IT/CS", description: "This is the world of coding, apps, software, and the internet. IT professionals build websites, develop apps, manage data, and protect digital systems. It’s one of the fastest-growing and in-demand fields today." }
];

const titleEl = document.getElementById("writer");
const descEl = document.getElementById("desc");
const centerImage = document.getElementById("centerDisplay");
const images = document.querySelectorAll(".imgBx img");

let index = 0;
let imgIndex = 0;

function animateText(text, container) {
  container.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.animationDelay = `${i * 0.25}s`;
    container.appendChild(span);
  }
}

function animateDescription(text, container, callback) {
  container.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    container.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 15);
}

function showCareer() {
  const { title, description } = careers[index];
  animateText(title, titleEl);
  animateDescription(description, descEl, () => {
    // Wait a bit after typing finishes, then show the next one
    setTimeout(showCareer, 1500);
  });
  index = (index + 1) % careers.length;
}

function cycleImages() {
  centerImage.src = images[imgIndex].src;
  imgIndex = (imgIndex + 1) % images.length;
  setTimeout(cycleImages, 1875);
}

// Start both cycles
showCareer();
cycleImages();
