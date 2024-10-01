import * as React from "react";
import { motion } from "framer-motion";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">Get to know more about me</h4>
          <div className="navigation-top__left--links" style={{display: 'flex', gap: '1rem'}}>
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
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/salvato_luiz"
              rel="noopener"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">Want to tell me something?</h4>
          <a
            href="mailto:salvatoluice5@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Let's talk about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">Featured Projects</h4>
        <div className="navigation-bottom__projects">
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
