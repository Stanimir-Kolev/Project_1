function getNews(bla) {
    return new Promise(function (resolve, reject) {
        var url = 'https://newsapi.org/v1/articles?source=' + bla + '&sortBy=top&apiKey=76d3240551c14a5aa3774b837adb0a0c';
        var xhr;
        if (XMLHttpRequest == undefined)
            xhr = new ActiveXObject(); // IE   <=7
        else
            var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send(null);
        xhr.addEventListener('load', function () {
            if (xhr.status == 200) {
                var response = xhr.responseText;
                var newsData = JSON.parse(response);
                var result = {
                    allNews: newsData.articles,
                    author: [],
                    title: [],
                    description: [],
                    urlImage: [],
                    published: newsData.articles[0].publishedAt
                }
                for (var index = 0; index < 6; index++) {
                    result.description.push(newsData.articles[index].description);
                    result.urlImage.push(newsData.articles[index].urlToImage);
                } 
                resolve(result);
            } else {
                // console.log(xhr.statusText); // ili samo status shte pokaje nomera
                reject({ error: xhr.status, errorText: xhr.statusText });
            }
        }, false);
    })
}