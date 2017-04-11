function MenuChoice()
{
    if (document.getElementById("menu").value == "ShowSection1") 
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        CreateAllCustomers();
    }
    
    if (document.getElementById("menu").value == "ShowSection2")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    
    else if ((document.getElementById("menu").value == "ShowSection3"))
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hiddem";
        document.getElementById("section3").style.visibility = "visible";
    }
}

function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect Customer data from the web page
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    //Create parameter string
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customercity +'"}';
    
    //Checking for AJAx operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);      
        }
    };
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
    
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful" + "<br>" + output.Exception;
    }
}

function ChangeAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
     //Collect Customer data from the web page
    var ordernumber = document.getElementById("ordernumber").value;
    var shiptoname = document.getElementById("shiptoname").value;
    var shiptostreet = document.getElementById("shiptostreet").value;
    var shiptocity = document.getElementById("shiptocity").value;
    var shiptopostalcode = document.getElementById("shiptopostalcode").value;
    
    //Create parameter string
    var parameters = '{"OrderID":"' + ordernumber + '","CompanyName":"' + shiptoname + '","ShipAddress":"' + shiptostreet + '","ShipCity":"' + shiptocity + '","ShipPostcode":"' + shiptopostalcode +'"}';
    
    //Checking for AJAx operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult2(result);      
        }
    };
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(parameters);

}
    
    function OperationResult2(output)
{
    if (output == 1)
    {
        document.getElementById("result2").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result2").innerHTML = "The operation was not successful" + "<br>" + output.Exception;
    }
}


function DeleteCustomer()
{

    var r = confirm("Are you sure you want to delete customer?");
    if (r == true) {
           
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    
    //Collect Customer ID from web page
    var customerid = document.getElementById("customerid").value; 
    
    url += customerid;
    
    //Checking for AJAx operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult3(result);      
        }
    };
    
    //Start AJAX request
    objRequest.open("GET", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send();
    
    }
    else
    {alert("You pressed cancel.");}
}
    
function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful" + "<br>" + output.Exception;
    }
}
   
function OperationResult3(output)
{
    if (output.DeleteCustomerResult.WasSuccessful == 1)
    {
        document.getElementById("result3").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result3").innerHTML = "The operation was not successful" + "<br>" + output;
    }
}


