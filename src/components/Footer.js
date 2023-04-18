import Linkedin from "/Users/keshav/website/src/images/linkedin.svg"
import Github from "/Users/keshav/website/src/images/github.svg"
import Codeforces from "/Users/keshav/website/src/images/codeforces.svg"
import Spotify from "/Users/keshav/website/src/images/spotify.svg"

function Footer() {
  return (
    
    <footer class="rounded-lg border-2 border-slate-500 background-color: #010521">
    <div
      class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
    > 
        <ul class="flex grid-cols-1 gap-6 mt-8 sm:mt-0 justify-end">
        <li class = "justify-start">
        <p class = "text-white font-bold">Socials</p>
        </li>
          <li class = "justify-end">
            <a
              href="https://github.com/Aqtion"
              target = "_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">GitHub</span>
            <img src={Github} class = "w-6 h-6"></img>
            </a>
          </li>
          <li class = "justify-end">
            <a
              href="https://www.linkedin.com/in/keshav-badrinath-92ab47219/"
              target = "_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Linkedin</span>
  
              <img src={Linkedin} alt="Your SVG" class = "w-6 h-6"/>
            </a>
          </li>
          {/* <li>
            <a
              href="https://devfolio.co/@aqtion"
              target = "_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Devfolio</span>
  
              <img src="https://raw.githubusercontent.com/devfolioco/brand-assets/main/Logo/Logo.svg" alt="Your SVG" class = "w-6 h-6"/>
            </a>
          </li> */}
          <li>
            <a
              href="https://codeforces.com/profile/kbadrinath"
              target = "_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Codeforces</span>
  
              <img src={Codeforces} alt="Your SVG" class = "w-6 h-6"/>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/cvxdtaqyixs95bknsb0bq8pd7"
              target = "_blank"
              class="text-gray-700 transition hover:opacity-75"
            >
              <span class="sr-only">Spotify</span>
  
              <img src={Spotify} alt="Your SVG" class = "w-6 h-6"/>
            </a>
          </li>
          

        </ul>
      </div>
  </footer>
  

  )
}

export default Footer;