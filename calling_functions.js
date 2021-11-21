// calling functions

// hey kiddo

const controlIs18 = function(number){
  if (number>=18) return true;
   else return false;
};

const adultControl = function(number){
  if (controlIs18(number)) return 'Hello there';
   else return 'hey kiddo';
}

console.log(adultControl(22));

//VAT calculations
// exercise 1

const amountVAT = function(netto, vatPerc){
 return netto*vatPerc/100;
};

const inclVAT = function(netto,vatPerc){
  return netto + amountVAT(netto, vatPerc);
;}

console.log( 'Price of this computer of net $ 824,79 is: $ ' + inclVAT(824.79,21));
console.log('Price of this bread of net 1 $ is $ ' + inclVAT(1,9));

//exrcise 2

const exclVat= function(number1,baseVatPerc){
    const net = number1/(1 + baseVatPerc/100);
    const vat = number1 - net;    
    return [net,vat];
};

const splitAmount = function(totalAmount,vatPerc1){
    return exclVat(totalAmount,vatPerc1);
};

console.log('de basis prijs van deze commputer is: '  + splitAmount(1000,21)[0]+ 'en de inbegrepen BTW is: ' + splitAmount(1000,21)[1] );

console.log('de basis prijs van dit brood is: '+ splitAmount(2.29,9)[0] + 'de inbegrepen BTW is: ' + splitAmount(2.29,9)[1]);
