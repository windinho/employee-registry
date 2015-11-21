var data = [
  {
    "name": "Sanchez Hopkins",
    "designation": "Founder and CEO",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Abigail Shields",
    "designation": "Software Engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Juliette Thompson",
    "designation": "Frontend engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Marks Whitehead",
    "designation": "Accountant",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Ratliff Murphy",
    "designation": "Software Engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Alyce Hoffman",
    "designation": "Frontend engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Bauer Cantrell",
    "designation": "Advisor",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Talley Hayden",
    "designation": "Software Engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Gonzalez Hurley",
    "designation": "Lead Designer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Trina Bishop",
    "designation": "Designer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  }
];

/*Displaying List*/
function displayList () {
 	var items = [];

  /*Sorting List*/
  data.sort(function(a, b) {
    return (a.name).localeCompare(b.name);
  });
  
  $.each( data, function( key, val ) {
    items.push( "<li class='collection-item avatar light-blue lighten-1 white-text'>" + "<img src='" + val.avatar + "' class='circle'>" + "<span class='title'>" + val.name + "</span>" + "<p class='designation'>" + val.designation + "</p>" + "</li>" );
  });
  $('.collection').append(items.join(""));
  $('.preloader-wrapper').fadeOut();
  $('.collection').fadeIn();
}  

/*Perform Filter*/
function filterSearch(element) {
  var items = $('.avatar').hide();
  var patt = new RegExp($(element).val(), 'i');

  var valid = items.filter(function () {
    return patt.test($(this).find('.title, .designation').text());
  }).show();

  items.not(valid).hide();

  if (valid.length === 0)
  	$('#error').fadeIn();
  else
  	$('#error').hide();
}

/*Instant Search*/
$('#search').on('keyup change', function () {
    filterSearch(this);
});

/*Add New Employee*/
$('#add').on('click', function () {
	var _name = $('#name').val();
	var _designation = $('#designation').val();
  data.push({
  	name: _name,
  	designation: _designation,
  	avatar: "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  });
  $('#search').val(null);
  $('#error').hide();
  $('.avatar').remove();
  displayList();
});