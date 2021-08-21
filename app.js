// For value set in Inner Text
function setValueInText(placeId, valueId) {
    const setTex = document.getElementById(placeId);
    setTex.innerText = valueId;


}
// Calculate Total Price
function totalPrice() {
    const bestPrice = document.getElementById('bestPriceText');
    let a = bestPrice.innerText;
    const memory = document.getElementById('memoryCostText');
    let b = memory.innerText;
    const storage = document.getElementById('StorageCostText');
    let c = storage.innerText;
    const Delivery = document.getElementById('DeliveryCostText');
    let d = Delivery.innerText;

    let TotalSum = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
    setValueInText('TotalPriceText',TotalSum);
    setValueInText('FinalPriceText',TotalSum);
}

// Memory button using event bubble

document.getElementById('MemoryButton').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (number == '8 GB undefined memory') {
        const price1 = '' + 0;
        setValueInText('memoryCostText', price1);
    }
    else {
        const price2 = '' + 180;
        setValueInText('memoryCostText', price2);
    }
    totalPrice();

});

// Storage button using event bubble
document.getElementById('storageButton').addEventListener('click', function (event) {
    const number2 = event.target.innerText;
    if (number2 == '256GB SSD Storage') {
        const price1 = '' + 0;
        setValueInText('StorageCostText', price1);
    }
    else if (number2 == '512GB SSD Storage') {
        const price2 = '' + 100;
        setValueInText('StorageCostText', price2);
    }
    else {
        const price3 = '' + 180;
        setValueInText('StorageCostText', price3);
    }

    totalPrice();
});

// Delivery button using event bubble
document.getElementById('deliveryButtion').addEventListener('click', function (event) {
    const number3 = event.target.innerText;
    if (number3 == 'Friday,Aug 25 Free Prime Delivery') {
        const price1 = '' + 0;
        setValueInText('DeliveryCostText', price1);
    }
    else {
        const price2 = '' + 20;
        setValueInText('DeliveryCostText', price2);
    }
    totalPrice();
})

// For promo code
document.getElementById('promoButton').addEventListener('click',function(){
    const PromoCode=document.getElementById('promoCode');
    if (PromoCode.value=='stevekaku'){
        let TotalPriceText=document.getElementById('FinalPriceText');
        let TotalPrice=parseFloat(TotalPriceText.innerText);
        let result=(TotalPrice*20)/100;
        let FinalPrice=TotalPrice-result;
        let FinalPriceString=FinalPrice+'';
        
       TotalPriceText.innerText=FinalPriceString;
    
        PromoCode.value='';
    }
    else{
        alert("Pls, Give Your Correct PromoCode !!!")
        PromoCode.value='';

    }
})
