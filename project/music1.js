class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playBtn = document.getElementById("playBtn");
        this.prevBtn = document.getElementById("prevBtn");
        this.nextBtn = document.getElementById("nextBtn");
        this.progress = document.getElementById("progress");
        this.currentTimeDisplay = document.getElementById("currentTime");
        this.durationDisplay = document.getElementById("duration");
        this.volumeInput = document.getElementById("volume");
        this.albumArt = document.getElementById("albumArt");
        this.artistName = document.getElementById("artistName");
        this.songName = document.getElementById("songName");

        this.isDragging = false;
        this.isPlaying = false;
        this.currentSongIndex = 0;

        this.songs = [
            { title: "April Madhathil", artist: "SPB", src: "songs/song1.mp3", albumArt: "img/april.jpeg"},
            { title: "Chudithar Aninthu", artist: "Yuvan Shankar Raja", src: "songs/song2.mp3", albumArt: "img/chudithar aninthu.jpg" },
            { title: "Soniya Soniya", artist: "A.R.Rahman", src: "songs/song3.mp3", albumArt: "img/soniya.jpg" },
            { title: "En Kadhal Solla", artist: "Yuvan Shankar Raja", src: "songs/song4.mp3", albumArt: "img/en kadhal solla.jpeg" },
            { title: "Thuil Thuil  Mazhaiyaai", artist: "Yuvan Shankar Raja", src: "songs/song5.mp3", albumArt:"img/thuil thuil  mazhaiyaai.jpg" },
            { title: "kanmoodi  Thirakumbothu", artist: "Devi Sri Prasad", src: "songs/song6.mp3", albumArt: "img/kanmoodi  Thirakumbothu.jpeg" },
            { title: "Aagaya Suriyanai", artist: "Harris Jayaraj", src: "songs/song7.mp3", albumArt: "img/aagaya suriyanai.jpg" },
            { title: "Sakkarai Nilavea", artist: "Mani Sharma", src: "songs/song9.mp3", albumArt: "img/sakkarai nilavea.jpg" },
            { title: "Venmathi Venmathiye", artist: "Harris Jayaraj", src: "songs/song10.mp3", albumArt: "img/Venmathi venmathiye.jpeg" }

        ];

        this.init();
    }

    init() {
        this.loadSong(this.currentSongIndex);
        this.setupListeners();
    }

    loadSong(index) {
        const { src, title, artist, albumArt } = this.songs[index];
        this.audio.src = src;
        this.albumArt.src = albumArt;
        this.artistName.textContent = artist;
        this.songName.textContent = title;
        document.title = `Music Player - ${title} by ${artist}`;
    }

    playPause() {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play();
        }
        this.isPlaying = !this.isPlaying;
        this.updatePlayBtn();
    }

    updatePlayBtn() { 
        this.playBtn.innerHTML = this.isPlaying ? '<i class="fa fa-pause"></i>' : '<i class="fa fa-play"></i>';
    }

    nextSong() {
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.loadSong(this.currentSongIndex);
        this.playAudio();
    }

    prevSong() {
        this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
        this.loadSong(this.currentSongIndex);
        this.playAudio();
    }

    playAudio() {
        this.audio.play();
        this.isPlaying = true;
        this.updatePlayBtn();
    }

    updateProgress() {
        if (!this.isDragging) {
            const { currentTime, duration } = this.audio;
            const progressPercentage = (currentTime / duration) * 100;
            this.progress.style.width = `${progressPercentage}%`;

            this.currentTimeDisplay.textContent = this.formatTime(currentTime);
            this.durationDisplay.textContent = this.formatTime(duration);
        }
    }

    setProgress(e) {
        const width = this.progress.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audio.duration;

        this.audio.currentTime = (clickX / width) * duration;
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    updateVolume() {
        this.audio.volume = this.volumeInput.value;
    }

    setupListeners() {
        this.audio.addEventListener("ended", () => this.nextSong());
        this.playBtn.addEventListener("click", () => this.playPause());
        this.prevBtn.addEventListener("click", () => this.prevSong());
        this.nextBtn.addEventListener("click", () => this.nextSong());
        this.audio.addEventListener("timeupdate", () => this.updateProgress());
        this.progress.addEventListener("click", (e) => this.setProgress(e));
        this.volumeInput.addEventListener("input", () => this.updateVolume());
    }
}

const musicPlayer = new MusicPlayer();