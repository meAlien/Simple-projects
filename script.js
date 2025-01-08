function op(val)
{
    document.getElementById("input").value=document.getElementById("input").value+val
}
function cl()
{
    document.getElementById("input").value=''
}
function equalClick()
{
    var text=document.getElementById("input").value
    var output = eval(text)
    document.getElementById("input").value = output
}