document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('.header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    if (header && mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            const isOpened = header.classList.toggle('is-menu-open');
            document.body.style.overflow = isOpened ? 'hidden' : '';
        });
    }

    const popupTriggers = document.querySelectorAll('[data-popup-target]');
    const closePopupButtons = document.querySelectorAll('[data-close-popup]');
    let currentlyOpenPopup = null;

    const closeCurrentPopup = () => {
        if (currentlyOpenPopup) {
            currentlyOpenPopup.classList.remove('is-visible');
            currentlyOpenPopup = null;
            if (!header.classList.contains('is-menu-open')) {
                document.body.style.overflow = '';
            }
        }
    };

    const openPopup = (popupId) => {
        if (currentlyOpenPopup) {
            closeCurrentPopup();
        }
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
            currentlyOpenPopup = popup;
        }
    };

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const popupId = trigger.dataset.popupTarget;
            openPopup(popupId);
        });
    });

    closePopupButtons.forEach(button => {
        button.addEventListener('click', closeCurrentPopup);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && currentlyOpenPopup) {
            closeCurrentPopup();
        }
    });

    const loginButton = document.querySelector('.header__actions .button--login');
    const registerButton = document.querySelector('.header__actions .button--signup');
    const bannerButton = document.querySelector('.banner__button');

    if (loginButton) loginButton.addEventListener('click', (e) => { e.preventDefault(); openPopup('login-popup'); });
    if (registerButton) registerButton.addEventListener('click', (e) => { e.preventDefault(); openPopup('register-popup'); });
    if (bannerButton) bannerButton.addEventListener('click', (e) => { e.preventDefault(); openPopup('bonus-popup'); });
});