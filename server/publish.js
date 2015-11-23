Meteor.publish('data', function () {
    return Data.find();
});
Data.allow({
    update: function(userId, doc, fields){
        return doc.type === 'color';
    }
});