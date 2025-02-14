const factory = (function(){
    let array = [];
    return{
        add: function(index, property){
            if(array.length >= 0 && index < array.length + 1){
                array[index]=property;
            }
            
        },
        remove: function(index){
            if(typeof index === "number" || index === null){
                delete array[index];
            }
        },
        addfinal: function(element){
            if(array.length >= 1){
                array.push(element)
            }
        },
        finalizarCompra:function(pago){
            if(pago >= 18000){
                return array
            }
            else{
                return "No se acredito el pago "
            }
        }
    }
});

let cart = factory();
cart.add(0,"auriculares");
cart.add(1,"laptop");
cart.add(2,"Tv");
cart.add(3,"Heladera");
cart.addfinal("radio");
console.log(cart.finalizarCompra(800))