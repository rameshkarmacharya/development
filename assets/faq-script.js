// Get all the FAQ buttons
const faqButtons = document.querySelectorAll('.faq-button');

// Add event listener to each button
faqButtons.forEach(button => {
  button.addEventListener('click', function() {
    const content = this.nextElementSibling;
    // Toggle the visibility of the content
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
