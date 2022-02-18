class HardWorker
{
    constructor(name, age, salary)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    set age(data)
    {
        if (data > 100 || data < 0)
        {
            this._age = 50;
        }
        else
        {
            this._age = data;
        }
    }

    set salary(data)
    {
        if (data > 1000000 || data < 100)
        {
            this._salary = 1000;
        }
        else
        {
            this._salary = data;
        }
    }

    toObject()
    {
        return this;
    }
}

