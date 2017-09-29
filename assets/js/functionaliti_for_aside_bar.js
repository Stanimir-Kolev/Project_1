document.addEventListener('DOMContentLoaded', function() {
    var tagoveLi = document.querySelectorAll('.aside-sort-content');
    tagoveLi.forEach(function(x, index) {
        x.addEventListener('click', function(event) {
            event.preventDefault();
            var elementId = this.getAttribute("id");

            document.getElementById(elementId).setAttribute("class", "aside-sort-content-on");

            if (index == 0) {
                tagoveLi[index + 1].setAttribute("class", "aside-sort-content");
                tagoveLi[index + 2].setAttribute("class", "aside-sort-content");
            }
            if (index == 1) {
                tagoveLi[index + 1].setAttribute("class", "aside-sort-content");
                tagoveLi[index - 1].setAttribute("class", "aside-sort-content");
            }
            if (index == 2) {
                tagoveLi[index - 1].setAttribute("class", "aside-sort-content");
                tagoveLi[index - 2].setAttribute("class", "aside-sort-content");
            }

        }, false);
    });































});