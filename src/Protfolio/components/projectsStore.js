import creativeAgency from '../projects_images/creativeAgency.PNG'
import hardRock from '../projects_images/hardRock.PNG'
import volunteerSite from '../projects_images/volunteerSite.PNG'
import portfolio from '../projects_images/portfol.PNG'
import eCommerce from '../projects_images/E-commerce.png'
// import color_classification from '../projects_images/color_classification.JPG'

var projects_store = [
    {
        name: 'Creative Agency',
        image: creativeAgency,
        url: 'https://creative-agency-12a8b.web.app/',
        gitUrl:'https://github.com/ishu9833/creative-agency-front',
        catagory: ['node.js', 'react.js', 'firebase'],
        description: 'In this fullstack project user can interact with admin for order website design and so on. Admin can get all the massages from user also.'

    },
    {
        name: 'Hard Rock Lyrics',
        image: hardRock,
        url: 'https://ishu9833.github.io/hard-rock/index.html#',
        gitUrl:'https://github.com/ishu9833/hard-rock',
        catagory: ['html_css', 'vanila' ],
        description: 'In this project you can get the music lyrics you want. i use vanila javascript, html and css.'
    },
    {
        name: 'Volunteer Website',
        image: volunteerSite,
        url: 'https://volunteer-network-auth-2fee8.firebaseapp.com/',
        gitUrl:'https://github.com/ishu9833/volunteer-network-site',
        catagory: ['html_css','node.js', 'react.js',  'firebase'],
        description: 'In this fullstack project volunteers can participate their own chosen work. Admin can interact with volunteers and add new work for volunteers.'
    },
    {
        name: 'Web portfolio',
        image: portfolio,
        url: '',
        gitUrl:'https://github.com/ishu9833/portfolio-website',
        catagory: ['react.js'],
        description: 'In this you can get all information about me. I use here react js and bootstrap, css for design.'
    },
    {
        name: 'E-commerce-site',
        image: eCommerce,
        url: '',
        gitUrl: '',
        catagory: ['react.js', 'Commerce.js'],
        description: 'In this project customer can buy any product and payment throw credit card. For getting and making API I use here Commerce js . react js and material UI for design.'
    },
    // {
    //     name: 'Color Classification using tf.js',
    //     image: color_classification,
    //     url: '',
    //     catagory: ['node.js']
    // }
]
export default projects_store
