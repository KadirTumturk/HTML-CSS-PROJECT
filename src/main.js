// =============================================
// Focus.Frame — Mobile menu + smooth scroll
// =============================================

// DOM yüklendikten sonra çalıştır (vite-plugin-html-inject zamanlama sorununa karşı)
window.addEventListener('DOMContentLoaded', () => {
  // Partial'ların yüklenmesini biraz bekle (html-inject async olabilir)
  setTimeout(() => {
    const menuButton = document.querySelector('.mobile-menu-btn');
    const closeButton = document.querySelector('.close-button');
    const modalSection = document.querySelector('.modal-section');

    // Modal menüyü aç
    if (menuButton && modalSection) {
      menuButton.addEventListener('click', () => {
        modalSection.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    }

    // Modal menüyü kapat
    if (closeButton && modalSection) {
      closeButton.addEventListener('click', () => {
        modalSection.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }

    // Modal menü içindeki linklerden birine tıklanınca da menüyü kapat
    const modalLinks = document.querySelectorAll('.modal-menu-nav-list a');
    modalLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (modalSection) {
          modalSection.classList.remove('is-open');
          document.body.style.overflow = '';
        }
      });
    });

    // Esc tuşuyla menüyü kapatma
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalSection?.classList.contains('is-open')) {
        modalSection.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }, 100);
});