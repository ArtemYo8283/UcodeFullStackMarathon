let a = prompt(`Enter first value of range: `, ``);
let b = prompt(`Enter second value of range: `, ``);
if(a == "")
{
    a = 1;
}
if(b == "")
{
    b = 100;
}

for(let i = a; i <= b; i++)
{
    if(i % 3 == 0 && i % 10 == 0 && i % 2 == 0)
    {
        console.log(`${i} is even, a multiple of 3, a multiple of 10\n`);
    }
    else if(i % 3 == 0 && i % 2 == 0)
    {
        console.log(`${i} is even, a multiple of 3\n`);
    }
    else if(i % 3 == 0)
    {
        console.log(`${i} is a multiple of 3\n`);
    }
    else if(i % 10 == 0 && i % 2 == 0)
    {
        console.log(`${i} is even, a multiple of 10\n`);
    }
    else if(i % 10 == 0)
    {
        console.log(`${i} is a multiple of 10\n`);
    }
    else if(i % 2 == 0)
    {
        console.log(`${i} is even\n`);
    }
    else
    {
        console.log(`${i} -\n`);
    }
}

