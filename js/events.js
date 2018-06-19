//define functions here
function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on("load", function(){
    
  })
}

function pressIt(){
  $('input').on("keydown", function(key){
    if(key === 71){
      alert("You've pressed the 'G' key!")
    }
  })
}

function submitIt(){

}
$(document).ready(function(){
// call functions here
  getIt()

});
