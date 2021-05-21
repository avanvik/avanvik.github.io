const projects = document.getElementsByClassName("project"); // Get all elements on the page with class "project"
const projectsArray = Array.from(projects); // Convert to an array, so we can loop over it later

// Define function for fading in elements (by giving them a css class called "visible")
function fadeInScrolledElements() {
  projectsArray.forEach((element) => {
    // Define the criteria for being scrolled into view
    const isScrolledIntoView = window.scrollY + window.innerHeight - 200 > element.offsetTop;

    // When the criteria are met (i.e. equals "true") add the "visible" class to the element
    if (isScrolledIntoView) {
      element.classList.add("visible");
    }
  });
}

// Runs Every time we scroll a pixel: check if a project is now within view
window.addEventListener("scroll", fadeInScrolledElements);

// Runs once: If page is scrolled when refreshed, fade in elements without requiring initial scrolling
fadeInScrolledElements();
