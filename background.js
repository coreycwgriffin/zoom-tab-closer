chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'complete') {
        checkTabs();
    }
});

chrome.tabs.onRemoved.addListener(() => {
    checkTabs();
});

function checkTabs() {
    const timeout = 60; // seconds
    const conditions = {
        title: "Launch Meeting - Zoom",
        url: "https://*.zoom.us/j/*"
    }
    chrome.tabs.query(conditions, (tabs) => {
        tabs.forEach((tab) => {
            if (tab.url && new Date() - new Date(tab.lastAccessed) > timeout * 1000) {
                chrome.tabs.remove(tab.id);
            }
        });
    });
}

setInterval(checkTabs, 60000);