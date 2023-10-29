let isVertical = false;
const clickButton = document.getElementById('button-mode');

function countDown() {
    const day = document.getElementById('day');
    const hour = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const totalSeconds = (new Date('19 dec 2023') - new Date()) / 1000;

    day.innerHTML = timeFormat(Math.floor(totalSeconds / 60 / 60 / 24));
    hour.innerHTML = timeFormat(Math.floor(totalSeconds / 60 / 60) % 24);
    minutes.innerHTML = timeFormat(Math.floor(totalSeconds / 60) % 60);
    seconds.innerHTML = timeFormat(Math.floor(totalSeconds) % 60);
}

function timeFormat( time ) {
    return time < 10 ? `0${time}` : time
}



clickButton.addEventListener('click', function () {
    clickButton.style.transform = 'scale(1)';
    setTimeout(() => {
        clickButton.style.transform = 'scale(1.1)';
    }, 100)

});

function displayMode() {
    setTimeout(() => {
        const timer = document.getElementsByClassName('timer')[0];
        const buttonMode = document.getElementById('button-mode');
    
        if (isVertical) {
            timer.style.display = 'grid';
            timer.style.gridAutoFlow = 'column';
            buttonMode.innerHTML = 'Modo Vertical';
            isVertical = false;
        } else {
            timer.style.display = 'block';
            timer.style.gridAutoFlow = 'row';
            buttonMode.innerHTML = 'Modo Horizontal';
            isVertical = true;
        }
    }, 500)
}

countDown();
setInterval(countDown, 1000);
