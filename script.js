function btnclick(val){
    document.getElementById("screen").value+=val
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function eqlclick(){
    // firstly taken the values in text screen
    var text=document.getElementById("screen").value
    // secondly the value is given to a method eval()
    // eval() is already defined function in library which does the operations 
    var result=eval(text)
    // lastly the result is printing to screen
    document.getElementById("screen").value=result
}