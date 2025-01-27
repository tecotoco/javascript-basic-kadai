const addBtn = document.getElementById('btn');
const text = document.getElementById('text');

addBtn.addEventListener('click', () => {
    text.style.display = 'none';
    console.log('ボタンをクリックしました');
});

