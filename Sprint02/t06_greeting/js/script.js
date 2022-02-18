let a = String(prompt(`What is your first name?`));
let b = String(prompt(`What is your last name?`));

if (a.match(/^[a-z]+$/i) && b.match(/^[a-z]+$/i))
{
    let str = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    let str1 = b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
    alert(`Hey, ${str} ${str1}`);
    console.log(`Hey, ${str} ${str1}`);
}
else
{
    alert(`Wrong input!`);
    console.log(`Wrong input!`);
}

