const displayNarrative = async (content, cb) => {
    const narrativeContainer = document.querySelector('.narrativeContainer');
    const textContainer = narrativeContainer.querySelector('.narrativeTextContainer');
    let btnNext = narrativeContainer.querySelector('#btnNext');
    let i = 0;
    console.log(i);

    displayNarrativeLoop(content);

    function displayNarrativeLoop(content) {
        if (narrativeContainer.classList.contains('hidden')) {
            narrativeContainer.classList.remove('hidden');
        }
    
        console.log(content)
        textContainer.textContent = content[i];
    
        btnNext.addEventListener('click', () => {
            textContainer.textContent = "";
            narrativeContainer.classList.add('hidden');
            console.log(content.length);
            if (i < content.length - 1) {
                i++;
                console.log(i);
                displayNarrativeLoop(content);
            } else {
                console.log(i);
                narrativeContainer.classList.add('hidden');
                cb();
            }
        }, {once: true});
    }
}

export default displayNarrative;