const el_btnNewGame = () => {
    const btnNewGame = document.getElementById('btnNewGame');

    btnNewGame.addEventListener('click', () => {
        console.log('click');
    },{once: true});
}


export default el_btnNewGame;