let modal = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

document.querySelectorAll('.audio-button').forEach(button => {
    button.addEventListener('click', () => {
        const audioSrc = button.getAttribute('data-audio');
        const audio = new Audio(audioSrc);
        audio.play();
    });
});

let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");

function openPopup() {
    popup.classList.add("open-popup");
    overlay.style.display = "block";
}

function closePopup() {
    popup.classList.remove("open-popup");
    overlay.style.display = "none";
}
    SC.initialize({
        client_id: 'YOUR_SOUNDCLOUD_CLIENT_ID'
    });

    SC.stream('/tracks/193113459').then(function(player) {
        player.play();
        document.getElementById('soundcloud-player').appendChild(player.container);

        document.getElementById('volume-control').addEventListener('input', function() {
            var volume = this.value / 100;
            player.setVolume(volume);
        });
    });
