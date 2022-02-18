function copyObj(obj)
{
    if (null == obj || "object" != typeof obj)
    {
        return obj;
    }
    let tmp = {};
    for(let item in obj)
    {
        tmp[item] = obj[item];
    }
    return tmp;
}

