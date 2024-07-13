const aboutLink = document.querySelector('.scnd_lnk a[href="#about"]');
        
        // Add a click event listener to the About link
        aboutLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor click behavior
            
            // Scroll to the About section smoothly
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });