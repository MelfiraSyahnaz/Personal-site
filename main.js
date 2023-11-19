import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed("#element", {
  strings: ["Melfira Syahnaz", "Fullstack Engineer", "Devscale Student"],
  typeSpeed: 50,
});

const appreciateBtn = document.getElementById("boom");
appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});
