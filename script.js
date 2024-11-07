const card = document.querySelector('.card');

function loadCardContent() {
    card.innerHTML =
    `
        <img class='star-logo' src='./images/icon-star.svg' />

        <h1 class='white-text'>How did we do?</h1>

        <p class='gray-text'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        
        <div class='button-group'>
            <button class='rating-btn'>1</button>
            <button class='rating-btn'>2</button>
            <button class='rating-btn'>3</button>
            <button class='rating-btn'>4</button>
            <button class='rating-btn'>5</button>
        </div>

        <button class='submit-btn'>Submit</button>
    `
}

document.addEventListener('DOMContentLoaded', loadCardContent())

let rating = 0;

const ratingBtn = document.querySelectorAll('.rating-btn');

ratingBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        rating = parseInt(btn.innerHTML)

        // toggle active class
        document.querySelector('.active')?.classList.remove('active')
        btn.classList.add('active')
    })
})

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
    if(rating > 0) {
        loadThankYouContent()
    }
})

function loadThankYouContent() {
    card.innerHTML = 
    `
        <img class='center' src='./images/illustration-thank-you.svg'>

        <p class='rating center'>You selected ${rating} out of 5</p>

        <h1 class='white-text center'>Thank you!</h1>

        <p class='gray-text center'>
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        <p>
    `
}