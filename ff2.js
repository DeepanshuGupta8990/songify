console.log("welcome to Songify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogress");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"))


let songs = [
    { songname: "Wariyo mortals", filepath: "1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Cielo-Huma Huma", filepath: "2.mp3", coverpath: "covers/2.jpg" },
    { songname: "deaf Kev", filepath: "3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Diffrent heaven", filepath: "4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Janji Heroes", filepath: "5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Sakhiya", filepath: "6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Rafta Rafta", filepath: "7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Teri kasam", filepath: "8.mp3", coverpath: "covers/8.jpg" },
    { songname: "sanam", filepath: "9.mp3", coverpath: "covers/9.jpg" },
    { songname: "Salame-e-Ishq", filepath: "10.mp3", coverpath: "covers/10.jpg" },

]
songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
    })

}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {

       
        masterSongName.innerText = songs[songIndex].songname

        if (audioElement.paused || audioElement.currentTime <= 0) {
            // audioElement.currentTime=0;
            console.log("this")
            songIndex = parseInt(e.target.id)

            audioElement.src = `${songIndex + 1}.mp3`
            audioElement.play();
            makeAllPlays();
            gif.style.opacity = 1;
           
            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
        }
        else if(audioElement.currentTime > 0){
            audioElement.pause();
            console.log("helllo")
            masterPlay.classList.remove("fa-pause-circle")
            masterPlay.classList.add("fa-play-circle")
            gif.style.opacity = 0;
            e.target.classList.remove("fa-pause-circle")
            e.target.classList.add("fa-play-circle")

        }
    })
})

document.getElementById("next").addEventListener("click", () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    let a2 =document.getElementById(`${songIndex}`)
    makeAllPlays();
    a2.classList.remove("fa-play-circle")
    a2.classList.add("fa-pause-circle")
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})
document.getElementById("previous").addEventListener("click", () => {
    if (songIndex < 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    let a2 =document.getElementById(`${songIndex}`)
    makeAllPlays();
    a2.classList.remove("fa-play-circle")
    a2.classList.add("fa-pause-circle")
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})