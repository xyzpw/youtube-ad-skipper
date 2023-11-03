adElements = [".ytd-companion-slot-renderer",
".ytd-action-companion-ad-renderer",
".ytd-watch-next-secondary-results-renderer.sparkles-light-cta",
".ytd-unlimited-offer-module-renderer",
".ytp-ad-overlay-image", ".ytp-ad-text-overlay",
"div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint",
"div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer",
".ytd-display-ad-renderer",
".ytd-statement-banner-renderer",
".ytd-in-feed-ad-layout-renderer",
"div#player-ads.style-scope.ytd-watch-flexy",
"div#panels.style-scope.ytd-watch-flexy",
".ytd-banner-promo-renderer",
".ytd-video-masthead-ad-v3-renderer",
".ytd-primetime-promo-renderer",
".ytd-in-feed-ad-layout-renderer",
".ytd-ad-slot-renderer"
];

function removeAdElements(){
    adElements.forEach((ad)=>{
        document.querySelector(ad) ? document.querySelector(ad).hidden = true : null;
    });
}

// wait for 2 seconds before attempting to remove ads
if (document.readyState === "complete"){
    setTimeout(()=>{
        removeAdElements();
    }, 2000);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(()=>{
            removeAdElements();
        }, 2000);
    });
}

function main(){
    let adInterval = setInterval(()=>{
        let videoStream = document.getElementsByClassName("video-stream");
        let moviePlayer = document.getElementById("movie_player");
        let isAd = moviePlayer.classList?.contains("ad-showing") || moviePlayer.classList?.contains("ad-interrupting");
        if (isAd){
            videoStream[0].currentTime = videoStream[0].duration - 0.1;
            try {
                let skipButton = document.getElementsByClassName("ytp-ad-skip-button")[0];
                skipButton.click();
                console.log("Clicked skip")
            } catch {
                try {
                    let skipButtonModern = document.getElementsByClassName("ytp-ad-skip-button-modern")[0];
                    skipButtonModern.click();
                    console.log("Clicked skip")
                } catch {
                    console.log("No skip button");
                }
            }
        }
    }, 150);
}
main();
