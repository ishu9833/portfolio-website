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
        catagory: ['node.js', 'react.js']

    },
    {
        name: 'Hard Rock Lyrics',
        image: hardRock,
        url: 'https://ishu9833.github.io/hard-rock/index.html#',
        catagory: ['html_css', 'vanila']
    },
    {
        name: 'Volunteer Website',
        image: volunteerSite,
        url: 'https://volunteer-network-auth-2fee8.firebaseapp.com/',
        catagory: ['html_css','node.js', 'react.js']
    },
    {
        name: 'Web portfolio',
        image: portfolio,
        url: 'http://suprateem.herokuapp.com/',
        catagory: ['react.js']
    },
    {
        name: 'E-commerce-site',
        image: eCommerce,
        url: '',
        catagory: ['react.js', 'Commerce.js']
    },
    // {
    //     name: 'Color Classification using tf.js',
    //     image: color_classification,
    //     url: '',
    //     catagory: ['node.js']
    // }
]
export default projects_store
