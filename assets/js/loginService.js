var userList = (function () {
    function User(username, password, repeatPassword, email) {
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
        this.email = email;
    }

    function UserList() {
        if (localStorage.getItem('users') !== null) {
            this._users = JSON.parse(localStorage.getItem('users'));
        } else {
            this._users = [new User('Vanio', 'Vanio1234', 'Vanio1234', 'vanio123@abv.bg')];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }

    UserList.prototype.addUser = function (username, password, repeatPassword, email) {
        if (typeof username === 'string' && username.trim().length > 3 && email) {
            console.log('aaaaa');
            if ((typeof password === 'string') && (password.trim().length > 7) &&
                (password === repeatPassword) && (password.match(/\d+/) || password.match(/A-Z/) ||
                    password.match(/a-z/))) {
                console.log('bravo bravo');
                if (!(this._users.some(user => user.username === username))) {
                    this._users.push(new User(username, password, repeatPassword, email));
                    localStorage.setItem('users', JSON.stringify(this._users));
                    return true;
                }
            }
        }
    }
    UserList.prototype.login = function (username, password) {
        return this._users.some(user => user.username === username && user.password === password);
    }

    return new UserList();
})();