navbar();

function navbar() { //https://private.filesanywhere.com/elevation/  
    var nav = '';
    nav += ' <nav class="navbar navbar-default navbar-fixed-top">';
    nav += ' <div class="container-fluid">';
    nav += '   <div class="navbar-header">';
    nav += '     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
    nav += '       <span class="icon-bar"></span>';
    nav += '       <span class="icon-bar"></span>';
    nav += '       <span class="icon-bar"></span> ';
    nav += '     </button>';
    nav += '  </div>';
    nav += '  <div class="collapse navbar-collapse" id="myNavbar">';
    nav += '    <a id="navLogo" href="index.html"><img class="header-logo" src="images/logoNav.png"/></a>';
    nav += '     <ul class="nav navbar-nav">';
    nav += '      <li><a href="index.html">Home</a></li>';
    nav += '      <li><a href="about.html">About</a></li>';

    nav += '      <li><a href="services.html">Services</a></li>';
//    nav += '      <li><a href="listings.html">Listings</a></li>';
    nav += '      <li><a href="contact.html">Contact</a></li>';
    nav += '      <li><a href="https://private.filesanywhere.com/elevation/" target="_blank">Employee Login</a></li>';

    nav += '      </ul>';
    nav += '  </div>';
    nav += '  </div>';
    nav += ' </nav>';
    document.getElementById('nav').innerHTML = nav;
}
footer()

function footer() {
    var footer = '';
    footer += '<footer class="foot">';
    footer += ' <ul class="footer-list">';

    footer += '        <li style="">Made By: © 2020 TaylorPasq LLC. All Rights Reserved</li>';
    footer += '   </ul>';
    footer += ' </footer>';
    footer += '<footer class="foot-small-screen">';
    footer += ' <ul class="">';

    footer += '        <li>Made By: © 2017 TaylorPasq LLC. All Rights Reserved</li>';
    footer += '   </ul>';
    footer += ' </footer>';
    document.getElementById('foot').innerHTML = footer;
}
$(document).ready(function () {
    console.log("ready!");
    $('.no-fouc').removeClass('no-fouc');
    $('.no-fouc').fadeIn('slow');
    $('.animateBottom').addClass('animateFromBottom');
    $('.animateBottom').fadeIn()
    $('.animateLeft').addClass('animateFromLeft');
    $('.animateLeft').fadeIn("slow")
    $('.animateRight').addClass('animateFromRight');
    $('.animateRight').fadeIn("slow")
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('.out').click(function () {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });
    

    function newpage() {
        window.location = newLocation;
    }
    setTimeout(function () {
        //                        $('.fader').css('display', 'none');
        $('.fader').fadeIn(1000);
        $('.fader').css('visibility', 'visible')
    }, 1000);
});
setTimeout(function () {
    $('#dev').addClass('animateFromBottom');
    $('#dev').fadeIn('slow')
    $('#dev').css('visibility', 'visible')
}, 100);
setTimeout(function () {
    $('#construct').addClass('animateFromBottom');
    $('#construct').fadeIn('slow')
    $('#construct').css('visibility', 'visible')
}, 300);
setTimeout(function () {
    $('#propMgmt').addClass('animateFromBottom');
    $('#propMgmt').fadeIn('slow')
    $('#propMgmt').css('visibility', 'visible')
}, 500);
setTimeout(function () {
    $('#lease').addClass('animateFromBottom');
    $('#lease').fadeIn('slow')
    $('#lease').css('visibility', 'visible')
}, 700);
setTimeout(function () {
    $('#wire').addClass('animateFromBottom');
    $('#wire').fadeIn('slow')
    $('#wire').css('visibility', 'visible')
}, 900);
// better image preloading @ https://perishablepress.com/press/2009/12/28/3-ways-preload-images-css-javascript-ajax/