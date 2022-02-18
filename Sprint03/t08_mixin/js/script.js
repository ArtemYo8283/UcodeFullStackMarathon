let orig = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let crypt = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

let houseMixin =
{
    wordReplace(str1, str2)
    {
        this.description = this.description.replace(str1, str2);
    },

    wordInsertAfter(str1, str2)
    {
        let length = this.description.indexOf(str1) + str1.length;
        this.description = [this.description.slice(0, length), " ", str2, this.description.slice(length)].join('');
    },

    wordDelete(str)
    {
        let length1 = this.description.indexOf(str);
        let length2 = this.description.indexOf(str) + str.length;
        this.description = [this.description.slice(0, length1), this.description.slice(length2)].join('');
    },

    wordEncrypt()
    {
        let index = item => orig.indexOf(item);
        let translate = item => 
        {
            if(index(item) > -1)
            {
                return crypt[index(item)];
            } 
            else
            {
                return item;
            };
        }
        this.description = this.description.split('').map(translate).join('');
    },

    wordDecrypt()
    {
        let index = item => crypt.indexOf(item);
        let translate = item => 
        {
            if(index(item) > -1)
            {
                return orig[index(item)];
            } 
            else
            {
                return item;
            };
        }
        this.description = this.description.split('').map(translate).join('');
    }
}

