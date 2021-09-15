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
    <Layout title="About">
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
          questions/points are listed below if you want to skip to any.
          <br />
          <br />
          Update: I am typing this after I have typed the first 4 answers, and
          this page is like a "Diary Entry" like we write (or wrote if you an
          adult) in schools, so it is pretty interesting to read in my opinion.
          <br />
          <br />
          Note: The{" "}
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
            <li>
              <a href="#how-am-i-gonna-further-improve">
                How am I gonna further improve?
              </a>
            </li>
            <li>
              <a href="#the-small-story">The Small Story</a>
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
          Javascript. I have a <a href="#the-small-story">story</a> on the
          Javascript part which I will talk about in a different question. Then
          I got inspired by other's bots and wanted to make my own. I was more
          comfortable with python so I used{" "}
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
          <a href="#the-small-story">actually</a> got into programming. The
          story continues in "
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
          only knew HTML and some CSS. By some CSS I mean only some properties,
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
          tutorials. Then I found out about the 3 big Javascript frameworks,{" "}
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
          question, I learn on-the-go. So I continued with the Javascript
          frameworks by only knowing some basics of Javascript. I searched up
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
          Javascript, I did nothing but just look around for some people's
          projects and google anything which looked new to me. For CSS, mainly
          the inspiration and motivation to actually write my own CSS instead of
          using a pre-built stylesheet like{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>
          , came from{" "}
          <a
            href="https://www.kevinpowell.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kewin Powell
          </a>{" "}
          and{" "}
          <a
            href="https://www.youtube.com/c/WebDevSimplified"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Dev Simplified
          </a>
          . Some honourable mentions to{" "}
          <a
            href="https://www.youtube.com/c/BenAwad97"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ben Awad
          </a>
          ,{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Code Camp
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/c/Fireship"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fireship
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/c/KeepOnCoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            KeepOnCoding
          </a>
          ,{" "}
          <a
            href="https://stackoverflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            StackOverflow
          </a>
          ,{" "}
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3Schools
          </a>{" "}
          and of course{" "}
          <a
            href="https://www.google.co.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>
          . Once I got a bit more comfortable with React, I learned{" "}
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          , which I am using right now to make this site, and{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          . I call these "Extended React Frameworks". So this is where I am
          right now, learning web development.
        </div>
        <div className={paraTitle} id="how-am-i-gonna-further-improve">
          <a href="#how-am-i-gonna-further-improve">
            How am I gonna further improve?
          </a>
        </div>
        <div className={para}>
          Just like everyone, I am not 100% sure how am I gonna improve. What I
          think should be my priority is just make more and more sites. I was
          thinking maybe I can try freelancing but it is crazy hard and may even
          be impossible to freelance when you are 15 years old in India. Other
          than that I think I would try some sites which give front end
          challenges to strengthen my skills with raw Javascript and CSS. Also
          as I want to end up as a full-stack developer, I will have to make
          projects with both front-end and back-end, so I will probably go with
          the{" "}
          <a
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN stack
          </a>{" "}
          or{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          . And whenever I would want to practice just front-end, I will
          probably stay away from{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          at the beginning as it would be harder to port back to simple
          Javascript and even harder to switch to other frameworks in the future
          as there is a high chance that I learn{" "}
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular
          </a>{" "}
          (I don't think I will try{" "}
          <a
            href="https://v3.vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vue
          </a>{" "}
          as I just don't get the vibe from it).
          <br />
          So in brief, for just front-end, I would try to make things in raw
          HTML, CSS and Javascript and only after I strengthen them, I will try
          more of{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          and maybe{" "}
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular
          </a>{" "}
          in the future. For just back-end, I have no idea on what I can do. And
          for full stack, I will try to make more projects of the{" "}
          <a
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
            rel="noopener noreferrer"
          >
            MERN stack
          </a>{" "}
          or{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          and maybe{" "}
          <a
            href="https://www.mongodb.com/mean-stack"
            target="_blank"
            rel="noopener noreferrer"
          >
            MEAN stack
          </a>{" "}
          if I learn{" "}
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular
          </a>
          .
        </div>
        <div className={paraTitle} id="the-small-story">
          <a href="#the-small-story">The Small Story</a>
        </div>
        <div className={para}>Soon™</div>
      </div>
    </Layout>
  );
};

export default About;
