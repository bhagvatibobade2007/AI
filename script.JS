const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
    const text = inputEl.value.trim();
    if (!text) return;
    appendMessage('You', text);
    inputEl.value = '';
    simulateAIResponse(text);
});

function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = 'message';
    msg.textContent = `${sender}: ${text}`;
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

function simulateAIResponse(userText) {
    // placeholder AI response
    setTimeout(() => {
        appendMessage('AI', `You said: "${userText}"`);
    }, 800);
}