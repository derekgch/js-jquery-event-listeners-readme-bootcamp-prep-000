//define functions here
function getIt() {
  $('p').on("click", function(){
      //action you want taken
      alert('Hey!')
  });

}

function frameIt() {
  $('img').on('load', function(){
    //actions you want to happen
  });

}


function submitIt() {
  $('p').on("click", function(){
      //action you want taken
      alert('Hey!')
  });

}


function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed');
    }
  });

}





$(document).ready(function(){

// call functions here


});
