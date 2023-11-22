const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEle = document.getElementById("current-time");
const durationEle = document.getElementById("duration");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const video = document.getElementById("vidBack");
// Music
let ambientSong = [
    {
        name: "As The World Caves In",
        displayName: "As The World Caves In",
        artist: "Sarah Cothran",
    },
    {
        name: "Ylang Ylang",
        displayName: "Ylang Ylang",
        artist: "FKJ",
    },
    {
        name: "Mrs Magic",
        displayName: "Mrs Magic",
        artist: "Strawberry Guy",
    },
    {
        name: "waste",
        displayName: "waste",
        artist: "KXLLSWXTCH",
    },
    {
        name: "pastlive",
        displayName: "past lives",
        artist: "sapientdream",
    },
    {
        name: "In This Shirt",
        displayName: "In This Shirt",
        artist: "The Irrepressibles",
    },
    {
        name: "Here With Me",
        displayName: "Here With Me",
        artist: "d4vd",
    },
    {
        name: "snowfall",
        displayName: "snowfall",
        artist: "Øneheart",
    },
    {
        name: "nostalgia",
        displayName: "nostalgia",
        artist: "Øneheart",
    },
    {
        name: "Melancholy",
        displayName: "Melancholy",
        artist: "WHITE CHERRY",
    },
    {
        name: "We're Finally Landing",
        displayName: "We're Finally Landing",
        artist: "Home",
    },
    {
        name: "My Love Mine All Mine",
        displayName: "My Love Mine All Mine",
        artist: "Mitski",
    },
];
// ,
// {
//     name: "",
//     displayName: "",
//     artist: ""
// }

let phonkSong = [
    {
        name: "Prolly The Spookiest Beat",
        displayName: "Prolly The Spookiest Beat",
        artist: "Trapbabyjerry",
    },
    {
        name: "MURDER IN MY MIND",
        displayName: "MURDER IN MY MIND",
        artist: "KORDHELL",
    },
    {
        name: "Sahara",
        displayName: "Sahara",
        artist: "Hensonn",
    },
    {
        name: "METAMORPHOSIS",
        displayName: "METAMORPHOSIS",
        artist: "INTERWORLD",
    },
    {
        name: "NEON BLADE",
        displayName: "NEON BLADE",
        artist: "MoonDeity",
    },
    {
        name: "GigaChad Theme",
        displayName: "GigaChad Theme",
        artist: "Phonk House",
    },
    {
        name: "WAKE UP",
        displayName: "WAKE UP!",
        artist: "MoonDeity",
    },
    {
        name: "Close Eyes",
        displayName: "Close Eyes",
        artist: "DVRST",
    },
    {
        name: "Why Not",
        displayName: "Why Not",
        artist: "Ghostface Playa",
    },
    {
        name: "After Dark",
        displayName: "After Dark",
        artist: "Mr.Kitty",
    },
    {
        name: "Call Me",
        displayName: "Call Me",
        artist: "plenka",
    },
    {
        name: "PRINCE OF DARKNESS",
        displayName: "PRINCE OF DARKNESS",
        artist: "KXNVRA",
    },
    {
        name: "TOKYO HEAT (Club Mix)",
        displayName: "TOKYO HEAT (Club Mix)",
        artist: "C.H.A.Y.",
    },
    {
        name: "It Goes Like Heat",
        displayName: "It Goes Like Heat",
        artist: "C.H.A.Y.",
    },
    {
        name: "Dreams",
        displayName: "Dreams",
        artist: "ZHU & Nero",
    },
    {
        name: "johnwick_redcircleandshotfired",
        displayName: "Red Circle",
        artist: "Le Castle Vania",
    },
    {
        name: "johnwick_booldcode",
        displayName: "Blood Code",
        artist: "Le Castle Vania",
    },
    {
        name: "johnwick_wetwork",
        displayName: "Wetwork",
        artist: "Le Castle Vania",
    },
    {
        name: "johnwick_mix",
        displayName: "Complete John Wick Mode Mix",
        artist: "Le Castle Vania",
    },
];
// ,
// {
//     name: "",
//     displayName: "",
//     artist: ""
// }

