
const reviewButtons = document.querySelectorAll('.ddbutton');


reviewButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        
        const card = document.querySelectorAll('.card')[index];

        if (card.style.display === 'none' || card.style.display === '') {
            card.style.display = 'block';  
        } else {
            card.style.display = 'none';  
        }
    });
});
