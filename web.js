const section = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  {
    threshold: 0.4,
  },
);

section.forEach((sect) => observer.observe(sect));
observer.observe(document.querySelector("footer"));
