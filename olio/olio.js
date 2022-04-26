/**Implement the following
functionality:
1. Create a car object with plate
number OOP-001.
2. Set car's speed to 120 km/h.
3. Print out the info about the car
(plate number and current
speed).
4. Create another instance with
different data.
5. Print out the info.
6. Change the second car's speed.
7. Make sure everything works as
expected.

 **/

let car={ 
carplate: "OOP-00123",
 speed: 50}

document.getElementById("printHere").innerHTML= " Carplate number is "+  car.carplate  +   " and speed is "  +  car.speed;

let car2={
    carplate: "OOP-00232",
    speed: 70
}

car2.speed=100;
document.getElementById("printHere").innerHTML= " Carplate number is "+  car2.carplate  +   " and speed is "  +  car2.speed;
