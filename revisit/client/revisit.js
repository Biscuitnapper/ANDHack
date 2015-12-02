if (Meteor.isClient){
    
    Template.VideoMap.onRendered(function(){
        
        var map = L.map('map', {maxZoom: 19, zoom: 13, zoomControl: false, center: ['53.478118','-2.2413209']});
        L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
        
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'biscuitnapper.cih1togxi00m9uxm70t2c3v8f',
        accessToken: 'pk.eyJ1IjoiYmlzY3VpdG5hcHBlciIsImEiOiJjaWhwNXZ3M3UwMDBjdXhrcTZ2OXQ3NzN3In0.47J0e_HmrxMoJnMf2sJXQQ'
        }).addTo(map);
        
        /*markers!*/
            /*marker content*/
            
        
        var marker1 = L.marker([53.478118, -2.2413209]).addTo(map);
        marker1.bindPopup("You clicked on me").openPopup;
        
        
        
        
        
         
        /*associated functions*/
        /*function onMarkerClick(e){
            var popup = L.popup()
                .setLatLng([e.latlng.lat, e.latlng.lng])
                .setContent('<p>You clicked on</p>')
                .addTo(map);
            
        }*/
        /*end of associated functions*/
        
    })
    
}