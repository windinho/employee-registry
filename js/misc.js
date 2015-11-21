$.getJSON( "sample.json", function( data ) {
  var items = [];
  data.sort(function(a, b) {
    return (a.name).localeCompare(b.name);
  });
  $.each( data, function( key, val ) {
    items.push( "<li class='collection-item avatar light-blue lighten-1 white-text'>" + "<img src='" + val.avatar + "' class='circle'>" + "<span class='title'>" + val.name + "</span>" + "<p class='designation'>" + val.designation + "</p>" + "</li>" );
  });
  $(".collection").append(items.join(""));
});