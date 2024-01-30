console.log("Hi I linked!");


let audioElement = new Audio('music/1.m4a');
let backButton = document.querySelector('#backButton');
let audioMasterButtom = document.querySelector('#masterButton');
let nextButton = document.querySelector('#nextButton');
let gif = document.querySelector('#gif');
let myProgressBar = document.querySelector('#myProgressBar')
let songItem = Array.from(document.getElementsByClassName('songItem'));

let musics = [
    { songName: 'Sun Raha Hai', filePath: 'music/1.m4a', coverPath: 'cover/first.png' },
    { songName: 'Har Gaya Gayi', filePath: 'music/2.m4a', coverPath: 'cover/bg2.png' },
    { songName: 'Sanam Chod Gayi', filePath: 'music/3.m4a', coverPath: 'cover/first.png' },
    { songName: 'Mai Deewana', filePath: 'music/4.m4a', coverPath: 'cover/bg2.png' },
    { songName: 'Pagal Hu Har Gali', filePath: 'music/5.m4a', coverPath: 'cover/bg2.png' },
    { songName: 'Mat Puch Sanam', filePath: 'music/6.m4a', coverPath: 'cover/first.png' },
    { songName: 'Tumse Kitna Pyar', filePath: 'music/7.m4a', coverPath: 'cover/first.png' },
    { songName: 'Kamal dil de diya', filePath: 'music/8.m4a', coverPath: 'cover/first.png' },
    { songName: 'Pao Ge Kya Ab', filePath: 'music/9.m4a', coverPath: 'cover/first.png' },
    { songName: 'Dil Ne Jise Apna', filePath: 'music/10.m4a', coverPath: 'cover/first.png' },
    { songName: 'Mar Chooka Hu Mai', filePath: 'music/11.m4a', coverPath: 'cover/first.png' },
    { songName: 'Kasam Ki Kasam', filePath: 'music/12.m4a', coverPath: 'cover/first.png' },
    { songName: 'Jaan Hai Bo Teri', filePath: 'music/13.m4a', coverPath: 'cover/first.png' },
]

songItem.forEach((Element, i) => {
    // console.log(Element, i);
    Element.getElementsByTagName("img")[0].src = musics[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = musics[i].songName;

})
//handle Play/Pause click...
audioMasterButtom.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        audioMasterButtom.classList.remove('fa-circle-play');
        audioMasterButtom.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        audioMasterButtom.classList.remove('fa-circle-pause');
        audioMasterButtom.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})


// Litsen To Events

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const playAll = () => {
    Array.from(document.getElementsByClassName('oneItem_id')).forEach((Element) => {
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');

    })

}

Array.from(document.getElementsByClassName('oneItem_id')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        playAll();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `music/${index + 1}.m4a`
        audioElement.currentTime = 0;
        audioElement.play()
    })

})