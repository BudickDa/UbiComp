Meteor.startup(function () {
    Meteor.subscribe('data');
});

Template.content.helpers({
    color: function () {
        var data = Data.findOne({type: 'color'});
        if(data){
            return data.value;
        }
        return 'white';
    },
    temperature: function () {
        var data = Data.findOne({type: 'temperature'});
        if(data){
            return data.value;
        }
        return 0;
    }
});

Template.content.events({
    'click button': function (event) {
        var color = event.currentTarget.dataset.color;
        if (color) {
            Meteor.call(color);
        }
    }
});