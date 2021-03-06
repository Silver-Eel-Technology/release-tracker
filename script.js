/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 * https://gomakethings.com/debouncing-your-javascript-events/
 */
var debounce=function(a){var e;return function(){var n=this,i=arguments;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(function(){a.apply(n,i)})}};

/**
 * Main code section
 */

// calculate 40rem in px (based off body font size)
var mqw = parseInt(getComputedStyle(document.body).fontSize) * 40;

// handle responsive sidebar toggling
$('#toggle-sidebar, #close-sidebar').on('click', function(){
  if( window.innerWidth < mqw ) {
    // toggle xs menu
    // console.log('Toggling XS menu', mqw, window.innerWidth);
    if( $('#page-container').hasClass('sidebar-open-xs') ) {
      $('#page-container').removeClass('sidebar-open-xs');
      $('#sidebar').removeClass('open-xs');
    } else {
      $('#page-container').removeClass('sidebar-open-xs').addClass('sidebar-open-xs');
      $('#sidebar').removeClass('open-xs').addClass('open-xs');
    }
  } else {
    // toggle regular menu
    // console.log('Toggling regular menu', mqw, window.innerWidth);
    if( $('#page-container').hasClass('sidebar-open') ) {
      $('#page-container').removeClass('sidebar-open');
      $('#sidebar').removeClass('open');
    } else {
      $('#page-container').removeClass('sidebar-open').addClass('sidebar-open');
      $('#sidebar').removeClass('open').addClass('open');
    }
  }
});

// check for resizing and remove XS sidebar when > 40rem
$(window).on('resize', debounce(function(){
  if( window.innerWidth > mqw ) {
    $('#page-container').removeClass('sidebar-open-xs');
  }
}));

// handle sidebar & actionbar submenu toggling
$('#sidebar li.sub-menu > a').on('click', function(e){
  e.preventDefault();

  if( $(this).parent().hasClass('open') ) {
    $(this).parent().removeClass('open');
    $(this).next('ul').slideUp();
  } else {
    $(this).parent().removeClass('open').addClass('open');
    $(this).next('ul').slideDown();
  }
});
