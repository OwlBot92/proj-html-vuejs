const { vue } = require("laravel-mix");

var app = new vue({
    el: "#root",
    data: {
        navList:[
            "Home",
            "Pages",
            "Courses",
            "Features",
            "Blog",
            "Shop"
        ]
    },
    methods: {

    }
});