Meteor.methods({
    blue: function () {
        Data.update({type: 'color'}, {$set: {value: 'blue'}});
    },
    yellow: function () {
        Data.update({type: 'color'}, {$set: {value: 'yellow'}});
    },
    green: function () {
        Data.update({type: 'color'}, {$set: {value: 'green'}});
    },
    black: function () {
        Data.update({type: 'color'}, {$set: {value: 'black'}});
    },
    white: function () {
        Data.update({type: 'color'}, {$set: {value: 'white'}});
    }
});