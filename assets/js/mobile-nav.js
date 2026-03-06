document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav-links');
    var openBtn = document.querySelector('.mobile-menu-btn');
    if (!nav || !openBtn) return;

    var defaultBtnHtml = openBtn.innerHTML;
    var closeBtn = nav.querySelector('.bx-x');
    var navAnchors = nav.querySelectorAll('a');

    function openMenu() {
        nav.classList.add('open');
        openBtn.setAttribute('aria-expanded', 'true');
        openBtn.classList.add('is-open');
        openBtn.innerHTML = '&times;';
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        nav.classList.remove('open');
        openBtn.setAttribute('aria-expanded', 'false');
        openBtn.classList.remove('is-open');
        openBtn.innerHTML = defaultBtnHtml;
        document.body.classList.remove('menu-open');
    }

    openBtn.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    navAnchors.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
