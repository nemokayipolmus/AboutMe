   $( function() {
    $( "#datepicker" ).datepicker();
  } );
  
$(function(){  
var language = [
"Java",
"JavaScript",
"Pyhton",
"C",
"C++",
"Ruby",
"Pearl"
]

$( "#language" ).autocomplete({
source: language
});

});

