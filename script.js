$(function() {

  var fig = "close";
  $('.btn').click(function() {
    $('.profile-contents').toggle('slow');

    if(fig == 'close') {
      $(this).text('プロフィールを閉じる');
      fig = 'open';
    } else {
      $(this).text('プロフィールを見る');
      fig = 'close';
    }
  });

  $('#menu-show').click(function() {
    $('.menu-nav-wrapper').slideToggle();
  });

});
