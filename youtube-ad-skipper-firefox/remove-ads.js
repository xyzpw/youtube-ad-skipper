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
function removeRemainingAds(){
    adElements.forEach((ad)=>{
        document.querySelector(ad) ? document.querySelector(ad).hidden = true : null;
    });
    console.log("Removed all ads in element list");
}
removeRemainingAds();
