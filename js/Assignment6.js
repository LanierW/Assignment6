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
        document.getElementById("result").innerHTML = "The operation was successfull!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successfull" + "<br>" + output.Exception;
    }
}





