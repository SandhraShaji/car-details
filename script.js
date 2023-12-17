function store(){
    let car = {
        brand:brand.value,
        price:price.value,
        key:key.value
    }
    if(car.brand==""||car.price==""||car.key==""){
        alert("Please enter all details!")
    }
    else{
        if(car.key in localStorage){
            alert("This car details already exists!")
        }
        else{
            localStorage.setItem(car.key,JSON.stringify(car))
            alert("Car details succesfully added.")
        }
    }
}
function retrieve(){
    let key1 = retr.value
    if(key1 in localStorage){
        let cars = JSON.parse(localStorage.getItem(key1))
        retrdisp.innerHTML= `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Car Details</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Key: ${cars.key}</li>
                <li class="list-group-item">Brand: ${cars.brand}</li>
                <li class="list-group-item">Price: ${cars.price}</li>
              </ul>
              <div class="card-body">
                <a href="./index.html" class="card-link"><button class="btn btn-dark">Close</button></a>
              </div>
            </div>`
    }
    else{
        alert(`Car with key ${key1} does not exist!`)
    }
}
function remove(){
    let key2 =remo.value
    if(key2 in localStorage){
        localStorage.removeItem(key2)
        alert(`Details of Car: ${key2} removed.`)
    }
    else{
        alert(`Car with key ${key2} does not exist!`)
    }

}
function clearrec(){
    localStorage.clear()
    alert("Details of all cars cleared.")
}