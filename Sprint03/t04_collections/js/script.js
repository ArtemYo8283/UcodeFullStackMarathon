const guestList = new Set();

guestList.add('Ira');
guestList.add('Pasha');
guestList.add('Julia');
guestList.add('Artem');

if (guestList.has('Vladimir'))
{
    console.log('Name already exist!');
}
else
{
    console.log('Name added!');
    guestList.add('Vladimir');
}

console.log(guestList);
console.log(guestList.size);

if (!guestList.has('Masha'))
{
    console.log('User does not exist');
}
else
{
    console.log('User deleted');
    guestList.delete('Vladimir');
}
guestList.clear();
console.log(guestList);

const menu = new Map([
  ['coockies', '2€'],
  ['chockolate', '3€'],
]);

menu.set('Pizza', '20€');
menu.set('Pasta', '15€');
menu.set('Salad', '10€');
menu.set('Soup', '12€');
menu.set('Coffee', '5€');
console.log(menu);
console.log(menu.entries());

const coinCollection = new WeakSet();

let Ira =
{
    safe1:
    {
        cell: '1479€',
        password: '1448',
    },
};

let Artem =
{
    safe2:
    {
        cell: '6164€',
        password: '1337',
    },
};

let Pasha =
{
    safe3:
    {
        cell: '2334€',
        password: 'aboba123',
        messages: [
        { text: 'Hello everybody', from: 'Ira' },
        { text: 'How goes?', from: 'Artem' },
        { text: 'Read pdf', from: 'Pasha' },
        ],
    },
};

coinCollection.add(Ira);
coinCollection.add(Artem); 
coinCollection.add(Pasha);
console.log(coinCollection);

