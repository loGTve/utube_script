

//YoutubeIFrame API Call
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);


let player: any;

//Call Youtube Player when Ready
function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
            videoId: 'vsfry9ILdLI',
          events: {
            'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
        },
    });
}

//Play Video
function onPlayerReady(event: any) {
    event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event: any) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
    function stopVideo() {
        player.stopVideo();
    }
}
