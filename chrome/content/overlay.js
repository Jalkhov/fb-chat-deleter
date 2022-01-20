let tabs4close = [];

function TabsGetter(url, saveTabs = false) {
    var tabs = [];
    var numTabs = gBrowser.tabContainer.childNodes.length;
    var targetUrl = url;

    for (var x = 0; x < numTabs; x++) {
        var tab = gBrowser.tabContainer.childNodes[x];
        var tabBrowser = gBrowser.getBrowserForTab(tab);
        var tabUrl = tabBrowser.contentWindow.location.href;

        if (tabUrl.includes(targetUrl)) {
            tabs.push(tabBrowser);
            if (saveTabs) {
                tabs4close.push(tab);
            }
        }
    }

    return tabs;
}

function Delete() {
    var tabs = TabsGetter("m.facebook.com/messages/read/", true);

    for (var x = 0; x < tabs.length; x++) {
        var tabDoc = tabs[x].contentWindow.document;
        var deleteLink = tabDoc.getElementsByName("delete")[0];
        deleteLink.click();
    }
}

function confirmDelete() {
    var tabs = TabsGetter("m.facebook.com/messagingconfirmatio");

    for (var x = 0; x < tabs.length; x++) {
        var tabDoc = tabs[x].contentWindow.document;
        var confirmLink = tabDoc.getElementsByClassName("bk bm")[0];
        confirmLink.click();
    }
}

function closeTabs() {
    console.log();
    for (var x = 0; x < tabs4close.length; x++) {
        gBrowser.removeTab(tabs4close[x]);
    }
}
