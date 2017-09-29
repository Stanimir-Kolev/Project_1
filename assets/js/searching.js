//search button
document.addEventListener('DOMContentLoaded', function () {

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
            var searchCont = document.getElementById('search-content')
            spanche.addEventListener("click", function () {
                butSearch.style.display = "inline-block";
                divche.style.display = "none";
                document.querySelectorAll(".section-content").forEach(function (x) {
                    x.style.display = "inline-block";
                })
                searchCont.style.display = "none";
                // cont.removeChild(divche);
                });

                // document.getElementById("searching-feeld").removeChild(divche);

            ////// sled kato e razpunat inputa za search ///////////////////
            butonka.addEventListener("click", function () {
                document.querySelectorAll(".section-content").forEach(function (x) {
                    x.style.display = "none";
                })
                searchCont.style.display = "inline-block";
                cont.appendChild(divche);
            })
    })

}, false)