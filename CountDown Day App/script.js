const days = document.getElementById('day');
const hours = document.getElementById('hour');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');
const svgWrap = document.getElementById('svg');

const animItem = bodymovin.loadAnimation({
    wrapper: svgWrap,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_u4yrau.json'
});

let timer;

function checkDate(){
    const currentDay = new Date();
    const pastDate = new Date(`May 31 2021 11:00:00`);

    let pastTime = pastDate - currentDay;

    if(pastTime < 0){
        days.innerHTML = '00';
        hours.innerHTML = '00';
        mins.innerHTML = '00';
        secs.innerHTML = '00';
        animItem.goToAndPlay(0, true);
    } else {
        timer = setInterval(countdown, 1000);
    }
}

function countdown() {
    const deadline = new Date(`May 31 2021 11:00:00`);

    const currentTime = new Date();
    const diff = deadline - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
 
    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    mins.innerHTML = m < 10 ? '0' + m : m;
    secs.innerHTML = s < 10 ? '0' + s : s;

        if(d == 0 && h == 0 && m == 0 && s == 0){
            clearInterval(timer);
            days.innerHTML = '00';
            hours.innerHTML = '00';
            mins.innerHTML = '00';
            secs.innerHTML = '00';

            animItem.goToAndPlay(0, true);
        }
}


checkDate();