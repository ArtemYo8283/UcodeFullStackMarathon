let numb = 1;
for(;;)
{
    let str = prompt(`Previous result: ${numb}. (to exit enter 'quit') Enter a new number:`);
    if (str == "quit")
    {
        break;
    }
    if (Number.isInteger(Number(str)))
    {
        numb += (Number(str));
    }
    else
    {
        console.error("Invalid number!");
    }
    if (numb > 10000)
    {
        numb = 1;
    }
}

