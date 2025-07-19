// // cards.addEventListener("click", function() {
// //     document.classList.toggle('.flipped')}); DOesn't work because this function is for one unique card and not a set of card

// let cards = document.querySelectorAll(".card");
// let front = document.querySelectorAll(".front");
// let back = document.querySelectorAll(".back");

// cards.forEach(card => {
//     card.addEventListener("click", function () {
//         front.classList.add('flipped');
//         back.classList.add('flipped');
//     });
// });
// It won't work either because queryselectorall will get all the element 
// front in the document and when it will be clicked it won't work because 
// it should be a=one elment at a TimeRanges. SO we need to use queryselector
//  inside of each so it will be one at a time and since it's juste about one
//   you don't need the query selector all just the query selector. 
//   The loop will repat itself and made the code correct.
shuffleCards(); // If we do not do this in the beginning the cards won't be mixed up//

let cards = document.querySelectorAll(".card");

        let clickedCard1 = null;
        let clickedCard2 = null;

cards.forEach(card => {
    card.addEventListener("click", function(){
        let front = this.querySelector(".front");
        let back = this.querySelector(".back");

        front.classList.add("flipped");
        back.classList.add("flipped");

        // This save the card that we clicked//
        const clickedCard = this;


        if(!clickedCard1) {
            clickedCard1 = clickedCard;
        } else { 
            clickedCard2 = clickedCard;

                    if(clickedCard1.dataset.name === clickedCard2.dataset.name) {
                        //Nothing change means that the back of the card stay visible//
                    clickedCard1 = null;
                    clickedCard2 = null;
        } else {

        // let front = card.querySelector(".front");
        // let back = card.querySelector(".back");

        // front.classList.remove("flipped");
        // back.classList.remove("flipped");
// This won't work bcz we should get the front and the back of clickedCard1 and 2//

setTimeout ( () => {
                    let front1 = clickedCard1.querySelector(".front");
                    let back1 = clickedCard1.querySelector(".back");
                    let front2 = clickedCard2.querySelector(".front");
                    let back2 = clickedCard2.querySelector(".back");

                    front1.classList.remove("flipped");
                    back1.classList.remove("flipped");
                    front2.classList.remove("flipped");
                    back2.classList.remove("flipped");

                    // Reset variables
                    clickedCard1 = null;
                    clickedCard2 = null;
            },800);

            }
        }


});
});

// function shuffleCards() {
//     let container = document.querySelector(".memory-game"); // << this is the correct class
//     let cardsArray = Array.from(container.children);

//     // Fisher-Yates shuffle
//     for (let i = cardsArray.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         container.appendChild(cardsArray[j]); // Move random card to the end
//         cardsArray.splice(j, 1);
//     }
// }

// window.addEventListener("DOMContentLoaded", () => {
//     shuffleCards(); // Shuffle at the beginning
// });
// We could use this method which is more flexible since it doesn't require display flex...
// however it more difficult to understand and not at my level//

function shuffleCards() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 36);
        card.style.order = randomPos;
    });
}
// This method is only usuable when we have display : flex and flex-wrap: wrap or display : grid//




// To make the restart and mix up the card//



let restart = document.querySelector(".restart");

restart.addEventListener("click", function() {

    cards.forEach(card => {
        let front = card.querySelector(".front");
        let back = card.querySelector(".back");

        front.classList.remove("flipped");
        back.classList.remove("flipped");
    });

        shuffleCards();
});


//Always take into account that we have several card so we should do the function forEach//


//Function to flip 2 same cards and deflip different cards. Okay what we need to be able to save 
// the cfirst card the user click and also the second card so th script will compare it afterwards.
// to do so, we will save the result of the ard clicked in the function that allows the card to flip//
