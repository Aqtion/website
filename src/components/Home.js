import {Helmet} from 'react-helmet'
import Soccer from "/Users/keshav/website/src/images/soccer.svg"
import Bike from "/Users/keshav/website/src/images/bike.svg"
import Physics from "/Users/keshav/website/src/images/physics.svg"
import Math from "/Users/keshav/website/src/images/math1.svg"
import Robotics from "/Users/keshav/website/src/images/7419.png"
import Books from "/Users/keshav/website/src/images/books.png"
import Inventeam from "/Users/keshav/website/src/images/inventeam.png"
import Mindful from "/Users/keshav/website/src/images/mindful.png"


const info = [
    {name: "Java", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"},
    {name: "Python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    {name: "C++", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg"},
    {name: "R", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg"},
    {name: "HTML", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    {name: "Tailwind", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},
    {name: "Javacsript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    {name: "React", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {name: "Arduino", link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"},
    {name: "Visual Studio Code", link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},
    {name: "R Studio", link:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg"}
]
const hobbies = [
  {name: Soccer, desc: "Soccer"},
  {name: Bike, desc: "Biking"},
  {name: Physics, desc: "Physics"},
  {name: Math, desc: "Math"}
]

function Home() {
    return(
        <div
        className=" relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1">
          <Helmet>
                <style>{'body { background-color: #010521; }'}</style>
            </Helmet>
        <p className="text-white text-4xl mb-5 font-bold">Hey, I'm Keshav. 👋</p>
        <h2 className="text-white inline-block max-w-2xl mb-14 w-auto relative text-5xl md:text-5xl lg:text-6xl font-bold">
        I love  <span class="text-shiny">coding</span>, among many other things.
        </h2>
        <h3 className="text-white inline-block max-w-xl  w-auto relative text-2xl md:text-5xl lg:text-3xl mb-10 font-bold">
            Here are some languages I've picked up along the way, as well as IDEs I use.
        </h3>
        <div className="mb-10 relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
        {info.map((item) => {
          return (
            <div
              title={item.name}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img  src={item.link} />
              <p className="text-white text-xs font-bold mt-3">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>  
      <h3 className="text-white inline-block max-w-xl w-auto relative text-2xl md:text-5xl lg:text-3xl mb-10 font-bold">
            I don't just love coding though. Here are some other <span class = "text-shiny">things</span> I enjoy.
        </h3>
        <div className="mb-10 relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-4 items-center place-content-center">
        {hobbies.map((item) => {
          return (
            <div
              title={item.name}
              className="w-10 mx-auto flex items-center flex-col justify-center"
            >
              <img  src={item.name} />
              <p className = "text-white text-m font-bold">{item.desc}</p>
            </div>
          );
        })}
      </div>  
       <h3 className="text-white inline-block max-w-xl w-auto relative text-2xl md:text-5xl lg:text-3xl mb-10 font-bold">
            Some projects I've worked on.
        </h3>
    <div className="grid grid-rows-1 md:grid-cols-4 space-x-4">
    <div class="background-color: #010521 max-w-sm border border-gray-200 rounded-lg shadow dark:border-blue-700">
        <a href="https://github.com/frc-7419/ChargedUp2023" target = "_blank">
        </a>
        <div class="p-5">
            <a href="https://github.com/frc-7419/ChargedUp2023" target = "_blank">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FRC 7419 Software</h5>
            </a>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lead programmer for my school's robotics team. Linked is our code for the 2023 Charged Up Season.</p> */}
            <a href="https://github.com/frc-7419/ChargedUp2023" target = "_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Github
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
        </div>    
        <div class="ml-4 pb-2">
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">Java</span>
        </div> 
         </div>
        <div class="background-color: #010521 max-w-sm border border-gray-200 rounded-lg shadow dark:border-blue-700">
        <a href="https://github.com/StephenXie/Textbook" target = "_blank">
        </a>
          <div class="p-5">
                <a href="https://github.com/StephenXie/Textbook" target = "_blank">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cougar Books</h5>
                </a>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Co-developed a web textbook marketplace with my friend to facilitate textbook purchasing and selling within our school.</p> */}
                <a href="https://github.com/StephenXie/Textbook" target = "_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Github
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
          </div>
          <div class="ml-6 px-6 pb-2">
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">Next.js</span>
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">Tailwind</span>
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">Firebase</span>
  </div>
 
          </div>
          <div class="background-color: #010521 max-w-sm border border-gray-200 rounded-lg shadow dark:border-blue-700">
        <a href="https://github.com/QLSInvenTeam/Inventeams" target = "_blank">
        </a>
          <div class="p-5">
                <a href="https://github.com/QLSInvenTeam/Inventeams" target = "_blank">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">InvenTeam</h5>
                </a>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Software lead for my school's InvenTeam, a team funded by the Lemelson-MIT grant. We are creating a novel device so referees can send tactile signals to deaf athletes to streamline game experience.</p> */}
                <a href="https://github.com/QLSInvenTeam/Inventeams" target = "_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Github
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
          </div>
          <div class="ml-3.5 pb-2">
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">C++</span>
        </div>
          </div>
          <div class="background-color: #010521 max-w-l border border-gray-200 rounded-lg shadow dark:border-blue-700">
        <a href="https://www.youtube.com/watch?v=LOgWsMCBLMo" target = "_blank">
        </a>
          <div class="p-5">
                <a href="https://www.youtube.com/watch?v=LOgWsMCBLMo" target = "_blank">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mindful</h5>
                </a>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Co-developed mental health welfare web application. The application makes use of a sentiment composition deriving machine learning model to analyze daily journals inputted by the user, plot graphs of prominent emotions over time, and provide welfullness tasks for the user to complete.</p> */}
                <a href="https://www.youtube.com/watch?v=LOgWsMCBLMo" target = "_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Video Link
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
          </div>
        


          <div class="pb-2">
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">Python</span>
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">React</span>
          <span class="inline-block font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 text-sm font-semibold mr-4 mb-2 hover:bg-sky-700">SQL</span>
  </div>
          </div>
          </div>

</div>
        

    )
}
export default Home;