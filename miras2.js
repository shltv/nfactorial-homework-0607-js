import {receipt, shopName, cnt} from "./miras.js"

let shop = "Burgers by Dalida"
let receipt = ['cola --- 400', 'beef burger --- 1300']
let cnt = 1700

function printReceipt(receipt, shop, cnt) {
    console.log(`------------------------\n ${[...shop]} \n`)
    for (i = 0; i < receipt.length; i++) {
        console.log(receipt[i])
    }
    console.log(`\n Total ================= ${cnt}`)
}

printReceipt(receipt, shop, cnt)