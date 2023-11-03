browser.contextMenus.create({
    id: "remove-ads",
    title: "Remove Remaining Ads",
});

browser.contextMenus.onClicked.addListener((info, tab)=>{
    if (info.menuItemId === "remove-ads"){
        browser.tabs.executeScript({
            file: "remove-ads.js",
        });
    }
});

