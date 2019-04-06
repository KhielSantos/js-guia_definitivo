//Declaração de variáveis
var a;
var b;

var c, d;

a = 10;
a = 'ten';

//escopo de variável
a = 'escopo global';
function b(){
 var a = 'escopo local';
  function c(){
    var a = 'scopo func C';
    return console.log(a + ' LI');
  }
  console.log(a + ' L');
  return c();

}
b()

console.log(a + ' G');