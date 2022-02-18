class Tower extends Building
{
    constructor(floors, material, adress, hasElevator, arcCapacity, height)
    {
        super(floors, material, adress);
        this.hasElevator= hasElevator; 
        this.arcCapacity = arcCapacity;
        this.height = height;
    }

    isElevator()
    {
        if (this.hasElevator == true)
        {
            return "+";
        }
        else
        {
            return "-";
        }
    }

    getFloorHeigth()
    {
        return this.height / this.floors;
    }

    toString()
    {
        return [
            super.toString(),
            `Elevator: ${this.isElevator()}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeigth()}`,
        ].join('\n');
    }
};