let randomSong = [
    {
        name: "Lonely",
        displayName: "Lonely",
        artist: "Akon",
    },
    {
        name: "Safe And Sound",
        displayName: "Safe And Sound",
        artist: "Capital Cities",
    },
    {
        name: "What You Wont Do for Love",
        displayName: "What You Wont Do for Love",
        artist: "Bobby Caldwell",
    },
    {
        name: "Starships",
        displayName: "Starships",
        artist: "Nicki Minaj",
    },
    {
        name: "5050",
        displayName: "50//50",
        artist: "VANTAGE",
    },
    {
        name: "I'll Do It",
        displayName: "I'll Do It",
        artist: "Heidi Montag",
    },
    {
        name: "resonance",
        displayName: "resonance",
        artist: "HOME",
    },
    {
        name: "mienman",
        displayName: "Miên Man",
        artist: "Minh Huy",
    },
    {
        name: "Sleep walk",
        displayName: "Sleep walk [Original instrumental]",
        artist: "Santo & Johnny",
    },
    {
        name: "Every Breath You Take",
        displayName: "Every Breath You Take",
        artist: "The Police",
    },
    {
        name: "Moonlight",
        displayName: "Moonlight",
        artist: "Kali Uchis",
    },
    {
        name: "Divine Failure Instrumental",
        displayName: "Divine Failure Instrumental",
        artist: "elsooyer",
    },
    {
        name: "Save Your Tears",
        displayName: "Save Your Tears",
        artist: "The Weeknd & Ariana Grande",
    },
    {
        name: "MARY ON A CROSS",
        displayName: "MARY ON A CROSS",
        artist: "GHOST",
    },
    {
        name: "Where Is My Mind",
        displayName: "Where Is My Mind",
        artist: "The Pixies",
    },

    {
        name: "we fell in love in october",
        displayName: "we fell in love in october",
        artist: "girl in red",
    },
    {
        name: "The Perfect Girl",
        displayName: "The Perfect Girl",
        artist: "Mareux",
    },
    {
        name: "Lost Memory",
        displayName: "Lost Memory",
        artist: "VØJ, Narvent",
    },
    {
        name: "Sweater Weather",
        displayName: "Sweater Weather",
        artist: "The Neighbourhood",
    },
    {
        name: "Collide",
        displayName: "Collide",
        artist: "Avicii (ft. Leona Lewis)",
    },
    {
        name: "johnwick_ending",
        displayName: "Complete John Wick Mode Mix",
        artist: "Le Castle Vania",
    },
    {
        name: "THINK by KALEIDA",
        displayName: "THINK by KALEIDA",
        artist: "Kaleida",
    },
    {
        name: "johnwick_inmymind",
        displayName: "In My Mind",
        artist: "M86 ft. Susie Q",
    },
    {
        name: "L'Amour Toujours",
        displayName: "L'Amour Toujours",
        artist: "Dzeko & Torres",
    },
    {
        name: "Million Days",
        displayName: "Million Days",
        artist: "Sabai",
    },
    {
        name: "MAYDAY",
        displayName: "MAYDAY",
        artist: "TheFatRat",
    },
    {
        name: "Arena Queue",
        displayName: "Arena Queue",
        artist: "League Of Legends",
    },
    {
        name: "Hẹn Em",
        displayName: "Hẹn Em",
        artist: "Nguyenn",
    },
    {
        name: "Cold Heart",
        displayName: "Cold Heart",
        artist: "Elton John, Dua Lipa",
    },
    {
        name: "As It Was",
        displayName: "As It Was",
        artist: "Harry Styles",
    },
    {
        name: "California Gurls",
        displayName: "California Gurls",
        artist: "Katy Perry",
    },
    {
        name: "You Belong With Me",
        displayName: "You Belong With Me",
        artist: "Taylor Swift",
    },
    {
        name: "Notion",
        displayName: "Notion",
        artist: "The Rare Occasions",
    },
    {
        name: "Puppy Love",
        displayName: "Puppy Love",
        artist: "Paul Anka",
    },
];
// ,
// {
//     name: "",
//     displayName: "",
//     artist: ""
// }

