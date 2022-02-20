const clear = document.querySelector("#clear");
const add = document.querySelector("#add");
const notes = document.querySelector("#output");
let item = 0;

add.addEventListener("click", addToLocalStorage);
clear.addEventListener("click", clearLocalStorage);

function addToLocalStorage()
{
    let textareaValue = document.querySelector("#textarea").value;
    if (textareaValue == "")
    {
        alert(`It\'s empty. Try to input something in "Text input"`)
    }
    else
    {
        localStorage.setItem(item.toString(), textareaValue+generateDate());
        if (notes.innerHTML == "[Empty]")
        {
            notes.innerHTML = "";
            notes.insertAdjacentHTML("beforeend", `<div>--> ${localStorage.getItem(item.toString())}</div>`);
        }
        else
        {
            notes.insertAdjacentHTML("beforeend", `<div>--> ${localStorage.getItem(item.toString())}</div>`);
        }
        item++;
        document.querySelector("#textarea").value = "";
    }
}

function clearLocalStorage()
{
    let question = confirm("Delete local storage?")
    if (question == true)
    {
        localStorage.clear();
        notes.innerHTML = "[Empty]";
    }
}

function generateDate()
{
    const date = new Date();

    let todate; 
    if(date.getDate()<10)
    {
        todate = ("0" + date.getDate());
    }
    else
    {
        todate = date.getDate();
    }

    let tomonth;
    if(date.getMonth()<10)
    {
        tomonth = ("0" + date.getMonth());
    }
    else
    {
        tomonth = date.getMonth();
    }

    let tohours;
    if(date.getHours()<10)
    {
        tohours = ("0" + date.getHours());
    }
    else
    {
        tohours = date.getHours();
    }

    let tominutes;
    if(date.getMinutes() < 10)
    {
        tominutes = ("0" + date.getMinutes());
    }
    else
    {
        tominutes = date.getMinutes();
    }

    let tosecond;
    if(date.getSeconds() < 10)
    {
        tosecond = ("0" + date.getSeconds());
    }
    else
    {
        tosecond = date.getSeconds();
    }
    return ` [${todate}.${tomonth}.${date.getFullYear()}, ${tohours}:${tominutes}:${tosecond}]`;
}

if(localStorage.length == 0)
{
    notes.innerHTML = "[Empty]";
}
else
{
    for (let i = 0; i < localStorage.length; i++)
    {
        let key = localStorage.getItem(i.toString());
        if(i == 0)
        {
            notes.innerHTML = `--> ${key}`;
        }
        else 
        {
            notes.innerHTML += `<div>--> ${key}</div>`;
        }
    }
}

