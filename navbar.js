// Navbar and user authentication
let nav_parent = document.getElementById("nav_parent");

function addNavbarToPage() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = localStorage.getItem("currentUser");

  let loginSectionHTML = "";

  if (isLoggedIn === "true") {
    loginSectionHTML = `
            <div class="profile-nav-btn flex-div">
                <span>${currentUser}</span>
                <button onclick="logout()" id="logout">Logout</button>
            </div>
        `;
  } else {
    loginSectionHTML = `
            <a href="index.html" class="login-nav-btn flex-div">
                <span id="login">Login</span>
            </a>
        `;
  }

  
  nav_parent.innerHTML = `
    <div class="logo">
      <a href="main.html"><img src="./Assets/Web_Logo.png" alt="Logo" width="60px" style="border-radius: 9999px; margin: 0;" ></a>
    </div>
    <ul class="nav-menu">
        <a href="./main.html"><i class="fa-solid fa-box-open"></i> Home</a>
        <a href="./main.html"><i class="fa-solid fa-music"></i> Songs</a>
        <a href="./main.html"><i class="fa-solid fa-info-circle"></i> About</a>
    </ul>
    <div class="login-nav-cont">
        <div id="search-data-div"></div>
        ${loginSectionHTML}
        <i class="fa-solid fa-bars close" id="nav-toggle"></i>
    </div>`;
}

function logout() {
  localStorage.setItem("isLoggedIn", "false");
  localStorage.setItem("currentUser", "");
  window.location.href = "index.html";
}

addNavbarToPage();
let a = document.getElementById("nav_parent").offsetHeight;
document.querySelector("body").style.marginTop = `${a}px`;

let nav_toggle = document.getElementById("nav-toggle");
let nav_menu = document.querySelector(".nav-menu");
let navbar2 = document.querySelector(".navbar2");

nav_toggle.addEventListener("click", () => {
  if (nav_menu.style.right === "0px") {
    nav_menu.style.right = "100%";
    if (navbar2) {
      navbar2.style.left = "100%";
    }
  } else {
    nav_menu.style.right = "0px";
    if (navbar2) {
      navbar2.style.left = "0px";
    }
  }
});

// Main section: Song functionality

document.addEventListener("DOMContentLoaded", () => {
  const musicList = document.getElementById('music-list');
  const playerPopup = document.getElementById('player-popup');
  const popupBg = document.getElementById('popup-bg');
  const songName = document.getElementById('song-name');
  const songDetails = document.getElementById('song-details');
  const audioPlayer = document.getElementById('audio-player');
  const closeButton = document.getElementById('close-button');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const sidebar = document.querySelector('.sidebar');
  const searchAndSelectBar = document.querySelector('#searchAndSelectBar');
  const RsearchInput = document.querySelector('#RsearchInput');
  const RCategorySearch = document.querySelector('#RCategorySearch');
  const CategoryCatalog = document.querySelector('#CategoryCatalog');

  let PrevBtn = document.querySelector("#PrevBtn");
  let NextBtn = document.querySelector("#NextBtn");
  let PlayAndpause = document.querySelector("#PlayAndpause");
  let loopBtn = document.querySelector("#loopBtn");
  let RandomBtn = document.querySelector("#RandomBtn");
  let playAndPauseBtn = document.querySelector("#playAndPauseBtn")
  let playAndPauseBtn2 = document.querySelector("#playAndPauseBtn2")



  let currentSongIndex = 0;
  let songs = [];

  // Fetch songs from API and render the song list
  const fetchSongs = async () => {
      try {
          const response = await fetch('https://mock-api-fxby.onrender.com/songs');
          const data = await response.json();
          songs = data;
          renderSongList(data);
      } catch (error) {
          console.error('Error loading songs:', error);
      }
  };

  // Render the song list
  let renderSongList = (songs) => {
      musicList.innerHTML = ''; // Clear previous results
      songs.forEach((song, index) => {
          const songDiv = document.createElement('div');
          songDiv.classList.add('song');
          songDiv.innerHTML = `
              <img src="${song.songposterurl}" alt="Album Art">
              <div class="song-info">
                  <h3>${song.name}</h3>
                  <p>${song.artist}</p>
              </div>
          `;
          songDiv.addEventListener('click', () => onSongClick(index, song));
          musicList.appendChild(songDiv);
      });
  };

  // Handle song click event
  const onSongClick = (index, song) => {
      currentSongIndex = index;
      playSong(song);
      updateBackground(song.songposterurl);
      sidebar.style.display = 'none';
      playAndPauseBtn.style.display = 'none';
  };

  // Play selected song and update player UI
  const playSong = (song) => {
      popupBg.src = song.songposterurl;
      songName.textContent = song.name;
      songDetails.textContent = `${song.artist} - ${song.Duration}`;
      audioPlayer.src = song.songUrl;
      audioPlayer.play();
      playerPopup.style.display = 'flex';
      playerPopup.style.zIndex = '100';
      musicList.style.display = 'none';
  };

  // Update background image
  const updateBackground = (imageUrl) => {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundBlendMode = 'overlay';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  };

  // Close player popup
  closeButton.addEventListener('click', () => {
      playerPopup.style.display = 'none';
      playerPopup.style.zIndex = '-1';
      musicList.style.display = 'flex';
      sidebar.style.display = 'flex';
      playAndPauseBtn.style.display='flex'
      audioPlayer.pause();
      document.body.style.backgroundImage = '';
      document.body.style.backgroundColor = '';
      
  });

  // Play next song
  nextButton.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSong(songs[currentSongIndex]);
      updateBackground(songs[currentSongIndex].songposterurl);
  });

  // Play previous song
  prevButton.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      playSong(songs[currentSongIndex]);
      updateBackground(songs[currentSongIndex].songposterurl);
  });

  // Initialize app by fetching songs
  fetchSongs();


