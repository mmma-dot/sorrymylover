document.getElementById("forgive-btn").addEventListener("click", function() {
    alert("Спасибо, моя любовь! Ты делаешь меня самым счастливым человеком ❤️");
    document.getElementById("music").play();
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
