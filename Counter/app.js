let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('reset')) {
            count = 0;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        value.textContent = count;
        if(count > 0) {
            value.style.color = 'green';
        }
        else if(count < 0) {
            value.style.color = 'red';
        }
        else if(count == 0) {
            value.style.color = '#222';
        }
        
    })
})

