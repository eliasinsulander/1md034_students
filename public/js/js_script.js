
/*
let button = document.getElementById("button");
button.onclick = function() {
  console.log("Button clicked!");
  console.log(info());
};



function info(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let street = document.getElementById("street").value;
  let number = document.getElementById("number").value;
  let payment = document.getElementById("payment").value;
  let gender = gen();

  return [name, email, street, number, payment, gender];
};

function gen(){
  if (document.getElementById("male").checked) {
    return document.getElementById("male").value;
  } else if (document.getElementById("female").checked){
    return document.getElementById("female").value;
  } else if (document.getElementById("nb").checked){
    return document.getElementById("nb").value;
  } else {
    return document.getElementById("other").value;
  }
};
*/

/*
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

*/

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
