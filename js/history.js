const historyTransactionsBtn = document.getElementById("historyTransactionsBtn");
const historyGamesBtn = document.getElementById('historyGamesBtn');
const historyTransactionsTable = document.getElementById("historyTransactionsTable");
const historyGamesTable = document.getElementById("historyGamesTable");


historyTransactionsBtn.addEventListener("click", function (){
    historyTransactionsTable.classList.add("active");
    historyTransactionsBtn.classList.add("active");
    historyGamesBtn.classList.remove("active");
    historyGamesTable.classList.remove("active");
});


historyGamesBtn.addEventListener("click", function (){
    historyGamesTable.classList.add("active");
    historyGamesBtn.classList.add("active");
    historyTransactionsBtn.classList.remove("active");
    historyTransactionsTable.classList.remove("active");
});

