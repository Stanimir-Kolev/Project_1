// Butoni sort
document.addEventListener('DOMContentLoaded', function () {
    var elementLi = document.querySelectorAll('.aside-sort-content');
    elementLi.forEach(function (x) {
        x.setAttribute('clicked', 'false')
        x.addEventListener('click', function () {
            var asideContent = document.getElementById('aside-content');
            if (x.getAttribute('clicked') == 'false') {
                x.style.paddingBottom = 10 + 'px';
                asideContent.style.marginTop = -10 + 'px';
                x.setAttribute('clicked', 'true');
            } else {
                x.style.paddingBottom = 0 + 'px';
                asideContent.style.marginTop = -10 + 'px';
                x.setAttribute('clicked', 'false');
            }
        }, false);
    });
    //Novini
    var novini = document.getElementById('novini-content');
    novini.addEventListener('click', function () {
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        svqtdiv.style.display = 'none';
        sportdiv.style.display = 'none';
        politikaDiv.style.display = 'none';
        galeriqDiv.style.display = 'none';
        zdraveDiv.style.display = 'none';
        tehnologiiDiv.style.display = 'none';
        noviniDiv.style.display = 'block';
        noviniDiv.style.backgroundColor = 'purple';
        noviniDiv.style.width = 98 + '%';
        noviniDiv.style.margin = 'auto';
        noviniDiv.style.marginTop = -10 + 'px';
    }, false);

    // Svqt
    var svqt = document.getElementById('svqt-content');
    svqt.addEventListener('click', function () {
        event.preventDefault();
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        noviniDiv.style.display = 'none';
        sportdiv.style.display = 'none';
        politikaDiv.style.display = 'none';
        galeriqDiv.style.display = 'none';
        zdraveDiv.style.display = 'none';
        tehnologiiDiv.style.display = 'none';
        svqtdiv.style.display = 'block';
        svqtdiv.style.backgroundColor = 'purple';
        svqtdiv.style.width = 98 + '%';
        svqtdiv.style.margin = 'auto';
        svqtdiv.style.marginTop = -10 + 'px';
    }, false);

    //sport
    var sport = document.getElementById('sport-content');
    sport.addEventListener('click', function () {
        event.preventDefault();
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        noviniDiv.style.display = 'none';
        svqtdiv.style.display = 'none';
        politikaDiv.style.display = 'none';
        galeriqDiv.style.display = 'none';
        zdraveDiv.style.display = 'none';
        tehnologiiDiv.style.display = 'none';
        sportdiv.style.display = 'block';
        sportdiv.style.backgroundColor = 'blue';
        sportdiv.style.width = 98 + '%';
        sportdiv.style.margin = 'auto';
        sportdiv.style.marginTop = -10 + 'px';
    }, false);

    //politika
    var politika = document.getElementById('politika-content');
    politika.addEventListener('click', function () {
        event.preventDefault();
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        noviniDiv.style.display = 'none';
        svqtdiv.style.display = 'none';
        zdraveDiv.style.display = 'none';
        galeriqDiv.style.display = 'none';
        sportdiv.style.display = 'none';
        tehnologiiDiv.style.display = 'none';
        politikaDiv.style.display = 'block';
        politikaDiv.style.backgroundColor = 'red';
        politikaDiv.style.width = 98 + '%';
        politikaDiv.style.margin = 'auto';
        politikaDiv.style.marginTop = -10 + 'px';
    }, false);

    //galeriq
    var galeriq = document.getElementById('galeriq-content');
    galeriq.addEventListener('click', function () {
        event.preventDefault();
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        noviniDiv.style.display = 'none';
        svqtdiv.style.display = 'none';
        politikaDiv.style.display = 'none';
        zdraveDiv.style.display = 'none';
        sportdiv.style.display = 'none';
        tehnologiiDiv.style.display = 'none';
        galeriqDiv.style.display = 'block';
        galeriqDiv.style.backgroundColor = 'yellow';
        galeriqDiv.style.width = 98 + '%';
        galeriqDiv.style.margin = 'auto';
        galeriqDiv.style.marginTop = -10 + 'px';
    }, false);

    //tehnologii
    var tehnologii = document.getElementById('tehnologii-content');
    tehnologii.addEventListener('click', function () {
        event.preventDefault();
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        noviniDiv.style.display = 'none';
        svqtdiv.style.display = 'none';
        politikaDiv.style.display = 'none';
        galeriqDiv.style.display = 'none';
        sportdiv.style.display = 'none';
        zdraveDiv.style.display = 'none';
        tehnologiiDiv.style.display = 'block';
        tehnologiiDiv.style.backgroundColor = 'green';
        tehnologiiDiv.style.width = 98 + '%';
        tehnologiiDiv.style.margin = 'auto';
        tehnologiiDiv.style.marginTop = -10 + 'px';
    }, false);

    //zdrave
    var zdrave = document.getElementById('zdrave-content');
    zdrave.addEventListener('click', function () {
        event.preventDefault();
        var svqtdiv = document.getElementById('svqt');
        var sportdiv = document.getElementById('sport');
        var noviniDiv = document.getElementById('novini');
        var politikaDiv = document.getElementById('politika');
        var galeriqDiv = document.getElementById('galeriq');
        var tehnologiiDiv = document.getElementById('tehnologii');
        var zdraveDiv = document.getElementById('zdrave');
        noviniDiv.style.display = 'none';
        svqtdiv.style.display = 'none';
        politikaDiv.style.display = 'none';
        galeriqDiv.style.display = 'none';
        sportdiv.style.display = 'none';
        tehnologiiDiv.style.display = 'none';
        zdraveDiv.style.display = 'block';
        zdraveDiv.style.backgroundColor = 'blue';
        zdraveDiv.style.width = 98 + '%';
        zdraveDiv.style.margin = 'auto';
        zdraveDiv.style.marginTop = -10 + 'px';
    }, false);


    // registr button 


    var reg = document.getElementById('reg');

    reg.addEventListener('click', function () {
        var regDiv = document.getElementById('sign-up');
        var vhodDiv = document.getElementById('sign-in');
        var formVhod = document.getElementById('formVhod');
        // formVhod.style.width = 30 + '%';
        formVhod.style.margin = 'auto';
        vhodDiv.style.display = 'none';
        regDiv.style.display = 'block';
        regDiv.style.position = 'fixed';
        regDiv.style.margin = 'auto';
        regDiv.style.zIndex = 1000;
        regDiv.style.width = 350 + 'px';
        regDiv.style.top = 140 + 'px';
        regDiv.style.left = 498 + 'px';
        //close button;
        var closeReg = document.getElementById('close1');
        closeReg.addEventListener('click', function () {
            regDiv.style.display = 'none';
        }, false);
    }, false);

    var vhod = document.getElementById('vhod');
    // sign up button
    vhod.addEventListener('click', function () {
        var regDiv = document.getElementById('sign-up');
        var vhodDiv = document.getElementById('sign-in');
        var formVhod = document.getElementById('formVhod');
        // formVhod.style.width = 30 + '%';
        formVhod.style.margin = 'auto';
        regDiv.style.display = 'none';
        vhodDiv.style.display = 'block';
        vhodDiv.style.position = 'fixed';
        vhodDiv.style.margin = 'auto';
        vhodDiv.style.zIndex = 1000;
        vhodDiv.style.width = 350 + 'px';
        vhodDiv.style.top = 140 + 'px';
        vhodDiv.style.left = 498 + 'px';
        //close button;
        var closeVhod = document.getElementById('close');
        closeVhod.addEventListener('click', function () {
            vhodDiv.style.display = 'none';
        }, false);
    }, false);
}, false);

