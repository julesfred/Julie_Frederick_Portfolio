(function () {
    angular
        .module("app", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
            .when("/home", {
                template:`
                <hr class="slideIn">
                <p class="intro">After years of hosting radio talk shows, creating cinimatic content, and serving delicious soft-served ice cream, it was time to fullfill my dream into a reality. Now here I am with my own web-portofolio! I would love to welcome you to my site where you will discover my passion for web development and design. Enjoy!</p>
                <hr class="slideIn">
                `,
            })
            .when("/about", {
                template: `
                <h2 class="element-animation">About...</h2>
                <p class="element-animation">I am a Front-end Developer student at Grand Circus, located in Detroit, Michigan.  
                On a day-to-day basis, I am improving my front-end development skills, researching all types of coding languages, and designing unique frameworks. People enjoy working with me because I am a team leader and I bring only positive vibes to the work environment. When I am not working I am either playing a great game of golf or I am out and about spending quality time with my friends and family.
                `
            })
            .when("/projects", {
                template: `
                
                `
            })
            .when("/contact", {
                template: `
                
                `
            })
        });
})();