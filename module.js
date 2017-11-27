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
                <h2>About.</h2>
                `
            })
            .when("/resume", {
                template: `
                
                `
            })
            .when("/contact", {
                template: `
                
                `
            })
        });
})();