const options = {weekday: 'long', day: 'numberic', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', optoins);
