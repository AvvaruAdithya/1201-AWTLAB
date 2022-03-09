class employee
{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("employee name is"+this.name);
    }
}
let a=new employee();
a.display();