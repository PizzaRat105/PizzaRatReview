function hide_Popup(popupID) {
    let popup = document.getElementById(popupID);
    if (popup) {
        popup.style.display = "none";
    }
}

function show_Popup(popupID) {
    let popup = document.getElementById(popupID);
    if (popup) {
        popup.style.display = "block";
    }
}