function updateClock() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.getElementById('clock').textContent = currentTime;
    setTimeout(updateClock, 1000);
}
updateClock(); 