let vinaSong = [
    {
        name: "Tum Dum Dum",
        displayName: "Tum Dum Dum",
        artist: "DJ Vavva",
    },
    {
        name: "Don't Ya",
        displayName: "Don't Ya",
        artist: "Sea Ft Dj Nek",
    },
    {
        name: "Supper Bom",
        displayName: "Supper Bom",
        artist: "DJ Nick",
    },
    {
        name: "WHAT",
        displayName: "WHAT",
        artist: "Rnbstylerz & AREES",
    },
    {
        name: "Thereon",
        displayName: "Light It Up x Rise",
        artist: "Thereon",
    },
];


// ,
// {
//     name: "",
//     displayName: "",
//     artist: ""
// }
// Check if playing
var c = 0;
let isPlaying = false;
let songs = [];
let songIndex;
checkPlaylist();

function checkPlaylist() {
    switch (c) {
        case 0:
            {
                unShuffledSongs = ambientSong;
            }
            break;
        case 1:
            {
                unShuffledSongs = phonkSong;
            }
            break;
        case 2:
            {
                unShuffledSongs = randomSong;
            }
            break;
        case 3: {
            unShuffledSongs = vinaSong;
        }
    }
    pauseSong();
    songs = [...unShuffledSongs];
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    // On load: Select first song randomly
    songIndex = Math.floor(Math.random() * songs.length);
    loadSong(songs[songIndex]);
    currentTimeEle.textContent = "0:00";
    progress.style.width = `0%`;
}


// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    if(String(song.name).includes("johnwick")){
        image.src = `img/music/johnwick.jpg`;
        return
    }
    image.src = `img/music/${song.name}.jpg`;
}

//mute if playing
function vidCondition() {
    if (isPlaying) {
        video.play();
        return
    }
    video.pause();
}

// Set Song Duration when it's possible to play a song
function setSongDuration(e) {
    const totalSeconds = Math.floor(e.target.duration);
    const durationMinutes = Math.floor(totalSeconds / 60);
    let durationSeconds = totalSeconds % 60;
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }
    durationEle.textContent = `${durationMinutes}:${durationSeconds}`;
}

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
    vidCondition();
    changeVideoBackground();
}

function changeVideoBackground(whatKind,extension) {
    switch (whatKind) {
        case "ambient":
            {
                if (!checkVideo("bg_ambient")) {
                    changeSource("./video/bg_ambient.webm");
                }
            }
            break;
        case "random":
            {
                if (!checkVideo("Blade Runner 2049 _JOI Nude Advertisement_ scene 4k")) {
                    changeSource("./video/Blade Runner 2049 _JOI Nude Advertisement_ scene 4k.webm");
                }
                if (songs[songIndex].name === "Where Is My Mind") {
                    if (!checkVideo("noucan")) {
                        changeSource("./video/noucan.webm");
                    }
                } else if (checkVideo("noucan")) {
                    changeSource("./video/Blade Runner 2049 _JOI Nude Advertisement_ scene 4k.webm");
                }
            }
            break;
        case "phonk": {
            if (!checkVideo("bg_phonk")) {
                changeSource("./video/bg_phonk.mp4");
            }
        }; break;
        case "vinahouse":{
            if (!checkVideo("bg_vinahouse")) {
                changeSource("./video/bg_vinahouse.mp4");
            }
        };break
    }
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
    vidCondition();
}

// Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    progress.style.width = `0%`;
    playSong();
}

// Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    progress.style.width = `0%`;
    playSong();
}

function checkVideo(name) {
    let v = document.getElementById("vidBack");
    if (String(v.src).includes(name)) return true;
    return false;
}

function changeSource(url) {
    let v = document.getElementById("vidBack");
    v.src = url;
    if(String(url).includes("bg_phonk") || String(url).includes("bg_vinahouse") ){
        v.type = "video/mp4"
    }else{
        v.type = "video/webm"
    }
}

// Display progress bar width and calculate display for current time function
function barWidthAndCurrentTime() {
    const { duration, currentTime } = music;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for current time
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEle.textContent = `${currentMinutes}:${currentSeconds}`;
}

// Update Progress Bar & Time while playing
function updateProgressBar() {
    if (isPlaying) {
        barWidthAndCurrentTime();
    }
}

