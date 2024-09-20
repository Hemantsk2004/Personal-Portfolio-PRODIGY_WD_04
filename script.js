window.onload = function() {
    const heroText = ["Building innovative web pages", "Creating responsive designs", "Crafting beautiful UI"];
    let currentTextIndex = 0;

    function rotateHeroText() {
        const heroTagline = document.querySelector('#hero p');
        heroTagline.textContent = heroText[currentTextIndex];
        currentTextIndex = (currentTextIndex + 1) % heroText.length;
    }

    setInterval(rotateHeroText, 3000);


    window.addEventListener('scroll', function() {
        const header = document.querySelector('nav');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'forestgreen';
            header.style.transition = 'background-color 0.3s';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
};
