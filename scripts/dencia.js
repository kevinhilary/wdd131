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
    const message = "Ooops my love💖💚💛, You just made me the happiest person alive 😍\n\n" +
                    "I have been meaning to say this properly instead of rushing it in bits and pieces.💕🌹\n\n" +
                    "You genuinely mean alot to me, more than I usually say out loud. \n\n" +
                    "In a world that's always moving fast, you're the part of my life that makes me pause, smile and feel grounded. \n\n" +
                    "Honestly, I want to genuinely appreciate the love, understanding and closeness you have shown to me. \n\n" +
                    "All the soft and romantic moments we share never go unnoticed 💟💛💟. \n\n" +
                    "Thank you for trusting me and loving me unnconditionally❤️\n\n" + 
                    "💐 HAPPY VALENTINES DAY BABY 💐 \n\n" +
                    "I LOVE YOU SO MUCH \n\n" + 
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