const determineCultureNominationDisplay = () => {
    window.scrollTo(0, 0);
    const displayed = window.location.hash.match(/culture-nominations/);
    if (displayed) {
        document.querySelector('.main-content').classList.add('blurred');
        document.querySelector('.culture-noms').classList.add('displayed');
    } else {
        document.querySelector('.main-content').classList.remove('blurred');
        document.querySelector('.culture-noms').classList.remove('displayed');
    }
};

window.addEventListener('hashchange', determineCultureNominationDisplay);

determineCultureNominationDisplay();
