window.addEventListener('load', function() {
    var elements = document.querySelectorAll('.fade-in, .slide-in');

    elements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });

    window.addEventListener('scroll', function() {
        elements.forEach(function(element) {
            var elementPosition = element.getBoundingClientRect().top;
            var screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    });
});