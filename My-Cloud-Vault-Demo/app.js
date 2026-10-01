// ==========================================
// DISCORD NAVIGATION SYSTEM & INTERACTIONS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.getElementById('dropdownBackdrop');
    const dropdownItems = document.querySelectorAll('.has-dropdown');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');

    // 1. Desktop Dropdown Backdrop Triggering
    dropdownItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            if (backdrop) {
                backdrop.classList.add('is-active');
            }
        });

        item.addEventListener('mouseleave', () => {
            if (backdrop) {
                backdrop.classList.remove('is-active');
            }
        });
    });

    // 2. Mobile Menu Toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('is-mobile-open');
        });
    }

    // 3. Password Visibility Toggle (Local Demo Interaction)
    const togglePasswordBtn = document.getElementById('togglePasswordBtn');
    const passwordInput = document.getElementById('mockup-password');

    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            const newType = isPassword ? 'text' : 'password';
            passwordInput.setAttribute('type', newType);

            togglePasswordBtn.setAttribute(
                'aria-label',
                isPassword ? 'Hide password' : 'Show password'
            );

            const showIcon = togglePasswordBtn.querySelector('.eye-icon-show');
            const hideIcon = togglePasswordBtn.querySelector('.eye-icon-hide');

            if (showIcon && hideIcon) {
                showIcon.style.display = isPassword ? 'none' : 'block';
                hideIcon.style.display = isPassword ? 'block' : 'none';
            }
        });
    }

    // 4. Continue Button Card Content Replacement (Inside Card)
    const mockupForm = document.getElementById('mockupForm');
    const cardMessageView = document.getElementById('cardMessageView');

    if (mockupForm && cardMessageView) {
        mockupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Hide the form elements and display the centered text state inside the card
            mockupForm.classList.add('is-hidden');
            cardMessageView.classList.remove('is-hidden');
        });
    }
});