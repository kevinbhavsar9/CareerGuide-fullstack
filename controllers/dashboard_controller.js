const User = require('../models/users');

globalThis.student=11;
globalThis.mentor=11;

User.find({field:"student"},function(err,student){
    if(err){console.log('err while fetching data'); return}
    globalThis.student=student.length;

})
User.find({field:"mentor"},function(err,mentor){
    if(err){console.log('err while fetching data'); return}
    globalThis.mentor=mentor.length;

})

module.exports.webDev=function(req,res){
   
        return res.render('dashboard/dashboard',{
            title:'Dashboard',
            topic:"Web Development",
            one :"Web development is the building and maintenance of websites; it’s the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience. Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use depends on the types of tasks they are preforming and the platforms on which they are working.<a>",
            two :"Your work schedule is typically far from routine, because you’ll often be solving problems as they arise. Schedules and deadlines can however apply to big projects. Here is an example of a day in the life of a front-end web developer:",
            three :"Each element of a website is linked to something else, and it’s a complex job to build a website successfully. Depending on their specific jobs, web developers will be proficient in using various software programs (e.g. JavaScript frameworks, version control, CSS), and will have not only the specialized knowledge that characterizes their roles, but also an understanding of the process as a whole. Prior to starting out, it’s wise to get an understanding of the type of web development work that seems interesting—such as user interface design, mobile application development, or front-end development—to best set the stage for future education and training.",
            four :"Learn Web Development With Udemy At Your Own Pace. Start Today With a Special Discount. Join Millions of Learners From Around The World Already Learning On Udemy!",
            mentor_enrolled:globalThis.mentor,
            student_enrolled:globalThis.student,
            link1:"https://blog.openclassrooms.com/en/2018/03/28/web-development-definition/",
            link2:"https://www.oxbridgeacademy.edu.za/blog/day-life-web-developer/#:~:text=Your%20work%20schedule%20is%20typically,a%20front%2Dend%20web%20developer%3A&text=10h00%20%E2%80%93%20Time%20to%20refocus%20on,projects%20you're%20working%20on.",
            link3:"https://www.learnhowtobecome.org/computer-careers/web-development/",
            link4:"https://www.udemy.com/topic/web-development/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Branded-Topic_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_83677229721_._ad_390484959284_._kw_udemy%20web%20development_._de_c_._dm__._pl__._ti_kwd-487955235032_._li_1007753_._pd__._&matchtype=e&gclid=EAIaIQobChMIlcDVmpWL8AIVBxdgCh35Fgm6EAAYASAAEgLDWPD_BwE"
        })

   
   
}
module.exports.start=function(req,res){
    
    return res.render('dashboard/dashboard_start',{
        title:"Dashboard",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student
    })
   
}
module.exports.appDev=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"Andriod Development",
        one :"Android is a popular computing platform based on the Linux® operating system. The initial commercial version of Android hit the market in 2008 in the form of a mobile phone platform, back when the most popular cell phone for a business user was the BlackBerry, when the iPhone was beginning to make meaningful waves across all sectors, and when the majority of phone users were still tapping out texts from a flip phone.",
        two :"Android Developers collaborate with cross-functional teams to define, design, and ship new features. ... The best Android developers also spend some of their work time keeping up-to-date with the latest technology trends, as this will help them stay competitive in the market",
        three :"Android development can be done on a PC, Mac or even a Linux machine. More good news: all the tools you need to develop Android applications are free. First, download and install the latest version of Java SE from the Oracle website. Next, grab the Android SDK (Software Development Kit) from the Android Developers site. The SDK includes the Android code libraries, Android's emulator, and some useful command line tools for Android development.",
        four :"Due to its open-source nature, working with the Android platform necessitates constantly learning about the Android platform. Udemy’s Android development courses keep you ahead of this learning curve, with courses on Android operating systems and more.",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"https://developer.ibm.com/technologies/mobile/articles/os-android-devel/",
        link2:"https://www.udacity.com/blog/2020/05/becoming-an-android-developer-what-you-need-to-know.html#:~:text=A%20Day%20in%20the%20Life%20of%20an%20Android%20Developer&text=Android%20Developers%20collaborate%20with%20cross,design%2C%20and%20ship%20new%20features.&text=The%20best%20Android%20developers%20also,stay%20competitive%20in%20the%20market.",
        link3:"https://www.itcareerfinder.com/brain-food/blog/entry/how-to-become-an-android-application-developer.html",
        link4:"https://www.udemy.com/topic/Android-Development/?gclid=EAIaIQobChMIyoThtpaL8AIVQ05gCh2hIwN9EAAYAiAAEgLFo_D_BwE&matchtype=e&utm_campaign=LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=adwords&utm_term=_._ag_84769222008_._ad_387389170920_._kw_android%20development%20course_._de_c_._dm__._pl__._ti_kwd-317033051229_._li_1007753_._pd__._"
    })
}
module.exports.competitve=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"Competitive Programming",
        one :" If you are a programmer you might have understood the deep meaning of these lines quoted by Steve Jobs and you might have also experienced that even after shutting your computer you keep on thinking about programming stuff or code you have written in your project. Once you enter in programming you just don’t learn how to code but you also learn the “art of thinking”, by breaking your code into smaller chunks and then using your logic-based creativity to solve a problem from different angles.Programming is fun, programming is an exercise for your brain, programming is a mental sport and when this sport is held over the internet involving sport programmer as a contestant then it is called Competitive Programming.",
        two :"During the ACM ICPC, you must solve difficult tasks, which are not for ordinary programmers. While you are training, you learn how to solve these out of the ordinary tasks. This helps prepare you for a job because you can adapt and solve various types of problems, in various types of situations.",
        three :"Learn the Fundamentals of Data Structures and Algorithms: DSA is the heart of programming and you can not ignore it while solving coding problems in competitive programming. Array, Linked List, Stack, Queue, Tree, Trie, Graph, Sorting, Recursion, Dynamic Programming all these basic building blocks of DSA will help you to become a good programmer. The most important thing you need to know what, when and where to apply them. It means which data structure is suitable for what type of problem to get the optimal solution. You should know how to apply a perfect combination of both in the coding problem.",
        four :"C++ Foundation with Data Structures. JAVA Foundation with Data Structures. Interview Preparation Course. Competitive Programming Course. Python Foundation with Data Structures. Aptitude Preparation Course. Advanced Front-End Web Development with React. Machine Learning & Deep Learning Course.",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"https://www.geeksforgeeks.org/how-to-prepare-for-competitive-programming/",
        link2:"https://blog.edx.org/5-career-benefits-of-competitive-programming",
        link3:"https://www.geeksforgeeks.org/how-to-prepare-for-competitive-programming/",
        link4:"https://www.codingninjas.com/courses/online-competitive-programming-course"
    })
}
module.exports.ml=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"Machine Learning",
        one :"“Machine Learning is the science of getting computers to learn and act like humans do, and improve their learning over time in autonomous fashion, by feeding them data and information in the form of observations and real-world interactions.”",
        two :"And that was the beginning of Machine Learning. In modern times, Machine Learning is one of the most popular (if not the most!) career choices. According to Indeed, Machine Learning Engineer Is The Best Job of 2019 with a 344% growth and an average base salary of $146,085 per year.",
        three :"There are multiple languages which provide machine learning capabilities. Also, there is development work happening at a rapid pace across several languages. Currently “R” and “Python” are the most commonly used languages and there is enough support / community available for both. Before entering into world of ML, I would recommend you to choose one of these two language (R or Python) which can help to focus on machine learning",
        four :"Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it. ",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"https://emerj.com/ai-glossary-terms/what-is-machine-learning/",
        link2:"https://www.geeksforgeeks.org/top-career-paths-in-machine-learning/",
        link3:"https://www.analyticsvidhya.com/learning-path-learn-machine-learning/",
        link4:"https://www.coursera.org/learn/machine-learning"
    })
}
module.exports.data=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"Data Analytics",
        one :"aasasasa",
        two :"asasas",
        three :"asasas",
        four :"asasas",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"",
        link2:"",
        link3:"",
        link4:""
    })
}
module.exports.mba=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"MBA",
        one :"aasasasa",
        two :"asasas",
        three :"asasas",
        four :"asasas",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"",
        link2:"",
        link3:"",
        link4:""
    })
}
module.exports.finance=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"Finance",
        one :"aasasasa",
        two :"asasas",
        three :"asasas",
        four :"asasas",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"",
        link2:"",
        link3:"",
        link4:""
    })
}
module.exports.music=function(req,res){
    return res.render('dashboard/dashboard',{
        title:'Dashboard',
        topic:"Music",
        one :"aasasasa",
        two :"asasas",
        three :"asasas",
        four :"asasas",
        mentor_enrolled:globalThis.mentor,
        student_enrolled:globalThis.student,
        link1:"",
        link2:"",
        link3:"",
        link4:""
    })
}