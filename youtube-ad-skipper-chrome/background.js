chrome.contextMenus.create({
    id: "remove-ads",
    title: "Remove Remaining Ads",
});

chrome.contextMenus.onClicked.addListener((info, tab)=>{
    if (info.menuItemId === "remove-ads"){
        chrome.tabs.executeScript({
            file: "remove-ads.js",
        });
    }
});

