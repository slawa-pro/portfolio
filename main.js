// burger
const burgerMenu = document.getElementById('burgerMenu');
const mobileBurgerMenu = document.getElementById('mobileBurgerMenu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('change');
  mobileBurgerMenu.classList.toggle('show');
});

//btn-header 
const modal = document.getElementById("modal");
const btn = document.querySelector(".header-btn");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//form
const botToken = '7839556640:AAG4Q8wq1dYY3jW0iXXne8AG-U0Wn_OfoZ0';
const chatId = '-1002301878270';

const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage`;

async function sendEmailTelegram(event) {
  event.preventDefault(); // отменим перезагрузку (SPA)

  const form = event.target;
  const formBtn = document.querySelector('.submit-btn');

  const { email, text } = Object.fromEntries(new FormData(form).entries()); // превращаем данные формы в массив

  console.log('Email:', email);
  console.log('Message:', text);

  const message = `
    Новый запрос с сайта:
    Адрес: ${email}
    Сообщение: ${text}
  `;

  try {
    const response = await fetch(telegramAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message 
      })
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('Success:', jsonResponse);
      alert('Your request has been passed');
    } else {
      console.error('Error from server:', response.statusText);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
}
