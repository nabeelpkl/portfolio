import Mock from "../mock";

const database = {
    information: {
        name: 'Nabeel K',
        aboutContent: "I am a mobile app developer. I can provide clean code and pixel perfect design. I can also work on websites.",
        age: 29,
        phone: '+91 8891008861',
        nationality: 'Indian',
        language: 'English, Malayalam, Hindi',
        email: 'nabeel.kottol@gmail.com',
        address: '',
        freelanceStatus: '',
        socialLinks: {
            facebook: '',
            twitter: '',
            pinterest: '',
            behance: '',
            dribbble: '',
            stackoverflow: "https://stackoverflow.com/users/1769274/nabeel-k",
            linkedin: "https://www.linkedin.com/in/nabeel-kottol-20a83639",
            github: "https://github.com/nabeelpkl"
        },
        profileImage: './images/profile-pic.png',
        aboutImage: '/images/about-image.jpg',
        aboutImageLg: '/images/about-image-lg.jpg',
        cvfile: './files/nabeel-resume.pdf'
    },
    services: [
        {
            title: "Mobile Application",
            icon: 'mobile',
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        },
        {
            title: "Web Development",
            icon: 'code',
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
        }
    ],
    reviews: [
        {
            id: 1,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
            author: {
                name: 'Burdette Turner',
                designation: 'Web Developer, Abc Company'
            }
        },
        {
            id: 2,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
            author: {
                name: 'Susan Yost',
                designation: 'Client'
            }
        },
        {
            id: 3,
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            author: {
                name: 'Irving Feeney',
                designation: 'Fiverr Client'
            }
        }
    ],
    skills: [
        {
            title: "React Native",
            value: 95
        },
        {
            title: "Javascript",
            value: 90
        },
        {
            title: "Flutter",
            value: 75
        },
        {
            title: "Dart",
            value: 80
        },
        {
            title: "ReactJS",
            value: 70
        },
        {
            title: "HTML",
            value: 80
        },
        {
            title: "CSS",
            value: 65
        },
        {
            title: "Android",
            value: 70
        },
        {
            title: "Java",
            value: 80
        },
        {
            title: "Kotlin",
            value: 65
        },
    ],
    portfolios: [
        {
            id: 1,
            title: "Bullet Money",
            subtitle: "App that provides credit over UPI, built with Flutter",
            imageUrl: "/images/portfolio-image-1.jpg",
            url: 'https://bullet.money/',
            android: 'https://play.google.com/store/apps/details?id=money.bullet&hl=en_IN',
            ios: "https://apps.apple.com/in/app/bullet-upi-now-pay-later/id1533617900"
        },
        {
            id: 2,
            title: "Jupiter Money",
            subtitle: "Neo Bank built with React Native",
            imageUrl: "/images/portfolio-image-4.jpg",
            url: 'https://jupiter.money/',
            android: "",
            ios: ""
        },
        {
            id: 3,
            title: "Itilite",
            subtitle: "Business travel management app built with React Native",
            imageUrl: "/images/portfolio-image-2.jpg",
            url: 'https://www.itilite.com/',
            android: 'https://play.google.com/store/apps/details?id=com.itilite.starter&hl=en_IN',
            ios: "https://apps.apple.com/in/app/itilite/id1484326787"
        },
        {
            id: 4,
            title: "VRDevotee",
            subtitle: "Spiritual app built with React Native",
            imageUrl: "/images/portfolio-image-3.jpg",
            url: '',
            android: 'https://play.google.com/store/apps/details?id=com.kalpnik.vrdevotee&hl=en_IN',
            ios: "https://apps.apple.com/us/app/vr-devotee-immerse-in-devotion/id1335073706"
        },
        {
            id: 5,
            title: "Gramafone",
            subtitle: "Gramafone is a local portal for Kizhuparamba panchayath built in Native Android",
            imageUrl: "/images/portfolio-image-5.jpg",
            android: 'https://play.google.com/store/apps/details?id=in.co.gramafone.client&hl=en_IN&gl=US',
            ios: ""
        },
        {
            id: 6,
            title: "Sri Sai Spiritual Center",
            subtitle: "App for Sri Sai temples built in Android",
            imageUrl: "/images/portfolio-image-6.jpg",
            android: 'https://play.google.com/store/apps/details?id=com.vrdevotee.srisai&hl=en_IN',
            ios: "https://apps.apple.com/in/app/sri-sai-spiritual-center/id1333497131"
        },
        {
            id: 7,
            title: "VRDevotee Kiosk",
            subtitle: "Created a native Android app which helps to play videos in VR headset over bluetooth. User can control the video inside the headset using this app. App is not public in playstore.",
            imageUrl: "/images/portfolio-image-7.jpg",
            url: '',
            android: '',
            ios: ""
        },
        {
            id: 8,
            title: "mPassbook",
            subtitle: "Mobile passbook built in Android for banks like BOB, IDBI, Federal",
            imageUrl: "/images/portfolio-image-8.jpg",
            android: '',
            ios: ""
        }
    ],
    experience: {
        workingExperience: [
            {
                id: 1,
                year: "FEB 2020 - Present",
                position: "Software Developer",
                company: "Jupiter Money",
                details: "Working as a Software Engineer. Currently developing mobile apps for both Android and iOS in React Native and Flutter."
            },
            {
                id: 2,
                year: "APR 2019 - FEB 2020",
                position: "Senior Software Developer",
                company: "Itilite Technologies Pvt Ltd",
                details: "Worked as a Senior Software Engineer. Developed mobile apps for both Android and iOS in react native."
            },
            {
                id: 3,
                year: "JUN 2017 - MAR 2019",
                position: "Software Developer",
                company: "Kalpnik Technologies Pvt Ltd",
                details: "Created native Android app and an iOS app using React Native, developed plugins for payment, network related listeners to integrate with unity, worked on firebase analytics in Unity with bigQuery, integrated Appsflyer, Facebook analytics in Unity for app tracking and attribution, currently working on video streaming based app in React Native and Unity and an Android TV app."
            },
            {
                id: 4,
                year: "FEB 2016 - MAR 2017",
                position: "Android Developer",
                company: "MobME Wireless Solutions",
                details: "Worked as Team Lead for product mPassbook, part of full product lifecycle, used Sync Adapter, Content Provider, libraries like SQLCipher, MPAndroidChart, PDFCreator, Retrofit"
            },
            {
                id: 5,
                year: "MAR 2015 - JAN 2016",
                position: "Android Developer",
                company: "TechPing Internet Solutions",
                details: "Developed multiple Android apps - Chat based social networking app using Socket.io, Event bus, Volley, GCM, Sugar ORM - Summarized news app using SQLite, Volley, GCM, Viewpager - Chat based hyperlocal shopping app using Socket.io, SQLite, Event Bus, Volley"
            }
        ],
        educationExperience: [
            {
                id: 1,
                year: "2010 - 2014",
                graduation: "B.tech Computer Science",
                university: "College of Engineering, Trivandrum",
                details: "Completed B.tech in Computer Science and Engineering with a cgpa of 6.96"
            },
            {
                id: 2,
                year: "2007 - 2009",
                graduation: "Higher Secondary Education(XII)",
                university: "PPMHSS Kottukkara, Malappuram",
                details: ""
            },
        ]
    },
    blogs: [
        {
            id: 1,
            title: 'Markdown & Html supported blog.',
            featuredImage: '/images/blog-image-1.jpg',
            filesource: '../../blog/markdown-html-supported-blog.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 2,
            title: 'Installing NodeJS on your device.',
            featuredImage: '/images/blog-image-2.jpg',
            filesource: '../../blog/installing-nodejs-on-your-device.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 3,
            title: 'UI/UX design starter with Adobe XD.',
            featuredImage: '/images/blog-image-3.jpg',
            filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 4,
            title: 'Boost your post for increasing sales.',
            featuredImage: '/images/blog-image-4.jpg',
            filesource: '../../blog/boost-your-post-for-increasing-sales.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 5,
            title: 'Difference between GatsbyJS & NextJS.',
            featuredImage: '/images/blog-image-5.jpg',
            filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 6,
            title: 'How to choose javascript framework for project.',
            featuredImage: '/images/blog-image-6.jpg',
            filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 7,
            title: 'Web automation with python language.',
            featuredImage: '/images/blog-image-7.jpg',
            filesource: '../../blog/web-automation-with-python-language.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 8,
            title: 'Time to use latest technology for creating a website.',
            featuredImage: '/images/blog-image-8.jpg',
            filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 9,
            title: 'Think out of the box.',
            featuredImage: '/images/blog-image-9.jpg',
            filesource: '../../blog/think-out-of-the-box.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 10,
            title: 'Trending designs in 2020.',
            featuredImage: '/images/blog-image-1.jpg',
            filesource: '../../blog/trending-designs-in-2020.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 11,
            title: 'How to get 10k instagram followers?',
            featuredImage: '/images/blog-image-2.jpg',
            filesource: '../../blog/how-to-get-10k-instagram-followers.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 12,
            title: 'What NodeJS can do?',
            featuredImage: '/images/blog-image-3.jpg',
            filesource: '../../blog/what-nodejs-can-do.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 13,
            title: 'Futures of javascript.',
            featuredImage: '/images/blog-image-4.jpg',
            filesource: '../../blog/future-of-javascript.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 14,
            title: 'Popular javascript library in 2020.',
            featuredImage: '/images/blog-image-5.jpg',
            filesource: '../../blog/popular-javascript-library-in-2020.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        },
        {
            id: 15,
            title: 'Promrammers must read books.',
            featuredImage: '/images/blog-image-6.jpg',
            filesource: '../../blog/programmers-must-read-books.md',
            createDay: "20",
            createMonth: 'February',
            createYear: "2020"
        }
    ],
    contactInfo: {
        phoneNumbers: ['+91 8891008861', '+91 7012048089'],
        emailAddress: ['nabeel.kottol@gmail.com', 'nabeel.kottol8861@gmail.com'],
        address: ""
    }
}


Mock.onGet("/api/information").reply(config => {
    const response = database.information;
    return [200, response];
});

Mock.onGet("/api/services").reply(config => {
    const response = database.services;
    return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
    const response = database.reviews;
    return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
    const response = database.skills;
    return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
    const response = database.portfolios;
    return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
    const response = database.experience;
    return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
    const response = database.blogs;
    return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
    const response = database.contactInfo;
    return [200, response];
});