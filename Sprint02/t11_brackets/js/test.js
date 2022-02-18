describe("checkBrackets", () =>
{
    it ("1", () =>
    {
        let x = NaN;
        assert.equal(checkBrackets(x), -1);
    });

    it ("2", () =>
    {
        let x = null;
        assert.equal(checkBrackets(x), -1);
    });

    it ("3", () =>
    {
        let x;
        assert.equal(checkBrackets(undefined), -1);
    });

    it ("4", () =>
    {
        let x = '()()aboba()(aboba)()';
        assert.equal(checkBrackets(x), 2);
    });

    it ("5", () =>
    {
        let x = '()';
        assert.equal(checkBrackets(x), 0);
    });

    it ("6", () =>
    {
        let x = ') ) ) ((( ) ) )';
        assert.equal(checkBrackets(x), 9);
    });

    it ("7", () =>
    {
        let x = -4;
        assert.equal(checkBrackets(x), 0);
    });
    
    it ("8", () =>
    {
        let x = 10;
        assert.equal(checkBrackets(x), 0);
    });

    it ("9", () =>
    {
        let x = "123";
        assert.equal(checkBrackets(x), -1);
    });

    it ("10", () =>
    {
        let x = "";
        assert.equal(checkBrackets(x), -1);
    });

});

mocha.run();

