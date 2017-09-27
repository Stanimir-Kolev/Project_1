function InfoBox(title, image, content, writer) {
    this.title = title;
    this.image = image;
    this.content = content;
    this.writer = writer;
    this.id = InfoBox.prototype.id++;
    this._arrayWithNews = [];
}
InfoBox.prototype.id = 1;
InfoBox.prototype.pushInArray = function(name) {
    var index = this._arrayWithNews.findIndex(x => x.id == name.id);
    if (index !== -1)
        this._arrayWithNews.push(name);
}

var novina1 = new InfoBox("Времето утре: Облачно, без валежи, с температури между 21° и 26°", "http://85.14.28.164/d/images/photos/0354/0000354124-article2.jpg", "През нощта ще бъде предимно ясно и почти тихо. Минималните температури ще са между 7° и 12°. Утре облачността ще е разкъсана, след обяд – предимно значителна, но ще се задържи почти без валежи. По-късно през деня ще духа до умерен запад-северозападен вятър, който до вечерта ще отслабне. Максималните температури ще са между 21° и 26°. Такава е прогнозата за времето на Националния институт по метеорология и хидрология (НИМХ), съобщи дежурният синоптик Мартин Славчев, предаде 'Фокус'.", "Венцислава Вельова");