document.getElementById("btnView").addEventListener("click", function () {
  var myModal = new bootstrap.Modal(document.querySelector("#show"));
  myModal.show();
});


document.addEventListener("DOMContentLoaded", function () {
  const imgContainers = document.querySelectorAll(".img-container");
  const modalImage = document.querySelector("#imageModal img");
  const modalDescription = document.querySelector(
    "#imageModal .img-description-modal"
  );

  imgContainers.forEach((container) => {
    const img = container.querySelector("img");
    const description = container
      .querySelector("a")
      .getAttribute("data-description");

    img.addEventListener("click", function () {
      const src = img.getAttribute("src");
      modalImage.setAttribute("src", src);
      modalDescription.textContent = description; // Set the description from data-description attribute
    });
  });
});



 

  // Get all the navigation links
  const navLinks = document.querySelectorAll('#a-link');

  // Add a click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Prevent the default link behavior to avoid scrolling
      event.preventDefault();

      // Remove the 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add the 'active' class to the clicked link
      this.classList.add('active');

      // Get the target section's ID to scroll to
      const targetId = this.getAttribute('href');

      // Find the target section element using its ID
      const targetSection = document.querySelector(targetId);

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
