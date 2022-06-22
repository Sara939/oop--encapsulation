// classes final assignment:

class vehicle{
    constructor(wheelsnum, angine, color){
        this.wheelsnum= wheelsnum;
        this.angine= angine;
        this.color= color;
    }
    returnDetails(){
        return `${this.wheelsnum} ${this.angine} ${this.color}`;
    }
    static reciveObjectarray(carsarray){  
        for(let i=0; i<carsarray.length; i++){
            if(carsarray[i].angine >carsarray[i+1].angine){
                return carsarray[i];  
            }
        } 
    }

}

 let myvieacha= new vehicle (4, 1479, "blue");
 document.getElementById("mydiv").innerHTML= myvieacha.returnDetails();


class Geep extends vehicle{
    constructor(wheelsnum, angine, color, carname){
        super(wheelsnum, angine, color);   
            this.carname= carname;
        }     
    printname(){
        return `${super.returnDetails() } ${this.carname}`
    }
}

class Collection extends vehicle{
    constructor(wheelsnum, angine, color, carname){
        super(wheelsnum, angine, color);   
            this.carname= carname;
        }
        
    printname(){
        return super.returnDetails()+`${this.carname}`;  
    } 
}

class Minicars extends vehicle{
    constructor(wheelsnum, angine, color, carname){
    super(wheelsnum, angine, color);   
        this.carname= carname;
    }
    
    printname(){
        return super.returnDetails()+`${this.carname}`;
    }

    turntouppercase(){
        return this.carname[0].toUpperCase()+this.carname.substr(1,this.carname.length-1)+ this.carname[this.carname.length-1].toUpperCase();
    }
    get result(){
        return this.turntouppercase();
    }
}
             
let minicooper= new Minicars(5, 1500, "yellow", "minicooper");
document.getElementById("mydiv2").innerHTML+= minicooper.result;


let car1= new Geep("volvo", 1700, "black");
let car2= new Minicars ("volvo",2000, "black");
let car3= new Collection("volvo", 1500, "black");
let car4= new vehicle("volvo", 1700, "black");
let carsarray= [car1, car2, car3, car4];

console.log(vehicle.reciveObjectarray(carsarray));







