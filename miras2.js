import {receipt, shopName, cnt} from "./miras.js"

function printReceipt(receipt, shop, cnt) {
    console.log(`------------------------\n ${[...shop]} \n`)
    for (i = 0; i < receipt.length; i++) {
        console.log(receipt[i])
    }
    console.log(`\n Total ================= ${cnt}`)
}

printReceipt(receipt, shop, cnt)