var search = document.getElementById('search');
var show = document.getElementById('show');
search.addEventListener('click', function () {
    show.style.display = 'inline';
}, false);
var close = document.getElementById('close');
close.style.cursor = 'pointer';
close.addEventListener('click', function () {
    show.style.display = 'none';
}, false)

var snimki = document.getElementsByClassName('pic');
var mas = Array.prototype.slice.call(snimki);

// mas.forEach(function (x) {
//     x.addEventListener('mouseover', function () {
//         x.style.opacity = 0.8;
//     }, false)
// }, );
// mas.forEach(function (x) {
//     x.addEventListener('mouseout', function () {
//         x.style.opacity = 1;
//     }, false)
// }, );

// var pet = document.getElementsByClassName('peta');

