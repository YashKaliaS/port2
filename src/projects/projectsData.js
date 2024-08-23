import projectOne from "../assets/project-1-new.jpg";
import projectTwo from "../assets/project-2.jpg";
import projectThree from "../assets/project-3.jpg";

const projects = {
  1: {
    title: "TSP",
    image: projectTwo,
    description: (
      <>
        <p>
        Developed a multi-waypoint input feature, optimizing route calculations and reducing travel time by 40%, while
enhancing user experience with real-time visualizations using the Google Maps API.
• Implemented a dijkstra algorithm with a population size of 128, running 10,000 iterations with a 0.2 mutation rate,
to efficiently approximate optimal solutions. Users can customize algorithm parameters to meet specific needs.
       </p>
      </>
    ),
    github: "https://github.com/YashKaliaS/tsprpojyash",
    demo: "https://yashmarketingtsp.vercel.app/",
  },
  2: {
    title: "Task manager",
    image: projectOne,
    description: (
      <>
        <p> Optimized the Task Manager website used by over 200 employees at Talent Corner, achieving up to 98% perfor-
mance and a perfect 100% in best practices according to Lighthouse metrics.
• Implemented automated email alerts using Mailtrap and cron jobs, significantly improving company efficiency by
ensuring timely and reliable communication, resulting in a 40% reduction in response time and a 20% increase in
task completion rates.
• Mobile-Optimized the entire codebase of over 1,500 lines, ensuring the website is responsive across multiple devices.
        </p>
      </>
    ),
    github: "https://github.com/bankimtchr/talentcorner-taskmanager",
    demo: "https://talentcorner-taskmanager.vercel.app/",
  },
  3: {
    title: "Carrer Expo",
    image: projectThree,
    description: (
      <>
        <p>
        Uncover your hidden talents and strengths through our specially designed assessments. We provide a series of quizzes, aptitude tests, and personality assessments that will help you identify your innate abilities and passions.
         </p>
      </>
    ),
    github: "https://github.com/veerendra19codes/CareerExpo",
    demo: "https://careerexpo.netlify.app/",
  },
};

export default projects;
