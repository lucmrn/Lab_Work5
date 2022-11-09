function userForm(){
    var output = [];

    var Fname = document.getElementById('FirstName').value;
    console.log("First Name: "+ Fname);
    output += "Full name: " + Fname;

    var Lname = document.getElementById('LastName').value;
    console.log("Last Name: "+ Lname);
    output += " " + Lname;

    var email = document.getElementById('email').value;
    console.log("Email: "+ email);
    output += "<br>";
    output += "Email: " + email;

    var address = document.getElementById('address').value;
    console.log("Address: "+ address);
    output += "<br>";
    output += "Address:" + address;

    var city = document.getElementById('city').value;
    console.log("City: "+ city);
    output += "<br>";
    output += "&emsp;&emsp;&emsp;" + city;

    var province = document.getElementById('province').value;
    console.log("Province: "+ province);
    output += "," + province;


    var membership = document.getElementsByName('membership');
    
    for(i = 0; i < membership.length; i++) {
        if(membership[i].checked)
        var valueMembership = membership[i].value;
    }
    console.log("Membership: "+ valueMembership);
    output += "<br>";
    output  += "Membership: " + valueMembership;

    document.getElementById('output').innerHTML = output;
}


function ResetOutput(){
    document.getElementById('output').innerHTML = "";
}




function myExcelFuns(){
    document.getElementById('result').innerHTML = "";

    var numberStr = document.getElementById('numbers').value;
    console.log("String numbers with spaces: "+ numberStr);


    if (numberStr.length == 0) {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = "Enter values !!";   
    }
    else{
        numberStr = numberStr.trim();
        console.log("String numbers without spaces: "+ numberStr);

        var numberArr = numberStr.split(" ");
        console.log("Number array: "+ numberArr);

        var finalNumberArr = [];

        for (let i = 0; i < numberArr.length; i++) {
            if (numberArr[i] != " ") {
                finalNumberArr.push(numberArr[i]);
            }
        }
        console.log("Final Number array: "+ finalNumberArr);

        var excelFunctions = document.getElementsByName('excelFunctions');
        var result = 0;
        finalNumberArr.sort(function(a, b){return a - b});
        console.log("Final Number array sorted: "+ finalNumberArr);

        if(excelFunctions[0].checked){
            for (let i = 0; i < finalNumberArr.length; i++) {
                result += parseInt(finalNumberArr[i]);
            }
        }
        else if(excelFunctions[1].checked){
            for (let i = 0; i < finalNumberArr.length; i++) {
                result += parseInt(finalNumberArr[i]);
            }
            result = result/finalNumberArr.length
        }
        else if(excelFunctions[2].checked){
            finalNumberArr.reverse();
            console.log("Final Number array reverse: "+ finalNumberArr);

            result = finalNumberArr[0];
        }
        else if(excelFunctions[3].checked){
            result = finalNumberArr[0];
        }

    console.log("Result =  "+ result);
    document.getElementById('result').style.color = 'black';
    document.getElementById('result').innerHTML = "Result: "+result;
    }
    console.log("--------END program--------");
}