function submit(){
    const item= document.getElementsByClassName(arrayinput);
    let inputmax=item[0];
    for (let i=1; i< item.length;i++)
    {
        let check = item[i];
        if (item[i].length>inputmax.length)
        {
            inputmax = item[i];
        }
    }
    for (let j=0;j<item.length;i++)
    {
        if (item[i].length==inputmax.length)
        {
            console.log(item[i]);
        }
    }
}