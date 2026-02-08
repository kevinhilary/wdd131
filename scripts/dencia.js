const yes = document.getElementById("yes");
const no = document.getElementById("no");
const answer = document.getElementById("answer");
const heartsContainer = document.querySelector(".hearts");

yes.onclick = () => {
    document.body.innerHTML = `
        <div class="surprise">
            <h2>💖 Baby 💖</h2>
            <p id="loveMessage"></p>
        </div>
    `;

    // Heartfelt typing message
    const message = "You just made me the happiest person alive 😍\n\n" +
                    "I promise to cherish you, laugh with you, and love you every day 💕🌹\n\n" +
                    "Thank you for trusting me ❤️\n\n" + 
                    "I LOVE YOU SO MUCH BABY \n\n" + 
                    "❤✨❤✨";

    const loveMessageEl = document.getElementById("loveMessage");
    let i = 0;
    const speed = 45;

    function typeEffect() {
        if (i < message.length) {
            loveMessageEl.innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }
    typeEffect();

    // Floating roses
    function createRose() {
        const rose = document.createElement("div");
        rose.classList.add("rose");
        rose.innerHTML = "🌹";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.fontSize = Math.random() * 30 + 20 + "px";
        rose.style.animationDuration = (Math.random() * 5 + 5) + "s";
        document.body.appendChild(rose);

        setTimeout(() => rose.remove(), 10000);
    }

    setInterval(createRose, 500);
};

function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    no.style.transform = `translate(${x}px, ${y}px)`;
}

no.addEventListener("mouseover", moveNoButton);   // For laptops
no.addEventListener("touchstart", moveNoButton);  // For phones

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);