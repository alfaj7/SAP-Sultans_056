document.addEventListener("DOMContentLoaded", () => {
    const musicList = document.getElementById('music-list');
    const audioPlayer = document.getElementById('audio-player');

    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            data.songs.forEach(song => {
                const songDiv = document.createElement('div');
                songDiv.classList.add('song');
                songDiv.innerHTML = `
                    <img src="${song.albumArt}" alt="Album Art">
                    <div class="song-info">
                        <h3>${song.title}</h3>
                        <p>${song.artist}</p>
                        <p>${song.duration}</p>
                    </div>
                `;
                songDiv.addEventListener('click', () => {
                    audioPlayer.src = song.url;
                    audioPlayer.play();
                    audioPlayer.style.display = 'block';
                });
                musicList.appendChild(songDiv);
            });
        })
        .catch(error => console.error('Error loading songs:', error));
});
