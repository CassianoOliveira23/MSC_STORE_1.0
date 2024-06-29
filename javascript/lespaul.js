document.getElementById("bt+product").addEventListener("click", increment_product)
document.getElementById("bt-product").addEventListener("click", decrement_product)

//pointer
document.getElementById("bt+product").addEventListener("mouseover", pointer)
document.getElementById("bt-product").addEventListener("mouseover", pointer)

function pointer(){
    this.style.cursor = "pointer"
}

function increment_product(){
    let amount = parseInt(document.getElementById("amount_product").value)
    if (amount < 15){
        amount++
        document.getElementById("amount_product").value = amount
    } else {
        alert("Entre em contato para compar quantidades maiores.")
    }
    total()
}

function decrement_product(){
    let amount = parseInt(document.getElementById("amount_product").value)
    if (amount > 0){
        amount--
        document.getElementById("amount_product").value = amount
    }
    total()
}


function total(){
    const price_guitar_v = 15999.90
    let amount = parseInt(document.getElementById("amount_product").value)
    let total = parseFloat(price_guitar_v * amount).toFixed(2)
    document.getElementById("total").value = "R$ " + total.replace('.',',')
}


function complete_purchase(){
    if((parseInt(document.getElementById("amount_product").value) > 0)){
        alert("Compra realizada com sucesso!\nObrigado pela compra")
        document.getElementById("amount_product").value = 0
        document.getElementById("total").value = "R$ 0,00"
    }
}

document.getElementById("buy_now").addEventListener("click", complete_purchase)