const graphicDesignContent = document.getElementById("graphic-design-content");
const graphicDesignBtn = document.getElementById("graphicBtn");

graphicDesignBtn.addEventListener("click", () => {
  graphicDesignContent.classList.toggle("hidden");
  graphicDesignContent.classList.contains("hidden")
    ? (graphicDesignBtn.textContent = "Show")
    : (graphicDesignBtn.textContent = "Hide");
});

const motionContent = document.getElementById("motion-content");
const motionBtn = document.getElementById("motionBtn");

motionBtn.addEventListener("click", () => {
  motionContent.classList.toggle("hidden");
  motionContent.classList.contains("hidden")
    ? (motionBtn.textContent = "Show")
    : (motionBtn.textContent = "Hide");
});

const infoContent = document.getElementById("infographics-content");
const infoBtn = document.getElementById("infographicsBtn");

infoBtn.addEventListener("click", () => {
  infoContent.classList.toggle("hidden");
  infoContent.classList.contains("hidden")
    ? (infoBtn.textContent = "Show")
    : (infoBtn.textContent = "Hide");
});

const webContent = document.getElementById("web-content");
const webBtn = document.getElementById("webBtn");

webBtn.addEventListener("click", () => {
  webContent.classList.toggle("hidden");
  webContent.classList.contains("hidden")
    ? (webBtn.textContent = "Show")
    : (webBtn.textContent = "Hide");
});
