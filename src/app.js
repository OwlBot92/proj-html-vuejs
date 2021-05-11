var app = new Vue({
    el: '#root',
    data: {
        navList : [
            "Home",
            "Pages",
            "Courses",
            "Features",
            "Blog",
            "Shop"
        ],

        courses:[
            /* RIGA UNO */
            [
                {
                    costo: "30.00",
                    testo: "How to be Successful: Create A Growth Mindset For Success",
                    lezioni: 3,
                    studenti: 50,
                    img: "img/motivation-course-06-480x298.jpg"
                },
                {
                    costo: "30.00",
                    testo: "How to Build Confidence in Your Abilities",
                    lezioni: 1,
                    studenti: 50,
                    img: "img/motivation-course-05-480x298.jpg"
                },
                {
                    costo: "20.00",
                    testo: "Productivity Machine – Focus in a Distracted Worlds",
                    lezioni: 5,
                    studenti: 50,
                    img: "img/motivation-course-04-480x298.jpg"
                }
            ],
            /* RIGA DUE */
            [
                {
                    costo: "20.00",
                    testo: "Effective Time Management Mastery – Complete Guide",
                    lezioni: 18,
                    studenti: 50,
                    img: "img/motivation-course-03-480x298.jpg"
                },
                {
                    costo: "25.99",
                    testo: "Body Language Secrets for Entrepreneurs",
                    lezioni: 19,
                    studenti: 50,
                    img: "img/motivation-course-02-480x298.jpg"
                },
                {
                    costo: "19.99",
                    testo: "Management Skills: The Science of Leadership",
                    lezioni: 17,
                    studenti: 50,
                    img: "img/motivation-course-01-480x298.jpg"
                }
            ]
        ]
    
        
    
    
    
    },
    methods: {
    },
});