class Human
{
    constructor(options)
    {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.gender = options.gender;
        this.age = options.age;
        this.calories = options.calories;
        this.hero = false;
    }

    sleepFor()
    {
        document.querySelector('#info').innerHTML = "I'm sleeping";
    }

    feed()
    {
        document.querySelector('#info').innerHTML = "Nom nom nom";
    }
}

class Superhero extends Human
{
    fly()
    {
        document.querySelector('#info').innerHTML = `I'm flying`;
        setTimeout(()=> 
        {
            document.querySelector('#info').innerHTML = "uuuuuuuuu!";
        }, 10000);
    }

    fight ()
    {
        document.querySelector('#info').innerHTML ="Khhhh-chh..." + "Bang-g-g-g... Evil is defeated!";
    }
}

let human = new Human(
{
    firstName: setFirstName(),
    lastName: setLastName(),
    gender: setGender(),
    age: setAge(),
    calories: setCalories(600),
    hero: false
});
let superhero = new Superhero(human);

document.querySelector('#fly').disabled = true;
document.querySelector('#fight').disabled = true;

setTimeout(() =>
{
    if (superhero.hero == false) 
    {
        if (human.calories > 0)
        {
            human.calories -= 200;
            setCalories(human.calories);
        }
        if (human.calories < 500)
        {
            document.querySelector('#info').innerHTML = "I'm still hungry";
        }
    }
    else
    {
        if (superhero.calories > 0)
        {
            superhero.calories -= 200;
            setCalories(superhero.calories);
        }
        if (superhero.calories < 500)
        {
            document.querySelector('#info').innerHTML = "I'm still hungry";
        }
    }
}, 5000);


function feed()
{
    if (superhero.hero == false)
    {
        if (human.calories < 500)
        {
            human.feed()
            document.querySelector('#feed').disabled = true;
            document.querySelector('#sleep').disabled = true;
            document.querySelector('#fly').disabled = true;
            document.querySelector('#fight').disabled = true;
            setTimeout(() => 
            {
                human.calories += 200;
                setCalories(human.calories);
                document.querySelector('#info').innerHTML = "I'm human";
                document.querySelector('#feed').disabled = false;
                document.querySelector('#sleep').disabled = false;
                document.querySelector('#fly').disabled = false;
                document.querySelector('#fight').disabled = false;
            }, 10000)
        }
        else
        {
            document.querySelector('#info').innerHTML = "I am not hungry";
        }
    }
    else
    {
        if (superhero.calories < 500)
        {
            superhero.feed()
            document.querySelector('#feed').disabled = true;
            document.querySelector('#sleep').disabled = true;
            document.querySelector('#fly').disabled = true;
            document.querySelector('#fight').disabled = true;
            setTimeout(() => {
                superhero.calories += 200;
                setCalories(superhero.calories);
                document.querySelector('#info').innerHTML = "done!";
                document.querySelector('#feed').disabled = false;
                document.querySelector('#sleep').disabled = false;
                document.querySelector('#fly').disabled = false;
                document.querySelector('#fight').disabled = false;
            }, 10000)
        } 
        else
        {
            document.querySelector('#info').innerHTML = "I am not hungry";
        }
    }
}

function sleep()
{
    if (superhero.hero == false)
    {
        document.querySelector('#feed').disabled = true;
        document.querySelector('#sleep').disabled = true;
        document.querySelector('#fly').disabled = true;
        document.querySelector('#fight').disabled = true;
        human.sleepFor();
        setTimeout(() =>
        {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() =>
            {
                document.querySelector('#info').innerHTML = "I'm human";
                document.querySelector('#feed').disabled = false;
                document.querySelector('#sleep').disabled = false;
                document.querySelector('#fly').disabled = false;
                document.querySelector('#fight').disabled = false;
            },2000);
        },10000);
    }
    else
    {
        document.querySelector('#feed').disabled = true;
        document.querySelector('#sleep').disabled = true;
        document.querySelector('#fly').disabled = true;
        document.querySelector('#fight').disabled = true;
        superhero.sleepFor();
        setTimeout(() =>
        {
            document.querySelector('#info').innerHTML = "I'm awake now";
            setTimeout(() =>
            {
                document.querySelector('#info').innerHTML = "Ready!";
                document.querySelector('#feed').disabled = false;
                document.querySelector('#sleep').disabled = false;
                document.querySelector('#fly').disabled = false;
                document.querySelector('#fight').disabled = false;
            },2000);
            document.querySelector('#feed').disabled = false;
            document.querySelector('#sleep').disabled = false;
            document.querySelector('#fly').disabled = false;
            document.querySelector('#fight').disabled = false;
        },10000);
    }
}

