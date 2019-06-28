
function validateAllData(){

var fnameData=window.document.formRegister.txtFname.value;
var pwdData=window.document.formRegister.txtPwd.value;
var cpwdData=window.document.formRegister.txtCPwd.value;

if(pwdData!=cpwdData)
{
   alert("Password & Confirm Password should be same");
   return false;
}

var cgWinObj=window.open("","CGWindow","width=400,height=300");
cgWinObj.document.write("<body bgcolor='cyan'>");
cgWinObj.document.write("<h2>Welcome :</h2>"+fnameData);
cgWinObj.document.write("</body>");
return true;


}
//*******************************
var stateArra=new Array("WB","MS","UP");
var cityArr=new Array();
cityArr[0]=new Array("Kolkata","Siliguri","Kalyani","Jalpaiguri");
cityArr[1]=new Array("Mumbai","Pune","Nagpur","Wardha");
cityArr[2]=new Array("Noida","Kanpur");
function populateState(){
var stateObj=window.document.formRegister.txtState;
for(var i=0;i<stateArra.length;i++)
    {
       stateObj.options[i]=new Option
	   (stateArra[i],stateArra[i]);
    }
}
//***************
function populateCity()
    {
	var stateDataObj=window.document.formRegister.txtState;
	var cityDataObj=window.document.formRegister.txtCity;
	
	var indexOfStateSelected=stateDataObj.selectedIndex;
	   
	   for(var j=0;j<cityArr.length;j++)
	   {
	     cityDataObj.options[j]=new  
		 Option(cityArr[indexOfStateSelected][j],cityArr[indexOfStateSelected][j]);
	   
	   }
	   
	   
	}


