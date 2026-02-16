const menuBtn = document.getElementById("menu");
const sidebar = document.querySelector("nav.sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active"); });

// Get form and confirmation container
const bookingForm = document.getElementById('bookingForm');
const confirmation = document.getElementById('confirmation');

// Load saved form data from localStorage if available
window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('bookingFormData'));
    if (savedData) {
        bookingForm.studentName.value = savedData.studentName || '';
        bookingForm.email.value = savedData.email || '';
        bookingForm.phone.value = savedData.phone || '';
        bookingForm.apartment.value = savedData.apartment || '';
        bookingForm.requests.value = savedData.requests || '';
    }
});

// Handle form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Gather form data
    const formData = {
        studentName: bookingForm.studentName.value.trim(),
        email: bookingForm.email.value.trim(),
        phone: bookingForm.phone.value.trim(),
        apartment: bookingForm.apartment.value,
        requests: bookingForm.requests.value.trim()
    };

    // Simple validation
    if (!formData.studentName || !formData.email || !formData.phone || !formData.apartment) {
        confirmation.style.display = 'block';
        confirmation.style.backgroundColor = '#ffcccc';
        confirmation.textContent = 'Please fill in all required fields.';
        return;
    }

    // Save data to localStorage
    localStorage.setItem('bookingFormData', JSON.stringify(formData));

    // Show confirmation
    confirmation.style.display = 'block';
    confirmation.style.backgroundColor = '#ccffcc';
    confirmation.textContent = `Thank you, ${formData.studentName}! Your booking for ${formData.apartment} has been recorded.`;

    // Optional: reset form
    bookingForm.reset();
});