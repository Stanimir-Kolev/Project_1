var x = localStorage.getItem('allNews');
var all = JSON.parse(x);

all = all.map(function (x) {
    return x.source;
})