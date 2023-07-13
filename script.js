window.onscroll = function() { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

let toggle_navbar = document.getElementById('toggle_navbar');

toggle_navbar.addEventListener('click', myfunction);


function myfunction() {
    let toggleul = document.getElementById('toggleul');
    toggleul.classList.toggle('active');
    toggle_navbar.classList.toggle('fa-xmark')
}

// Scroll Indicator script