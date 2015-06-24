import Ember from 'ember';

export default Ember.Controller.extend({

  newVideo: "",

  actions: {
//currently debugging this.get('videoId') - returning undefined in console
    getNewVideo: function() {
      var controller = this;
      var url = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+statistics&id=" + this.get('videoId') + "&key=AIzaSyAHu80T94GGhKOzjBs9z5yr0KU8v48Zh60";
      debugger;
      Ember.$.getJSON(url).then(function(responseJSON) {
        controller.set("newVideo", responseJSON.items[0].statistics.viewCount);
      });

    }

  }
});
