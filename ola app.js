console.log("***WELCOME TO TOOFANI RIDES***")
const readline=require('readline-sync');
const fs=require('fs')
var current= readline.question("ENTER THE CURRENT LOCATION");
console.log(current)
var dropping= readline.question("ENTER THE DROPPING POINT");
console.log(dropping)
console.log("**HERE IS YOUR  VEHICLES DETAILS**")
function availableRiders(){
    var my_file=fs.readFileSync("riders.json")
    var my_file2=JSON.parse(my_file)
    var array=["auto","cab","Hyundai"]
    for (var i of array){
        console.log(i)
    }var vehicles=readline.question("**CHOOSE YOUR VEHICLES**");
    s_number=1
    for (var data in my_file2["Riderdata"]){
        if (my_file2["Riderdata"][data]["Ride Name"]===vehicles){
            console.log(s_number,my_file2["Riderdata"][data])
            s_number++
        }
    }
    var driver=readline.question("**CHOOSE DRIVER**");
    for (var data in my_file2["Riderdata"]){
        if (my_file2["Riderdata"][data]["name"]===driver){
            price=my_file2["Riderdata"][data]["Price"]
            console.log(my_file2["Riderdata"][data])
        }
    }
    var val=Math.floor(1000+Math.random()*9000)
    console.log(val)
    var otp=readline.question("**ENTER THE OTP**")
    if(otp==val){
        console.log("***OTP SUCCESSFULLY VERIFIED***")}
    else{
        console.log("***OTP DIDN't VERIFIED***")
    }
    console.log("YOUR JOURNEY IS STARTED ")
    console.log("***HAPPY JOURNEY***")
    setTimeout(()=>{
        console.log("YOU ARRIVED YOUR DROPPING POINT")
    var transection=readline.question("PAYMENT TYPE")
    if(transection=="online"){
        console.log("USE PHONE PAY","\n","TOTAL AMMOUNT",price)
        console.log("**THANKS FOR PAYMENT**")
    }else if(transection=="cash"){
        console.log("TOTAL AMMOUNT",price)
        console.log("**THANKS FOR THE PAYMENT**")
    }else{
        console.log("nothing")
    }
    feedback=readline.question("ENTER THE FEEDBACK")
    console.log(feedback)
        }, 5000)      
}availableRiders()