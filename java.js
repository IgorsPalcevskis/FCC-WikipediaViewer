$( document ).ready(function() {
$('#search_button').click( function getSearchData() {
var searchInput = $('#search_term').val();
// ajax https request API
  $.ajax({
    url:'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchInput + '&limit=10&namespace=0&format=json&callback=?',
// using jsonp to work around Access control allow origin
    jsonp:'jsonp',
    dataType:'jsonp',
// function to run when api request successful
    success: function(response) {
      var result = '';
      for (var i = 0; i < response[1].length; i++) {
        result += '<a class="wiki_link" href="' + response[3][i] + '" target="_blank"><div class="single_result"><h2>' + response[1][i] + '</h2>' + '<p>' + response[2][i] + '</p></div></a>';
      }
      $('#data_from_wiki').html(result);
    },
    error: function errorAlert(xhr) {
      alert("An error occured: "  + xhr.status + " " + xhr.statusText);
    }
  });
});
$("#search_term").keyup(function(event){
    if(event.keyCode == 13){
        $("#search_button").click();
    }
});
});
