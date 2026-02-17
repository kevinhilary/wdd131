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

// ===== Tips Data =====
const tips = [
  {
    category: "water",
    title: "Check Water Availability",
    content: "Ask tenants about water shortages and confirm presence of storage tanks."
  },
  {
    category: "rent",
    title: "Compare Rent Prices",
    content: "Compare multiple apartments to ensure you are paying fair market price."
  },
  {
    category: "security",
    title: "Evaluate Security",
    content: "Check for lighting, guards, and secure doors before booking."
  },
  {
    category: "rent",
    title: "Understand Deposit Terms",
    content: "Clarify refund conditions before paying deposit."
  },
  {
    category: "water",
    title: "Ask About Utility Bills",
    content: "Confirm whether water and electricity bills are included in rent."
  }
];

const tipsContainer = document.getElementById("tipsContainer");
const buttons = document.querySelectorAll(".filter-buttons button");

// ===== Display Function =====
function showTips(category) {

  tipsContainer.innerHTML = "";

  let filteredTips;

  if (category === "all") {
    filteredTips = tips;
  } else {
    filteredTips = tips.filter(tip => tip.category === category);
  }

  filteredTips.forEach(tip => {
    const card = document.createElement("div");
    card.classList.add("tip-card");

    card.innerHTML = `
      <div class="tip-title">${tip.title}</div>
      <div class="tip-content">${tip.content}</div>
    `;

    // Toggle content (accordion)
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });

    tipsContainer.appendChild(card);
  });

  // Save selected category
  localStorage.setItem("selectedCategory", category);
}

// ===== Button Click Events =====
buttons.forEach(button => {
  button.addEventListener("click", function () {

    // Remove active from all
    buttons.forEach(btn => btn.classList.remove("active"));

    this.classList.add("active");

    const category = this.dataset.category;

    showTips(category);
  });
});

// ===== Load Page =====
window.addEventListener("DOMContentLoaded", function () {

  const savedCategory = localStorage.getItem("selectedCategory") || "all";

  // Activate correct button safely
  buttons.forEach(button => {
    if (button.dataset.category === savedCategory) {
      button.classList.add("active");
    }
  });

  showTips(savedCategory);
});