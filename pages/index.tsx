import React, { useState } from "react";
import Head from "next/head";
import { Navigation } from "../components/Navigation/Navigation";
import useSwr from "swr";
import ReactGa from "react-ga";

interface indexProps {}

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const index: React.FC<indexProps> = ({}) => {
  const [speakerState, setSpeakerState] = useState("muted");
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);
  const { data: reviews, error } = useSwr("/api/tweets", fetcher);

  if (error) console.log(error);

  const refScroll = React.useRef(null);
  let lscroll: any;

  React.useEffect(() => {
    ReactGa.initialize("UA-177100391-3");
    ReactGa.pageview(window.location.pathname + window.location.search);

    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

    // header cursor
    // const cursor = document.querySelector(".cursor");
    // window.onmousemove = (e: any) => {
    //   cursor!.setAttribute("style", `top: ${e.pageY}px; left: ${e.pageX}px;`);
    // };

    console.clear();
    console.log.apply(console, [
      "%c Developed by Salvato Luis %c %c %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new position and join a team of amazing developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <link rel="icon" href="svg/favicon.ico" />
          <link href="" rel="canonical" />
          <meta name="theme-color" content="#10101A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
          />
          <title>Salvato</title>
          <meta
            name="description"
            content="I'm a certified software developer, turning ideas into real life products is what I like to do."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Salvato Luis"
          />
          <meta property="og:url" content="https://salvatoluiz.netlify.app/" />
          {/* <meta property="og:image" content="webp/preview-image.png" /> */}
          <meta
            property="og:description"
            content="I'm a certified software developer, turning ideas into real life products is what I like to do."
          />
          <meta
            name="twitter:title"
            content="Salvato Luis  &mdash; Frontend web developer"
          />
          <meta
            name="twitter:description"
            content="I'm a certified software developer, turning ideas into real life products is what I like to do."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://adeolaadeoti.xyz/" />
        </Head>
        <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
          <source src="sound/preloader.mp3" type="audio/mp3" />
        </audio>
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>Transforming concepts into </span> <br />
                <span>living, breathing </span>
                <span className="header__hero--heading-gradient">
                  digital masterpieces{" "}
                </span>
                <br />
                <span>is my passion and expertise.</span>
              </div>
              <a
                data-scroll-to
                className="header__hero--cta"
                href="#sectionProjects"
              >
                Projects I've done
              </a>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
              <div className="speaker">
                <div
                  onClick={handleSpeaker}
                  className={`${"speaker__toggle"} ${
                    speakerState === "unmuted"
                      ? `${"speaker__toggle--anim"}`
                      : ``
                  }`}
                >
                  &nbsp;
                </div>
                <div className="speaker__muted">
                  <img src="svg/muted.svg" alt="muted icon" />
                </div>
                <div className="speaker__unmuted">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.599976"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect1-anim"
                    />
                    <rect
                      x="9"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect2-anim"
                    />
                    <rect
                      x="4.79999"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect3-anim"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="header__footer--right">
              <a
                href="https://github.com/salvatoluice"
                rel="noopener"
                target="_blank"
              >
               Github
              </a>
              <a
                href="https://twitter.com/LuiceSalvato"
                rel="noopener"
                target="_blank"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/salvato-luis"
                rel="noopener"
                target="_blank"
              >
               Linkedin
              </a>
            </div>
          </div>
        </div>
        <main className="container">
          <p className="about-text">
            Hey there! I'm Salvato, a tech enthusiast and full-stack web architect. <br />
            I thrive on creating seamless digital experiences, from <span className="about-text-accent">front-end magic</span> that captivates users,
            to robust <span className="about-text-accent">back-end solutions</span> that power the web's heartbeat. <br />
            Let's turn your ideas into a<span className="about-text-accent"> complete web symphony</span>!
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
                <span>Elevating every project with smart solutions and meticulous attention to detail </span>
              </h1>
              <p className="paragraph">
                Embarking on a journey of accomplishments, each project is a proud milestone in my pursuit of excellence!
              </p>
            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  React JS, Node.js, CSS3, ExpressJS & MongoDB
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image address" />
                <img src="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Alt Logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="alexxandria-anim"
                  className="heading-2"
                >
                  Naswasoko
                  <br />
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://naswasoko.co.ke"
                  className="project-card__link"
                >
                  Link
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/salvatoluice/"
                  >
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  React JS, Node.js, ExpressJS & MongoDB
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="https://images.unsplash.com/photo-1499062918700-389fa905494e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image address" />
                <img src="https://images.unsplash.com/photo-1573451444472-7b0b275ab824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Alt Logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="alexxandria-anim"
                  className="heading-2"
                >
                  Discoun3
                  <br />
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://disoun3.com/"
                  className="project-card__link"
                >
                  Link
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/salvatoluice/"
                  >
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">React Js, Firebase, Redux, CSS3</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="https://images.unsplash.com/photo-1592637290945-0f550f0d6b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="nairobi" />
                <img src="https://images.unsplash.com/photo-1608790039230-6121188d1280?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="nairobi logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="safarika-anim"
                  className="heading-2"
                >
                  Freshcuts
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://freshcutsfoundation.org/"
                  className="project-card__link"
                >
                  Link
                </a>
                <div className="project-card__socials">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://github.com/salvatoluice/Nairobi-Carz/"
                  >
                    <img src="svg/github.svg" alt="github icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>Curious to discover the buzz about me?</span>
              </h1>
              <p className="paragraph paragraph__sub">
                Dive into what others are saying about my passion and expertise.
              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {reviews?.data.map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-reviews__bottom-wrapper review-card__anim2">
                {reviews?.data.sort().map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-contact">
            <h1 className="heading-1">
              <span>Hired Yet? </span>
            </h1>
            <h2 className="section-contact__h2">
              Thanks for dropping by! While I'm not actively on the job market, I'm always excited to explore new projects and discuss potential collaborations that can turn your ideas into digital success stories. With a fervor for software development, I'm eager to join forces with skilled teams to craft innovative solutions that tackle challenges and elevate user experiences on the web. Whether you have a specific project in mind or just want to connect, don't hesitate to give me a <a href="tel:+254113794219">call</a> or shoot me an <a href="mailto:salvatoluice5@gmail.com" rel="noopener" target="_blank">email</a>. Let's have a chat and discover the possibilities of working together!
            </h2>
          </section>
          <section className="section-socials">
            <h1 className="heading-1">
              <span>Wanna know me more?</span>
            </h1>
            <p className="paragraph">Let's connect here</p>
            <div className="section-socials--links">
              <a
                href="https://github.com/salvatoluice"
                rel="noopener"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/LuiceSalvato"
                rel="noopener"
                target="_blank"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/salvato-luis"
                rel="noopener"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p className="paragraph">&copy;2024 Salvato Luis. All Rights Reserved.</p>
          <div className="footer__socials">
            <a
              href="https://github.com/salvatoluice"
              target="_blank"
              rel="noopener"
            >
              {/* <p className="paragraph">Developed with love by Dev. Salvato</p> */}
              <img src="svg/github.svg" alt="github logo" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
