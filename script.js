const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

if (user) {
    document.getElementById("username").innerHTML =
        `👋 ${user.first_name}`;
}

document.getElementById("profile").onclick = () => {
    alert("👤 Profil sahifasi tez orada tayyor bo'ladi.");
};

document.getElementById("timer").onclick = () => {
    alert("⏱ Taymer sahifasi tez orada tayyor bo'ladi.");
};

document.getElementById("rating").onclick = () => {
    alert("🏆 Reyting sahifasi tez orada tayyor bo'ladi.");
};

document.getElementById("payment").onclick = () => {
    alert("💳 To'lov sahifasi tez orada tayyor bo'ladi.");
};

document.getElementById("referral").onclick = () => {
    alert("👥 Referal sahifasi tez orada tayyor bo'ladi.");
};

document.getElementById("settings").onclick = () => {
    alert("⚙️ Sozlamalar tez orada tayyor bo'ladi.");
};