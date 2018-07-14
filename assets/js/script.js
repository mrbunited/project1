$(".btn").on("click", function(event) {
    event.preventDefault();
    var searchQ = $("#searchInput").val().trim();
    console.log("Searched: " + searchQ);
})