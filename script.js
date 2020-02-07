/*
const closeMenu = () => {
    $('.mobile-menu-content').hide({duration: 400})
  //  $('.content').show({duration: 400})
   // $('.navbar').show({duration: 400})
}

const openMenu = () => {
    $('.mobile-menu-content').show({duration: 400})
  //  $('.content').hide()
  //  $('.navbar').hide()
}
*/

$(document).ready(function(){
  $('.close-toggle-btn').click(function(){
    $('.mobile-menu-content').slideUp('slow');
  })
});

$(document).ready(function(){
  $('.mobile-menu-button').click(function(){
    $('.mobile-menu-content').slideDown('slow');
  })
});
