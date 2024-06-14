const musicDatabase = {
    "songs": [
        {
            "name": "Winning Speech",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/Tum-Hi-Ho-Lyricw-533x261.jpg",
            "album": "Unknown",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:22",
            "genre": "Dance",
            "songurl": "./songs/Winning Speech.mp3"
        },
        {
            "name": "Sajani Re",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Laapataa Ladies",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/O-Sajni-Re.mp3"
        },
        {
            "name": "Alag Tujhme Asar Kuch",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Ae Dil Hai Mushkil",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Alag Tujhme Asar Kuch.mp3"
        },
        {
            "name": "Bekhayali",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Kabir Singh",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Bekhayali.mp3"
        },
        {
            "name": "Bing Bang Bong",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Mashale",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Dance",
            "songurl": "./songs/Bing Bang Bong Mashale.mp3"
        },
        {
            "name": "Dil_di_ya_Galla",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Tiger 3",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Dil_di_ya_Galla.mp3"
        },
        {
            "name": "Humdard",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Ek villian",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Humdard.mp3"
        },
        {
            "name": "Illuminati",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Illuminati",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Dance",
            "songurl": "./songs/Illuminati.mp3"
        },
        {
            "name": "Kesariya",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Bhramastra",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Dance",
            "songurl": "./songs/Kesariya.mp3"
        },
        {
            "name": "KGF-2 BGM",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "KGF-2",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/KGF-2 BGM.mp3"
        },
        {
            "name": "Let M Love You",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Let Me Love You-Ft Justin",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Let_Me_Love_You.mp3"
        },
        {
            "name": "Ohi-Yaar",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Ohi-Yaar",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Ohi-Yaar.mp3"
        },
        {
            "name": "Rolex BGM",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Vikram",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Romantic",
            "songurl": "./songs/Rolex_BGM_Vikram.mp3"
        },
        {
            "name": "Theri BGM",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Vedalam",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Pop",
            "songurl": "./songs/Theri BGM Vedalam.mp3"
        },
        {
            "name": "Tu Maan Meri Baat",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Tu Maan Meri Baat- KING",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Pop",
            "songurl": "./songs/Tu Maan Meri Baat.mp3"
        },
        {
            "name": "Tum hi ho",
            "artist": "Arijit Singh",
            "songposterurl": "./logos/sajani_re.jpg",
            "album": "Ashiqui-2",
            "language": "Hindi",
            "category": "item",
            "Duration": "4:49",
            "genre": "Pop",
            "songurl": "./songs/tum_hi_ho.mp3"
        }
        // Add other songs similarly
    ]
};


// let fetchData = async()=>{
//     let res = await fetch(`https://mock-api-template-wfxc.onrender.com/songs`)
//     let musicDatabase = await res.json();
//     console.log(musicDatabase)
//     showData(musicDatabase)
//     return musicDatabase;
// }


  

let RSecondContainer = document.querySelector("#RSecondContainer")
let PrevBtn = document.querySelector("#PrevBtn");
let NextBtn = document.querySelector("#NextBtn");
let PlayAndpause = document.querySelector("#PlayAndpause");
let RsearchInput = document.querySelector('#RsearchInput');
let RCategorySearch = document.querySelector("#RCategorySearch")

let showData = (arr) => {

    arr.songs.forEach((ele) => {
        let card = document.createElement("div");
        card.className = "card";

        // let image = document.createElement("img")
        // image.src = ele.songposterurl;

        let title = document.createElement("h3");
        title.innerText = ele.name;

        let album = document.createElement("p");
        album.innerText = `${ele.album}`;

        let audio = document.createElement("audio");
        audio.src = `${ele.songurl}`;
        // audio.controls = true;

        card.append(title, album, audio);
        // card.addEventListener("click",() => {
        //     audio.src = `${ele.songurl}`;
        //     audio.play();
        // })
        RSecondContainer.append(card);
    });
};

showData(musicDatabase)



class SongNode {
    constructor(song) {
        this.song = song;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addSong(song) {
        const newNode = new SongNode(song);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        if (!node) return;
        yield node.song;
        while (node.next !== this.head) {
            node = node.next;
            yield node.song;
        }
    }
}

class RecentlyPlayedNode {
    constructor(song) {
        this.song = song;
        this.next = null;
    }
}

class RecentlyPlayedList {
    constructor(limit = 10) {
        this.head = null;
        this.tail = null;
        this.limit = limit;
        this.size = 0;
    }

    addSong(song) {
        const newNode = new RecentlyPlayedNode(song);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
        if (this.size > this.limit) {
            this.head = this.head.next;
            this.size -= 1;
        }
    }

