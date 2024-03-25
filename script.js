document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the hide class
    const toggleHideClass = (element) => {
      element.classList.toggle('hide');
    }
  
    // Select the description section
    const description = document.getElementById('description');
  
    // Add click event listener to header
    document.getElementById('header').addEventListener('click', (event) => {
      // Check if the clicked element is within the header
      if (event.target.closest('#header')) {
        // Toggle hide class on description
        toggleHideClass(description);
      }
    });
  
  });