//https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
    //enter code here
    total = 0;
    for(var x = 0; x < array.length; x++){
      total += +array[x];
    }
  
    if(total % 2 == 0){
      return 'even';
    }else{
      return 'odd';
    }
}