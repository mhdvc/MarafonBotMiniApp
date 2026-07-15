import { loadHome } from "./home.js";
import { loadProfile } from "./profile.js";
import { loadTimer } from "./timer.js";

const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe.user;

const hello = document.getElementById("hello");
const avatar = document.getElementById("avatar");
const page = document.getElementById("page-home");

if (user) {
    hello.textContent = `👋 Salom, ${user.first_name}`;
    avatar.textContent = user.first_name[0].toUpperCase();
}

function showHome() {
    page.innerHTML = loadHome();
}

function showProfile() {
    page.innerHTML = loadProfile(user);
}

function showTimer() {
    page.innerHTML = loadTimer();
}

showHome();

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.onclick = () => {

        document.querySelectorAll(".nav-btn").forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        switch (btn.id) {
            case "home":
                showHome();
                break;

            case "profile":
                showProfile();
                break;

            case "timer":
                showTimer();
                break;
        }
    };
});
