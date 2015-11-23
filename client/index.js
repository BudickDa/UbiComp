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
            if(!Meteor.status().connected) {
                console.log('App is currently offline - your changes will be sent later.');
                Data.update({type: 'color'}, {$set: {value: color}});
            }else {
                Meteor.call(color);
            }
        }
    }
});