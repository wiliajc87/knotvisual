$(document).ready(function() {
  $('#block1').mouseenter(function() {
    console.log('happened');
    $( "#desc1" ).fadeIn("slow");
  });
  $('#block3').mouseenter(function() {
    console.log('happened');
    $( "#desc2" ).fadeIn("slow");
  });
  $('#block6').mouseenter(function() {
    console.log('happened');
    $( "#desc3" ).fadeIn("slow");
  });
  $('#block8').mouseenter(function() {
    console.log('happened');
    $( "#desc4" ).fadeIn("slow");
  });
  $('#block9').mouseenter(function() {
    console.log('happened');
    $( "#desc5" ).fadeIn("slow");
  });
  $('#block11').mouseenter(function() {
    console.log('happened');
    $( "#desc6" ).fadeIn("slow");
  });
    $('#block1').mouseleave(function() {
    console.log('happened');
    $( "#desc1" ).fadeOut("slow");
  });
  $('#block3').mouseleave(function() {
    console.log('happened');
    $( "#desc2" ).fadeOut("slow");
  });
  $('#block6').mouseleave(function() {
    console.log('happened');
    $( "#desc3" ).fadeOut("slow");
  });
  $('#block8').mouseleave(function() {
    console.log('happened');
    $( "#desc4" ).fadeOut("slow");
  });
  $('#block9').mouseleave(function() {
    console.log('happened');
    $( "#desc5" ).fadeOut("slow");
  });
  $('#block11').mouseleave(function() {
    console.log('happened');
    $( "#desc6" ).fadeOut("slow");
  });

  $('.gallery1').featherlightGallery();
  $('.gallery2').featherlightGallery();
  $('.gallery3').featherlightGallery();
  $('.gallery4').featherlightGallery();
  $('.gallery5').featherlightGallery();
  $('.gallery6').featherlightGallery();

});
