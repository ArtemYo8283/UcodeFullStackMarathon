let id = 1;
let card = document.getElementsByClassName("card");
let time = 0;

show(id);

function next(n)
{
    show(id += n);
}

function show(num)
{
    if (num > card.length)
    {
        id = 1;
    }
    if (num < 1)
    {
        id = card.length;
    }
    for (let i = 0; i < card.length; i++)
    {
        card[i].style.display = "none";
    }
    card[id - 1].style.display = "block";

    clearInterval(time);
    time = setInterval(show, 5000, id++);
}

