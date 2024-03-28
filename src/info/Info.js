import self from "../img/self.jpeg"
import num from "../img/mock1.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kumar",
    lastName: "Mayuresh",
    initials: "mk",
    position: "a Front-End Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: "📧",
            text: "krmayur.mk@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/krmayur",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/krmayur",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/_kr_mayur_",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hey there! I'm Kumar Mayuresh, a funky fresher diving into the vibrant world of front-end development. With a knack for creating eye-catching interfaces and a passion for innovative design, I'm here to sprinkle some coding magic and bring your digital dreams to life! Let's craft something awesome together!",
    skills:
        {
            proficientWith: ['C','C++','JavaScript', 'ReactJS', 'Git', 'GitHub', 'BootStrap','TailWindCSS', 'Html5', 'CSS', 'Figma'],
            exposedTo: ['NodeJS', 'python','ExpressJS']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [
        {
            title: "Voice-Web",
            live: "https://mayuresh936.wixsite.com/voice-web", 
            source: "https://mayuresh936.wixsite.com/voice-web",
            image: num
        },
        {
            title: "Recipe-Finder",
            live: "https://recipefinderop.netlify.app/",
            source: "https://github.com/krmayur/Recipe-FInder",
            image: num
        },
        {
            title: "Snake-Game",
            live: "https://slitheringserpent.netlify.app/",
            source: "https://github.com/krmayur/Snake-Game.git",
            image: num
        },
    ]
}