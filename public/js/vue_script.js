window.onload = function(){

  const vm = new Vue({
    el: '.wrapper',
    data: {
      //mäktig
      mName: food[0].name,
      mImg: food[0].img,
      mKcal: food[0].kcal,
      mGlu: food[0].gluten,
      mLac: food[0].lactose,

      //sjaskig
      sName: food[1].name,
      sImg: food[1].img,
      sKcal: food[1].kcal,
      sGlu: food[1].gluten,
      sLac: food[1].lactose,


      nName: food[2].name,
      nImg: food[2].img,
      nKcal: food[2].kcal,
      nGlu: food[2].gluten,
      nLac: food[2].lactose,

      lName: food[3].name,
      lImg: food[3].img,
      lKcal: food[3].kcal,
      lGlu: food[3].gluten,
      lLac: food[3].lactose,

      tName: food[4].name,
      tImg: food[4].img,
      tKcal: food[4].kcal,
      tGlu: food[4].gluten,
      tLac: food[4].lactose
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
