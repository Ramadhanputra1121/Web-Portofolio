const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}

function toggleDescription(element) {
    const description = element.querySelector('.description');
    if (description.style.display === 'none') {
        description.style.display = 'flex';
    } else {
        description.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("hi43ev1fYZR7vdeto"); // Replace 'YOUR_USER_ID' with your EmailJS user ID

  document.getElementById('submitButton').addEventListener('click', function() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return; // Prevent further execution
      }

      // Check if email domain is allowed
      var allowedDomains = ['gmail.com', 'yahoo.com']; // Add more allowed domains as needed
      var domain = email.split('@')[1]; // Get domain part of email
      if (allowedDomains.indexOf(domain) === -1) {
          alert('Only Gmail and Yahoo email addresses are allowed.');
          return; // Prevent further execution
      }

      var templateParams = {
          from_name: name,
          to_email: 'ramadhanputra1121@gmail.com', // Your email address here
          from_email: email,
          message: message
      };

      emailjs.send('service_qhyeuk7', 'template_mi6o5uc', templateParams)
          .then(function(response) {
              console.log('Email sent successfully:', response);
              // Clear the form fields after successful submission
              document.getElementById('name').value = '';
              document.getElementById('email').value = '';
              document.getElementById('message').value = '';
              // Optionally, display a success message to the user
              alert('Your message has been sent successfully!');
          }, function(error) {
              console.error('Error sending email:', error);
              // Optionally, display an error message to the user
              alert('Error sending message! Please try again later.');
          });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
      button.addEventListener("click", () => {
          const filter = button.dataset.filter;

          projectCards.forEach(card => {
              const categories = card.getAttribute("data-categories").split(",");

              if (categories.includes(filter) || filter === "all") {
                  card.style.display = "block";
              } else {
                  card.style.display = "none";
              }
          });

          // Hapus kelas 'active' dari semua tombol filter
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Tambahkan kembali kelas 'active' hanya pada tombol yang diklik
          button.classList.add('active');
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const dropdownFilter = document.getElementById("dropdownFilter");
  const filterButtons = document.querySelectorAll(".dropdown-item");

    dropdownFilter.addEventListener("click", function() {
        const filterButtons = document.querySelectorAll(".dropdown-item");
        filterButtons.forEach(button => {
            const filter = button.dataset.filter;
            dropdownFilter.innerHTML = `<i class="bi bi-funnel-fill"></i> ${button.textContent}`;
            filterCards(filter);
        });
    });

  filterButtons.forEach(button => {
      button.addEventListener("click", function() {
          const filter = button.dataset.filter;
          dropdownFilter.innerHTML = `<i class="bi bi-funnel-fill"></i> ${button.textContent}`;
          filterCards(filter);
      });
  });

  function filterCards(filter) {
      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach(card => {
          if (filter === "all" || card.dataset.categories.includes(filter)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth', block: 'start', inline: 'nearest' });
}

function toggleDescription(element) {
  const description = element.querySelector('.description');
  if (description.style.display === 'none') {
      description.style.display = 'flex';
  } else {
      description.style.display = 'none';
  }
}
