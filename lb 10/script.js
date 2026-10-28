document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Валідація
    if (name === "" || email === "" || message === "") {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    // Виведення повідомлення
    alert(`Дякую, ${name}! Ваше повідомлення успішно надіслано.`);
    
    // Виведення у консоль
    console.log("Отримані дані з форми:");
    console.log("Ім'я: " + name);
    console.log("Email: " + email);
    console.log("Повідомлення: " + message);

    // Очищення форми
    this.reset();
});