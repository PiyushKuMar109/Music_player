document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('main-audio');
    const playPauseBtn = document.getElementById('play-pause');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const volumeSlider = document.getElementById('volume-slider');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimer = document.querySelector('.current-timer');
    const maxTimer = document.querySelector('.max-timer');
    const songImage = document.querySelector('.image-area img');
    const songTitle = document.querySelector('.song-details .name');
    const songArtist = document.querySelector('.song-details .artist');
    const albumButtons = document.querySelectorAll('.album-btn');

    // Define songs for different albums
    const songs = {
        BOLLYWOOD: [
            { name: 'Heeriye', artist: 'Arijit Singh', image: 'https://imgs.search.brave.com/B0ad1EDzFUOj_m9bor2cGOVPzFJcGcaBFadqhnP42_0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8w/MjIvSGVlcml5ZS1m/ZWF0LUFyaWppdC1T/aW5naC1IaW5kaS0y/MDIzLTIwMjMwOTI4/MDUwNDA1LTUwMHg1/MDAuanBn', audioSrc: 'Bollywood/_Heeriye_320(PagalWorld.com.cm).mp3' },
            { name: 'Main Rang Sharbaton Ka', artist: 'Atif Aslam', image: 'https://tse2.mm.bing.net/th?id=OIP.duHq8diyUMrNXZ0ydnn91wHaEK&pid=Api&P=0&h=220', audioSrc: 'Bollywood/Main-Rang-Sharbaton-Ka(PaglaSongs).mp3' },
            { name: 'Thoda Thoda Pyaar', artist: 'Nilesh Ahuja', image: 'https://th.bing.com/th/id/OIP.1n_wGr9qPc6Ths-wN67khAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'Bollywood/Thoda-Thoda-Pyaar-Hua-Tumse(PagalWorld).mp3' },
            { name: 'Arjan Vallley', artist: 'Sandeep Vanga', image: 'https://th.bing.com/th/id/OIP.PP4SH-hrtwvV9KlcQjZfMwHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' , audioSrc: 'English/Arjan-Vailly(PaglaSongs).mp3'},
            { name: 'Besarbiyaan', artist: 'Armaan Malik', image: 'https://th.bing.com/th/id/OIP.k01DPN2Yb-k8402EJPtisgHaKs?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'Bollywood/Besabriyaan(PaglaSongs).mp3' },
        ],
        PUNJABI: [
            { name: 'Mi-Amor', artist: 'Sharn', image: 'https://th.bing.com/th/id/OIP.XwzW4ZGpyt9n9jQN5MZzPwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'punjabi/Mi-Amor-Sharn_192(PaglaSongs).mp3' },
            { name: 'safar', artist: 'Shub', image: 'https://th.bing.com/th/id/OIP.-5RKQMjlaZn6f4Hvm-r6aQHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' , audioSrc: 'punjabi/Tera Mera Safar_128-(PagalWorld.Ink).mp3'},
            { name: '295', artist: 'Sidhu Moosewala', image: 'https://th.bing.com/th/id/OIP.MXnfzhyqtKeNQS4lJz9-cwHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'punjabi/295 - Sidhu Moose Wala_128-(PagalWorld.Ink).mp3' },
            { name: 'Dila Di Gall', artist: ' Satinder Sartaaj', image: 'https://th.bing.com/th/id/OIP.B32awjsqO8hTC1-5PHHsigHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'punjabi/Dila n Di Gall(PagalWorld.com.cm).mp3' },
            { name: 'Apa Fer Milaange', artist: 'Savi Kahlon', image: 'https://th.bing.com/th/id/OIP.-Sbn13VkHv9CjMM2MZQwMQHaHa?w=147&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'punjabi/Apa-Fer-Milaange(PaglaSongs).mp3' },
        ],
        ENGLISH: [
            { name: 'Perfect', artist: 'Ed_Sheeran', image: 'https://tse2.mm.bing.net/th?id=OIP.NHlx4BgN036c2FAkGz3s9QHaEK&pid=Api&P=0&h=220', audioSrc: 'English/Ed_Sheeran_-_Perfect_(mp3.pm).mp3' },
            { name: 'Until-I-Found', artist: 'Stephen Sanchez', image: 'https://s.yimg.com/fz/api/res/1.2/aF8GVJwwNXuPRcuJSSvfNg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/52106ea4-6469-358d-88e9-fa057b3384c2/t_500x300', audioSrc: 'English/Until-I-Found-You_320(PaglaSongs).mp3 '},
            { name: 'Night Changes', artist: 'One Direction', image: 'https://tse3.mm.bing.net/th?id=OIP.QGQi9atMNbx3K4fzltNysgAAAA&pid=Api&P=0&h=220', audioSrc: 'English/Night-Changes(PaglaSongs).mp3' },
            { name: 'Snap', artist: 'Rosa_Linn', image: 'https://th.bing.com/th/id/OIP.2isI-DwXXK80hpp3aNiJfAHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', audioSrc: 'English/Rosa_Linn_-_Snap_CeeNaija.com_.mp3' },
            { name: 'Animals', artist: 'Maroon 5', image: 'https://th.bing.com/th/id/OIP.-W-kL4msCpPP7rUE1Eaq3AHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' , audioSrc: 'English/Maroon-5(PaglaSongs).mp3'},
        ],
    };

    let currentAlbum = 'BOLLYWOOD';
    let currentSongIndex = 0;
    let isPlaying = false;

    function playSong() {
        const currentSong = songs[currentAlbum][currentSongIndex];
        audio.src = currentSong.audioSrc;
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fka-pause"></i>';
        isPlaying = true;
        updateSongDetails(currentSong);
    }

    function pauseSong() {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fjla-play"></i>';
        isPlaying = false;
    }

    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs[currentAlbum].length;
        playSong();
    }

    nextBtn.addEventListener('click', playNextSong);

    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs[currentAlbum].length) % songs[currentAlbum].length;
        playSong();
    }

    prevBtn.addEventListener('click', playPrevSong);

    audio.addEventListener('timeupdate', function () {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        progressBar.style.width = progress + '%';

        currentTimer.textContent = formatTime(currentTime);
        maxTimer.textContent = formatTime(duration);
    });

    audio.addEventListener('ended', function () {
        playNextSong();
    });

    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function updateSongDetails(song) {
        songImage.src = song.image;
        songTitle.textContent = song.name;
        songArtist.textContent = song.artist;
    }

    function loadAlbum(album) {
        currentAlbum = album;
        currentSongIndex = 0;
        const albumSongs = songs[album];
        if (!albumSongs) return;

        const randomSongIndex = Math.floor(Math.random() * albumSongs.length);
        const randomSong = albumSongs[randomSongIndex];

        audio.src = randomSong.audioSrc;
        audio.play(); // Autoplay the song when album changes
        updateSongDetails(randomSong);
    }

    albumButtons.forEach(button => {
        button.addEventListener('click', function () {
            const album = this.getAttribute('data-album');
            loadAlbum(album);
        });
    });
    
    

    const musicListBtn = document.getElementById('music-list-btn');
    const musicList = document.querySelector('.music-list');

    musicListBtn.addEventListener('click', function () {
        musicList.classList.toggle('show');
    });

    const closeBtn = document.getElementById('close');
    closeBtn.addEventListener('click', function () {
        musicList.classList.remove('show');
    });

    loadAlbum('ENGLISH');
});
updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
