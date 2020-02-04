function menuItem(name, kcal, g, l, img) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = g;
    this.lactose = l;
    this.img = img;
    this.info = function() {
	return this.name + ' ' + this.kcal;
    };
}

let burger1 = new menuItem('Mäktig Burgare', '100 000', 'Mycket glutenberikat bröd', 'Laktosfri', 'https://external-preview.redd.it/XBxy_zicanPx_Ws7DsCM0bnB9YsUY3gtacJ57KObgI8.jpg?auto=webp&s=412fa5f9334773a6ead0b85dc4a82e2dfa01270a');

let burger2 = new menuItem('Sjaskig Burgare', '???', 'Glutenfri', 'Ost på råttmjölk', 'https://s3-media0.fl.yelpcdn.com/bphoto/r3H7q9mu6hjiqPZTbq5cYA/o.jpg');

let burger3 = new menuItem('Nyburgare', '1000', 'Innehåller gluten', 'Vegansk', 'https://www.garantskafferiet.se/filer/02-vara-produkter/vegetariskt/7340083468773_c1l1.png?preset=product-page-image" alt="vegan burger');

let burger4 = new menuItem('Liten Burgare', '20', 'Glutenfylld', 'Laktosfylld', 'https://aht.seriouseats.com/images/20110407-every-burger-hand.jpg');

let burger5 = new menuItem('Toast', '2000', 'Glutenfri', 'Laktosfri', 'https://food-images.files.bbci.co.uk/food/recipes/savoury_french_toast_44950_16x9.jpg');

console.log( burger1.info() );
console.log( burger2.info() );
console.log( burger3.info() );
console.log( burger4.info() );
console.log( burger5.info() );

var menu = [burger1, burger2, burger3, burger4, burger5]

let ID = document.getElementById("myID");

let maktig = document.createElement('p');
maktig.innerHTML = burger1.info();
ID.appendChild(maktig);

let sjaskig = document.createElement('p');
sjaskig.innerHTML = burger2.info();
ID.appendChild(sjaskig);

let ny = document.createElement('p');
ny.innerHTML = burger3.info();
ID.appendChild(ny);

let liten = document.createElement('p');
liten.innerHTML = burger4.info();
ID.appendChild(liten);

let toast = document.createElement('p');
toast.innerHTML = burger5.info();
ID.appendChild(toast);

for (i = 0; i < 5; i++) {
    let burger = document.createElement('p');
    burger.innerHTML = menu[i].info();
    if (true) {
  	let gluten = document.createElement('p');
  	gluten.innerHTML = menu[i].gluten;
	burger.appendChild(gluten);
	let lactose = document.createElement('p');
  	lactose.innerHTML = menu[i].lactose;
	burger.appendChild(lactose);
    }
    ID.appendChild(burger);
}
