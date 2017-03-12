/**
 * Created by piotr on 12.03.2017.
 */
function mobile_phone(mark, price, color ) {
    this.mark = mark;
    this.price = price;
    this.color = color;
}


mobile_phone.prototype.printInfo = function () {
    console.log("Marka telefonu to " + this.mark + " kolor to " + this.color + ", a cena to " + this.price);
}

var samsungGalaxyS6 = new mobile_phone("Samsung", 2000, "black");
    iPhone6 = new mobile_phone("Apple", 4000, "pinkgold");
    onePLusOne = new mobile_phone("OnePlus", 3000, "silver");

    samsungGalaxyS6.printInfo();
    iPhone6.printInfo();
    onePLusOne.printInfo();
