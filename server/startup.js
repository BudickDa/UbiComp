Data.remove({});
Data.insert({type: 'color', value: 'blue'});

var chance = new Chance(), temperature = 23.00;
Meteor.startup(function () {
    Data.insert({type: 'temperature', value: temperature});
    Meteor.setInterval(function () {
        temperature += chance.floating({min: -1, max: 1});
        Data.update({type: 'temperature'}, {$set: {value: temperature}});
    }, 1000);
});

