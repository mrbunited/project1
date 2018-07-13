

function renderSearch() {
    $("#searchArea").empty;
    var searchBar = $("#searchArea");
        //adds the search bar bootstrap html
        // searchBar.html("<input type='text' id='userSearch' class='form-control'>");
        searchBar.html("<form class='form-inline'><label class='sr-only' for='inlineSearch'>Name</label><input type='text' class='form-control mb-2 mr-sm-2' id='inlineSearch' placeholder='Choose a City'><button type='submit' class='btn btn-primary mb-2'>Submit</button></form>");
    $("#searchArea").append(searchBar)
    
}




$(document).ready(function () {
    renderSearch();
})