document.addEventListener("DOMContentLoaded", () => {
    const musicList = document.getElementById('music-list');
    const audioPlayer = document.getElementById('audio-player');

    fetch('https://mock-api-template-wfxc.onrender.com/songs')
        .then(response => response.json())
        .then(data => {
            data.forEach(song => {
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
                    audioPlayer.src = song.songurl;
                    audioPlayer.play();
                    audioPlayer.style.display = 'block';
                });
                musicList.appendChild(songDiv);
            });
        })
        .catch(error => console.error('Error loading songs:', error));
});
