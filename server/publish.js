Meteor.publish('data', function () {
    return Data.find();
});