adElements = [".ytd-companion-slot-renderer",
".ytd-action-companion-ad-renderer",
".ytd-watch-next-secondary-results-renderer.sparkles-light-cta",
".ytd-unlimited-offer-module-renderer",
".ytp-ad-overlay-image",
".ytp-ad-text-overlay",
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
".ytd-ad-slot-renderer",
];
unwantedElements = [
    ".ytd-promoted-video-renderer",
    ".ytd-brand-video-singleton-renderer",
    ".ytd-statement-banner-renderer",
    ".ytd-popup-container",
    ".ytd-rich-section-renderer",
    ".ytd-promoted-sparkles-web-renderer",
];
unwantedElementsSkipTagNames = [
    "YP-YT-IRON-DROPDOWN",
    "YTD-NOTIFICATION-TOPBAR-BUTTON-RENDERER",
    "YT-BUTTON-SHAPE",
    "IRON-MEDIA-QUERY",
];
function removeAdElements(){
    let n = 0;
    adElements.forEach((ad) => {
        let currentAd = document.querySelector(ad);
        if (document.querySelectorAll(ad).length > 1) {
            try{
                document.querySelectorAll(ad).forEach((adSlot) => {
                    if (!adSlot.hidden){
                        adSlot.hidden = true;
                        ++n;
                    }
                });
            } catch (_ex) {
                console.log(_ex, _ex.lineNumber);
            }
        } else if (currentAd) {
            if (!currentAd.hidden){
                currentAd.hidden = true;
                ++n;
            }
        }
    });
    unwantedElements.forEach((ad) => {
        let currentAd = document.querySelector(ad);
        if (document.querySelectorAll(ad).length > 1){
            document.querySelectorAll(ad).forEach((adSlot) => {
                try{
                    if (!adSlot.hidden){
                        if (ad == ".ytd-popup-container"){
                            if (unwantedElementsSkipTagNames.indexOf(adSlot) != -1){
                                adSlot.hidden = true;
                                ++n;
                            }
                        } else{
                            adSlot.hidden = true;
                            ++n;
                        }
                    }
                } catch (_ex) {
                    console.log(_ex, _ex.lineNumber);
                }
            })
        } else if (currentAd){
            if (!currentAd.hidden){
                currentAd.hidden = true;
                ++n
            }
        }
    })
    let logMessage = `Startup: %cRemoved ${n} ads`;
    n >= 1 ? console.log(logMessage, "color: #28a745") : console.log(logMessage, "color: #ffc107");
}

removeAdElements();

function main(){
    let adInterval = setInterval(()=>{
        let videoStream = document.getElementsByClassName("video-stream");
        let moviePlayer = document.getElementById("movie_player");
        let isAd = moviePlayer?.classList?.contains("ad-showing") || moviePlayer?.classList?.contains("ad-interrupting");
        if (isAd){
            if (videoStream[0].currentTime <= videoStream[0].duration - 0.1){
                videoStream[0].currentTime = videoStream[0].duration - 0.1;
            }
            if (videoStream[0].currentTime >= videoStream[0].duration - 0.1 && videoStream[0].paused){
                videoStream[0].play();
            }
            try {
                let skipButton = document.getElementsByClassName("ytp-ad-skip-button")[0];
                if (skipButton){
                    skipButton.click();
                    console.log("Clicked skip");
                }
                let skipButtonModern = document.getElementsByClassName("ytp-ad-skip-button-modern")[0];
                if (skipButtonModern){
                    skipButtonModern.click();
                    console.log("Clicked skip");
                }
            } catch {
                console.log("No skip button");
            }
        }
    }, 150);
}

main();
