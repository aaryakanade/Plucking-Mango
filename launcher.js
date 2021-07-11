class launcher{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.03,
            length: 5
        }
        this.pointB = point2;
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    display(){
        if(this.launch.bodyA){
             var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
           strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    attach(Body){
        this.launch.bodyA = Body;
    }
    fly(){
        this.launch.bodyA = null ;
    }

}

   