class dot{
	constructor(xs,ys){
		this.x=xs;
		this.y=ys;
		this.r=random(255);
		this.g=random(255);
		this.b=random(255);
		this.size=10;
	}
	ckcol(){}
	split(){}
	starttimer(){}
	chbd(){}
	move(){}
    display(){
		fill(this.r,this.g,this.b);
		
		ellipse(this.x,this.y,this.size,this.size);
	}
}



