function startGame() {
    // starting a new game

    let  playerName: string = 'Audrey';
    logPlayer(playerName);

    let messagesElements: HTMLElement | string;

    if (typeof  messagesElements === 'string') {
        return messagesElements;
    } else {
        return messagesElements;
    }

    messagesElements = 5;

    messagesElements = document.getElementById('messages');
    messagesElements!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

