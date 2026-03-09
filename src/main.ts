import "./reset.css";
import "./style.css";
import lottie from "lottie-web";
const menuBtn = document.getElementById("lottie-menu") as HTMLElement;
const menuAnimation = lottie.loadAnimation({
  container: menuBtn!, // the DOM element
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "data_new.json", // the path to the animation json file
});
menuAnimation.setSpeed(2);

menuBtn.addEventListener("click", () => {
  if (menuBtn.dataset.state == "off") {
    menuBtn.dataset.state = "on";
    lottie.setDirection(1);
    lottie.play();
  } else {
    menuBtn.dataset.state = "off";
    lottie.setDirection(-1);
    lottie.play();
  }
});
