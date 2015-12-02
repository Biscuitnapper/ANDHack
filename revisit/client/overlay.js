Template.VideoOverlay.helpers({
   'opacity': function(){
      return Session.get("opacity");   
   }   
});

Template.VideoOverlay.events({
   
   'input #opacity-slider' : function(event){
        event.preventDefault();
        
        Session.set("opacity", $(event.target).val());
    
   }
});