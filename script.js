document.addEventListener('DOMContentLoaded', () => {
    let views = localStorage.getItem('pageViews') || 0;
    views = parseInt(views) + 1;
    localStorage.setItem('pageViews', views);

    // Hiển thị số với 6 chữ số, thêm số 0 phía trước
    const counter = document.getElementById('counter');
    counter.textContent = String(views).padStart(6, '0');
});