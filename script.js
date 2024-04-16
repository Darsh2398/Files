
document.addEventListener("DOMContentLoaded"), function () {
    // Business button click event listener
    const businessButton = document.querySelector(".header-button:nth-child(1)");
    businessButton.addEventListener("click", () => {
      const introductionContainer = document.querySelector(".introduction-container");
      if (introductionContainer) {
        introductionContainer.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Introduction container for Business AI not found.");
      }
    });
  
    // Productivity button click event listener
    const productivityButton = document.querySelector(".header-button:nth-child(2)");
    productivityButton.addEventListener("click", () => {
      const introductionContainer1 = document.querySelector(".introduction-container1");
      if (introductionContainer1) {
        introductionContainer1.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Introduction container for Productivity Improvement not found.");
      }
    });
  }
  
    // Theme switch event listener
    const themeSwitch = document.getElementById("themeSwitch");
    function toggleTheme() {
      if (themeSwitch.checked) {
        // Dark theme selected
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark"); // Store theme preference
      } else {
        // Light theme selected
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light"); // Store theme preference
      }
    }
    themeSwitch.addEventListener("change", toggleTheme);
  
    // Check the initial theme preference
    if (localStorage.getItem("theme") === "dark") {
      themeSwitch.checked = true;
      toggleTheme();
    }
  
    // Scroll event listener
    window.addEventListener('scroll', function () {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const scrollPosition = window.scrollY;
  
      // Calculate the width of the blue line based on scroll position
      const maxLineWidth = window.innerWidth;
      const lineWidth = Math.min(maxLineWidth, scrollPosition / headerHeight * maxLineWidth);
  
      // Update the width of the blue line
      document.getElementById('blue-line').style.width = lineWidth + 'px';
    });
  
    // Slider functionality
    const slider = document.querySelector('.slider');
    const sliderWidth = slider.offsetWidth;
    let scrollAmount = 0;
  
    function slideLeft() {
      if (scrollAmount <= 0) return;
      scrollAmount -= sliderWidth;
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
  
    function slideRight() {
      if (scrollAmount >= slider.scrollWidth - sliderWidth) return;
      scrollAmount += sliderWidth;
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
  
    // Event listeners for arrow buttons
    document.querySelector('.left-arrow-button').addEventListener('click', slideLeft);
    document.querySelector('.right-arrow-button').addEventListener('click', slideRight);
  
    // Scroll to top function
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
  