function buttonclick(val)
{
    document.getElementById("input").value=document.getElementById("input").value+val;

} 
function clearDisplay() {
    document.getElementById("input").value=""
} 
function equalClick(){
    var text=document.getElementById("input").value
    var result=eval(text) 
    document.getElementById('input').value=result 
}  