adElements = [
    ".ytd-companion-slot-renderer",
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
    ".ytd-in-feed-ad-layout-renderer",
    ".ytd-ad-slot-renderer",
];
unwantedElements = [
    ".ytd-promoted-video-renderer",
    ".ytd-brand-video-singleton-renderer",
    ".ytd-brand-video-shelf-renderer",
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
function removeRemainingAds(){
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
            } catch (_ex){
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
            try{
                document.querySelectorAll(ad).forEach((adSlot) => {
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
                });
            } catch (_ex){
                console.log(_ex, _ex.lineNumber);
            }
        }
        if (currentAd){
            if (!currentAd.hidden && ad != ".ytd-popup-container"){
                currentAd.hidden = true;
                ++n;
            }
        }
    })
    let logMessage = `%cRemoved ${n} ads`;
    n >= 1 ? console.log(logMessage, "color: #28a745") : console.log(logMessage, "color: #ffc107");
}

removeRemainingAds();