// Debounced search functionality

let timeOut;

async function fetch_data(search) {
    try {
        let res = await fetch(
            `https://mock-api-fxby.onrender.com/songs?name_like=${search}`
        );
        let search_data = await res.json();
        return search_data;
    } catch (error) {
        console.log(error);
    }
}

// validating the search result and applying condition
async function validation() {
    let value = RsearchInput.value;
    // if (value.length < 3) {
    //     return;
    // }

    let validated_data = await fetch_data(value);
    renderSongList(validated_data);
    console.log(validated_data);
}

// applying Debouncing
function Debouncing(operation, delay) {
    if (timeOut) {
        clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
        operation();
    }, delay);
}

// applying event listener on search input
RsearchInput.addEventListener("input", function () {
    Debouncing(validation, 2000);
});

let showCategoryData = (arr) => {
  console.log(arr);
  CategoryCatalog.innerHTML = "";

  let currentlyPlayingButton = null;

  arr.forEach((ele, index) => {
      let card = document.createElement("div");
      card.className = "categoryCard";

      let image = document.createElement("img");
      image.src = ele.songposterurl;

      let name = document.createElement("span");
      name.textContent = ele.name;

      let audio = document.createElement("audio");
      audio.src = ele.songUrl;

      let playPauseBtnOnCategory = document.createElement("button");
      playPauseBtnOnCategory.innerHTML = '<i class="fa-solid fa-2x fa-play"></i>';
      playPauseBtnOnCategory.value = "play";
      playPauseBtnOnCategory.addEventListener("click", () => {
          playAndPauseBtn.style.display = "none";
          playAndPauseBtn2.style.display = "flex";
          if (playPauseBtnOnCategory.value === "play") {
              if (currentlyPlayingButton) {
                  currentlyPlayingButton.innerHTML = '<i class="fa-solid fa-2x fa-play"></i>';
                  currentlyPlayingButton.value = "play";
                  currentlyPlayingButton.nextSibling.pause(); // Pause the previous audio
              }
              currentlyPlayingButton = playPauseBtnOnCategory;
              playPauseBtnOnCategory.innerHTML = '<i class="fa-solid fa-2x fa-pause"></i>';
              playPauseBtnOnCategory.value = "pause";
              audio.play();
          } else {
              playPauseBtnOnCategory.innerHTML = '<i class="fa-solid fa-2x fa-play"></i>';
              playPauseBtnOnCategory.value = "play";
              audio.pause();
              currentlyPlayingButton = null;
          }
      });

      card.append(image, name, playPauseBtnOnCategory, audio);
      CategoryCatalog.append(card);
  });
};

