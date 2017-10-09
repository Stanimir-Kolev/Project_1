var userList = (function () {
    function User(username, password, repeatPassword, email, picture) {
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.email = email;
        this.picture = picture;
    }
    function UserList() {
        if (localStorage.getItem('users') !== null) {
            this._users = JSON.parse(localStorage.getItem('users'));
        } else {
            this._users = [new User('Vanio', 'Vanio1234', 'Vanio1234', 'vanio123@abv.bg', './assets/images/KOTENTCE.jpg')];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }
    UserList.prototype.addUser = function (username, password, repeatPassword, email, picture) {
        if (typeof username === 'string' && username.trim().length > 3 && email) {
            if ((typeof password === 'string') && (password.trim().length > 5) &&
                (password === repeatPassword) && (password.match(/\d+/) || password.match(/[A-Z]/) ||
                    password.match(/[a-z]/))) {
                if (!(this._users.some(user => user.username === username))) {
                    if (picture) {
                        this._users.push(new User(username, password, repeatPassword, email, picture));
                        localStorage.setItem('users', JSON.stringify(this._users));
                        return true;
                    } else {
                        this.picture = 'http://bridgecorporationltd.com/upbcl/images/userlogin.png';
                        this._users.push(new User(username, password, repeatPassword, email, picture));
                        localStorage.setItem('users', JSON.stringify(this._users));
                        return true;
                    }
                } else {
                    $('#errorUserReg').css({ display: 'inline', color: 'red' });
                }
            } else {
                $('#errorPass').css('color', 'red');
            }
        }
    }
    UserList.prototype.login = function (username, password) {
        var user = this._users.find(user => user.username === username && user.password === password);
        if (user) {
            return user;
        } else {
            return false;
        }
    }

    return new UserList();
})();