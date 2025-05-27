// Main Button Toggles
const mainButtons = document.querySelectorAll('.toggle-button');
mainButtons.forEach(button => {
  button.addEventListener('click', () => {
    mainButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Nav Button Toggles
const navButtons = document.querySelectorAll('.toggle-nav-button');
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});