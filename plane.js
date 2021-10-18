class Plane{
    constructor()
    {
        this._landed=false;
    }

    isLanded()
    {
        return this._landed;
    }

    land()
    {
        this._landed=true;
    }

}
module.exports=Plane;