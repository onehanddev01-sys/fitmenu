document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile-card');
    
    profileCards.forEach(card => {
        card.addEventListener('click', () => {
            const profile = card.dataset.profile;
            console.log(`Selected profile: ${profile}`);
            
            localStorage.setItem('selectedProfile', profile);
            
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
            
            alert(`คุณเลือก: ${card.querySelector('h3').textContent}`);
        });
    });
});