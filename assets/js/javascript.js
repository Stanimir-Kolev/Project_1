document.addEventListener('DOMContentLoaded', function () {
    //     var tagoveLi = document.querySelectorAll('.aside-sort-content');
    // var first = tagoveLi[0].setAttribute('clicked', 'on');
    // var second = tagoveLi[1].setAttribute('clicked', 'off');
    // var third = tagoveLi[2].setAttribute('clicked', 'off');
    // tagoveLi.forEach(function(x) {
    //     x.addEventListener('click', function() {
    //         if (x.getAttribute('clicked') == 'off') {
    //             var toziEOn = tagoveLi.find(y => y.getAttribute('clicked') == 'on');
    //             toziEOn.setAttribute('clicked', 'off');
    //             x.className = "aside-sort-content-on";
    //             x.setAttribute('clicked', 'on');
    //         }
    //     }, false);
    // });
    // Butoni sort
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
        //Registry
        var subReg = document.getElementById('subReg');
        subReg.addEventListener('click', function (event) {
            event.preventDefault();
            var errorReg = document.getElementById('errorReg');
            var username = document.getElementById('username1').value;
            var password = document.getElementById('password1').value;
            var repeatPassword = document.getElementById('repPass').value;
            var email = document.getElementById('email').value;
            if (userList.addUser(username, password, repeatPassword, email)) {
                vhodDiv.style.display = 'block';
                regDiv.style.display = 'none';
                formVhod.style.margin = 'auto';
                regDiv.style.display = 'none';
                vhodDiv.style.display = 'block';
                vhodDiv.style.position = 'fixed';
                vhodDiv.style.margin = 'auto';
                vhodDiv.style.zIndex = 1000;
                vhodDiv.style.width = 350 + 'px';
                vhodDiv.style.top = 140 + 'px';
                vhodDiv.style.left = 498 + 'px';
            } else {
                errorReg.textContent = 'НЕМА БАТЕ НЕ МОА';
                errorReg.style.color = 'red';
                errorReg.style.fontSize = 0.8 + 'em';
                document.getElementById('username1').value = '';
                document.getElementById('password1').value = '';
                document.getElementById('repPass').value = '';
                document.getElementById('email').value = '';
            }

        }, false);
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
        // login
        subLogin.addEventListener('click', function (event) {
            var error = document.getElementById('error');
            event.preventDefault();
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var userIn = document.getElementById('userIn');
            var vhod = document.getElementById('vhod');
            var reg = document.getElementById('reg');
            if (userList.login(username, password)) {
                vhodDiv.style.display = 'none';
                vhod.style.display = 'none';
                reg.style.display = 'none';
                userIn.textContent = 'Вие сте логнат като:"' + document.getElementById('username').value + '"';
            } else {
                error.style.display = 'block';
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            }
        }, false);
        //close button;
        var closeVhod = document.getElementById('close');
        closeVhod.addEventListener('click', function () {
            vhodDiv.style.display = 'none';
        }, false);
    }, false);
}, false);

