function startGame() {
    // starting a new game
    const messagesElements = document.getElementById('messages');
    messagesElements.innerText = 'Welcome to MultiMath! Starting new game...';
}

document.getElementById('startGame').addEventListener('click', startGame);
