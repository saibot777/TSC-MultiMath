function startGame() {

    let playerName : string = 'Stefan';
    logPlayer(playerName);

    let messageElement : HTMLElement | null = document.getElementById('messages');
    messageElement!.innerText = 'Welcome to MultiMath! Starting new game...';
    console.log('Starting new game.')
}

function logPlayer(name:any) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);



