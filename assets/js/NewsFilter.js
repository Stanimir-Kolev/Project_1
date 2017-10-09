document.addEventListener("DOMContentLoaded", function () {
    var butSearch = document.getElementById("search-img");
    butSearch.addEventListener("click", function () {
        butSearch.style.display = "none";
        var divche = document.createElement("div");
        divche.setAttribute("id", "search-box");
        var cont = document.querySelector("#searching-feeld");
        cont.appendChild(divche);
        var inputche = document.createElement("input");
        inputche.setAttribute("type", "text");
        inputche.setAttribute("placeholder", "Търсене...");
        inputche.setAttribute("id", "search-input");
        divche.appendChild(inputche);
        var butonka = document.createElement("button");
        butonka.setAttribute("type", "submit");
        butonka.setAttribute("id", "search-button-nav");
        butonka.textContent = ">";
        divche.appendChild(butonka);
        var spanche = document.createElement("span");
        spanche.textContent = "x";
        spanche.setAttribute("id", "search-button-off");
        divche.appendChild(spanche);
        var searchCont = document.getElementById("search-content");
        spanche.addEventListener("click", function () {
            butSearch.style.display = "inline-block";
            divche.style.display = "none";
            document.querySelector("#novini").style.display = "inline-block";
            searchCont.style.display = "none";
            cont.removeChild(divche);
        });
        butonka.addEventListener("click", function () {
            document.querySelector("#novini").style.display = "none";
            searchCont.style.display = "block";
            var butSearchText = document.getElementById('search-input').value;
            document.getElementById('search-input-text').value = butSearchText;
        });
        var novini = JSON.parse(localStorage.getItem("allNews"));
        var selectTag = document.querySelector("#select-category");
        var valueOfCategorySelect = '';
        var valueOfTypeSelect = '';
        var selectType = document.getElementById('select-type');
        var findButton = document.getElementById('search-but');
        selectTag.addEventListener('change', function () {
            valueOfCategorySelect = selectTag.value;
        })
        selectType.addEventListener('change', function () {
            valueOfTypeSelect = selectType.value;
        })

        function printData(title, descripton) {
            var divFoundNews = document.getElementById('search-result-mini');
            var articleFoundNews = document.createElement("article");
            articleFoundNews.setAttribute("class", "found-news");
            divFoundNews.appendChild(articleFoundNews);
            var divArticle = document.createElement("div");
            articleFoundNews.appendChild(divArticle);
            var zaglavie = document.createElement("p");
            zaglavie.textContent = title;
            divArticle.appendChild(zaglavie);
            var sudurjanie = document.createElement("p");
            sudurjanie.textContent = descripton;
            divArticle.appendChild(sudurjanie);
        }

        function displayData(filterData) {
            var sudurjanie = document.querySelector('#novini');
            sudurjanie.innerHTML = "";
            document.getElementById("search-content").style.display = "none";
            var article = filterData;
            var title1 = article.title;
            var author1 = article.author;
            var pub = article.publishedAt;
            var p = article.description;
            var bigArticle = document.createElement('div');
            bigArticle.setAttribute('class', 'big-news-box');
            sudurjanie.appendChild(bigArticle);
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
            sudurjanie.style.display = "block";
        }
        findButton.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#search-result-mini').style.display = "inline-block";
            document.querySelector('#info-for-search').innerHTML = '';
            document.querySelector('#search-result-mini').innerHTML = '';
            var novini1 = [];
            var durjachArray = [];
            var counter = 0;
            var searchInput = document.getElementById('search-input-text').value;
            var divResult = document.getElementById("info-for-search");
            var pSearch = document.createElement("p");
            divResult.appendChild(pSearch);
            var spanResult = document.createElement("span");
            divResult.appendChild(spanResult);
            if (valueOfTypeSelect == '' && valueOfCategorySelect !== '') {
                novini1 = novini.filter(x => x.source === valueOfCategorySelect);
                novini1.forEach(function (x) {
                    if (x.source == valueOfCategorySelect) {
                        if ((x.news.title.indexOf(searchInput) !== -1) || (x.news.description.indexOf(searchInput) !== -1)) {
                            console.log(x);
                            console.log('1');
                            durjachArray.push(x);
                            printData(x.news.title, x.news.description);
                            counter++;
                        }
                    }
                });
                document.getElementById('search-input-text').value = '';
                document.querySelectorAll('.found-news').forEach(function (x, index) {
                    x.addEventListener('click', function () {
                        displayData(durjachArray[index].news);
                    }, false);
                }, false);
            };
            if (valueOfTypeSelect != '' && valueOfCategorySelect == '') {
                novini1 = novini.filter(x => x.news[valueOfTypeSelect])
                novini1.forEach(function (x) {
                    if (valueOfTypeSelect == 'title') {
                        if ((x.news.title.indexOf(searchInput) !== -1)) {
                            durjachArray.push(x);
                            printData(x.news.title, x.news.description);
                            counter++;
                        };
                    };
                    if (valueOfTypeSelect == 'description') {
                        if ((x.news.description.indexOf(searchInput) !== -1)) {
                            durjachArray.push(x);
                            printData(x.news.title, x.news.description);
                            counter++;
                        };
                    };
                    if (valueOfTypeSelect == 'author') {
                        if ((x.news.author.indexOf(searchInput) !== -1)) {
                            durjachArray.push(x);
                            printData(x.news.title, x.news.description);
                            counter++;
                        };
                    };
                });
                document.getElementById('search-input-text').value = '';
                document.querySelectorAll('.found-news').forEach(function (x, index) {
                    x.addEventListener('click', function () {
                        displayData(durjachArray[index].news);
                    }, false);
                }, false);
            };
            if (valueOfCategorySelect && valueOfTypeSelect) {
                novini1 = novini.filter(x => x.source == valueOfCategorySelect && x.news[valueOfTypeSelect]);
                novini1.forEach(function (x) {
                    if (x.source == valueOfCategorySelect) {
                        if (valueOfTypeSelect == 'title') {
                            if (x.news.title.indexOf(searchInput) !== -1) {
                                durjachArray.push(x);
                                printData(x.news.title, x.news.description);
                                counter++;
                            };
                        };
                        if (valueOfTypeSelect == 'description') {
                            if (x.news.description.indexOf(searchInput) !== -1) {
                                durjachArray.push(x);
                                printData(x.news.title, x.news.description);
                                counter++;
                            };
                        };
                        if (valueOfTypeSelect == 'author') {
                            if ((x.news.author.indexOf(searchInput) !== -1)) {
                                durjachArray.push(x);
                                printData(x.news.title, x.news.description);
                                counter++;
                            };
                        };
                    };
                });
                document.getElementById('search-input-text').value = '';
                document.querySelectorAll('.found-news').forEach(function (x, index) {
                    x.addEventListener('click', function () {
                        displayData(durjachArray[index].news);
                    }, false);
                });
            };
            if (!(valueOfCategorySelect) && !(valueOfTypeSelect)) {
                novini.forEach(function (x) {
                    if ((x.news.title.indexOf(searchInput) !== -1) || (x.news.description.indexOf(searchInput) !== -1)) {
                        durjachArray.push(x);
                        printData(x.news.title, x.news.description);
                        counter++;
                    };
                });
                document.getElementById('search-input-text').value = '';
            };
            document.querySelectorAll('.found-news').forEach(function (x, index) {
                x.addEventListener('click', function () {
                    displayData(durjachArray[index].news);
                }, false);
            });
            selectType.value = 'All';
            selectTag.value = 'All';
            valueOfCategorySelect = '';
            valueOfTypeSelect = '';
            if (counter > 0) {
                pSearch.textContent = 'Search for: ' + searchInput;
                spanResult.textContent = "Search results found: " + counter;
            } else {
                pSearch.textContent = 'No results found: ' + searchInput;
                spanResult.textContent = "";
            }
            document.getElementById('search-input-text').value = '';
        });
    });
});