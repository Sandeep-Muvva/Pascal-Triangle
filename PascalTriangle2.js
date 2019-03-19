function fact(n)
{
   var val= 1; 
   for (var i = 1; i <= n; i++)
         val = val*i;
   return val;
}
var PascalTraingle2=function(rows){
 for (var i = 0; i < rows; i++)
   {
     var temp="";
      for (var j = 0; j <= (rows - i - 2); j++)
         temp+=" ";
      for (var j = 0 ; j <= i; j++){
         temp+=(fact(i)/(fact(j)*fact(i-j)));
         if(j!==i)
          temp+=" ";
      }
      console.log(temp);
   }
}
PascalTraingle2(5);
 