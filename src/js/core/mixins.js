export default {
    listenTo: function (event, callback, target = this) {
        return target.on(event, callback.bind(this));
    }
};
