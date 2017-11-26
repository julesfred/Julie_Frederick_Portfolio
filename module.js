(function () {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
            .when("/home", {
                template:`
           
                `,
            })
            .when("/about", {
                template: `
                
                `
            })
            .when("/contact", {
                template: `
                
                `
            })
            .when("/contact", {
                template: `
                
                `
            })
        });
})();