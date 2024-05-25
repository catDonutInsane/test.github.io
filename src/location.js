
getLocation()

function getLocation() {
    
        navigator.geolocation.getCurrentPosition(function(position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
           LOCATION.center=  [longitude,latitude]
           markersGeoJsonSource[0].coordinates = [longitude,latitude]
        }
        
    );
    

}

export const LOCATION = {
    center: [], // starting position [lng, lat]
    zoom: 15 // starting zoom
  };
export const markersGeoJsonSource = [
    {
      coordinates: [] ,
      color: "red"
    }
]
