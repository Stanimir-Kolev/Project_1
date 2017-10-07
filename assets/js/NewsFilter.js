//search button
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

    ////// sled kato e razpunat inputa za search ///////////////////
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

    selectTag.addEventListener("change", function (event) {
      valueOfCategorySelect = selectTag.value;
    }, false);

    var selectType = document.getElementById('select-type');

    selectType.addEventListener('change', function () {
      valueOfTypeSelect = selectType.value;
    }, false);

    var findButton = document.getElementById('search-but');


    findButton.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#info-for-search').innerHTML = '';
      document.querySelector('#search-result-mini').innerHTML = '';
      var novini1 = [];
      var durjachArray = [];
      var counter = 0;
      var searchInput = document.getElementById('search-input-text').value;
      var divResult = document.getElementById("info-for-search");

      // function color() {
      //   return document.querySelectorAll('.found-news').forEach(x => x.addEventListener('mouseover', function () {
      //     x.style.backgoundColor = 'yellow';
      //   })) && document.querySelectorAll('.found-news').forEach(x => x.addEventListener('mouseout', function () {
      //     x.style.backgoundColor = 'white';
      //   }))
      // }
      var pSearch = document.createElement("p");

      divResult.appendChild(pSearch);
      var spanResult = document.createElement("span");
      divResult.appendChild(spanResult);

      // if (valueOfCategorySelect || valueOfTypeSelect) {
        novini1 = (valueOfCategorySelect || valueOfTypeSelect) ? novini.filter(x => x.source = valueOfCategorySelect) : novini.filter(x => x.source == x.news[valueOfTypeSelect]);
        console.log(novini1);        
        novini1.forEach(function (x) {
          if ((x.news.title.indexOf(searchInput) !== -1) || (x.news.description.indexOf(searchInput) !== -1)) {
            durjachArray.push(x);
            var divFoundNews = document.getElementById('search-result-mini');
            var articleFoundNews = document.createElement("article");
            articleFoundNews.setAttribute("class", "found-news");
            divFoundNews.appendChild(articleFoundNews);

            var divArticle = document.createElement("div");
            articleFoundNews.appendChild(divArticle);

            var zaglavie = document.createElement("p");
            zaglavie.textContent = x.news.title;
            // var a = zaglavie.textContent.split(' ').find(x => x = searchInput); tursenata duma

            divArticle.appendChild(zaglavie);

            var sudurjanie = document.createElement("p");
            sudurjanie.textContent = x.news.description;


            divArticle.appendChild(sudurjanie);
            counter++;
          }

        })
        // document.querySelectorAll('.found-news').forEach(function (x, index) {
        //   x.addEventListener('click', function () {
        //     var sudurjanie = document.querySelector('#novini');
        //     sudurjanie.innerHTML = "";

        //     document.getElementById("search-content").style.display = "none";
        //     var article = durjachArray[index].news;

        //     var title1 = article.title;
        //     var author1 = article.author;
        //     var date1 = article.publishedAt.toLocaleString().slice(0, 10);
        //     var hour1 = article.publishedAt.toLocaleString().slice(11, 19);
        //     var p = article.description;
        //     var sudurjanie = document.querySelector('#novini');

        //     var bigArticle = document.createElement('div');
        //     bigArticle.setAttribute('class', 'big-news-box');
        //     document.querySelector('#novini').appendChild(bigArticle);

        //     var title = document.createElement("h2");
        //     title.textContent = title1;
        //     title.style.fontWeight = 'bold';
        //     bigArticle.appendChild(title);

        //     var img1 = document.createElement('img');
        //     img1.src = article.urlToImage;
        //     bigArticle.appendChild(img1);

        //     var description = document.createElement("p");
        //     description.textContent = p;
        //     bigArticle.appendChild(description);

        //     var author = document.createElement('p');
        //     if (author1 !== null) {
        //       author.textContent = 'Author: ' + author1;
        //     } else {
        //       author.textContent = 'Author: No author.';
        //     }
        //     bigArticle.appendChild(author);
        //     var published = document.createElement('p');
        //     published.textContent = 'Date: ' + date1 + "  " + hour1;
        //     bigArticle.appendChild(published);
        //     sudurjanie.style.display = "block";
        //   }, false);
        // }, false);

      // };
      if (valueOfCategorySelect && valueOfTypeSelect) {
        novini1 = novini.filter(x => x.source == valueOfCategorySelect && x.news[valueOfTypeSelect]);
        novini1.forEach(function (x) {
          if ((x.news.title.indexOf(searchInput) !== -1) || (x.news.description.indexOf(searchInput) !== -1)) {
            durjachArray.push(x);
            var divFoundNews = document.getElementById('search-result-mini');

            var articleFoundNews = document.createElement("article");
            articleFoundNews.setAttribute("class", "found-news");
            divFoundNews.appendChild(articleFoundNews);

            var divArticle = document.createElement("div");
            articleFoundNews.appendChild(divArticle);

            var zaglavie = document.createElement("p");
            zaglavie.textContent = x.news.title;
            // var a = zaglavie.textContent.split(' ').find(x => x = searchInput); tursenata duma

            divArticle.appendChild(zaglavie);

            var sudurjanie = document.createElement("p");
            sudurjanie.textContent = x.news.description;


            divArticle.appendChild(sudurjanie);
            counter++;
          }
        })
        // document.querySelectorAll('.found-news').forEach(function (x, index) {
        //   x.addEventListener('click', function () {
        //     var sudurjanie = document.querySelector('#novini');
        //     sudurjanie.innerHTML = "";

        //     document.getElementById("search-content").style.display = "none";
        //     var article = durjachArray[index].news;
        //     var title1 = article.title;
        //     var author1 = article.author;
        //     var pub = article.publishedAt;
        //     var p = article.description;
        //     var sudurjanie = document.querySelector('#novini');

        //     var bigArticle = document.createElement('div');
        //     bigArticle.setAttribute('class', 'big-news-box');
        //     document.querySelector('#novini').appendChild(bigArticle);

        //     var title = document.createElement("h2");
        //     title.textContent = title1;
        //     title.style.fontWeight = 'bold';
        //     bigArticle.appendChild(title);

        //     var img1 = document.createElement('img');
        //     img1.src = article.urlToImage;
        //     bigArticle.appendChild(img1);

        //     var description = document.createElement("p");
        //     description.textContent = p;
        //     bigArticle.appendChild(description);

        //     var author = document.createElement('p');
        //     if (author1 !== null) {
        //       author.textContent = 'Author: ' + author1;
        //     } else {
        //       author.textContent = 'Author: No author.';
        //     }
        //     bigArticle.appendChild(author);
        //     var published = document.createElement('p');
        //     published.textContent = 'Date: ' + pub;
        //     bigArticle.appendChild(published);
        //     sudurjanie.style.display = "block";
        //   }, false);
        // }, false);
      }
      if (!(valueOfCategorySelect) && !(valueOfTypeSelect)) {
        novini.forEach(function (x) {
          if ((x.news.title.indexOf(searchInput) !== -1) || (x.news.description.indexOf(searchInput) !== -1)) {
            durjachArray.push(x);
            var divFoundNews = document.getElementById('search-result-mini');

            var articleFoundNews = document.createElement("article");
            articleFoundNews.setAttribute("class", "found-news");
            divFoundNews.appendChild(articleFoundNews);

            var divArticle = document.createElement("div");
            articleFoundNews.appendChild(divArticle);

            var zaglavie = document.createElement("p");
            zaglavie.textContent = x.news.title;
            // var a = zaglavie.textContent.split(' ').find(x => x = searchInput); tursenata duma
            divArticle.appendChild(zaglavie);
            var sudurjanie = document.createElement("p");
            sudurjanie.textContent = x.news.description;
            divArticle.appendChild(sudurjanie);
            counter++;
          }
        })
      }

      // document.querySelectorAll('.found-news').forEach(function (x, index) {
      //   x.addEventListener('click', function () {
      //     var sudurjanie = document.querySelector('#novini');
      //     sudurjanie.innerHTML = "";

      //     document.getElementById("search-content").style.display = "none";
      //     var article = durjachArray[index].news;
      //     var title1 = article.title;
      //     var author1 = article.author;
      //     var pub = article.publishedAt;
      //     var p = article.description;


      //     var bigArticle = document.createElement('div');
      //     bigArticle.setAttribute('class', 'big-news-box');
      //     sudurjanie.appendChild(bigArticle);

      //     var title = document.createElement("h2");
      //     title.textContent = title1;
      //     title.style.fontWeight = 'bold';
      //     bigArticle.appendChild(title);

      //     var img1 = document.createElement('img');
      //     img1.src = article.urlToImage;
      //     bigArticle.appendChild(img1);

      //     var description = document.createElement("p");
      //     description.textContent = p;
      //     bigArticle.appendChild(description);

      //     var author = document.createElement('p');
      //     if (author1 !== null) {
      //       author.textContent = 'Author: ' + author1;
      //     } else {
      //       author.textContent = 'Author: No author.';
      //     }
      //     bigArticle.appendChild(author);
      //     var published = document.createElement('p');
      //     published.textContent = 'Date: ' + pub;
      //     bigArticle.appendChild(published);
      //     sudurjanie.style.display = "block";
      //   }, false);
      // }, false);

      if (counter > 0) {
        pSearch.textContent = 'Търсене за: ' + searchInput;
        spanResult.textContent = "Намерени са " + counter + " резултата";
      } else {
        pSearch.textContent = 'Няма намерени резултати за: ' + searchInput;
        spanResult.textContent = "";
      }

    });

  });
});


