var a=1;
function hide(){
    if(a==1){
        document.getElementById("sidebar").style.display="flex";
        return a=0;
    }
    else{
        document.getElementById("sidebar").style.display="none";
        return a=1;
    }
}
var b=1;
function hide_acadamics(){
    if(b==1){
        document.getElementById("acadamics").style.display="flex";
        return b=0;
    }
    else{
        document.getElementById("acadamics").style.display="none";
        return b=1;
    }
}

var c=1;
function hide_request(){
    if(c==1){
        document.getElementById("request").style.display="flex";
        return c=0;
    }
    else{
        document.getElementById("request").style.display="none";
        return c=1;
    }
}

var c=1;
function signin(){
    if(c==1){
        document.getElementById("all").style.display="flex";
        document.getElementById("container2").style.display="none";
        document.getElementById("main1").style.display="none";
        document.getElementById("main2").style.display="none";
        document.getElementById("main3").style.display="none";
        document.getElementById("main4").style.display="none";
        return c=1;
    }
   
}
var d=1;
function tooltip(){
    if(d==1){
        document.getElementById("tooltip").style.display="flex";
        return d=0;
    }
    else{
        document.getElementById("tooltip").style.display="none";
        return d=1;
    }
}
var e=1;
function logout(){
    if(e==1){
        document.getElementById("all").style.display="none";
        document.getElementById("container2").style.display="flex";
        document.getElementById("tooltip").style.display="none";
        document.getElementById("main").style.display="flex";
        document.getElementById("footer").style.display="flex";

        return e=1;
    }
}
var f=1;
function studentProfile(){
    if(f==1){
        document.getElementById("main").style.display="none";
        document.getElementById("main1").style.display="flex"; 
        document.getElementById("sidebar").style.display="none";
        document.getElementById("main2").style.display="none";
        document.getElementById("main3").style.display="none";
        document.getElementById("main4").style.display="none"; 
        document.getElementById("student-profile").style.display="flex"; 
        return f=0;
    }
    else{
        document.getElementById("main1").style.display="none"; 
        document.getElementById("sidebar").style.display="none";
        return f=1
    }
}
var j=1;
function not(){
    if(j==1){
        document.getElementById("no-info").style.display="flex";
        document.getElementById("student-profile").style.display="none"; 
       
        return j=1;
    }
}
var k=1;
function profile(){
    if(k==1){
        document.getElementById("no-info").style.display="none";
        document.getElementById("student-profile").style.display="flex"; 
       
        return k=1;
    }
}