// Set Progress Bar and current time if and if not playing when user clicks on progress bar
function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
    if (!isPlaying) {
        barWidthAndCurrentTime();
    }
}

// Event Listeners
music.addEventListener("canplay", setSongDuration);
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
music.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgressBar);

// ICONS CALLBACK
feather.replace();

// SVGs
$("#svgDribbble").load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #dribbble");
$("#svgTwitter").load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #twitter");
$("#svgHicon").load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #hicon");

// NEW CODE HERE

// Variables
var btnSz = 200;

var bezierEasing = "cubic-bezier(.69,-0.49,0,1)";
var t1 = 299;
var t2 = 1198;

var bZ2 = "cubic-bezier(.46,.56,0,.88)";

$("#mainWrap").on("click", function () {
    c++;
    console.log(c);

    // Lock
    $(".lock").addClass("lock-on");
    setTimeout(function () {
        $(".lock").removeClass("lock-on");
    }, 1200);

    // Wave
    $(".wave").addClass("wave-act");
    setTimeout(function () {
        $(".wave").removeClass("wave-act");
    }, 1000);

    // Move Button
    setTimeout(function () {
        $("#btn").transition(
            {
                x: "+=10px",
            },
            289,
            bZ2,
            function () {
                $("#btn").transition(
                    {
                        x: "0px",
                    },
                    289,
                    bZ2
                );
            }
        );
    }, 399);

    // Move Content
    setTimeout(function () {
        if (c < 2) {
            $("#content").transition(
                {
                    x: "+=220px",
                },
                t1,
                bezierEasing,
                function () {
                    $("#content").transition(
                        {
                            x: "-=20",
                        },
                        699,
                        "cubic-bezier(.25,.49,.2,1)"
                    );
                }
            );
            changeBanner({ name: "phonk", color: " white" });
        } else if(c ==2){
            $("#content").transition(
            {
                x: "+=220px",
            },
            t1,
            bezierEasing,
            function () {
                $("#content").transition(
                    {
                        x: "-=20",
                    },
                    699,
                    "cubic-bezier(.25,.49,.2,1)"
                );
            }
        );
            changeBanner({name: "random", color: "black"})
        }
        
        else if (c == 3) {
            $("#content").transition(
                {
                    x: "+=220px",
                },
                t1,
                bezierEasing,
                function () {
                    $("#content").transition(
                        {
                            x: "-=20",
                        },
                        699,
                        "cubic-bezier(.25,.49,.2,1)"
                    );
                }
            );
            setTimeout(function () {
                $(".cnt-1").css("order", "4");
                $("#content").transition(
                    {
                        x: "0",
                    },
                    0
                );
            }, t2);
            changeBanner({ name: "vinahouse", color: "white" });
        } else if (c == 4) {
            $("#content").transition(
                {
                    x: "+=220px",
                },
                t1,
                bezierEasing,
                function () {
                    $("#content").transition(
                        {
                            x: "-=20",
                        },
                        699,
                        "cubic-bezier(.25,.49,.2,1)"
                    );
                }
            );
            setTimeout(function () {
                $("#content").transition(
                    {
                        x: "0",
                    },
                    0
                );
                $(".cnt-1").css("order", "0");
            }, t2);
            c = 0;
            changeBanner({ name: "ambient", color: "white" });
        }
    }, 399);
});
let body = document.body;
let btn = document.getElementById("btn");
function changeBanner({ name, color }) {
    console.log(c, name)
    if(name === "vinahouse"){
        body.style.backgroundImage = "url(./img/bg/bg_" + name + ".gif)";
    }else if(name === "random"){
        body.style.backgroundImage = "url(./img/bg/bg_" + name + ".png)";
    }else{
        body.style.backgroundImage = "url(./img/bg/bg_" + name + ".jpg)";
    }
    btn.style.backgroundImage = "url(./img/banner/banner_" + name + ".jpg";
    changeVideoBackground(name);
    document.getElementById("playContainer").style.backgroundImage = "url(./img/cardbg/play_card_" + name + ".jpg)";
    document.body.style.color = color;
    let arrControl = ["prev", "play", "next","title","artist"];
    for (let i of arrControl) {
        document.getElementById(i).style.color = color;
    }
    checkPlaylist();
}
