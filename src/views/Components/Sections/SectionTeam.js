import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Parallax, Background } from "react-parallax";
import { isMobile } from "react-device-detect";
import { Link, animateScroll as scroll } from "react-scroll";
import DelayLink from "react-delay-link";

import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Paper from "@material-ui/core/Paper";

import antariksh from "assets/img/image/teams/team20/antariksh.webp";
import aishanya from "assets/img/image/teams/team20/aishanya.webp";
import prateek from "assets/img/image/teams/team20/prateek.webp";
import anurup from "assets/img/image/teams/team20/anurup.webp";
import jordan from "assets/img/image/teams/team20/jordan.webp";
import mayur from "assets/img/image/teams/team20/mayur.webp";
import anirudh from "assets/img/image/teams/team20/anirudh.webp";
import vishal from "assets/img/image/teams/team20/vishal.webp";
import pawan from "assets/img/image/teams/team20/pawan.webp";


import bgImage from "assets/img/sign.jpg";
import bgImageMob from "assets/img/Team.jpg";
import Arrowd from "@material-ui/icons/ArrowDropDown";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    zIndex: "10",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    // fontFamily: 'gotham',
    fontWeight: "600",
    textStrokeColor: "#fff",
    textFillColor: "transparent",
  },
  content: {
    display: "flex",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imag: {
    borderRadius: "50%",
    objectFit: "cover",
    zIndex: "100",
  },
  Status: {
    color: "#f5f3f0",
    zIndex: "100",
  },
  iconTray: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: "100",
  },
  icon: {
    color: "white",
    opacity: "0.5",
  },
  cover: {
    position: "absolute",
    zIndex: "10",
  },

  downvote: {
    height: "5vh",
    width: "100%",
    zIndex: "10000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: "0.4",
    transition: "250ms ease-in-out",
    "&:hover": {
      opacity: "0.7",
    },
  },
  arrow: {
    width: "100px",
    height: "100px",
    transition: "1s",
    color: "#fff",
    opacity: "0.3",
  },

  "@media (min-width: 800px)": {
    container: {
      height: "120vh",
      marginBottom: "20vh"
    },
    title: {
      fontSize: "6vw",
      textStrokeWidth: "3px",
      marginTop: "2vh",
    },
    content: {
      flexWrap: "wrap",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-around",
    },
    box: {
      height: "42vh",
      width: "17vw",
    },
    break: {
      flexBasis: "100%",
      height: "5vh",
    },
    imag: {
      marginTop: "25px",
      height: "20vh",
      width: "10vw",
    },
    cover: {
      height: "40vh",
      width: "16vw",
      filter: "blur(5px)",
      clipPath: "polygon(0 0, 100% 0%, 100% 64%, 50% 40%, 0 64%)",
    },
    Button: {
      backgroundColor: "rgba(0,0,0,0.4)",
      width: "15vw",
      height: "5em",
      color: "white",
      transition: "200ms ease-in-out",
      "&:hover": {
        backgroundColor: "#fff",
        opacity: "0.5",
        color: "black",
      },
    },
  },

  "@media (max-width: 800px)": {
    container: {
      height: "540vh",
      flexDirection: "column",
    },
    title: {
      fontSize: "20vw",
      textStrokeWidth: "2px",
      margin: "5vh 0 5vh 0",
    },
    // content: {
    //   flexWrap: 'wrap',
    //   height: '100%',
    //   flexDirection: 'column',
    //   alignItems: 'space-around',
    //   justifyContent: 'center'
    // },
    box: {
      height: "50vh",
      width: "80vw",
    },
    imag: {
      marginTop: "25px",
      height: "30vh",
      width: "65vw",
    },
    cover: {
      height: "50vh",
      width: "80vw",
      filter: "blur(3px)",
      clipPath: "polygon(0 0, 100% 0%, 100% 64%, 50% 40%, 0 64%)",
    },
    Button: {
      backgroundColor: "rgba(0,0,0,0.8)",
      width: "70vw",
      height: "5em",
      color: "white",
      transition: "200ms ease-in-out",
      "&:hover": {
        backgroundColor: "#fff",
        opacity: "0.5",
        color: "black",
      },
    },
  },
});

