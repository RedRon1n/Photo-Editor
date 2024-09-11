const revealActivator = document.querySelector("#reveal-activator");
const revealSeparator = document.querySelector("#reveal-separator");
const heroImage1 = document.querySelector("#hero-image-1");

if (revealActivator && revealSeparator && heroImage1) {
  revealActivator.addEventListener("mouseover", (event) => {
    revealSeparator.style.animation = "none";
    heroImage1.style.animation = "none";
  });
  revealActivator.addEventListener("mouseout", (event) => {
    revealSeparator.style.animation = null;
    heroImage1.style.animation = null;
  });
  revealActivator.addEventListener("mousemove", (event) => {
    let position = event.clientX - event.target.getBoundingClientRect().left;
    if (position >= 0) {
      revealSeparator.style.left = `${position - revealSeparator.clientWidth / 2}px`;
      heroImage1.style.WebkitClipPath = `inset(0px 0px 0px ${position}px)`;
    }
  });
}