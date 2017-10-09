document.addEventListener('DOMContentLoaded', function () {
    getNews('google-news').then(function (data) {
        var sudurjanie = document.querySelector('#novini');
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
    getNews('bbc-news').then(function (data) {
        localStorage.setItem('allNews', JSON.stringify(allNews));
    }).catch();
    getNews('talksport').then(function (data) {
        localStorage.setItem('allNews', JSON.stringify(allNews));
    }).catch();
    getNews('business-insider').then(function (data) {
        localStorage.setItem('allNews', JSON.stringify(allNews));
    }).catch();

    getNews('fortune').then(function (data) {
        localStorage.setItem('allNews', JSON.stringify(allNews));
    }).catch();
    getNews('buzzfeed').then(function (data) {
        localStorage.setItem('allNews', JSON.stringify(allNews));
    }).catch();
    getNews('independent').then(function (data) {
        localStorage.setItem('allNews', JSON.stringify(allNews));
    }).catch();

    document.getElementById('terms-of-use').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#novini').innerHTML = "";
        var bigArticle = document.createElement('div');
        bigArticle.setAttribute('class', 'big-news-box');
        document.querySelector('#novini').appendChild(bigArticle);

        var title = document.createElement("h2");
        title.textContent = 'THE CLOCK TERMS OF USE'
        title.style.fontWeight = 'bold';
        bigArticle.appendChild(title);

        var description = document.createElement("p");
        description.textContent = `IF YOU REJECT THIS AGREEMENT WITHIN THIRTY (30) DAYS AFTER FIRST PURCHASING A LICENSE TO THE CLOCK SOFTWARE, YOU MAY CALL (800)757-7707 TO REQUEST A FULL REFUND OF THE PURCHASE PRICE. ONCE YOU AGREE TO THESE TERMS OF USE, THE BATTLE.NET TERMS OF USE, AND THE WORLD OF WARCRAFT END USER LICENSE AGREEMENT, YOU WILL NO LONGER BE ELIGIBLE FOR A REFUND.
Welcome to Blizzard Entertainment, Inc.’s (“Blizzard”) World of Warcraft® (the “Game”). The Game includes two components: (a) the software program along with any accompanying materials or documentation (collectively, the “Game Client”), and (b) Blizzard’s proprietary World of Warcraft online service (the “Service”). Your use of the Game Client is subject to the World of Warcraft End User License Agreement (the “EULA“). Your use of the Service is subject to this Terms of Use and the Battle.net Terms of Use Agreement (“BNET TOU“), incorporated herein by this reference. You must accept the EULA, the Terms of Use and the BNET TOU (collectively, the “Blizzard Agreements”) prior to playing the Game.
You must obtain a World of Warcraft authorization code from Blizzard (usually found in a ‘box’ copy of the Game or purchased through Battle.net), and register for and log in using an authorized Battle.net account (a “BNET Account”) to play the Game. The Game is available for use only by authorized end users in accordance with the terms of the Blizzard Agreements. Any use, reproduction, modification or distribution of the Game not expressly authorized by the terms of the Blizzard Agreements is expressly prohibited.
The license granted to you in Section 1 is subject to the limitations set forth in Sections 1 and 2 (collectively, the “License Limitations”). Any use of the Service or the Game Client in violation of the License Limitations will be regarded as an infringement of Blizzard’s copyrights in and to the Game. You agree that you will not, under any circumstances: 
<br/>
A. use cheats, automation software (bots), hacks, mods or any other unauthorized third-party software designed to modify the World of Warcraft experience;

B. exploit the Game or any of its parts, including without limitation the Service, for any commercial purpose, including without limitation (a) use at a cyber cafe, computer gaming center or any other location-based site without the express written consent of Blizzard; (b) for gathering in-game currency, items or resources for sale outside the Game; or (c) performing in-game services in exchange for payment outside the Game, e.g., power-leveling; 

C. use any unauthorized third-party software that intercepts, “mines,” or otherwise collects information from or through the Game or the Service, including without limitation any software that reads areas of RAM used by the Game to store information about a character or the game environment; provided, however, that Blizzard may, at its sole and absolute discretion, allow the use of certain third party user interfaces; 

D. modify or cause to be modified any files that are a part of the Game Client or the Service in any way not expressly authorized by Blizzard; 

E. host, provide or develop matchmaking services for the Game or the Service, or intercept, emulate or redirect the communication protocols used by Blizzard in any way, for any purpose, including without limitation unauthorized play over the internet, network play, or as part of content aggregation networks; `;
        bigArticle.appendChild(description);
    }, false);
    document.getElementById('privacy').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#novini').innerHTML = "";
        var bigArticle = document.createElement('div');
        bigArticle.setAttribute('class', 'big-news-box');
        document.querySelector('#novini').appendChild(bigArticle);

        var title = document.createElement("h2");
        title.textContent = 'THE CLOCK! customer privacy notice'
        title.style.fontWeight = 'bold';
        bigArticle.appendChild(title);
        var description = document.createElement("p");
        description.textContent = `As a subscriber to cable service or other services provided by THE CLOCK!, you are entitled under Section 631 of the Federal Cable Communications
Policy Act of 1984, as amended, (the “Cable Act”) to information regarding the collection, maintenance and disclosure of personally identifiable
information by cable television operators. We provide this Notice to inform you of: (1) the nature of personally identifiable information we collect
and the limitations imposed by the Cable Act upon cable operators in the collection and disclosure of personally identifiable information about
subscribers; (2) the nature of our use of personally identifiable information; (3) the nature, frequency and purpose of any disclosure which we
may make of such information, including the types of persons to whom we may disclose the information; (4) the period during which we maintain
personally identifiable information; (5) the times and place at which you may have access to your personally identifiable information; and (6) your
rights under the Cable Act concerning personally identifiable information and its collection and disclosure.
Personally identifiable information is information that identifies a particular person; it does not include aggregate data that does not identify a
particular person or persons.
In addition, Section 702 of the federal Telecommunications Act of 1996, as amended, (the “Telecommunications Act”) provides additional privacy
protections for the following information related to phone services: (i) information about the quantity, technical configuration, type, destination,
location, and amount of your use of the phone services; and (ii) information contained on your telephone bill concerning the phone services
you receive. That phone information, when matched to your name, address, and telephone number, is known as customer proprietary network
information or CPNI for short. This notice, which includes our CPNI Policy, describes what CPNI information we obtain, how we protect it, and how
it may be used. Pursuant to an order of the Federal Communications Commission (the FCC), the broadband Internet access service offered by WOW! on a retail,
mass-market basis is now classified as a “telecommunications service.” Certain information relating to your use of our broadband Internet access
service will be considered CPNI and subject to additional privacy protections and use restrictions contained in federal law, but not to the FCC’s
related rules implementing that law, many of which were designed specifically for telephone service. In the absence of specific guidance from the
FCC, we will take reasonable, good faith steps to protect the CPNI of our broadband Internet access service customers in accordance with the
requirements of federal law, as applicable, and as described in this privacy notice.`
        bigArticle.appendChild(description);
    }, false);
    document.getElementById('feedback').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#novini').innerHTML = "";
        var bigArticle = document.createElement('div');
        bigArticle.setAttribute('class', 'big-news-box');
        document.querySelector('#novini').appendChild(bigArticle);

        var title = document.createElement("h1");
        title.textContent = 'FEEDBACK'
        title.style.fontWeight = 'bold';
        bigArticle.appendChild(title);
        var ivan = document.createElement('h4');
        ivan.textContent = 'IVAN VALKOV - Phone : 12345567890, Email : elaIGOFani15@abv.bg;';
        ivan.style.color = 'firebrick';
        bigArticle.appendChild(ivan);
        var stanimir = document.createElement('h4');
        stanimir.style.color = 'firebrick';
        stanimir.textContent = 'STANIMIR KOLEV - Phone : 0987654321, Email : baraiGoMek@abv.bg;';
        bigArticle.appendChild(stanimir);
        var us = document.createElement('h4');
        us.textContent = 'ABOUT US:';
        us.style.fontWeight = 'bold';
        bigArticle.appendChild(us);
        var aboutUs = document.createElement('p');
        aboutUs.textContent = `Dude looks like a lady Dude looks like a ladyDude looks like a ladyDude looks like a ladyCruised into a bar on the shoreHer picture graced the grime on the doorShe's a long lost love at first biteBaby, maybe you're wrongBut you know it's all right, that's rightBack stage we're having the timOf our lives until somebody saysForgive me if I seem out of lineThen she whipped out a gunAnd tried to blow me awayDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladySo never judge a book by its coverOr who you gonna love by your loverLove put me wise to her love in disguiseShe had the body of a VenusLord, imagine my surpriseDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyCruised into a bar on the shoreHer picture graced the grime on the doorShe's a long lost love at first biteBaby, maybe you're wrongBut you know it's all right, that's rightBack stage we're having the timeOf our lives until somebody saysForgive me if I seem out of lineThen she whipped out a gunAnd tried to blow me awayDude looks like a ladyDude looks like a ladDude looks like a ladyDude looks like a ladySo never judge a book by its coverOr who you gonna love by your loverLove put me wise to her love in disguiseShe had the body of a VenusLord, imagine my surpriseDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladyCruised into a bar on the shoreHer picture graced the grime on the doorShe's a long lost love at first biteBaby, maybe you're wrongBut you know it's all right, that's rightBack stage we're having the timeOf our lives until somebody saysForgive me if I seem out of lineThen she whipped out a gunAnd tried to blow me awayDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a ladySo never judge a book by its coverOr who you gonna love by your loverLove put me wise to her love in disguiseShe had the body of a VenusLord, imagine my surpriseDude looks like a ladyDude looks like a ladyDude looks like a ladyDude looks like a lady`
        bigArticle.appendChild(aboutUs);
    }, false);
});