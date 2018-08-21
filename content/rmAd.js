function hideAdsBlock() {
    if (document.getElementById("ads_left")) {
        document.getElementById("ads_left").style.display = "none";
    }

    if (document.getElementById("ya_direct")) {
        document.getElementById("ya_direct").style.display = "none";
    }
}

hideAdsBlock();
var listObserver = new MutationObserver(elementAdded);
listObserver.observe(document.body, {
    childList: true,
    subtree: true
});

function elementAdded(mutations) {
    hideAdsBlock();
}