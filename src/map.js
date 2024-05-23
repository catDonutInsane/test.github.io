customElements.define('map-card', class extends HTMLElement {
    
    connectedCallback() {
      this.attachShadow({mode: 'open'});

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          let oldScript = document.getElementById('q'); 
          let timestamp = new Date().getTime();
             
    
          let script = document.createElement('script')
          script.type= "module"
          script.src = "src/index.js?"+timestamp
          script.id = "q"
        
          if(oldScript){
            oldScript.parentNode.replaceChild(script, oldScript); 
          }else{
            document.body.append(script)
          }
        },
        error=>{
          document.getElementById("app").innerHTML = "<div>Разрешите доступ к геолокаци для отображения карты</div>"
          console.log("Возникла ошибка: ", error)
        }
          
    );
    } else {
        console.log('Геолокация не поддерживается');
    }
    }
    
  });
