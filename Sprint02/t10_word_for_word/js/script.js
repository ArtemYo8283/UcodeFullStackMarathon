function addWords(obj, wrds)
{
    let newWrds = wrds.split(" ");
    let words = obj.words.split(" ");
    let result = words.concat(newWrds).filter(
    function (value, index, self)
    {
        return self.indexOf(value) == index;
    });
    obj.words = result.join(" ").trim();
}

function removeWords(obj, wrds)
{
    let del = wrds.split(" ");
    let result = obj.words.split(" ");
    let size = del.length;
    for (let i = 0; i < size; i++)
    {
        result = result.filter(
        function (value)
        {
            return value != del[i];
        });
    }
    obj.words = result.join(" ").trim();
}

function changeWords(obj, oldWrds, newWrds)
{
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
}

