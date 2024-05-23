let container = document.getElementById('app')
export default function timer(){
    // Проверяем, есть ли значение в Local Storage для времени начала
    if (!sessionStorage.getItem('startTime')) {
        sessionStorage.setItem('startTime', Date.now()); 
    }

   
    function getTimeSpentOnSite() {
        let startTime = sessionStorage.getItem('startTime');
        let currentTime = Date.now();
        let totalTime = currentTime - startTime;
        return totalTime;
    }

    // Функция для отображения времени на странице
    function displayTimeSpent() {
        let totalTime = getTimeSpentOnSite();
        let seconds = Math.floor(totalTime / 1000) % 60;
        let minutes = Math.floor(totalTime / (1000 * 60)) % 60;
        let hours = Math.floor(totalTime / (1000 * 60 * 60));
        sessionStorage.setItem('spentTime', `${hours} : ${minutes} : ${seconds}`);
        if (new URL(window.location.href).pathname.slice(1)==="clock"){
            container.innerHTML = `<div>${hours} : ${minutes} : ${seconds}</div>`
        
        }
        
    }
    displayTimeSpent();
}


