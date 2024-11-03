
        // Smooth scrolling and section transition effect
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            
            // Function to activate section on scroll
            const activateSection = () => {
                const scrollPosition = window.scrollY + window.innerHeight / 2;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        section.classList.add('active');
                    } else {
                        section.classList.remove('active');
                    }
                });
            };

            // Initial activation
            activateSection();
            
            // Event listener for scroll
            window.addEventListener('scroll', activateSection);

            // Smooth scroll for navigation links
            const links = document.querySelectorAll('.nav-links a');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                });
            });
        });
    