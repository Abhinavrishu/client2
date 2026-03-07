document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.nav-links');
    var openBtn = document.querySelector('.mobile-menu-btn');
    
    if (!nav || !openBtn) {
        return;
    }

    var defaultBtnHtml = openBtn.innerHTML;
    var closeBtn = nav.querySelector('.bx-x');

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
        // Close all dropdowns when closing menu
        var dropdowns = nav.querySelectorAll('.links li.dropdown');
        dropdowns.forEach(function(item) {
            item.classList.remove('active');
        });
    }

    openBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (nav.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }

    // Handle dropdown clicks - attach to the LI element
    var dropdownItems = document.querySelectorAll('.links li.dropdown');
    dropdownItems.forEach(function(dropdownLi) {
        // Get the direct child anchor (the parent link)
        var parentLink = dropdownLi.querySelector(':scope > a');
        
        if (parentLink) {
            // Remove any href="#" navigation in mobile
            parentLink.addEventListener('click', function(e) {
                // Only prevent default and toggle in mobile view
                if (window.innerWidth <= 900) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns first
                    dropdownItems.forEach(function(item) {
                        if (item !== dropdownLi) {
                            item.classList.remove('active');
                        }
                    });
                    
                    // Toggle active class on the clicked dropdown
                    dropdownLi.classList.toggle('active');
                }
            }, true); // Use capture phase to ensure this runs first
        }

        // Close sidebar when clicking submenu items
        var submenuLinks = dropdownLi.querySelectorAll('.dropdown-menu a');
        submenuLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 900) {
                    // Don't prevent default - let the link navigate
                    setTimeout(closeMenu, 150);
                }
            });
        });
    });

    // Close menu for regular navigation links
    var regularLinks = nav.querySelectorAll('.links > li:not(.dropdown) > a');
    regularLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 900 && !link.classList.contains('download-btn') && !link.classList.contains('chat-btn')) {
                setTimeout(closeMenu, 150);
            }
        });
    });

    // Close menu when clicking on backdrop
    document.addEventListener('click', function (e) {
        if (
            nav.classList.contains('open') &&
            !nav.contains(e.target) &&
            !openBtn.contains(e.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
