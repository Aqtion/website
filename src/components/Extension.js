import {Helmet} from 'react-helmet'
import Achievement from "/Users/keshav/website/src/images/achievement.svg"
import Activity from "/Users/keshav/website/src/images/activity.svg"
import Projects from "/Users/keshav/website/src/images/projects.svg"

const awards = [
    {name: "Usaco Silver Division (Top 18%, '21)"},
    {name: "CyberPatriot Platinum Division (Top 120 HS in US, '20)"},
    {name: "AMC 10B Distinction (Top 5%, '22)"},
    {name: "American Invitational Mathematics Examination Qualifier ('22)"},
    {name: "High School Mathematical Contest in Modeling Finalist (Top 6%, Top 15 in US, '23)"},
    {name: "FRC Silicon Valley Regional Winner ('22)"},
    {name: "FRC World Championships Qualifier ('22)"},
    {name: "AP Scholar ('22)"}
]
const activities = [
    {name: "FRC 7419 Software Lead ('22-)"},
    {name: "InvenTeam Software Lead ('21-)"},
    {name: "QLS Competitive Programming Club Co-President ('21-)"},
    {name: "QLS Global Education Treasurer ('21-)"},
    {name: "QLS Science Olympiad Treasurer ('22-)"},
    {name: "QLS Science Bowl Team Co-Captain ('22-)"},
    {name: "QLS Science Bowl Club Co-Founder ('22-)"},
    {name: "QLS Varsity Soccer Co-Captain ('21-'22), Member ('22-)"}
]
const sections = [
    {name: "Accolades", image: Achievement, list: awards},
    {name: "Activities", image: Activity},
    {name: "Projects", image: Projects}
]

function Resume() {
    return (
        <div class = "text-center justify-center">
        <Helmet>
            <style>{'body { background-color: #010521; }'}</style>
        </Helmet>
        <p className="text-white text-4xl mb-5 font-bold">What I've Done</p>
            <div class = "">
                    <div
                    title="Accolades"
                    className="w-10 mx-auto flex items-center justify-center grid grid-rows-2 contents"
                    >
                        <p className="text-shiny text-2xl text-fun-gray font-bold mt-3 flex-1">
                            Accolades
                            <img  src={Achievement} class = "flex-1 inline hover:opacity-70 pl-2 pb-1 w-12 h-12"/>
                        </p>
                        <div>
                            {awards.map((award) => {
                                return (
                                    <p class = "text-white font-bold">{award.name}</p>
                                );
                            })}
                        </div>
                    </div>
            </div>
            <div class = "">
                    <div
                    title="Activities"
                    className="w-10 mx-auto flex items-center justify-center grid grid-rows-2 contents"
                    >
                        <p className="text-shiny text-2xl text-fun-gray font-bold mt-3 flex-1">
                            Activities
                            <img  src={Activity} class = "flex-1 inline hover:opacity-70 pl-2 pb-1 w-12 h-12"/>
                        </p>
                        <div>
                            {activities.map((activity) => {
                                return (
                                    <p class = "text-white font-bold">{activity.name}</p>
                                );
                            })}
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Resume;