const images = [
  {
    name: "Antariksh Ray",
    designation: "Team Lead",
    image: antariksh,
    instagram: "https://www.instagram.com/abey_o.o/",
    linkedIn: "https://www.linkedin.com/in/antarikshray/",
    twitter: "https://twitter.com/dev_inator",
    facebook: "https://www.facebook.com/profile.php?id=100008364184090",
  },
  {
    name: "Aishanya Shanvi",
    designation: "Team Manager",
    image: aishanya,
    instagram: "https://www.instagram.com/_.aishanya_/",
    linkedIn: "https://www.linkedin.com/in/aishanya-shanvi/",
    twitter: "https://twitter.com/AishanyaShanvi",
    facebook: "",
  },
  {
    name: "Prateek",
    designation: "Developer's Lead",
    image: prateek,
    instagram: "https://www.instagram.com/kaistha.prateek03/",
    linkedIn: "https://www.linkedin.com/in/prateek-kaistha-35122416b/",
    twitter: "",
    facebook: "https://www.facebook.com/prateek.kaistha",
  },
  {
    name: "Anurup Mohanty",
    designation: "Science Lead",
    image: anurup,
    instagram: "https://www.instagram.com/strayologist/",
    linkedIn: "https://www.linkedin.com/in/strayologist/",
    twitter: "https://twitter.com/strayologist",
    facebook: "https://www.facebook.com/strayologist",
  },
  {
    name: "Mayur Bhosale",
    designation: "Mechanical Lead",
    image: mayur,
    instagram: "https://www.instagram.com/__believer__kid/",
    linkedIn: "https://www.linkedin.com/in/mayurbhosale111/",
    twitter: "",
    facebook: "https://www.facebook.com/profile.php?id=100004421263735",
  },
  {
    name: "Anirudh P",
    designation: "Autonomous Lead",
    image: anirudh,
    instagram: "",
    linkedIn: "https://www.linkedin.com/in/anirudh-penmatcha-b21582192/",
    twitter: "https://twitter.com/LekhaKarthikey1",
    facebook: "https://www.facebook.com/anirudh.penmatcha",
  },
  {
    name: "Jordan Fernandes",
    designation: "Instrumentation Lead",
    image: jordan,
    instagram: "https://www.instagram.com/j.fernandosaurus/",
    linkedIn: "https://www.linkedin.com/in/jordanfdes/",
    twitter: "https://twitter.com/jfernandosaurus",
    facebook: "",
  },
  {
    name: "Pawan Wadhwani",
    designation: "Technical Director",
    image: pawan,
    instagram: "https://www.instagram.com/pawan_w_/",
    linkedIn: "https://www.linkedin.com/in/pawan-wadhwani/",
    twitter: "",
    facebook: "https://www.facebook.com/pawan.wadhwani.73",
  },
  {
    name: "Vishal Natraj",
    designation: "Research Lead",
    image: vishal,
    instagram: "https://www.instagram.com/vizzz_11/",
    linkedIn: "https://www.linkedin.com/in/vishal-natraj-b77223146/",
    twitter: "https://twitter.com/vishal_nat",
    facebook: "",
  },
];

var bgImageRender = () => {
  if (isMobile) return bgImageMob;

  return bgImage;
};

export default function FullWidthGrid() {
  const classes = useStyles();

  const breakRender = (index) => {
    if (!isMobile) {
      if (index == 4) {
        return <div className={classes.break}></div>;
      }
    }
  };

  const instaLink = (profile) => {
    if (profile.instagram) {
      return (
        <a href={profile.instagram}>
          <InstagramIcon className={classes.icon} fontSize="large" />
        </a>
      );
    }
  };
  const twitterLink = (profile) => {
    if (profile.twitter) {
      return (
        <a href={profile.twitter}>
          <TwitterIcon className={classes.icon} fontSize="large" />
        </a>
      );
    }
  };
  const facebookLink = (profile) => {
    if (profile.facebook) {
      return (
        <a href={profile.facebook}>
          <FacebookIcon className={classes.icon} fontSize="large" />
        </a>
      );
    }
  };
  const linkedInLink = (profile) => {
    if (profile.linkedIn) {
      return (
        <a href={profile.linkedIn}>
          <LinkedInIcon className={classes.icon} fontSize="large" />
        </a>
      );
    }
  };

  const contentRender = () => {
    return images.map((profile, index) => (
      <React.Fragment>
        <Paper elevation={24} className={classes.box}>
          <img className={classes.cover} src={profile.image}></img>
          <img
            className={classes.imag}
            alt={profile.name}
            src={profile.image}
          />
          <h3 className={classes.Status}> {profile.name}</h3>
          <div className={classes.iconTray}>
            {instaLink(profile)}
            {linkedInLink(profile)}
            {facebookLink(profile)}
            {twitterLink(profile)}
          </div>
          <h5 className={classes.Status}> {profile.designation}</h5>
        </Paper>
        {breakRender(index)}
      </React.Fragment>
    ));
  };

  const renderMain = () => {
    if (isMobile) {
      return (
        <React.Fragment>
          {contentRender()}
          <DelayLink
            delay={1800}
            to="/team-page"
            clickAction={() => {
              document.getElementById("load1").style.width = "50vw";
              document.getElementById("load2").style.height = "120vh";
              setTimeout(function() {
                document.getElementById("load3").style.height = "120vh";
              }, 500);
            }}
          >
            <Button className={classes.Button} size="large">
              TEAM HISTORY
            </Button>
          </DelayLink>
        </React.Fragment>
      );
    }
    return (
      <div className={classes.content}>
        {contentRender()}
        <DelayLink
          delay={1800}
          to="/team-page"
          clickAction={() => {
            document.getElementById("load1").style.width = "50vw";
            document.getElementById("load2").style.height = "120vh";
            setTimeout(function() {
              document.getElementById("load3").style.height = "120vh";
            }, 500);
          }}
        >
          <Button className={classes.Button} size="large">
            TEAM HISTORY
          </Button>
        </DelayLink>
      </div>
    );
  };

  return (
    <Parallax
      blur={{ min: -10, max: 20 }}
      bgImage={bgImageRender()}
      bgImageAlt="the cat"
      strength={1000}
      className={classes.forMob}
    >
      <div className={classes.container}>
        <div className={classes.title}>Team</div>
        {renderMain()}
      </div>
    </Parallax>
  );
}
