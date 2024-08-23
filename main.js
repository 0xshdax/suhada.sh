document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    let colorShift = 0;
    
    const animateBackground = () => {
        colorShift = (colorShift + 1) % 360;
        background.style.background = `linear-gradient(45deg, ${getColorShift(colorShift)}, #000000)`;
        requestAnimationFrame(animateBackground);
    };
    function getColorShift(shift) {
        const color = `hsl(${shift}, 10%, 10%)`;
        return color;
    }

    animateBackground();
});
