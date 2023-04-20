const gamesSearch = document.getElementById("gamesSearch");
const gamesSearchDrop = document.getElementById("gamesSearchDrop");

gamesSearch.addEventListener('focus', function (){
    if (document.activeElement === gamesSearch) {
        gamesSearchDrop.classList.add("show");
    }
});

gamesSearch.addEventListener('blur', function (){
    gamesSearchDrop.classList.remove("show");
});