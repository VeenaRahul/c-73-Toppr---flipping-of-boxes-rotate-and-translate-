class Box{
    constructor(x, y, w, h){
        this.body = Bodies.rectangle(x, y, w, h);
        this.width = w;
        this.height = h;
        Composite.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        push ();
        //angleMode(DEGREES);
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rect(0,0, this.width, this.height);
        pop ();
    }
}