try{
    importScripts("/remove-ads.js")
} catch (_ex) { console.log(_ex) }
chrome.contextMenus.create({
    id: "remove-ads",
    title: "Remove Remaining Ads",
});

chrome.contextMenus.onClicked.addListener((info, tab)=>{
    if (info.menuItemId === "remove-ads"){
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["remove-ads.js"],
        });
    }
});

chrome.tabs.onUpdated.addListener((id, change, tab) => {
    if (change.status === "complete" && tab.url.includes("https://www.youtube.com")){
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["remove-ads.js"],
        })
    }
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     files: ["remove-ads.js"],
    // });
});
