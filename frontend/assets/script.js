// FitMenu - Main JavaScript
console.log('🍽️ FitMenu loaded successfully!');

// ตัวอย่างฟังก์ชันพื้นฐาน
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded!');
    
    // เพิ่ม animation เมื่อโหลดหน้า
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.6s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
});