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
        butonka.textContent = ">";
        divche.appendChild(butonka);

        var spanche = document.createElement("span");
        spanche.textContent = "x";
        divche.appendChild(spanche);

        spanche.addEventListener("click", function () {
            butSearch.style.display = "inline-block";
            divche.style.display = "none";

        })
    })
}, false)