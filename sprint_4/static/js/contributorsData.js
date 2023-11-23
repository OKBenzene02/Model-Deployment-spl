// import Data from "./dataClass";

// =========================== Constructor Class for adding new data ====================================
class Data {
  constructor(
    id,
    name,
    summary,
    profilePic,
    linkedIn,
    gitHub,
    facebook,
    instagram,
    python,
    flask,
    html,
    css,
    js,
    reactjs,
    sql,
    cProgramming,
    cppProgramming,
    java
  ) {
    this.id = id;
    this.name = name;
    this.summary = summary;
    this.profilePic = profilePic;
    this.socialLinks = {
      linkedIn: linkedIn,
      gitHub: gitHub,
      facebook: facebook,
      instagram: instagram,
    };
    this.skills = {
      python: python,
      flask: flask,
      html: html,
      css: css,
      js: js,
      reactjs: reactjs,
      sql: sql,
      cProgramming: cProgramming,
      cppProgramming: cppProgramming,
      java: java,
    };
  }
}

// ========================================== Adding data by using the constructor ================================================

const contributorParentContainer = document.querySelector(
  ".contributors-parent-container"
);

const newContributor = new Data(
  1,
  "Shaik Mohammad Siddiq",
  "Experienced Data Scientist and Web Developer proficient in Python and JavaScript, showcasing skills through a one-month internship at Radix Educational Trust via Internshala. Specialized in real-time data analysis, adept at extracting meaningful insights for informed decision-making. Notable achievement includes securing 4th position nationwide in an AI and ML-focused hackathon organized by IIT Madras, demonstrating expertise in applying data science and machine learning concepts to solve Industry 4.0 challenges.",
  "../static/images/siddiq.jpg",
  "https://www.linkedin.com/in/shaik-mohammad-siddiq-58448322a/",
  "https://github.com/siddiq3004",
  "https://www.facebook.com/shaik.mohammadsiddiq.98",
  "https://instagram.com/its_siddiqshaik21",
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  false
);

const newContributor2 = new Data(
  1,
  "Liyakhat Yousuf Mogal",
  "I am currently pursuing B.Tech in Artificial Intelligence and Data Science, final year at B.S Abdur Rahman University, Chennai, IN and looking for an entry level Data Scientist role in a technology based organization. I have a strong mathematical background and hands-on experience with predictive modeling, data processing and mining algorithms to solve challenging business problems. Plus hands-on experience with web technologies like ReactJS and Flask.",
  "../static/images/liyakhat.jpg",
  "https://www.linkedin.com/in/liyakhat-yousuf-mogal-54b506221/",
  "https://github.com/OKBenzene02",
  "https://www.facebook.com/liyakhatyousufmogal",
  "https://www.instagram.com/liyakhat_yousuf/",
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  false
);

const contributorArray = [newContributor, newContributor2];

const contributorsList = contributorArray.map((contributor) => {
  return `<div class="contributors-container" id=${contributor.id}>
    <div class="skill-icons">
      <div class="icons">
        <img src="../static/images/python.svg" alt="python" class="${
          contributor.skills.python ? "" : "hidden"
        }"/>
        <img src="../static/images/flask.svg" alt="flask" class="${
          contributor.skills.flask ? "" : "hidden"
        }"/>
        <img src="../static/images/html.svg" alt="html" class="${
          contributor.skills.html ? "" : "hidden"
        }"/>
        <img src="../static/images/css.svg" alt="css" class="${
          contributor.skills.css ? "" : "hidden"
        }"/>
        <img src="../static/images/javascript.svg" alt="js" class="${
          contributor.skills.js ? "" : "hidden"
        }"/>
        <img src="../static/images/reactjs.svg" alt="reactjs" class="${
          contributor.skills.reactjs ? "" : "hidden"
        }"/>
        <img src="../static/images/sql.png" alt="sql" class="${
          contributor.skills.sql ? "" : "hidden"
        }"/>
        <img src="../static/images/cprog.svg" alt="c" class="${
          contributor.skills.cProgramming ? "" : "hidden"
        }"/>
        <img src="../static/images/cpp.svg" alt="cpp" class="${
          contributor.skills.cppProgramming ? "" : "hidden"
        }"/>
        <img src="../static/images/java.svg" alt="java" class="${
          contributor.skills.java ? "" : "hidden"
        }"/>
      </div>
    </div>
    <div class="contributors-content">
      <div class="profile-pic" style="background-image: url(${
        contributor.profilePic
      });">
      </div>
      <div class="content">
        <p class="contributor-name">${contributor.name}</p>
        <p class="summary">
          ${contributor.summary}
        </p>
        <div class="social-links">
          <span>Social Links</span>
          <a href=${contributor.socialLinks.linkedIn} target="_blank"
            ><img src="../static/images/linkedin.svg" alt="linked-in"
          /></a>
          <a href=${contributor.socialLinks.gitHub} target="_blank"
            ><img src="../static/images/github.svg" alt="github"
          /></a>
          <a href=${contributor.socialLinks.facebook} target="_blank"
            ><img src="../static/images/facebook.svg" alt="facebook"
          /></a>
          <a href=${contributor.socialLinks.instagram} target="_blank"
            ><img src="../static/images/instagram.svg" alt="instagram"
          /></a>
        </div>
      </div>
    </div>
  </div>`;
});
// console.log(contributorArray)
// console.log(contributorsList)
// console.log(contributorParentContainer)

contributorsList.forEach((contributor) => {
  contributorParentContainer.insertAdjacentHTML("beforeend", contributor);
  // console.log(contributor)
});
