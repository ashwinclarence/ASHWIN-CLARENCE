import './Portfolio.css'
import project1 from '../../assets/1.png'
import project2 from '../../assets/2.png'
import project3 from '../../assets/3.png'
import project4 from '../../assets/4.png'
import project5 from '../../assets/5.png'
import project6 from '../../assets/6.png'
import project7 from '../../assets/7.png'
import project8 from '../../assets/8.png'
function Portfolio() {
    let project = [
        {
            image: project1,
            about: "A Netflix Clone from scratch. It has basic layout and features similar to Netflix. Users can hover over different genres. This project is made using TMDB API.",
            projectLink: "https://ashwinclarence.github.io/Netflix_sample/"
        },
        {
            image: project2,
            about: "A portfolio is a compilation of academic and professional materials that exemplifies your beliefs, skills, qualifications, education, training, and experiences. It provides insight into your personality and work ethic.",
            projectLink: "https://ashwinclarence.github.io/Ashwin_Clarence/"
        },
        {
            image: project5,
            about: "This web application is created using JavaScript. It provides real-time information on various weather conditions by retrieving data from the OpenWeather API...",
            projectLink: "https://ashwinclarence.github.io/weather-app/"
        },
        {
            image: project8,
            about: "This project is an OLX clone app built using React, Firebase, and Firestore, and serves as a testament to my ability to develop sleek user interfaces",
            projectLink: ""
        },
        {
            image: project3,
            about: "A clone of the built-in iOS Calculator APP for all users",
            projectLink: "https://ashwinclarence.github.io/calculator/"
        },
        {
            image: project4,
            about: "What is a to-do list app for? To-do lists help you organize your work and keep track of tasks. A good digital to-do list makes it easier to get work done—and makes it harder to miss deadlines",
            projectLink: "https://ashwinclarence.github.io/ToDo/"
        },
        
        {
            image: project6,
            about: "Webpage for a label printing company with their product details in table format. Its a static webpage made with HTML, CSS and Javascipt",
            projectLink: "https://ashwinclarence.github.io/AlShula_priting/"
        },
        {
            image: project7,
            about: "Online voting with PEERVOTE is easy and accessible, particularly for young voters. Online voting can increase voter turnout in your university elections.",
            projectLink: ""
        },
       
    ]
    const nolinkinform=()=>{
        alert("This webpage is under construction")
    }
    return (
        <div className="portfolio-container container-fluid" id='portfolio'>
            <div className="portfolio-row row">
                <h3 className='sub-heading'>PORTFOLIO</h3>
                {
                    project.map((obj, index) => {
                        return (
                            <div className="portfolio-box col-md-3" key={index}>
                                <img src={obj.image} alt="" className='portfolio-img'/>
                              <div className="layer">
                                <p>{obj.about}</p>
                                {obj.projectLink!==""?<a href={obj.projectLink} target='_blank' rel='noreferrer'>  <i className="fa-solid fa-arrow-up-right-from-square"></i></a>:<p onClick={nolinkinform}>  <i className="fa-solid fa-arrow-up-right-from-square"></i></p>}
                              
                              </div>
                           
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
