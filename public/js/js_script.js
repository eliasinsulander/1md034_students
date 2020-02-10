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

let burger1 = new menuItem('Mäktig Burgare', '100 000 kCal', 'Mycket glutenberikat bröd', 'Laktosfri', 'https://external-preview.redd.it/XBxy_zicanPx_Ws7DsCM0bnB9YsUY3gtacJ57KObgI8.jpg?auto=webp&s=412fa5f9334773a6ead0b85dc4a82e2dfa01270a');

let burger2 = new menuItem('Sjaskig Burgare', '??? kCal', 'Glutenfri', 'Ost på råttmjölk', 'https://s3-media0.fl.yelpcdn.com/bphoto/r3H7q9mu6hjiqPZTbq5cYA/o.jpg');

let burger3 = new menuItem('Nyburgare', '1000 kCal', 'Innehåller gluten', 'Vegansk', 'https://www.garantskafferiet.se/filer/02-vara-produkter/vegetariskt/7340083468773_c1l1.png?preset=product-page-image" alt="vegan burger');

let burger4 = new menuItem('Liten Burgare', '20 kCal', 'Glutenfylld', 'Laktosfylld', 'https://aht.seriouseats.com/images/20110407-every-burger-hand.jpg');

let burger5 = new menuItem('Toast', '2000 kCal', 'Glutenfri', 'Laktosfri', 'https://food-images.files.bbci.co.uk/food/recipes/savoury_french_toast_44950_16x9.jpg');

var menu = [burger1, burger2, burger3, burger4, burger5]

//mäktig burgare
let maktig = document.getElementById("a");

let mName = document.createElement('h3');
mName.innerHTML = burger1.name;
let mImg = document.createElement('img');
mImg.src = burger1.img;
mImg.width = "200";    

let mInfo = document.createElement('ul');
let mKcal = document.createElement('li');
mKcal.innerHTML = burger1.kcal;
let mLac = document.createElement('li');
mLac.innerHTML = burger1.lactose;
let mGlu = document.createElement('li');
mGlu.innerHTML = burger1.gluten;

mInfo.appendChild(mKcal);
mInfo.appendChild(mLac);
mInfo.appendChild(mGlu);

maktig.appendChild(mName);
maktig.appendChild(mImg);
maktig.appendChild(mInfo);

//sjaskig burgare
let sjaskig = document.getElementById("b");

let sName = document.createElement('h3');
sName.innerHTML = burger2.name;
let sImg = document.createElement('img');
sImg.src = burger2.img;
sImg.width = "200";

let sInfo = document.createElement('ul');
let sKcal = document.createElement('li');
sKcal.innerHTML = burger2.kcal;
let sLac = document.createElement('li');
sLac.innerHTML = burger2.lactose;
let sGlu = document.createElement('li');
sGlu.innerHTML = burger2.gluten;

sInfo.appendChild(sKcal);
sInfo.appendChild(sLac);
sInfo.appendChild(sGlu);

sjaskig.appendChild(sName);
sjaskig.appendChild(sImg);
sjaskig.appendChild(sInfo);

//nyburgare
let ny = document.getElementById("c");

let nName = document.createElement('h3');
nName.innerHTML = burger3.name;
let nImg = document.createElement('img');
nImg.src = burger3.img;
nImg.width = "200";

let nInfo = document.createElement('ul');
let nKcal = document.createElement('li');
nKcal.innerHTML = burger3.kcal;
let nLac = document.createElement('li');
nLac.innerHTML = burger3.lactose;
let nGlu = document.createElement('li');
nGlu.innerHTML = burger3.gluten;

nInfo.appendChild(nKcal);
nInfo.appendChild(nLac);
nInfo.appendChild(nGlu);

ny.appendChild(nName);
ny.appendChild(nImg);
ny.appendChild(nInfo);

//liten burgare
let liten = document.getElementById("d");

let lName = document.createElement('h3');
lName.innerHTML = burger4.name;
let lImg = document.createElement('img');
lImg.src = burger4.img;
lImg.width = "200";

let lInfo = document.createElement('ul');
let lKcal = document.createElement('li');
lKcal.innerHTML = burger4.kcal;
let lLac = document.createElement('li');
lLac.innerHTML = burger4.lactose;
let lGlu = document.createElement('li');
lGlu.innerHTML = burger4.gluten;

lInfo.appendChild(lKcal);
lInfo.appendChild(lLac);
lInfo.appendChild(lGlu);

liten.appendChild(lName);
liten.appendChild(lImg);
liten.appendChild(lInfo);

//toast
let toast = document.getElementById("e");

let tName = document.createElement('h3');
tName.innerHTML = burger5.name;
let tImg = document.createElement('img');
tImg.src = burger5.img;
tImg.width = "200";

let tInfo = document.createElement('ul');
let tKcal = document.createElement('li');
tKcal.innerHTML = burger5.kcal;
let tLac = document.createElement('li');
tLac.innerHTML = burger5.lactose;
let tGlu = document.createElement('li');
tGlu.innerHTML = burger5.gluten;

tInfo.appendChild(tKcal);
tInfo.appendChild(tLac);
tInfo.appendChild(tGlu);

toast.appendChild(tName);
toast.appendChild(tImg);
toast.appendChild(tInfo);


/*

let sjaskig = document.createElement('div class="b"');
sjaskig.innerHTML = burger2.info();
ID.appendChild(sjaskig);

let ny = document.createElement('div class="c"');
ny.innerHTML = burger3.info();
ID.appendChild(ny);

let liten = document.createElement('div class="d"');
liten.innerHTML = burger4.info();
ID.appendChild(liten);

let toast = document.createElement('div class="e"');
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

*/
