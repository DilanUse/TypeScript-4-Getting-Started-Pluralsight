function startGame() {
    // starting a new game

    const  playerName: string = 'Audrey';
    logPlayer(playerName);

    const messagesElements = document.getElementById('messages');
    messagesElements!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

