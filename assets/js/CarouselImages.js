document.addEventListener('DOMContentLoaded', function () {
    var novini = JSON.parse(localStorage.getItem("allNews"));
    const MAX_IMAGES = 9;
    var images = document.querySelectorAll('.caroImg');
    var carouselArray = [];
    var p = document.querySelectorAll('.caroPara')
    for (var i = 0; i < MAX_IMAGES; i++) {
        var random = Math.floor(Math.random() * novini.length);
        if (carouselArray.indexOf(random) == -1) {
            carouselArray.push(novini[random]);
        }

    }
    for (var i = 0; i < carouselArray.length; i++) {
        images[i].src = carouselArray[i].news.urlToImage;
        p[i].textContent = carouselArray[i].news.title;
    }
    images.forEach(function (x, index) {
        x.addEventListener('click', function () {
            document.querySelector('#novini').innerHTML = "";
            var article = carouselArray[index].news;
            var title1 = article.title;
            var author1 = article.author;
            var pub = article.publishedAt;
            var p = article.description;
            var sudurjanie = document.querySelector('#novini');

            var bigArticle = document.createElement('div');
            bigArticle.setAttribute('class', 'big-news-box');
            document.querySelector('#novini').appendChild(bigArticle);

            var title = document.createElement("h2");
            title.textContent = title1;
            title.style.fontWeight = 'bold';
            bigArticle.appendChild(title);

            var img1 = document.createElement('img');
            img1.src = article.urlToImage;
            bigArticle.appendChild(img1);

            var description = document.createElement("p");
            description.textContent = p;
            bigArticle.appendChild(description);

            var author = document.createElement('p');
            if (author1 !== null) {
                author.textContent = 'Author: ' + author1;
            } else {
                author.textContent = 'Author: No author.';
            }
            bigArticle.appendChild(author);
            var published = document.createElement('p');
            published.textContent = 'Date: ' + pub;
            bigArticle.appendChild(published);
        }, false);
    }, false);

}, false);