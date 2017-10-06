allNews = [];

function getNews(api) {
  return new Promise(function(resolve, reject) {
    var url =
      "https://newsapi.org/v1/articles?source=" +
      api +
      "&sortBy=top&apiKey=76d3240551c14a5aa3774b837adb0a0c";
    var xhr;
    if (XMLHttpRequest == undefined) xhr = new ActiveXObject();
    else var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.addEventListener(
      "load",
      function() {
        if (xhr.status == 200) {
          var response = xhr.responseText;
          var newsData = JSON.parse(response);
          var result = {
            source: "",
            author: [],
            title: [],
            description: [],
            urlImage: [],
            published: []
          };
          result.source = newsData.source;
          for (var index = 0; index < 6; index++) {
            result.description.push(newsData.articles[index].description);
            result.urlImage.push(newsData.articles[index].urlToImage);
            result.author.push(newsData.articles[index].author);
            result.title.push(newsData.articles[index].title);
            result.published.push(newsData.articles[index].publishedAt);
            allNews.push({
              news: newsData.articles[index],
              source: result.source
            });
          }
          resolve(result);
        } else {
          reject({ error: xhr.status, errorText: xhr.statusText });
        }
      },
      false
    );
  });
}
// console.log(allNews);
// novinar = (JSON.parse(localStorage.getItem('allNews'))).slice(0, JSON.parse(localStorage.getItem('allNews').length));
// var novNovinar = novinar;
// console.log(novinar);
// console.log(novNovinar);
