import init from "./init";

const el_btnNewGame = () => {
    const btnNewGame = document.getElementById('btnNewGame');

    btnNewGame.addEventListener('click', () => {
        console.log('click');
        init();
    },{once: true});
}


export default el_btnNewGame;