function submit(){
    const item= document.getElementById("input_lenght--form");
    let inputmax=item.elements[0].value;
    let text ="";
    for (let i=1; i< item.length;i++)
    {
        if (item.elements[i].value.length>inputmax.length)
        {
            inputmax = item.elements[i].value;
        }
    }
    for (let j=0;j<item.length;j++)
    {
        if (item.elements[j].value.length==inputmax.length)
        {
            text += item.elements[j].value + ", ";
        }
    }
    document.getElementById("par").innerHTML = text;
}
function inputnumber(){
    const item2 = document.getElementById("input_number--form");
    let class1=0;
    let class2=0;
    for(let i=0;i<item2.length;i=i+2)
    {
        class1 += Number(item2.elements[i].value);
    }
    for (let j=1;j<item2.length;j=j+2)
    {
        class2 +=Number(item2.elements[j].value);
    }
    document.getElementById("par2").innerHTML =class1;
    document.getElementById("par3").innerHTML = class2;
}
function pickcolor(){
    let ramdomcolor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + ramdomcolor;
    let color = "#"+ramdomcolor;
    document.getElementById("colorrand").value=color;
}
function copy(){
    let textcolor = document.getElementById("colorrand");
    navigator.clipboard.writeText(textcolor.value);
}
function setcolor(){
    let setcolortext = document.getElementById("setcolorform");
    let colortext = setcolortext.elements[0].value;
    document.body.style.backgroundColor = colortext;
}