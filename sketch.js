let controll=0;
let v1;
let m1;
let d= [];
let amount=100;
let count=0;

function setup(){
createCanvas(windowWidth,windowHeight);
 v1=createVector(width/2,height/2);
m1=createVector(width,height);;
for(let j=0;j<amount/2;j++){
	d[j]=new player(random(width),random(height),int(random(11,20)),j);
	
}
for(let j=amount/2;j<amount;j++){
	d[j]= new dot(random(width),random(height));
}
}

function draw(){
	background(255);
	stroke(0,0,122);
	for(let j=0;j<20;j++){
		line(j*100,0,j*100,height);
		
	}
	for(let j=0;j<20;j++){
		line(0,j*100,width,j*100);
		
	}
	stroke(0);
	for(let j=d.length-1;j>-1;j--){
	d[j].move(mouseX,mouseY,600,random(360));
	d[j].display();
	d[j].starttimer();
	d[j].chbd();
}





	for(let j=d.length-1;j>-1;j--){		
		for (let l=d.length-1;l>-1;l--){
			if((d[j] instanceof player || d[j] instanceof dot) && (d[l] instanceof player|| d[l] instanceof dot)){
			d[j].ckcol(d[l],l);
			}
		}
		
	}
	if(count%30==0){
		d.push(new dot(random(width),random(height)));
		
	}
	count+=10;
	//frameRate(0);

	
	}
	
	
		
	function mousePressed(){
	for(let j=d.length-1;j>-1;j--){
	d[j].split(true);
}
	}
	
	
	
	