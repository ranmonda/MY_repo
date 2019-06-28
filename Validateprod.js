var cata=new Array("Electronics","Grocery");


function populateCat(){
var stateObj=window.document.formPro.dwnCategory;
for(var i=0;i<cata.length;i++)
{
stateObj.options[i]=new Option(cata[i]);
}
populateProd();

}





//***************
var prod=new Array();
prod[0]=new Array("Television","laptop","phone");
prod[1]=new Array("soap","powder");
prod[2]=new Array("---");

function populateProd()
{
var stateDataObj=window.document.formPro.dwnCategory;
var cityDataObj=window.document.formPro.dwdProd;
var indexOfStateSelected=stateDataObj.selectedIndex;
for(var i=0;i<prod.length;i++)
{
cityDataObj.options[i]=new Option(prod[indexOfStateSelected][i],prod[indexOfStateSelected][i]);
}
}

//*******

function quantity()
{
var ct=window.document.formPro.quant.value;
var  scat=window.document.formPro.dwnCategory.value;
var sprod=window.document.formPro.dwdProd.value;
switch(scat)
{
case "Electronics":if(sprod == "Television"){document.formPro.totpr.value=eval(ct)*20000;}
else if(sprod=="Laptop"){document.formPro.totpr.value=eval(ct)*30000;}
else if(sprod=="phone"){document.formPro.totpr.value=eval(ct)*10000;}
break;
case "Grocery":if(sprod == "soap"){document.formPro.totpr.value=eval(ct)*40;}
else if(sprod=="powder"){document.formPro.totpr.value=eval(ct)*90;}
break; 
     }
}