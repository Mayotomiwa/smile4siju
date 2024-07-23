function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.style.maxHeight = menu.scrollHeight + 'px';
    } else {
        menu.style.maxHeight = '0';
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300);
    }
}