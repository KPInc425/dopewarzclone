import { displayLoanSharkUI } from "./displayLoansharkUI";

const el_clickLoanShark = () => {
    const btnLoanShark = document.getElementById('btnLoanShark');

    btnLoanShark.addEventListener('click', () => {
        console.log('click');
        displayLoanSharkUI();
    }, {once: true})
}

export {
    el_clickLoanShark,
}