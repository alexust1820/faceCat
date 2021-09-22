const heroImg = document.getElementById('heroImg');
const heroImgItem = document.getElementById('heroImgItem');

heroImg.addEventListener("mousemove", hover);
heroImg.addEventListener("mouseout", out);

function hover(event) {
    const halfHeight = heroImg.offsetHeight / 2;
    heroImgItem.style.transform = `rotateX(${(event.offsetY - halfHeight) / 30}deg) rotateY(${-(event.offsetX - halfHeight) / 30}deg)`
}

function out(event) {
    heroImgItem.style.transform = `rotate(0)`
}