    display() {
        const songs = [];
        let current = this.head;
        while (current) {
            songs.push(current.song);
            current = current.next;
        }
        return songs;
    }
}


class MusicPlayer {
    constructor() {
        this.playlist = new CircularLinkedList();
        this.recentlyPlayed = new RecentlyPlayedList();
        this.currentSong = null;
        this.isPaused = false;
        this.audioElement = new Audio();
    }

    // addSong(song) {
    //     this.playlist.addSong(song);
    // }

    addSongsFromDatabase(database) {
        database.songs.forEach(song => {
            this.playlist.addSong(song.songurl);
        });
    }

    play() {
        if (!this.currentSong) {
            this.currentSong = this.playlist.head;
        }
        console.log(`Playing: ${this.currentSong.song}`);
        this.audioElement.src = this.currentSong.song;
        this.audioElement.play();
        this.recentlyPlayed.addSong(this.currentSong.song);
        this.isPaused = false;
    }

    pause() {
        if (this.currentSong && !this.isPaused) {
            this.audioElement.src = this.currentSong.song;
            this.audioElement.pause();
            console.log(`Paused: ${this.currentSong.song}`);
            this.isPaused = true;
        }
    }

    nextSong() {
        if (this.currentSong) {
            this.currentSong = this.currentSong.next;
            this.play();
        }
    }

    previousSong() {
        if (this.currentSong) {
            let node = this.playlist.head;
            while (node.next !== this.currentSong) {
                node = node.next;
            }
            this.currentSong = node;
            this.play();
        }
    }

    loop() {
        console.log("Looping playlist");
        while (true) {
            this.nextSong();
        }
    }
    
    displayRecentlyPlayed() {
        console.log("Recently Played Songs:", this.recentlyPlayed.display());
    }
}

 

const player1 = new MusicPlayer();
player1.addSongsFromDatabase(musicDatabase);


// Example usage:
// player1.play();  // This will play the first song in the playlist
// player1.nextSong();
// player1.previousSong();
// player1.pause();
// player1.displayRecentlyPlayed()

PrevBtn.addEventListener("click", ()=>{
    player1.previousSong();
})
NextBtn.addEventListener("click",()=>{
    player1.nextSong();
} )

PlayAndpause.addEventListener("click", () => {
    if (player1.audioElement.paused) {
        player1.play();  // Play if currently paused
    } 
    else if(!player1.audioElement.paused){
        player1.pause();  // Pause if currently playing
    }
});




///  Dynamic search functionality using Binary search start


let validation = async ()=>{
    let value  = searchInput.value;

    if(value.length<3){
        return false;
    }
    let validatedData = await getData(value);
    if(validatedData.Search){
        showSuggestions(validatedData.Search)
        showData(validatedData.Search)
    }
    else{
        container.innerHTML = `<p>404 Not found</p>`;
    }
    
}




let debounce = (operation , delay) =>{
    if(timeOut){
        clearTimeout(timeOut)
    }
timeOut  =  setTimeout(()=>{
        operation()
    },delay)
}




RsearchInput.addEventListener("input", ()=>{
    debounce(validation, 2000)
})

///  Dynamic search functionality using Binary search end

/// sorting through category start

let showCategoryData =(arr)=>{
    
    arr.forEach((ele)=>{
        let card = document.createElement("div");
        card.className = "categoryCard"
        
        let name = document.createElement("span")
        name.textContent = ele.name;

        let genre = document.createElement("span");
        genre.textContent = ele.genre;

        card.append(name, genre);
        RfirstContainer.append(card);  
    })
}

let handleCategory = (event)=>{
      let genre = event.target.value
      let arr = musicDatabase.songs.filter((ele)=>{
            return ele.genre == genre;
      })
      console.log(arr)
      showCategoryData(arr);
}

RCategorySearch.addEventListener("change", (event)=>{handleCategory(event)})

/// sorting through category end 

// const initializePlayer = async () => {
//     const musicData = await fetchData();
//     const player1 = new MusicPlayer();
//     player1.addSongsFromDatabase(musicData);

//     PrevBtn.addEventListener("click", () => {
//         player1.previousSong();  // Switch to the previous song and play it
//     });

//     NextBtn.addEventListener("click", () => {
//         player1.nextSong();  // Switch to the next song and play it
//     });

//     PlayAndpause.addEventListener("click", () => {
//         if (player1.audioElement.paused) {
//             player1.play();  // Play if currently paused
//         } else {
//             player1.pause();  // Pause if currently playing
//         }
//     });
// };

// initializePlayer();


// fetchData(); 