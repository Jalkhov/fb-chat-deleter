let tabs4close = [];

function TabsGetter(url){
    var tabs = [];
    var numTabs = gBrowser.tabContainer.childNodes.length;
    var targetUrl = url;

    for (var x = 0; x < numTabs; x++) {
        var currentTab = gBrowser.tabContainer.childNodes[x];

        var tab = gBrowser.getBrowserForTab(currentTab);
        var tabUrl = tab.contentWindow.location.href;

        if (tabUrl.includes(targetUrl)) {
            tabs.push(tab);
        }
    }

    return tabs;
}

function Delete(){
    var tabs = TabsGetter("m.facebook.com/messages/read/");

    for (var x = 0; x < tabs.length; x++) {
        var tabDoc = tabs[x].contentWindow.document;
        var deleteLink = tabDoc.getElementsByName("delete")[0];
        deleteLink.click();
    }
}

function confirmDelete(){
    var tabs = TabsGetter("m.facebook.com/messagingconfirmatio");
    tabs4close = tabs

    for (var x = 0; x < tabs.length; x++) {
        var tabDoc = tabs[x].contentWindow.document;
        var confirmLink = tabDoc.getElementsByClassName("bk bm")[0];
        confirmLink.click();

    }
}

/*
function closeTabs(){
    for (var x = 0; x < tabs4close.length; x++){
        tabs4close[x].close()
    }
}
*/
