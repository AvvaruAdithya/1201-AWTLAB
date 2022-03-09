class employee{
    display(){
        console.log("employee name");
    }
}
class employee1 extends employee{
    display(){
        console.log("employee role");
        super.display();
    }
}
let a=new employee1();
a.display();