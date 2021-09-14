import React from "react";

// Components
import Layout from "../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Styles
import {
  title,
  buttonStyle,
  content,
  para,
  paraTitle,
  allPoints,
  allPointsHead,
  allPointsUl,
} from "../styles/AboutPage.module.scss";

const About = () => {
  return (
    <Layout>
      <AniLink
        className={buttonStyle}
        to="/"
        hex="#1d1d1d"
        duration={1}
        paintDrip
      >
        <button>Back To Home</button>
      </AniLink>
      <div className={title}>About Me</div>
      <hr />
      <div className={content}>
        <div className={para}>
          Hey! Welcome to my site! You are on the About Me page! I will tell you
          about myself and some of the stories related to technology and web
          development that happened with me. I find it pretty fun to read about
          people in Q&A style so this page will also be in Q&A style. All the
          questions/points are listed below if you want to skip to any. <br />{" "}
          PS: The{" "}
          <AniLink to="/blog" hex="#1d1d1d" duration={1} paintDrip>
            blogs
          </AniLink>{" "}
          section is exclusive to technology-related blogs.
        </div>
        <div className={allPoints}>
          <span className={allPointsHead}>Table of Contents: </span>
          <ul className={allPointsUl}>
            <li>
              <a href="#who-am-i">Who am I?</a>
            </li>
            <li>
              <a href="#how-i-got-into-programming">
                How I got into programming?
              </a>
            </li>
            <li>
              <a href="#how-i-got-into-web-development">
                How I got into web development?
              </a>
            </li>
            <li>
              <a href="#how-i-improved-my-web-development-skills">
                How I improved my web development skills?
              </a>
            </li>
          </ul>
        </div>
        <div className={paraTitle} id="who-am-i">
          <a href="#who-am-i">Who am I?</a>
        </div>
        <div className={para}>
          My name is <strong>Krish Garg</strong>. I am a learning developer from{" "}
          <strong>Jaipur</strong>, Rajasthan, India. I was born on{" "}
          <strong>6th March 2006</strong>.
        </div>
        <div className={paraTitle} id="how-i-got-into-programming">
          <a href="#how-i-got-into-programming">How I got into programming?</a>
        </div>
        <div className={para}>
          I got into programming through a very uncommon way (as far as I know).
          As you might know about Covid, my country went into lockdown for a
          long time. Additionally, the vaccine is yet to be given (as of writing
          this article) to children below 18 years of age so schools are closed
          for a very long time. When I am writing this, my school still hasn't
          opened fully. They are slowly switching back to offline mode, but
          still seems a bit unlikely to open anytime soon. So I have been at
          home for about 1.5 years now. I didn't want to waste my time by just
          watching youtube or just binge. Also as we were at home, I didn't
          really had to think about homework &#128540;. So when the lockdown
          started, I started using{" "}
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>{" "}
          a lot to communicate with my friends. For a few months, I was just
          using it to communicate with my friends but then I came to know about
          Discord Bots. Then I saw that Discord has a very extensive and complex{" "}
          <a
            href="https://discord.com/developers/docs/intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
          . Till then, I only knew about the basics in programming like if-else,
          loops, variables, etc. and I knew a little of both Python and
          Javascript. I have a <a href="#my-story-about-javascript">story</a> on
          the Javascript part which I will talk about in a different question.
          Then I got inspired by other's bots and wanted to make my own. I was
          more comfortable with python so I used{" "}
          <a
            href="https://discordpy.readthedocs.io/en/stable/"
            target="_blank"
            rel="noopener noreferrer"
          >
            discord.py
          </a>
          , a Discord API wrapper (Unfortunately, the author of that module has
          now closed the project). If I think now, me making a discord bot was
          the best decision yet. I learned so many things through that bot, like
          so many. When I started, I knew very little about python, but as I
          used more and more python, I researched more, and learned more. Now I
          think I can call myself intermediate+ in python. Thats how I {""}
          <a href="#my-story-about-javascript">actually</a> got into
          programming. The story continues in "
          <a href="#how-i-got-into-web-development">
            How I got into web development?
          </a>
          ".
        </div>

        <div className={paraTitle} id="how-i-got-into-web-development">
          <a href="#how-i-got-into-web-development">
            How I got into web development?
          </a>
        </div>
        <div className={para}>
          This paragraph continues the story from "
          <a href="#how-i-got-into-programming">How I got into programming?</a>"{" "}
          so I would recommend reading it before this as you might get confused.
          Then came a stage where I had to make a web dashboard for my discord
          bot but I was too scared as I had no experience in web development. I
          only knew html and some css. By some css I mean only some properties,
          I didn't knew how to actually use them to make a site. So I{" "}
          <a
            href="https://www.merriam-webster.com/dictionary/avert"
            target="_blank"
            rel="noopener noreferrer"
          >
            averted
          </a>{" "}
          from learning web-development for a long time. But then, I thought if
          I have to become a successful developer in the future, I will either
          have to learn science for AI and Machine Learning, or learn web
          development. After hearing the word 'science', it was pretty obvious
          for me that what I have to go for. Thats how I got into web
          development. The story continues in "
          <a href="#how-i-improved-my-web-development-skills">
            How I improved my web development skills?
          </a>
          ".
        </div>

        <div
          className={paraTitle}
          id="how-i-improved-my-web-development-skills"
        >
          <a href="#how-i-improved-my-web-development-skills">
            How I improved my web development skills?
          </a>
        </div>
        <div className={para}>
          This paragraph continues the story from "
          <a href="#how-i-got-into-web-development">
            How I got into web development?
          </a>
          " so I would recommend reading it before this as you might get
          confused. So I started looking for some web development guides and
          tutorials. Then I found out about the 3 big javascript frameworks,{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular
          </a>{" "}
          and{" "}
          <a
            href="https://v3.vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue
          </a>
          . As I said in the "
          <a href="#how-i-got-into-programming">How I got into programming?</a>"{" "}
          question, I learn on-the-go. So I continued with the javascript
          frameworks by only knowing some basics of javascript. I searched up
          some quick tutorials on youtube for all three frameworks. I tried out
          all of them, but felt most comfortable with React. I saw many react
          courses, but the one which got me hooked to it, was the one by{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code With Harry
          </a>
          . It is in hindi so if you don't speak/understand hindi, it might not
          be for you, but it is an excellent course. While I was watching his
          course, side-by-side, I was also sharpening my CSS and Javascript. For
          javascript, I did nothing but just look around for some people's
          projects and google anything which looked new to me. For CSS, mainly
          the inspiration and motivation to actually write my own css instead of
          using a pre-built stylesheet like{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default About;
