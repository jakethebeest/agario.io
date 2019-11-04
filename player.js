class player{
	constructor(xs,ys,sizes,ids){
		this.x=xs;
		this.y=ys;
		this.size=sizes;
	this.dead=false;
	this.r=random(0,255);
		this.g=random(0,255);
		this.b=random(0,255);
		this.id=ids;
		this.splitt=0;
		this.dsel=0;
		this.timer=60*15;
		this.id=ids;
		this.link1=random(2^40-1);
		this.a=0;
		this.perant=false;
		this.fp=createVector(this.x-10,this.y);
		this.cp=createVector(this.x-10,this.y);
		this.dfp= this.fp.dist(this.cp);
		angleMode(DEGREES);
	}
	chbd(){
		if(this.x<=0){this.x++;}
			if(this.x>=width){this.x--;}
		if(this.y<=0){this.y++;}
		if(this.y>=height){this.y--;}
		
		
	}
	starttimer(){
		
if(this.splitt==true){

	if(this.timer<0){
		this.id+=random(0.01,0.05);
		this.splitt=false;
	 }
	this.timer--;
}

	}
	
	split(key){
		if(this.size>30&&key==true){
			
		this.a= new player(this.x,this.y,this.size/2,this.id);
		this.a.dsel=800;
		this.a.r=this.r;
		this.a.b=this.b;
		this.a.g=this.g;
		this.size/=2;
		this.a.splitt=true;
		this.perant=true;
		this.a.perant=true;
		this.a.a= new player(this.x,this.y,this.size,this.id);
		this.timer=60*15;
			this.a.timer=60*15;
		// this.random1=  int(random(2^40-1));
		// this.link1=random1;
		// this.a.link1=random1;
		
		d.push(this.a);
		
		}
	}
	
	ckcol(d1,work){
		if(this.id!=d1.id){
	if (
	
	this.y<d1.y+(this.size/2*0.9) &&
	this.y>d1.y-(this.size/2*0.9) &&
	this.x<d1.x+(this.size/2*0.9) &&
	this.x>d1.x-(this.size/2*0.9) &&
	
	
	this.size>d1.size){
     this.size+=int(d1.size/1.75);
	 //sigh, it jurry riged, and i hate it however it will work for now
   d[work].id=-10;
   d.splice(work,1);
				
	
	}	
		}
		
	}

	update(){
		
		this.fp=createVector(this.x-10,this.y);
		this.dfp= this.fp.dist(this.cp);
	}
	move(xsp,ysp,speed,dir){
		let v= p5.Vector.fromAngle(radians(dir), 30);
				
				
				//let v= createVector(xsp-this.x,ysp-this.y);

		if(this.dsel>= speed){
		v.normalize();
		v.mult(this.dsel/50);
		this.x+=v.x;
		this.y+=v.y;
		this.dsel-=10;
			
		}
		else{
			if(this.perant==true&&this.a.perant==true&&this.id==this.a.id){
			this.da=dist(this.x,this.y,this.a.x,this.a.y);
			this.ang=v.heading();
			if(this.da<this.size){
				if(this.ang>=180){
				
	         v.mult(-3);
				}
				if(this.ang<=180){
				
  v.mult(-3);
				}
				
				
			}
			
			}
		v.normalize();
		v.mult(speed/(2*this.size));
		
		this.x+=v.x;
		this.y+=v.y;
		//v.rotate(-7);
		}
	}
	
	display(){
		
			fill(this.r,this.g,this.b);
			
		
	ellipse(this.x,this.y,this.size,this.size);
	stroke(abs(this.r-240),abs(this.g-240),abs(this.b-240));
	fill(abs(this.r-240),abs(this.g-240),abs(this.b-240));
	textAlign(CENTER, CENTER)

	textSize(this.size/3);
	text(int(this.id),this.x,this.y);
		}
	
	
	
	
	
	
	
}

	
	



