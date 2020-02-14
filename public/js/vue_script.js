window.onload = function(){

  'use strict';
  const socket = io();

  /* eslint-disable-next-line no-unused-vars */
  const vm = new Vue({
    el: '#dots',
    data: {
      orders: {},
      details: {x:0, y:0},
    },
    methods: {
      displayOrder: function(event) {
        /* When you click in the map, a click event object is sent as parameter
         * to the function designated in v-on:click (i.e. this one).
         * The click event object contains among other things different
         * coordinates that we need when calculating where in the map the click
         * actually happened. */
        let offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top,
        };
        this.details = {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        };
      },
    },
  });

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
      payment: "",
      gender: ""
    }
  });

  const vm3 = new Vue({
    el: '#order',
    data: {
      oName: "",
      oEmail: "",
      oPayment: "",
      oGender: "",
      oBurger1: "",
      oBurger2: "",
      oBurger3: "",
      oBurger4: "",
      oBurger5: "",
      counter: 0,
    },
    methods: {
      markDone: function (){
        vm3.oName = vm2.name;
        vm3.oEmail = vm2.email;
        vm3.oPayment = vm2.payment;
        vm3.oGender = vm2.gender;

        if (document.getElementById("maktig").checked) {
          vm3.oBurger1 = "Mäktig Burgare";
        } else {
          vm3.oBurger1 = "";
        }
        if (document.getElementById("sjaskig").checked) {
          vm3.oBurger2 = "Sjaskig Burgare";
        } else {
          vm3.oBurger2 = "";
        }
        if (document.getElementById("ny").checked) {
          vm3.oBurger3 = "Nyburgare";
        } else {
          vm3.oBurger3 = "";
        }
        if (document.getElementById("liten").checked) {
          vm3.oBurger4 = "Liten Burgare";
        } else {
          vm3.oBurger4 = "";
        }
        if (document.getElementById("toast").checked) {
          vm3.oBurger5 = "Toast";
        } else {
          vm3.oBurger5 = "";
        }
      },
      addOrder: function(event) {
        /* When you click in the map, a click event object is sent as parameter
         * to the function designated in v-on:click (i.e. this one).
         * The click event object contains among other things different
         * coordinates that we need when calculating where in the map the click
         * actually happened. */
        socket.emit('addOrder', {
          orderId: this.getNext(),
          details: {
            x: vm.details.x,
            y: vm.details.y,
          },
          orderItems: [this.oBurger1, this.oBurger2, this.oBurger3, this.oBurger4, this.oBurger5]
        });
      },
      getNext: function() {
        /* This function returns the next available key (order number) in
         * the orders object, it works under the assumptions that all keys
         * are integers. */

        this.counter++;
        return this.counter;
      },
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
