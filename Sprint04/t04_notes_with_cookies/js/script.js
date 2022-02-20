const clear = document.querySelector('#clear');
const add = document.querySelector('#add');
const notes = document.querySelector('#output');
let item = 0;

add.addEventListener('click', addToCokies);
clear.addEventListener('click', clearCokies);

function addToCokies()
{
    let text = document.querySelector('#textarea').value;
    
    var cookie_date = new Date();
    cookie_date.setYear(cookie_date.getFullYear() + 1);
    document.cookie = `${text}=${text};expires=${cookie_date.toUTCString()}`; 
    var cookies = document.cookie.split(";");
    if(cookies.length == 0)
    {
        notes.innerHTML = '[Empty]';
    }
    else
    {
        for (let i = 0; i < cookies.length; i++)
        {
            var key = cookies[i].split("=");
            if(i == 0)
            {
                notes.innerHTML = `--> ${key[0]}`;
            }
            else 
            {
                notes.innerHTML += `<div>--> ${key[0]}</div>`;
            }
        }
    }
    document.querySelector('#textarea').value = "";
}

function clearCokies()
{
    let question = confirm('Delete сokies?')
    if (question == true)
    {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
            document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        notes.innerHTML = '[Empty]';
    }
}
var cookies = document.cookie.split(";");
if(cookies.length == 0)
{
    notes.innerHTML = '[Empty]';
}
else
{
    for (let i = 0; i < cookies.length; i++)
    {
        var key = cookies[i].split("=");
        if(i == 0)
        {
            notes.innerHTML = `--> ${key[0]}`;
        }
        else 
        {
            notes.innerHTML += `<div>--> ${key[0]}</div>`;
        }
    }
}

