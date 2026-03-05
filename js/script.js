const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the class that triggers the CSS transition
          entry.target.classList.add("is-visible");
          // Once it's faded in, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, // Triggers when 15% of the image is visible
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
});
