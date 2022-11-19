const sendText = document.querySelector('.button--send'),
    sendVideoAudio = document.querySelector('.send-message__video-audio'),
    message = document.querySelector('.footer__textarea');

sendText.classList.add('hide');

message.addEventListener('keyup', () => {
    if (message.value != - '') {
        sendVideoAudio.classList.add('hide');
        sendText.classList.remove('hide');
    } else {
        sendText.classList.add('hide');
        sendVideoAudio.classList.remove('hide');
    }
});

const content = document.querySelector('.content');

sendText.addEventListener('click', () => {
    if (message.value != '') {
        content.innerHTML +=
            `
            <p class="content__send">${message.value}</p>
            `;
    }
})