class Game{
    constructor(){
        this.btn = document.querySelector('button');
        this.cards = document.querySelectorAll('.img__holder');
        this.card_index = 0;
        this.five_random_cards = [];
        this.final_cards = [];
        this.round = 0;
    }
    init(){
        this.btn.addEventListener('click', ()=>this.flip()); //flip bez funkcije, njegov this bi se odnosio samo na init
    }
    flip(){
        (this.round === 1) ? this.round = 2 : this.round = 1;
        if(this.round === 1){
            this.removeAllSelected();
        }
        this.btn.innerHTML = 'Start ' + this.round;
        this.card_index = 0;
        this.turnOnBack();
    }
    removeAllSelected(){
        document.querySelectorAll('.selected').forEach(div=>{
            div.classList.remove('selected');
        });
    }
    turnOnBack(){
        this.cards.forEach(card=>{
            let front = card.querySelector('.front:not(.selected)');
            let back = card.children[1];
            if(front){
                front.style.transform = 'perspective(900px) rotateY(180deg)';
                back.style.transform = 'perspective(900px) rotateY(0deg)';
            }
        });
        setTimeout(()=>{
            this.shuffleCards();
            this.reveal();
        },100);
    }
    reveal(){
        let card_front = this.cards[this.card_index].querySelector('.front:not(.selected)');
        let card_back = this.cards[this.card_index].querySelector('.back');
        if(card_front){
            this.final_cards[this.card_index] = this.five_random_cards[this.card_index];
            card_front.children[0].setAttribute('src', this.getImage());
            card_front.onclick = () => card_front.classList.toggle('selected');
    
            setTimeout(()=>{
                card_back.style.transform = 'perspective(900px) rotateY(180deg)';
                card_front.style.transform = 'perspective(900px) rotateY(0)';
                this.card_index++;
                if(this.card_index < this.cards.length){
                    this.reveal();
                }
            },100);
        }
        else{
            this.card_index++;
            if(this.card_index < this.cards.length){
                this.reveal();
            }
        }
    }
    getImage(){
        return "assets/images/" + this.five_random_cards[this.card_index].sign + "_" + this.five_random_cards[this.card_index].value + ".png";
    }
    shuffleCards(){
        this.five_random_cards = deck.fiveRandomCards();
    }
}

let game = new Game();
game.init();