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
            
        var marker1 = L.marker([53.478118, -2.2413209]).addTo(map);
        /*marker1.bindPopup("You clicked on me").openPopup;*/
        marker1.on('click', function() {
          Session.set('showVideo', true);
        });

        /*map-path*/
        
        var latlngs=[
                     
        new L.LatLng(53.472726, -2.247009),
        new L.LatLng(53.472521, -2.246837),
        new L.LatLng(53.472419, -2.246279),
        new L.LatLng(53.472392, -2.245292),
        new L.LatLng(53.472238, -2.245120),
        new L.LatLng(53.472085, -2.245035),
        new L.LatLng(53.471957, -2.244906),
        new L.LatLng(53.471932, -2.244541),
        new L.LatLng(53.471996, -2.244262),
        new L.LatLng(53.472085, -2.244005),
        new L.LatLng(53.472123, -2.243769),
        new L.LatLng(53.472251, -2.243554),
        new L.LatLng(53.472315, -2.243254),
        new L.LatLng(53.472379, -2.243018),
        new L.LatLng(53.472443, -2.242739),
        new L.LatLng(53.472583, -2.242524),
        new L.LatLng(53.472596, -2.242224),
        new L.LatLng(53.472673, -2.241966),
        new L.LatLng(53.472762, -2.241752),
        new L.LatLng(53.472915, -2.241215),
        new L.LatLng(53.473069, -2.240679),
        new L.LatLng(53.473273, -2.240228),
        new L.LatLng(53.473401, -2.239713),
        new L.LatLng(53.473592, -2.239241),
        new L.LatLng(53.473758, -2.238747),
        new L.LatLng(53.473222, -2.240185),
        new L.LatLng(53.473452, -2.239713),
        new L.LatLng(53.473579, -2.239284),
        new L.LatLng(53.473745, -2.238726),
        new L.LatLng(53.473825, -2.238481),
        new L.LatLng(53.473972, -2.237987),
        new L.LatLng(53.474168, -2.237431),
        new L.LatLng(53.474217, -2.237184),
        new L.LatLng(53.474278, -2.236958),
        new L.LatLng(53.474266, -2.236669),
        new L.LatLng(53.474266, -2.236381),
        new L.LatLng(53.474340, -2.236114),
        new L.LatLng(53.474352, -2.235846),
        new L.LatLng(53.474413, -2.235558),
        new L.LatLng(53.474462, -2.235290),
        new L.LatLng(53.474536, -2.235002),
        new L.LatLng(53.474608, -2.234754),
        new L.LatLng(53.474723, -2.234861),
        new L.LatLng(53.474877, -2.234947),
        new L.LatLng(53.475030, -2.234990),
        new L.LatLng(53.474863, -2.236105) 
                     
                    ];
        
        var polylinePoints = [];
        var polylineOptions = {
            color: 'blue',
            weight: 2,
            opacity: 0.8
        };
        
        var audioElement = document.getElementById("soundwalk-audio");
        var pathPopup = L.popup();
        
        $("#sound-walk-button").on("click", function(){
            
            audioElement.play();
            
            var polyline = new L.Polyline(latlngs, polylineOptions).addTo(map);
            
            pathPopup
                .setLatLng([53.472673, -2.241966])
                .setContent("<p>Sound Walk, 02/12/2015</p>")
                .openOn(map);
        });
        
        $("#close-sound-walk-button").click(function(){
            
            audioElement.src="";
            audioElement.currentTime = 0;
            $("#soundwalk-audio").pause();
            $("#soundwalk-audio").Stop();
            
            map.removeLayer(polyline);
            map.removeLayer(pathPopup);
            
        });
        
    })

}
