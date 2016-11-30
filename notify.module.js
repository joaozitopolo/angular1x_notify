(function(angular, noty) {

    angular.module('notify', []).service('notify', NotifyService);

    function NotifyService() {
        return Notify;

        function Notify(text, optArgs) {
            noty(angular.extend({
                text: text,
                layout: 'topRight',
                type: 'success',
                timeout: 5000,
                force: true,
                animation: {
                    open: {height: 'toggle'},
                    close: {height: 'toggle'},
                    easing: 'swing',
                    speed: 100
                }
            }, optArgs));
        }


    }

})(angular, noty);