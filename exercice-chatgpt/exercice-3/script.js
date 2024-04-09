document.getElementById("blurButton").addEventListener("click", function() {
    var cells = document.querySelectorAll(".cell img");
    cells.forEach(function(cell) {
        cell.style.filter = "blur(5px)";
        cell.style.border = 'none';
    });
    setTimeout(function() {
        cells.forEach(function(cell) {
            cell.style.filter = "none";
        });
    }, 2000);
    
});