document.addEventListener("DOMContentLoaded", () => {
    const musicList = document.getElementById('music-list');
    const playerPopup = document.getElementById('player-popup');
    const popupBg = document.getElementById('popup-bg');
    const audioPlayer = document.getElementById('audio-player');
    const closeButton = document.getElementById('close-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentSongIndex = 0;
    let songs = [];

    fetch('https://mock-api-template-wfxc.onrender.com/songs')
        .then(response => response.json())
        .then(data => {
            songs = data;
            data.forEach((song, index) => {
                const songDiv = document.createElement('div');
                songDiv.classList.add('song');
                songDiv.innerHTML = `
                    <img src="${song.songposterurl}" alt="Album Art">
                    <div class="song-info">
                        <h3>${song.name}</h3>
                        <p>${song.artist}</p>
                        <p>${song.Duration}</p>
                    </div>
                `;
                songDiv.addEventListener('click', () => {
                    currentSongIndex = index;
                    playSong(song);
                    document.body.style.backgroundImage = `url('${song.songposterurl}')`;
                    document.body.style.backgroundSize = 'cover';
                });
                musicList.appendChild(songDiv);
            });
        })
        .catch(error => console.error('Error loading songs:', error));

    function playSong(song) {
        popupBg.src = song.songposterurl;
        audioPlayer.src = song.songurl;
        audioPlayer.play();
        playerPopup.style.display = 'flex';
        musicList.style.display = 'none';
    }

    closeButton.addEventListener('click', () => {
        playerPopup.style.display = 'none';
        musicList.style.display = 'flex';
        audioPlayer.pause();
        document.body.style.backgroundImage = '';
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong(songs[currentSongIndex]);
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playSong(songs[currentSongIndex]);
    });
});
