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
        ],
    
        articles: [
            {
                img:"img/motivation-blog-04-480x325.jpg",
                date:"May 13, 2020",
                title: "How to Stay True to Your Personal Brand",
                preview: "When it comes to your business or career, you want …",
            },
            {
                img:"img/motivation-blog-03-480x325.jpg",
                date:"May 13, 2020",
                title: "5 Vital Lessons in 5 Years of Freelancing",
                preview: "Being self-employed and working from home, it’s easy to get …",
            },
            {
                img:"img/motivation-blog-02-480x325.jpg",
                date:"May 13, 2020",
                title: "11 Super Useful Tips for Small-business Owners",
                preview: "Being a small-business owner poses a ton of challenges. We …",
            },
            {
                img:"img/motivation-blog-01-480x325.jpg",
                date:"May 13, 2020",
                title: "How to Give Yourself Grace to Start Again",
                preview: "Forgive yourself for bad habits you may have started or …",
            }
        ],
    
        footerLinks:[
            [
                "Start here",
                "Blog",
                "About Us",
            ],
            [
                "Success story",
                "Courses",
                "Contact Us",
            ],
            [
                "Membership",
                "Purchase guide",
                "Privacy policy",
                "Terms of service"
            ]
        ],
        

        index: 0,
        realStories : [
            {
                text: "I am free to learn at my own pace,follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
                img: "img/testimonial-avata-02.jpg",
                name: "Mina Hollace",
                job: "/ Freelancer"
            },
            {
                text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
                img: "img/testimonial-avata-04.jpg",
                name: "Madley Pondor",
                job: "/ IT Specialist"
            },
            {
                text: "I am happy with their arrangement of lessons and subject. They reflect a scientific inestigation into effective methods to adopt for learners",
                img: "img/testimonial-avata-01.jpg",
                name: "Luvic Dubble",
                job: "/ Private Tutor"
            },
            {
                text: "I'm a very strict person so i require everything to be organized and neat. Then, i'll be able to make things right and shine. MaxCoach guys just got me.",
                img: "img/testimonial-avata-03.jpg",
                name: "Florence Themes",
                job: "/ Multimedia Admin"
            }
        ]

    },
    methods: {
        clickNext(){
            (this.index == 3) ? this.index = 0 : this.index ++;
        },

        clickPrev(){
            (this.index == 0) ? this.index = 3 : this.index --;
        }

    },
});