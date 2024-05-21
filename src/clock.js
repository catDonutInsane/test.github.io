let container = document.getElementById('app')
export default function timer(){
    // Проверяем, есть ли значение в Local Storage для времени начала
    if (!sessionStorage.getItem('startTime')) {
        sessionStorage.setItem('startTime', Date.now()); 
    }

   
    function getTimeSpentOnSite() {
        var startTime = sessionStorage.getItem('startTime');
        var currentTime = Date.now();
        var totalTime = currentTime - startTime;
        return totalTime;
    }

    // Функция для отображения времени на странице
    function displayTimeSpent() {
        var totalTime = getTimeSpentOnSite();
        var seconds = Math.floor(totalTime / 1000) % 60;
        var minutes = Math.floor(totalTime / (1000 * 60)) % 60;
        var hours = Math.floor(totalTime / (1000 * 60 * 60));
        sessionStorage.setItem('spentTime', `${hours} : ${minutes} : ${seconds}`);
        if (new URL(window.location.href).pathname.slice(1)==="clock"){
            container.innerHTML = `<div>${hours} : ${minutes} : ${seconds}</div>`
        
        }
        
    }
    displayTimeSpent();
}


