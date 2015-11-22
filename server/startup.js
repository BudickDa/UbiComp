Data.remove({});
Data.insert({type: 'color', value: 'blue'});

var chance = new Chance(), temperature = 21.00;
Meteor.startup(function () {
    Data.insert({type: 'temperature', value: temperature});
    Meteor.setInterval(function () {
        temperature += chance.floating({min: -0.015, max: 0.015});
        Data.update({type: 'temperature'}, {$set: {value: temperature}});
    }, 1000);
});

