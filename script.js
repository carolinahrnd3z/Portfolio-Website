const i = 0;
const text = "Aspiring Front-end Developer & UI/UX Designer";
const speed = 50;

function typeWriter(){
    if (i < text.length) {
        document.getElementById("home-description").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};