document.addEventListener('DOMContentLoaded', function () {
<<<<<<< HEAD
    getNews('google-news').then(function (data) {
        var sudurjanie = document.querySelector('#novini');
=======
    //     var tagoveLi = document.querySelectorAll('.aside-sort-content');
    // var first = tagoveLi[0].setAttribute('clicked', 'on');
    // var second = tagoveLi[1].setAttribute('clicked', 'off');
    // var third = tagoveLi[2].setAttribute('clicked', 'off');
    // tagoveLi.forEach(function(x) {
    //     x.addEventListener('click', function() {
    //         if (x.getAttribute('clicked') == 'off') {
    //             var toziEOn = tagoveLi.find(y => y.getAttribute('clicked') == 'on');
    //             toziEOn.setAttribute('clicked', 'off');
    //             x.className = "aside-sort-content-on";
    //             x.setAttribute('clicked', 'on');
    //         }
    //     }, false);
    // });
    // Butoni sort
    // var elementLi = document.querySelectorAll('.aside-sort-content');
    // elementLi.forEach(function (x) {
    //     x.setAttribute('clicked', 'false')
    //     x.addEventListener('click', function () {
    //         var asideContent = document.getElementById('aside-content');
    //         if (x.getAttribute('clicked') == 'false') {
    //             x.style.paddingBottom = 10 + 'px';
    //             asideContent.style.marginTop = -10 + 'px';
    //             x.setAttribute('clicked', 'true');
    //         } else {
    //             x.style.paddingBottom = 0 + 'px';
    //             asideContent.style.marginTop = -10 + 'px';
    //             x.setAttribute('clicked', 'false');
    //         }
    //     }, false);
    // });
    //Novini

    var novini = document.getElementById('novini-content');
    getNews('focus').then(function (data) {
        var sudurjanie = document.querySelector('#novini > #content > .section-content');
>>>>>>> 5edfdebc6f2d727bafdc65af85dc5d544e51fa37
        var section = document.createElement('section');
        sudurjanie.appendChild(section);
        for (var index = 0; index < 6; index++) {
            var article = document.createElement('article');
            article.setAttribute('class', 'news-box');
            section.appendChild(article);
            let image = document.createElement('img');
            let p = document.createElement('p');
            let title1 = data.title[index];
            let date1 = data.published[index].toLocaleString().slice(0, 10);
            let hour1 = data.published[index].toLocaleString().slice(11, 19);
            let author1 = data.author[index];
            p.textContent = data.description[index];
            article.appendChild(image);
            image.src = data.urlImage[index];
            article.appendChild(p);


            article.addEventListener('click', function () {
                document.querySelector('#novini > section').style.display = 'none';
                var bigArticle = document.createElement('div');
                bigArticle.setAttribute('class', 'big-news-box');
                document.querySelector('#novini').appendChild(bigArticle);
                var title = document.createElement("h2");
                title.textContent = title1;
                title.style.fontWeight = 'bold';
                bigArticle.appendChild(title);
                var img1 = document.createElement('img');
                img1.src = image.src;
                bigArticle.appendChild(img1);
                var description = document.createElement("p");
                description.textContent = p.textContent;
                bigArticle.appendChild(description);
                var author = document.createElement('p');
                if (author1 !== null) {
                    author.textContent = 'Author: ' + author1;
                } else {
                    author.textContent = 'Author: No author.';
                }
                bigArticle.appendChild(author);
                var published = document.createElement('p');
                published.textContent = 'Date: ' + date1 + " Hour: " + hour1;
                bigArticle.appendChild(published);
                bigArticle.style.cursor = "pointer";
                bigArticle.addEventListener("click", function () {
                    document.querySelector('#novini').removeChild(bigArticle);
                    document.querySelector('#novini > section').style.display = 'block';
                })
            }, false);
        }
    }).catch();
    var x = document.querySelectorAll("#navigation-bar > li > a");
    x.forEach(y => y.addEventListener('click', function () {
        var id = $(this).attr('id');
        event.preventDefault();
        var sudurjanie = document.querySelector('#novini');
        sudurjanie.innerHTML = '';
        getNews(id).then(function (data) {
            localStorage.setItem('allNews', JSON.stringify(allNews));
            var section = document.createElement('section');
            sudurjanie.appendChild(section);

            for (var index = 0; index < 6; index++) {
                var article = document.createElement('article');
                article.setAttribute('class', 'news-box');
                section.appendChild(article);
                let image = document.createElement('img');
                let p = document.createElement('p');
                let title1 = data.title[index];
                let date1 = data.published[index].toLocaleString().slice(0, 10);
                let hour1 = data.published[index].toLocaleString().slice(11, 19);
                let author1 = data.author[index];
                p.textContent = data.description[index];
                article.appendChild(image);
                image.src = data.urlImage[index];
                article.appendChild(p);

                article.addEventListener('click', function () {
                    document.querySelector('#novini > section').style.display = 'none';
                    var bigArticle = document.createElement('div');
                    bigArticle.setAttribute('class', 'big-news-box');
                    document.querySelector('#novini').appendChild(bigArticle);
                    var title = document.createElement("h2");
                    title.textContent = title1;
                    title.style.fontWeight = 'bold';
                    bigArticle.appendChild(title);
                    var img1 = document.createElement('img');
                    img1.src = image.src;
                    bigArticle.appendChild(img1);
                    var description = document.createElement("p");
                    description.textContent = p.textContent;
                    bigArticle.appendChild(description);
                    var author = document.createElement('p');
                    if (author1 !== null) {
                        author.textContent = 'Author: ' + author1;
                    } else {
                        author.textContent = 'Author: No author.';
                    }
                    bigArticle.appendChild(author);
                    var published = document.createElement('p');
                    published.textContent = 'Date: ' + date1 + " Hour: " + hour1;
                    bigArticle.appendChild(published);
                    bigArticle.style.cursor = "pointer";

                    bigArticle.addEventListener("click", function () {
                        document.querySelector('#novini').removeChild(bigArticle);
                        document.querySelector('#novini > section').style.display = 'block';
                    })
                }, false);
            }
        }).catch();
    }, false));
});

