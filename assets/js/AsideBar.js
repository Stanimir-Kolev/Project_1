document.addEventListener('DOMContentLoaded', function () {
    var novini = JSON.parse(localStorage.getItem("allNews"));
    var tagoveLi = document.querySelectorAll('.aside-sort-content');
    var noviniSortBy = novini.sort((a, b) => Date.parse(b.news.publishedAt) - Date.parse(a.news.publishedAt));

    function a(index) {
        var paragraphHolder = document.querySelector("#aside-content");
        var articlesHTML = '';
        for (var i = 0; i < 6; i++) {
            if (!noviniSortBy[i]) {
                break;
            }
            var article = noviniSortBy[i].news;
            if (article.publishedAt != null) {
                var date = article.publishedAt.toLocaleString();
                var hours = date.slice(11, 16);
            } else {
                var date = "";
                var hours = '00:00';
            }
            if (arguments.length == 1)
                articlesHTML += `<p><span>&nbsp-&nbsp&nbsp${i + 1}&nbsp-&nbsp</span>${article.title}</p>`;
            else
                articlesHTML += `<p><span>${hours}</span>${article.title}</p>`;
        }
        paragraphHolder.innerHTML = articlesHTML;
        var paragraph = document.querySelectorAll("#aside-content > p");
        paragraph.forEach(x => x.style.cursor = "pointer");
        paragraph.forEach(x => x.addEventListener("mouseover", function () {
            this.style.backgroundColor = "#6B0000";
            this.style.color = "#fff";
        }));
        paragraph.forEach(x => x.addEventListener("mouseout", function () {
            this.style.backgroundColor = "#94908B";
            this.style.color = "#000";
        }));
        var bigArticle;
        document.querySelectorAll("#aside-content > p").forEach((y, index) => y.addEventListener("click", function () {
            document.querySelector('#novini').innerHTML = '';
            if ($('div[class="big-news-box"]').length != 0) {
                $('div[class="big-news-box"]').html("");
                bigArticle = $('div[class="big-news-box"]');
            } else {
                bigArticle = $('<div class="big-news-box">');
            }
            var article = noviniSortBy[index].news;
            var title1 = article.title;
            var author1 = article.author;
            if (article.publishedAt != null) {
                var date1 = article.publishedAt.toLocaleString().slice(0, 10);
                var hour1 = article.publishedAt.toLocaleString().slice(11, 19);
            } else {
                date1 = "";
                hour1 = "";
            }
            var p = article.description;
            var sudurjanie = document.querySelector('#novini');

            var title = $('<h2>').text(title1).css('fontWeight', 'bold');
            bigArticle.append(title);

            var img1 = $('<img src="' + article.urlToImage + '">')
            bigArticle.append(img1);

            var description = document.createElement("p");
            description.textContent = p;
            bigArticle.append(description);

            var author = document.createElement('p');
            if (author1 !== null) {
                author.textContent = 'Author: ' + author1;
            } else {
                author.textContent = 'Author: No author.';
            }
            bigArticle.append(author);
            var published = document.createElement('p');
            published.textContent = 'Date: ' + date1 + " Hour: " + hour1;
            bigArticle.append(published);
            bigArticle.css('cursor', "pointer");
            $("#novini").append(bigArticle);
        }))
    }
    a();
    tagoveLi.forEach(function (x, index) {
        x.addEventListener('click', function () {
            var elementId = this.getAttribute("id");
            document.getElementById(elementId).setAttribute("class", "aside-sort-content-on");

            if (index == 0) {
                tagoveLi[index + 1].setAttribute("class", "aside-sort-content");
                tagoveLi[index + 2].setAttribute("class", "aside-sort-content");
                noviniSortBy = novini.sort((a, b) => Date.parse(b.news.publishedAt) - Date.parse(a.news.publishedAt));
                a();
            }
            if (index == 1) {
                tagoveLi[index + 1].setAttribute("class", "aside-sort-content");
                tagoveLi[index - 1].setAttribute("class", "aside-sort-content");
                noviniSortBy = novini.sort((a, b) => Date.parse(a.news.publishedAt) - Date.parse(b.news.publishedAt));
                a();
            }
            if (index == 2) {
                tagoveLi[index - 1].setAttribute("class", "aside-sort-content");
                tagoveLi[index - 2].setAttribute("class", "aside-sort-content");
                noviniSortBy = [];
                novini.forEach(function (z) {
                    if (!noviniSortBy.some(y => y.source == z.source))
                        noviniSortBy.push(z);
                })
                a(index);
            }

        }, false);
    });
});