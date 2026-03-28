function setTheme(theme) {
    const themeBtn = document.getElementById("theme-toggle");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        if(themeBtn) themeBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        if(themeBtn) themeBtn.textContent = "🌙";
    }
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
});

const themeToggleBtn = document.getElementById("theme-toggle");
if(themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
}

const contactBtn = document.querySelector('.contact-btn');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close-btn');
const closeModalBtn = document.getElementById('closeModalBtn');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

const hideModal = () => {
    modal.style.display = 'none';
};

closeBtn.addEventListener('click', hideModal);
closeModalBtn.addEventListener('click', hideModal);

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        hideModal();
    }
});
