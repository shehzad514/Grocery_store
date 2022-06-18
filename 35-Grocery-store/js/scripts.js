let savebtn = document.getElementById("sBtn");
let Tinputs = document.getElementById("Tinputs");
let ul = document.getElementById("glory-list");

savebtn.addEventListener("click",function()
{

    if(Tinputs.value=="")
    {
         alert("This section will not be empty plz enter text")
    }
    else
    {
    let li = document.createElement("li");
    li.setAttribute("class", "glory-items");
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("value",Tinputs.value);
    input.setAttribute("class", "form-control");
    input.setAttribute("readonly","readonly");
    let edit = document.createElement("button");
    edit.innerHTML="edit"
    edit.setAttribute("class",'edit-btn');
    let del = document.createElement("button");
    del.innerHTML="Del";
    del.setAttribute("class","del-btn");
    li.appendChild(input);
    li.appendChild(edit);
    li.appendChild(del);
    ul.appendChild(li);
    Tinputs.value="";
    edit.addEventListener("click",function()
    {

       if(edit.innerHTML=="edit")
       {
        input.removeAttribute("readonly","readonly");
        edit.innerHTML="Save";
       }
       
      else
      {

        input.setAttribute("readonly","readonly");
        edit.innerHTML="edit";
      }
     
       
    })

    del.addEventListener("click",function()
    {
        let verify = confirm("Are you want to delete the row ");
        if(verify)
        {
            ul.removeChild(li);

        }
        else
        {
            alert("Sorry you can't delete it  ");
        }
    })
}
})