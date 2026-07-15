export function loadProfile(user) {

    return `

    <div class="profile-page">

        <div class="profile-header">

            <div class="profile-avatar">
                ${user ? user.first_name.charAt(0).toUpperCase() : "👤"}
            </div>

            <h2>
                ${user ? user.first_name : "Foydalanuvchi"}
            </h2>

            <p>
                @${user?.username || "username"}
            </p>

        </div>

        <div class="profile-card">

            <div class="item">
                <span>🆔 Telegram ID</span>
                <b>${user?.id || "-"}</b>
            </div>

            <div class="item">
                <span>🔥 Streak</span>
                <b>12 kun</b>
            </div>

            <div class="item">
                <span>📚 Jami vaqt</span>
                <b>58 soat</b>
            </div>

            <div class="item">
                <span>🏆 Reyting</span>
                <b>#7</b>
            </div>

            <div class="item">
                <span>💰 Referal</span>
                <b>12 000 so'm</b>
            </div>

            <div class="item">
                <span>✅ To'lov</span>
                <b style="color:#22c55e;">Tasdiqlangan</b>
            </div>

        </div>

    </div>

    `;

}