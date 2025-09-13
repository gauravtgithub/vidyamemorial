function showTab(tabId) {
  // Hide all sections
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected tab
  document.getElementById(tabId).classList.add('active');

  // Close menu after clicking a link (mobile)
  document.querySelector("#navbar ul").classList.remove("show");
}

function toggleMenu() {
  document.querySelector("#navbar ul").classList.toggle("show");
}