var t=1;
function enrollment(){
    if(t==1){
        document.getElementById("main").style.display="none";
        document.getElementById("main2").style.display="flex";
        document.getElementById("sidebar").style.display="none"; 
        document.getElementById("main1").style.display="none";
        document.getElementById("main3").style.display="none";
        document.getElementById("main4").style.display="none"; 
        document.getElementById("registration").style.display="flex";
        return t=1;
    }

}
var g1=1;
function registration(){
    if(g1==1){
        document.getElementById("registration").style.display="flex";
        document.getElementById("readmission").style.display="none"; 
        document.getElementById("transfer").style.display="none";
        document.getElementById("withdrawal").style.display="none";
        document.getElementById("Add-Drop").style.display="none"
        return g1=1;
    }
}
var g1=1;
function add(){
    if(g1==1){
        document.getElementById("registration").style.display="none";
        document.getElementById("readmission").style.display="none"; 
        document.getElementById("transfer").style.display="none";
        document.getElementById("withdrawal").style.display="none";
        document.getElementById("Add-Drop").style.display="flex"
        return g1=1;
    }
}
var g1=1;
function readmission(){
    if(g1==1){
        document.getElementById("registration").style.display="none";
        document.getElementById("readmission").style.display="flex"; 
        document.getElementById("transfer").style.display="none";
        document.getElementById("withdrawal").style.display="none";
        document.getElementById("Add-Drop").style.display="none"
        return g1=1;
    }
}
var g1=1;
function transfer(){
    if(g1==1){
        document.getElementById("registration").style.display="none";
        document.getElementById("readmission").style.display="none"; 
        document.getElementById("transfer").style.display="flex";
        document.getElementById("withdrawal").style.display="none";
        document.getElementById("Add-Drop").style.display="none"
        return g1=1;
    }
}
var g1=1;
function withdrawal(){
    if(g1==1){
        document.getElementById("registration").style.display="none";
        document.getElementById("readmission").style.display="none"; 
        document.getElementById("transfer").style.display="none";
        document.getElementById("withdrawal").style.display="flex";
        document.getElementById("Add-Drop").style.display="none"
        return g1=1;
    }
}
var h=1;
function acadamicHistory(){
    if(h==1){
        document.getElementById("main").style.display="none";
        document.getElementById("main3").style.display="flex"; 
        document.getElementById("sidebar").style.display="none";
        document.getElementById("main1").style.display="none";
        document.getElementById("main2").style.display="none";
        document.getElementById("main4").style.display="none";
        document.getElementById("transcript").style.display="flex";
        return h=1;
    }
}
var h=1;
function transcript(){
    if(h==1){
        document.getElementById("transcript").style.display="flex";
        document.getElementById("gpa-summary").style.display="none"; 
        document.getElementById("grade-report").style.display="none";   
        document.getElementById("assessment").style.display="none";
        document.getElementById("attendance").style.display="none";
        document.getElementById("costsharing").style.display="none";
        return h=1;
    }
}
var h=1;
function gpaSum(){
    if(h==1){
        document.getElementById("transcript").style.display="none";
        document.getElementById("gpa-summary").style.display="flex"; 
        document.getElementById("grade-report").style.display="none";   
        document.getElementById("assessment").style.display="none";
        document.getElementById("attendance").style.display="none";
        document.getElementById("costsharing").style.display="none";
        return h=1;
    }
}
var h2=1;
function gradeReport(){
    if(h2==1){
        document.getElementById("transcript").style.display="none";
        document.getElementById("gpa-summary").style.display="none"; 
        document.getElementById("grade-report").style.display="flex";  
        document.getElementById("assessment").style.display="none";
        document.getElementById("attendance").style.display="none";
        document.getElementById("costsharing").style.display="none";
        return h2=1;
    }
}
var h=1;
function assessment(){
    if(h==1){
        document.getElementById("transcript").style.display="none";
        document.getElementById("gpa-summary").style.display="none"; 
        document.getElementById("grade-report").style.display="none";    
        document.getElementById("assessment").style.display="flex";
        document.getElementById("attendance").style.display="none";
        document.getElementById("costsharing").style.display="none";
        return h=1;
    }
}
var h=1;
function attendance(){
    if(h==1){
        document.getElementById("transcript").style.display="none";
        document.getElementById("gpa-summary").style.display="none"; 
        document.getElementById("grade-report").style.display="none";  
        document.getElementById("assessment").style.display="none";
        document.getElementById("attendance").style.display="flex";
        document.getElementById("costsharing").style.display="none";
        return h=1;
    }
}
var h1=1;
function costShare(){
    if(h1==1){
        document.getElementById("transcript").style.display="none";
        document.getElementById("gpa-summary").style.display="none"; 
        document.getElementById("grade-report").style.display="none";    
        document.getElementById("assessment").style.display="none";
        document.getElementById("attendance").style.display="none";
        document.getElementById("costsharing").style.display="flex";
        return h1=1;
    }
}
var i=1;
function dormitory(){
    if(i==1){
        document.getElementById("main").style.display="none";
        document.getElementById("main3").style.display="none"; 
        document.getElementById("sidebar").style.display="none";  
        document.getElementById("main1").style.display="none";
        document.getElementById("main2").style.display="none";
        document.getElementById("main4").style.display="flex";
        return i=1;
    }
}