let fetchData = async()=>{
  let res = await fetch(`https://mock-api-fxby.onrender.com/songs`)
  let musicDatabase = await res.json();
  // console.log(musicDatabase)
  // showData(musicDatabase);
  return musicDatabase;
}

let handleCategory = async (event) => {
  let genre = event.target.value;
  console.log(genre);
  let musicDatabase = await fetchData();
  let arr;
  if (genre !== "") {
      arr = musicDatabase.filter((ele) => {
          return ele.category === genre;
      });
      console.log(arr);
      showCategoryData(arr);
  } else {
      showCategoryData(musicDatabase);
  }
};

fetchData();
RCategorySearch.addEventListener("change", (event) => {
  handleCategory(event);

});



// Link List

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

  getRandomSongNode() {
      let node = this.head;
      if (!node) return null;

      const songList = [];
      do {
          songList.push(node);
          node = node.next;
      } while (node !== this.head);

      const randomIndex = Math.floor(Math.random() * songList.length);
      return songList[randomIndex];
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
      this.isRandom = false; // New property to manage random mode
      this.audioElement = new Audio();
      this.audioElement.addEventListener('ended', () => this.nextSong());
  }

  addSongsFromDatabase(database) {
      database.forEach(song => {
          this.playlist.addSong(song.songUrl);
      });
  }

  play() {
      if (!this.currentSong) {
          this.currentSong = this.playlist.head;
      }
      console.log(`Playing: ${this.currentSong.song}`);
      if (this.audioElement.src !== this.currentSong.song) {
          this.audioElement.src = this.currentSong.song;
          this.audioElement.currentTime = 0;
      }
      this.audioElement.play();
      this.recentlyPlayed.addSong(this.currentSong.song);
      this.isPaused = false;
  }

  pause() {
      if (this.currentSong && !this.isPaused) {
          this.audioElement.pause();
          console.log(`Paused: ${this.currentSong.song}`);
          this.isPaused = true;
      }
  }

  nextSong() {
      if (this.currentSong) {
          if (this.isRandom) {
              this.currentSong = this.playlist.getRandomSongNode();
          } else {
              this.currentSong = this.currentSong.next;
          }
          this.play();
      }
  }

  previousSong() {
      if (this.currentSong) {
          if (this.isRandom) {
              this.currentSong = this.playlist.getRandomSongNode();
          } else {
              let node = this.playlist.head;
              while (node.next !== this.currentSong) {
                  node = node.next;
              }
              this.currentSong = node;
          }
          this.play();
      }
  }

  loop() {
      console.log("Looping playlist");
      this.audioElement.loop = true;
  }

  toggleRandom() {
      this.isRandom = !this.isRandom;
      console.log(`Random mode is now ${this.isRandom ? 'enabled' : 'disabled'}`);
  }

  displayRecentlyPlayed() {
      console.log("Recently Played Songs:", this.recentlyPlayed.display());
  }
}

const initializePlayer = async () => {
  const musicData = await fetchData();
  const player1 = new MusicPlayer();
  player1.addSongsFromDatabase(musicData);

  PrevBtn.addEventListener("click", () => {
      player1.previousSong();  // Switch to the previous song and play it
      PlayAndpause.innerHTML = `<i class="fa-solid fa-2x fa-pause"></i>`;
  });

  NextBtn.addEventListener("click", () => {
      player1.nextSong();  // Switch to the next song and play it
      PlayAndpause.innerHTML = `<i class="fa-solid fa-2x fa-pause"></i>`;
  });

  PlayAndpause.addEventListener("click", () => {
      if (player1.audioElement.paused) {
          player1.play();  // Play if currently paused
          PlayAndpause.innerHTML = `<i class="fa-solid fa-2x fa-pause"></i>`;
      } else {
          player1.pause();  // Pause if currently playing
          PlayAndpause.innerHTML = `<i class="fa-solid fa-2x fa-play"></i>`;
      }
  });

  loopBtn.addEventListener("click", () => {
          player1.audioElement.loop = true;  // Enable looping
  });

  RandomBtn.addEventListener("click", () => {
      player1.toggleRandom();  // Toggle random song mode
       if(player1.isRandom)
       {
          RandomBtn.style.color='black';
       }
       else{
        RandomBtn.style.color='white';
       }

  });
};

initializePlayer()

// Link List End



});


