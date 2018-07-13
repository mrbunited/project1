

function renderSearch() {
    $("#searchArea").empty;
    // var searchBar = $("<form>");
        // searchBar.addClass("form-control");
    var searchBar = $("#searchArea");
        searchBar.html("<input type='text' id='userSearch' class='form-control'>");
        searchBar.attr("placeholder", "Choose a City");
        
    $("#searchArea").append(searchBar)
    
    var button = $("<button>");
        button.addClass("btn btn-primary");
        button.text("Search");
    
    $("#buttonArea").append(button);
}




















$(document).ready(function () {
    renderSearch();
})