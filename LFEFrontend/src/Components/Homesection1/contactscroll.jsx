import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            // Add animation class
            element.classList.add("animate");

            // Make sure the element is visible after animation
            element.classList.add("visible");

            // Remove after animation ends so it can be triggered again
            const onAnimationEnd = () => {
              element.classList.remove("animate");
              element.removeEventListener("animationend", onAnimationEnd);
            };

            element.addEventListener("animationend", onAnimationEnd);
          }
        });
      },
      { threshold: 0.2 } // element 20% visible
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
