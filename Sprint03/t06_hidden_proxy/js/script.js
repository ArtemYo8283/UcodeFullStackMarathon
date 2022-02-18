const validator =
{
    set: function (item, column, data)
    {
        if (column == "gender")
        {
            if (data != "male" && data != "female")
            {
                throw new TypeError("The gender is invalid");
            }
        }
        if (column == 'age')
        {
            if (!Number.isInteger(data))
            {
                throw new TypeError("The age is not an integer");
            }
            if (data < 0 || data > 200)
            {
                throw new RangeError("The age is invalid");
            }
        }
        console.log(`Setting data '${data}' to '${column}'`);
        item[column] = data;
    },

    get: function (item, column)
    {
        console.log(`Trying to access the columnerty '${column}'...`);
        if (item.hasOwnProperty(column))
        {
            return item[column];
        }
        else
        {
            return false;
        }
    }
}

