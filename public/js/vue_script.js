window.onload = function(){

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

  let burger1 = new menuItem('Mäktig Burgare', '100 000 kCal',
  'Mycket glutenberikat bröd', 'Laktosfri',
  'https://external-preview.redd.it/XBxy_zicanPx_Ws7DsCM0bnB9YsUY3gtacJ57KObgI8.jpg?auto=webp&s=412fa5f9334773a6ead0b85dc4a82e2dfa01270a');

  let burger2 = new menuItem('Sjaskig Burgare', '??? kCal', 'Glutenfri',
  'Ost på råttmjölk',
  'https://s3-media0.fl.yelpcdn.com/bphoto/r3H7q9mu6hjiqPZTbq5cYA/o.jpg');

  let burger3 = new menuItem('Nyburgare', '1000 kCal', 'Innehåller gluten',
  'Vegansk',
  'https://www.garantskafferiet.se/filer/02-vara-produkter/vegetariskt/7340083468773_c1l1.png?preset=product-page-image" alt="vegan burger');

  let burger4 = new menuItem('Liten Burgare', '20 kCal', 'Glutenfylld',
  'Laktosfylld',
  'https://aht.seriouseats.com/images/20110407-every-burger-hand.jpg');

  let burger5 = new menuItem('Toast', '2000 kCal', 'Glutenfri', 'Laktosfri',
  'https://food-images.files.bbci.co.uk/food/recipes/savoury_french_toast_44950_16x9.jpg');


  const vm = new Vue({
    el: '.wrapper',
    data: {
      //mäktig
      mName: burger1.name,
      mImg: burger1.img,
      mKcal: burger1.kcal,
      mGlu: burger1.gluten,
      mLac: burger1.lactose,

      //sjaskig
      sName: burger2.name,
      sImg: burger2.img,
      sKcal: burger2.kcal,
      sGlu: burger2.gluten,
      sLac: burger2.lactose,


      nName: burger3.name,
      nImg: burger3.img,
      nKcal: burger3.kcal,
      nGlu: burger3.gluten,
      nLac: burger3.lactose,

      lName: burger4.name,
      lImg: burger4.img,
      lKcal: burger4.kcal,
      lGlu: burger4.gluten,
      lLac: burger4.lactose,

      tName: burger5.name,
      tImg: burger5.img,
      tKcal: burger5.kcal,
      tGlu: burger5.gluten,
      tLac: burger5.lactose
    }
  });

}
/*
const vm = new Vue({
el: '#myID',
data: {
burger1: burger1.info(),
burger2: burger2.info(),
burger3: burger3.info(),
burger4: burger4.info(),
burger5: burger5.info()
}
})
*/
