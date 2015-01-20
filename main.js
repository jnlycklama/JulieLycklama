// $(function() {
//     // Stick the #nav to the top of the window
//     var nav = $('#nav');
//     var navHomeY = nav.offset().top;
//     var isFixed = false;
//     var $w = $(window);
//     $w.scroll(function() {
//         var scrollTop = $w.scrollTop();
//         var shouldBeFixed = scrollTop > navHomeY;
//         if (shouldBeFixed && !isFixed) {
//             nav.css({
//                 position: 'fixed',
//                 top: 0,
//                 left: nav.offset().left,
//                 width: nav.width()
//             });
//             isFixed = true;
//         }
//         else if (!shouldBeFixed && isFixed)
//         {
//             nav.css({
//                 position: 'static'
//             });
//             isFixed = false;
//         }
//     });
// });
​
function imageSwitch(imgHover){
    document.imgHover.src="6.png";
}

function imageSwitchTwo(imgHover){
    document.imgHover.src="7.png";
}

function changeImage(img){
    // document.getElementById('bigImage').src=img;
    setTimeout(function() {document.getElementById('course1').src=img;},1250);
}