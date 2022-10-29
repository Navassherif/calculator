//get value of input
let answer=document.getElementById("inputval");
function display(num){
 answer.value += num;
 }
 //clear button function
function clear1() {
answer.value=("")
}
 //delete button function
function delete1() {
answer.value=answer.value.slice(0,-1)
}
 //math operation button function
function mathetic() {
try{answer.value=eval(answer.value)

}
catch(err)
{alert("math operation Error")

}}