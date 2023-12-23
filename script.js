document.addEventListener("DOMContentLoaded", function () {
    const gifs = document.querySelectorAll(".floating-gif");

    gifs.forEach((gif) => {
        setInitialPosition(gif);
        animateGif(gif);
    });

    function setInitialPosition(gif) {
        const maxX = window.innerWidth - gif.clientWidth;
        const maxY = window.innerHeight - gif.clientHeight;

        let posX = (Math.random() > 0.5) ? 0 : maxX;
        let posY = (Math.random() > 0.5) ? 0 : maxY;

        gif.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    function animateGif(gif) {
        const maxX = window.innerWidth - gif.clientWidth;
        const maxY = window.innerHeight - gif.clientHeight;

        let posX = parseFloat(gif.style.transform.split("(")[1]);
        let posY = parseFloat(gif.style.transform.split(",")[1]);

        let speedX = (Math.random() - 0.5) * 4; // Random horizontal speed
        let speedY = (Math.random() - 0.5) * 4; // Random vertical speed

        function updatePosition() {
            posX += speedX;
            posY += speedY;

            // Bounce and reverse direction on horizontal edges
            if (posX < 0 || posX > maxX) {
                speedX *= -1;
                posX = Math.max(0, Math.min(posX, maxX));
            }

            // Bounce and reverse direction on vertical edges
            if (posY < 0 || posY > maxY) {
                speedY *= -1;
                posY = Math.max(0, Math.min(posY, maxY));
            }

            gif.style.transform = `translate(${posX}px, ${posY}px)`;
            requestAnimationFrame(updatePosition);
        }

        updatePosition();
    }
});
