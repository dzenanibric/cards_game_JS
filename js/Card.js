class Card{
    sign;
    value;
    constructor(sign, value){
        this.sign = sign;
        this.value = value;
    }
    getCard(){
        return this.sign + this.value;
    }
}

let all_cards = [];
let card_values = [2,3,4,5,6,7,8,9,10,"ace","jack","queen", "king"];
let signs = ["clubs", "diamonds", "hearts", "spades"];

signs.forEach(sign=>{
   card_values.forEach(value=>{
    all_cards.push(new Card(sign, value));
   });
});