export function loadTimer() {

    return `

    <div class="timer-page">

        <h2>⏱ Dars Taymeri</h2>

        <div class="timer-circle">

            <svg width="240" height="240">

                <circle
                    cx="120"
                    cy="120"
                    r="100"
                    stroke="#23324f"
                    stroke-width="12"
                    fill="none"
                />

                <circle
                    id="progressCircle"
                    cx="120"
                    cy="120"
                    r="100"
                    stroke="#3b82f6"
                    stroke-width="12"
                    fill="none"
                    stroke-linecap="round"
                    stroke-dasharray="628"
                    stroke-dashoffset="628"
                    transform="rotate(-90 120 120)"
                />

            </svg>

            <div class="timer-text">

                <h1 id="timerValue">
                    00:00:00
                </h1>

                <p>
                    Bugungi dars
                </p>

            </div>

        </div>

        <div class="timer-buttons">

            <button id="startTimer">
                ▶️ Boshlash
            </button>

            <button id="pauseTimer">
                ⏸ Pauza
            </button>

            <button id="stopTimer">
                ⏹ To'xtatish
            </button>

        </div>

    </div>

    `;

}