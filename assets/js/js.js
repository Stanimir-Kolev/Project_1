// document.getElementById('but').addEventListener('click', function () {

//     getWeather(document.querySelector('input').value, function (data) {
//         data.articles.forEach(function (x) {


//             document.getElementById('result').innerHTML = '<p class="pta"> Author: ' + x.author + '</p>'
//                 + '<p class="pta"> Title: ' + x.title + ' </p>' +
//                 '<p class="pta"> Description: ' + x.description + ' </p>' +
//                 "<img id='img' width='300px' src = '" + x.urlImage + "'/>" +
//                 '<p class="pta"> Published: ' + x.published + ' </p>'
//         }, this);
//     }, function (err) {
//         document.getElementById('result').innerHTML = '<p> Sorry ama ne stana</p>'
//     });
// }, false);

getWeather().then(function(data){
    var section = document.getElementById('section1');
    var article = document.createElement('article');
    article.setAttribute('class', 'new-box');
    section.appendChild(article);
    var image = document.createElement('img');
    image.src = data.urlImage;
    article.appendChild(image);
    var p = document.createElement('p');
    p.textContent = data.description;
    article.appendChild(p);
}).catch(err);

