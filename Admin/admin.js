// Accesing All The elements From Html
var global_data;
let baseurl = "https://mock-api-fxby.onrender.com";
let Totalsong = document.getElementById("totalsong");
// console.log(global_data);

let input_value = document.getElementById("");

// search_form and search song input

let search_form = document.getElementById("search_form");

let song_input = document.getElementById("song_input");

// fetchig the search result and applying debouncing

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

// validting the search result and applying condition

async function validation() {
  let value = song_input.value;
  if (value.length < 3) {
    alert("plaese enter atleast three character");
    return;
  }

  let validated_data = await fetch_data(value);
  show_data(validated_data);
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

// applying event listner on searvh input

song_input.addEventListener("input", function () {
  // console.log(song_input.value);

  Debouncing(validation, 1000);
});

// fform
// let id = document.getElementById("id");
let name = document.getElementById("name");
let songUrl = document.getElementById("songUrl");
let songposterurl = document.getElementById("song_poster_url");
let artist = document.getElementById("artist");
let Duration = document.getElementById("duration");
let language = document.getElementById("language");
let category = document.getElementById("category");
let AddButton = document.getElementById("Add");
let UpdateButton = document.getElementById("Update");
let GetButton = document.getElementById("Get");

// let Idvalue = id.value;

// let showname = document.getElementById("h3name");
// let showdesc = document.getElementById("desc");

// https://mock-api-fxby.onrender.com/songs?name=4444

// Getting Number of Products

fetch(`${baseurl}/songs`)
  .then((res) => res.json())
  .then((data) => {
    global_data = data;
    show_data(data);

    console.log(data);
    Totalsong.innerText = data.length;
  });

function show_data(data) {
  // console.log(data);

  let tbody = document.querySelector("tbody");
  tbody.innerHTML = null;

  data.forEach((ele, i) => {
    let tr = document.createElement("tr");

    let td_seriel_no = document.createElement("td");
    td_seriel_no.innerText = i + 1;

    let td_poster = document.createElement("td");
    td_poster.innerHTML = `<img src="${ele.songposterurl}"/>`;

    let td_song_name = document.createElement("td");
    td_song_name.innerText = ele.name;

    let td_category = document.createElement("td");
    td_category.innerText = ele.category;

    let td_duration = document.createElement("td");
    td_duration.innerText = ele.Duration;

    let td_artist = document.createElement("td");

    td_artist.innerText = ele.artist;

    let td_language = document.createElement("td");
    td_language.innerText = ele.language;

    let action = document.createElement("td");
    action.classList.add("action");

    let song_delete = document.createElement("button");
    song_delete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path></svg>`;
    song_delete.classList.add("action_btn");

    let song_update = document.createElement("button");
    song_update.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="fill: white;transform: ;msFilter:;"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>`;
    song_update.classList.add("action_btn");

    let play_btn = document.createElement("button");
    play_btn.innerHTML = `<i class='bx bx-play-circle bx-spin bx-sm' style='color:#0be743'  ></i>`;
    // play_btn.classList.add("action_btn");
    play_btn.classList.add("play");

    play_btn.addEventListener("click", function () {
      openMusicPlayer(ele.songUrl, ele.songposterurl);
    });

    song_delete.addEventListener("click", function () {
      handle_delete(ele.id);
    });

    song_update.addEventListener("click", function () {
      handle_update(ele, ele.id);
    });

    action.append(play_btn, song_update, song_delete);

    // applying function on tr
    // tr.addEventListener("click", function () {
    //   updateAudioPlayer(ele.songUrl, ele.songposterurl);
    // });
    tr.append(
      td_seriel_no,
      td_poster,
      td_song_name,
      td_category,
      td_duration,
      td_artist,
      td_language,
      action
    );

    tbody.append(tr);
  });
}

function handle_delete(index) {
  // console.log(index);

  global_data.splice(index, 1);
  Totalsong.innerText = global_data.length;
  show_data(global_data);
}

// update fxn

function handle_update(ele) {
  // console.log(index);
  // global_data.splice(index, 1);
  // Totalsong.innerText = global_data.length;
  // show_data(global_data);

  openPopup();

  // ele.id = id;
  name.value = ele.name;
  songUrl.value = ele.songUrl;
  songposterurl.value = ele.songposterurl;
  artist.value = ele.artist;
  Duration.value = ele.Duration;
  language.value = ele.language;
  category.value = ele.category;

  UpdateButton.addEventListener("click", () => {
    let obj = {
      // id: id,
      name: name.value,
      songUrl: songUrl.value,
      songposterurl: songposterurl.value,
      artist: artist.value,
      Duration: Duration.value,
      language: language.value,
      category: category.value,
    };

    fetch(`${baseurl}/songs/${ele.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json;
      })
      .then((data) => {
        alert("Song Updated Succesfully");
        openPopup();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // adding song through icons
}

function openPopup() {
  // console.log("addd");

  name.value = "";
  songUrl.value = "";
  songposterurl.value = "";
  artist.value = "";
  Duration.value = "";
  language.value = "";
  category.value = "";
  // id.value = "";

  var music = document.getElementById("Add");

  var popups = document.getElementsByClassName("popup");

  for (var i = 0; i < popups.length; i++) {
    if (popups[i].style.display === "none" || popups[i].style.display === "") {
      popups[i].style.display = "block";
    } else {
      popups[i].style.display = "none";
    }
  }
}

// Accesing All The elements From Html

// fetch(`${baseurl}/songs`)
//   .then((res) => res.json())
//   .then((abc) => {
//     Totalsong.innerText = abc.length;
//   });

function AddPopup() {
  var popups = document.getElementsByClassName("AddPopup");

  for (var i = 0; i < popups.length; i++) {
    if (popups[i].style.display === "none" || popups[i].style.display === "") {
      popups[i].style.display = "block";
    } else {
      popups[i].style.display = "none";
    }
  }
}
AddButton.addEventListener("click", () => {
  let obj = {
    // id: id.value,
    name: name.value,
    songUrl: songUrl.value,
    songposterurl: songposterurl.value,
    artist: artist.value,
    Duration: Duration.value,
    language: language.value,
    category: category.value,
  };

  console.log(obj);

  fetch(`https://mock-api-fxby.onrender.com/songs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      res.json();
    })
    .then(() => {
      // global_data.push(data); // Add new song to global_data
      alert("Song Added Succesfully");
      window.location.reload();
    });
});

function CloseAddpopup() {
  var popups = document.getElementsByClassName("AddPopup");

  for (var i = 0; i < popups.length; i++) {
    if (popups[i].style.display === "none" || popups[i].style.display === "") {
      popups[i].style.display = "block";
    } else {
      popups[i].style.display = "none";
    }
  }
}

//Delete the Song

function handle_delete(id) {
  fetch(`${baseurl}/songs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(() => {
      global_data = global_data.filter((song) => song.id !== id);
      alert(`Song with id:${id} Deleted Succesfully`);
      Totalsong.innerText = global_data.length;
      // Re-render the table
      show_data(global_data);
    })
    .catch((error) => {
      console.log(error);
    });
}
//

// function updateAudioPlayer(songUrl, song_poster_url) {
//   // var music = document.getElementById("musicplayer");
//   // if (music.style.display === "none" || music.style.display === "") {
//   //   music.style.display = "flex";
//   // } else {
//   //   music.style.display = "none";
//   // }

// }
function trash() {
  var music = document.getElementById("musicplayer");
  if (music.style.display === "none" || music.style.display === "") {
    music.style.display = "flex";
  } else {
    music.style.display = "none";
  }
  const audioPlayer = document.querySelector("audio");
  audioPlayer.src = songUrl;
  audioPlayer.stop();
}

function openMusicPlayer(songUrl, songposterurl) {
  // console.log("addd");

  var music = document.getElementById("musicplayer");
  if (music.style.display === "none" || music.style.display === "") {
    music.style.display = "flex";
  } else {
    music.style.display = "none";
  }

  const audioPlayer = document.querySelector("audio");
  const dynamicmusicimage = document.getElementById("dynamicmusicimage");
  dynamicmusicimage.src = songposterurl;
  audioPlayer.src = songUrl;
  audioPlayer.play();
  console.log(audioPlayer.src);
}
