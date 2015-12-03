Template.VideoOverlay.onRendered(function(){
  var newVideo = this.find('.new-video');
  var archiveVideo = $('.archive-video');

  var setTransform = function() {

    var archiveVideoWidth = archiveVideo.width();
    var archiveVideoHeight = archiveVideo.height();

    // ratio of the current width to native
    var widthRatio = archiveVideoWidth / 800;
    // ratio of current height to native
    var heightRatio = archiveVideoHeight / 450;

    // Figure out which dimension we are constrained by
    var ratio;
    if (widthRatio > heightRatio) {
      ratio = heightRatio;
    } else {
      ratio = widthRatio;
    }

    var actualVideoWidth = 800 * ratio;
    var actualVideoHeight = 450 * ratio;

    translateX = actualVideoWidth * -0.067;
    translateY = actualVideoHeight * -0.1;

    Session.set('translateX', translateX);
    Session.set('translateY', translateY);

  }

  $(window).on('resize', function() {
    setTransform();
  });

  // Needs to be initialized.
  setTransform();

});

Template.VideoOverlay.helpers({

   'opacity': function(){
     return Session.get("opacity");
   },

   'translateX': function() {
     return Session.get('translateX');
   },

   'translateY': function() {
     return Session.get('translateY');
   }
});

Template.VideoOverlay.events({
   'input #opacity-slider' : function(event){
        event.preventDefault();
        Session.set("opacity", $(event.target).val());
   },

   'click #close-video': function(event) {
      event.preventDefault();
      Session.set('showVideo', false);
    }
});

Template.MarkerContent.helpers({
   'showVideo': function () {
     return Session.get('showVideo');
   }
});

Template.SoundWalkContent.helpers({
   'showSoundWalk': function() {
     return Session.get('showSoundWalk');
   }
});

Template.VideoMap.events({
   'click #sound-walk-button': function(event){
      event.preventDefault();
      Session.set('showSoundWalk', true);
   }
});

Template.VideoMap.helpers({
   'showSoundWalk': function(){
     return Session.get('showSoundWalk');
   }
});

Template.SoundWalk.events({
   'click #close-sound-walk-button': function(event){
      event.preventDefault();
      Session.set('showSoundWalk', false);
   }
});
