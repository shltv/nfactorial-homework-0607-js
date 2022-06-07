const shopName = "Burgers by Dalida"
let menu = {
    burger: {
        chicken: {
            name: "chichken burger",
            price: 1000
        },

        beef: {
            name: "beef burger",
            price: 1300
        }
    },

    cheeseburger: {
        chicken: {
            name: "chichken cheeseburger",
            price: 1200
        },

        beef: {
            name: "beef cheeseburger",
            price: 1500
        }
    }
}

menu.beverage = {
    cola: {
        name: "cola",
        price: 400
    },

    compot: {
        name: "compot",
        price: 450
    }
}

let order = []
let cnt = 0
yn = prompt("Do you want to order? y/n")
while ( yn === "y"){
    let decision = prompt("Choose one: beverage, burger, cheeseburger")
    if (decision === "burger" || decision === "cheeseburger") {
        let meat = prompt("Choose one: beef or chicken")
        order.push([menu[decision][meat].name,  menu[decision][meat].price])
        cnt += menu[decision][meat].price
    } else {
        let drink = prompt("Choose one: cola or compot")
        order.push([menu[decision][drink].name, menu[decision][drink].price])
        cnt += menu[decision][drink].price
    }
    yn = prompt("Do you want to continue ordering? y/n")
}

//DELETE ||
order = [["cola", 400], ["beef burger", 1300]];

let receipt = order.map((name) => `${name[0]} --- ${name[1]}`)

let expensive = order.filter((name) => name[1] === 1300)
