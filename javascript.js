var numeros = [0,3,1,5];

function matematica() 
{
 var soma = 0;
   for(var i = 0; i<numeros.length; i= i+1) 
     {
       soma = soma + numeros[i];
     }
 var divisao = soma/numeros.length;
  console.log(divisao); 


}

function setup(){
  createCanvas(400,400);    
  matematica();
}

function draw() {
  background(150);
}
