const links = document.querySelectorAll('.sidebar a');

for (let link of links.values()) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.target;
    const section = document.getElementById(target);
    const sections = document.querySelectorAll('.section');
    
    links.forEach(l => {
      l.classList.remove('active');
    });
    link.classList.add('active');
    
    sections.forEach(s => {
      s.classList.remove('active');
    });
    section.classList.add('active');
  });
}

// Add 'active' class to first link and section
links[0].classList.add('active');
const section1 = document.getElementById('section1');
section1.classList.add('active');

const form = document.getElementById("message-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page refresh on form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // send message using AJAX or fetch API
  // replace the URL with the endpoint that handles message submission
  fetch("https://example.com/submit-message", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  // clear form fields after submission
  form.reset();
});