window.onload = function(){

  const vm1 = new Vue({
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

  const vm2 = new Vue({
    el: '#form',
    data: {
      name: "",
      email: "",
      street: "",
      number: "",
      payment: "",
      gender: ""
    }
  });

  const vm3 = new Vue({
    el: '#order',
    data: {
      oName: "",
      oEmail: "",
      oStreet: "",
      oNumber: "",
      oPayment: "",
      oGender: "",
      oBurger1: "",
      oBurger2: "",
      oBurger3: "",
      oBurger4: "",
      oBurger5: ""
    },
    methods: {
      markDone: function info(){
        vm3.oName = vm2.name;
        vm3.oEmail = vm2.email;
        vm3.oStreet = vm2.street;
        vm3.oNumber = vm2.number;
        vm3.oPayment = vm2.payment;
        vm3.oGender = vm2.gender;

        if (document.getElementById("maktig").checked) {
          vm3.oBurger1 = "Mäktig Burgare";
        } else {
          vm3.oBurger1 = "";
        };
        if (document.getElementById("sjaskig").checked) {
          vm3.oBurger2 = "Sjaskig Burgare";
        } else {
          vm3.oBurger2 = "";
        };
        if (document.getElementById("ny").checked) {
          vm3.oBurger3 = "Nyburgare";
        } else {
          vm3.oBurger3 = "";
        };
        if (document.getElementById("liten").checked) {
          vm3.oBurger4 = "Liten Burgare";
        } else {
          vm3.oBurger4 = "";
        };
        if (document.getElementById("toast").checked) {
          vm3.oBurger5 = "Toast";
        } else {
          vm3.oBurger5 = "";
        };
      }
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
