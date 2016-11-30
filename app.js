(function(angular, noty) {
    var app = angular.module('app', [ 'notify' ]);
    app.controller('Main', Main);

    function Main(notify) {
        var self = this;
        self.text = "some text";
        self.notify = notify;
    }

})(angular, noty);