const TOKEN = "8746565199:AAGmToeEBpOlvbva3L6JnjaNXpiec2b-qq0"
const CHAT_ID = "6546534687"

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector("#first").value;
    const lastName = document.querySelector("#last").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    let text = `
    New message:
firstName:${firstName}
lastName:${lastName}
phone:${phone}
email:${email}
message:${message}
    `;

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: text,
            }),
        }).then((response) => alert("Message sent successfully✅"))
        .catch((err) => (`Something went wrong ${err} ❌`))
})