function fly()
{
    superhero.fly();
    document.querySelector('#feed').disabled = true;
    document.querySelector('#sleep').disabled = true;
    document.querySelector('#fly').disabled = true;
    document.querySelector('#fight').disabled = true;
    setTimeout(() =>
    {
        document.querySelector('#info').innerHTML = "uuuuuuuuuuuuuuuuu!"
        document.querySelector('#feed').disabled = false;
        document.querySelector('#sleep').disabled = false;
        document.querySelector('#fly').disabled = false;
        document.querySelector('#fight').disabled = false;
    },10000);
}

function fight()
{
    superhero.fight();
    document.querySelector('#feed').disabled = true;
    document.querySelector('#sleep').disabled = true;
    document.querySelector('#fly').disabled = true;
    document.querySelector('#fight').disabled = true;
    setTimeout(() =>
    {
        document.querySelector('#info').innerHTML = "fight"
        document.querySelector('#feed').disabled = false;
        document.querySelector('#sleep').disabled = false;
        document.querySelector('#fly').disabled = false;
        document.querySelector('#fight').disabled = false;
    },10000);
}

function setFirstName(name)
{
    let firstName = document.getElementById('firstName');
    if(name == undefined)
    {
        for(;firstName.innerText == "" || firstName.innerText == null;)
        {
            firstName.innerText = prompt("Enter the name of your hero?", "");
            let regex = RegExp('^[a-zA-Z]+$');
            if (firstName.innerText.length > 20 || !regex.test(firstName.innerText))
            {
                alert('error Accepts only one word, which consists only of Latin letters and its length does not exceed 20 characters.');
                firstName.innerText = null;
            }
        }
    }
    else
    {
        firstName.innerText = name;
    }
    return firstName.innerText;
}

function setLastName(name)
{
    let lastName = document.getElementById('lastName');
    if(name == undefined)
    {
        for(;lastName.innerText == "" || lastName.innerText == null;)
        {
            lastName.innerText = prompt("Enter the last name of your hero?", "");
            let regex = RegExp('^[a-zA-Z]+$');
            if (lastName.innerTextlength > 20 || !regex.test(lastName.innerText))
            {
                alert('error Accepts only one word, which consists only of Latin letters and its length does not exceed 20 characters.');
                lastName.innerText = null;
            }
        }
    }
    else 
    {
        lastName.innerText = name;
    }
    return lastName.innerText;
}

function setGender()
{
    let gender = document.getElementById('gender');
    for(;gender.innerText == "" || gender.innerText == null;)
    {
        gender.innerText = prompt("Enter gender (male or female)?", "");
        let regex = RegExp('^male$|^female$|^$', 'i');
        if (!regex.test(gender.innerText))
        {
            alert('error Accepts only male or female gender!');
            gender.innerText = null;
        }
    }
    return gender.innerText;
}

function setAge()
{
    let age = document.getElementById('age');
    for(;age.innerText == "" || age.innerText == null;)
    {
        age.innerText = prompt("Enter the age of your hero?", "");
        let regex = RegExp(/^[1-9]|[0-9]{0,4}$/)
        if (age.innerText.length > 2 || !regex.test(age.innerText))
        {
            alert('error Accepts only digits, cannot start with a zero, no more than 3 characters!');
            age.innerText = null;
        }
    }
    return age.innerText;
}

function setCalories(calories)
{
    let data = document.getElementById('calories');
    data.innerText = calories;
    return data.innerText;
}

