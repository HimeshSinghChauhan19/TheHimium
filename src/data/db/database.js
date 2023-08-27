/* 
   This is a practice project, so I made some unnecessary parameters that are empty for now, but maybe later I am gonna add
   some details to them, I mean "MAYBE" a big one ;)
*/
const database = {
  information: {
    name: '',
    aboutContent1: "I am a computer science student and Chess Enthusiast.",
    aboutContent2: " I love working with languages like Python, C++ and JavaScript.",
    age: 20,
    language: '',
    email: '',
    freelanceStatus: '',
    socialLinks: {
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/himesh-singh-chauhan-34906a22a/',
      dribbble: '',
      github: 'https://github.com/HimeshSinghChauhan19'
    },
    brandImage: '/images/me.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: ''
  },
  services: [
    /* Currently this is not a priority, but later I am gonna add some stuff related to this */
    {
      title: "",
      icon: '',
      details: ""
    }
  ],
  skills: [
    {
      title: "C++",
      value: 90
    },
    {
      title: "Python 3",
      value: 90
    },
    {
      title: "C",
      value: 80
    },
    {
      title: "HTML/CSS",
      value: 75
    },
    {
      title: "JavaScript",
      value: 85
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "CSE-Data Science",
      subtitle: "The result in the form of a csv file.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: '/files/DataScience.csv'
    },
    {
      id: 2,
      title: "CSE-Business Studies",
      subtitle: "The result in the form of a csv file.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: '/files/CSBS.csv'
    },
    {
      id: 3,
      title: "CSE-AIML",
      subtitle: "The result in the form of a csv file.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '/files/AIML3RDSEM.csv'
    },
    {
      id: 4,
      title: "CSE-Internet Of Things",
      subtitle: "The result in the form of a csv file.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '/files/IOT.csv'
    },
    {
      id: 5,
      title: "CSE",
      subtitle: "The result in the form of a csv file.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '/files/CSE.csv'
    },
    {
      id: 6,
      title: "EC",
      subtitle: "The result in the form of a csv file.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '/files/EC3rdSem.csv'
    }
  ],
  experience: {
    // example for the format that if I will be adding later on so I can remember this format
    workingExperience: [
      {
        id: 1,
        year: " Present",
        position: "Blah blah",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2021 - 2025",
        graduation: "Bachelor of Technology in Computer Science",
        university: "GGITS Jabalpur",
        details: "Currently I am in Junior Year."
      },
      {
        id: 2,
        year: "2021 - 2020",
        graduation: "Senior Secondary Education",
        university: "Christ Church Boys' Senior Secondary School, Jabalpur",
        details: "I did my 11th and 12th from here."
      },
      {
        id: 3,
        year: "2019 - 2018",
        graduation: "Junior Secondary Education",
        university: "Christ Church School for Boys and Girls, ISC, Jabalpur",
        details: "I was here since my 2nd class uptill 10th."
      }
    ]
  },
  // Here Courses refers to the blogs that I write and are in my official blogPage at Blogger
  courses: [
    {
      id: 1,
      title: 'Dispatch Latency and Context Switching',
      featuredImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtC36dcSr6Rv0Odw7UWOZhlLyATx_NSDskrMIv4FQmy2rq59EKcLo0KBirh1Y1Bry6HBkZbsrNFl0z6u2WdFdj3FWafIxtCIzGoleXt9mjLwoTfz4aiMa1kRneFg0DJ_C3StKpDeSiOn5jLVAFqZ7RmRDyUa0d-jz6iGJb5g0_9eaW5K7O89psaw84MA/w576/OS1.jpg',
      filesource: 'https://stupendoushsc.blogspot.com/2023/04/dispatch-latency-and-context-switching.html',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Chef and Magic Jars',
      featuredImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhldYLcx06H6gymXseZ9NTuV5wrq6-WNvjveyT1wN0w7SCgTwEsDJjpMu5Dr1BE3pjP0vaF4tYKaeeI0AUbrw98aKI8dr4qO6OvvmeYb5p1Etp9qNCxTMx_riUoQCMfK78aXjjpGdLEEjfXaQ3vc--EXGKJEccCePV2D82yrUJGlt096SAb1sJ0ubTsUg/w576/Pablo.jpeg',
      filesource: 'https://stupendoushsc.blogspot.com/2023/03/chef-and-magic-jars.html',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'Distinct Dilemma',
      featuredImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5_lsAipLKgriPetPc200qRf5zKRuiIRRFm9e4S0XRBfw6PqInpn3lZMLi7vqTv9YbTMrS9syd8OahaW-2Gv6ML0itsfmSx8UFFvmiEVD-pgxVASv52dBeGWVRdBTHIxafSAaKW7mc-7bOpLZQcZFeZyYGza_ggGfpN_wKH9obIXTJ-CEKr0xWU62V2Q/w576/MM12.jpg',
      filesource: 'https://stupendoushsc.blogspot.com/2023/04/distinct-dilemma.htmlpython-development-visual-studio-code-setup-guide.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Chef And Gift',
      featuredImage: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit_D_jiSnfuabvpXRT9vMEwmu5TwIMj-rO169RguKugunFGjmWbmoahd4dk4wj6ZAoS24MYHxKbVaD23gAE1yP9UasoJWbxJvSKuW5JpXKlgCseesuamA7-X1uk8n0jFzihS6Rlk-nrMEq1zkUwNsq-CA6Mf5HeDoPIQyQU8vN52Mh-GfyVsiPoLW8kw/w576/lc1.jpg',
      filesource: 'https://stupendoushsc.blogspot.com/2023/03/chef-and-gift.html',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
  ],
  // currently not thinking of adding some contact information, cause really I don't have almost any social media despite linkedIn
  contactInfo: {
  }
}

export default database;