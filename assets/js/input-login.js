
var x = document.getElementById('pass');

x.addEventListener("focus", function () {
    x.style.backgroundColor = 'greenyellow';
}, false);
x.addEventListener("blur", function () {
    x.style.backgroundColor = 'white';
}, false);

var y = document.getElementById('name');

y.addEventListener("focus", function () {
    y.style.backgroundColor = 'greenyellow';
}, false);
y.addEventListener("blur", function () {
    y.style.backgroundColor = 'white';
}, false);


var span1 = document.getElementById('nameSpan');
var sub = document.getElementById('submit');

sub.addEventListener('click', function () {
    var userName = document.getElementById('name');
    if (userName.value.length < 6) {
        span1.style.display = 'inline';
        event.preventDefault();
    } else {
        if (userName.value.length >= 6) {
            userName.value = userName.value.toUpperCase();
            span1.style.display = 'none';
        }
    }
}, false);

var span2 = document.getElementById('span2');

sub.addEventListener('click', function () {
    var userPass = document.getElementById('pass');
    if (!((userPass.value.match(/[a-z]/))
            && (userPass.value.match(/[A-Z]/)) && ((userPass.value.match(/\d+/))) && (userPass.value.length > 4))) {
        span2.style.display = 'inline';
        userPass.value = '';
        event.preventDefault();
    } else {
        if ((userPass.value.match(/[a-z]/))
            && (userPass.value.match(/[A-Z]/)) && ((userPass.value.match(/\d+/))) && (userPass.value.length > 4)) {
            span2.style.display = 'none';
        }
    }
}, false);

