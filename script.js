// Toggle Light/Dark Mode
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Custom Form Validation
document.getElementById('farmer-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('form-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (name === '') {
    message.textContent = 'Name is required.';
    message.style.color = 'red';
  } else if (!emailRegex.test(email)) {
    message.textContent = 'Enter a valid email address.';
    message.style.color = 'red';
  } else if (!passwordRegex.test(password)) {
    message.textContent = 'Password must be at least 6 characters, include letters and numbers.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Registration successful!';
    message.style.color = 'green';
    this.reset();
  }
});
