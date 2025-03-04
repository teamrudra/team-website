import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Parallax, Background } from "react-parallax";
import VizSensor from "react-visibility-sensor";
// import Button from "views/TeamPage/node_modules/components/CustomButtons/Button.js";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

import Arrowd from "@material-ui/icons/ArrowDropDown";
import wheeleez from "assets/img/image/sponsors/wheeleez.webp";
import nvidia from "assets/img/image/sponsors/Nvidia_logo.webp";
import anet from "assets/img/image/sponsors/anet.webp";
import unfynite from "assets/img/image/sponsors/unfynite.webp";
import monster from "assets/img/image/sponsors/monster.webp";
import solidworks from "assets/img/image/sponsors/solidworks.webp";
import sparkfun from "assets/img/image/sponsors/sparkfun.webp";
import protocase from "assets/img/image/sponsors/protocase.webp";
import altium from "assets/img/image/sponsors/Altium.webp";
import omgvh from "assets/img/image/sponsors/omgvh.webp";
import divvela from "assets/img/image/sponsors/divvela.webp";
import ansys from "assets/img/image/sponsors/ansys.webp";
import basicmicro from "assets/img/image/sponsors/basicmicro.webp";
import irobocom from "assets/img/image/sponsors/irobocom.webp";
import semikart from "assets/img/image/sponsors/semikart.webp";
import srmpedia from "assets/img/image/sponsors/srmpedia.webp";

import { isMobile } from "react-device-detect";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "assets/scss/sponsor.scss";

import bgImage from "assets/img/sponsorbg.jpg";

const useStyles = makeStyles({
  "@media (min-width: 800px)": {
    container: {
      // backgroundImage: "linear-gradient(to bottom, #F2F2F2, #8C8C8C);",
      height: "180vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
    title: {
      fontSize: "7em",
      fontWeight: "600",
      textStrokeWidth: "3px",
      textStrokeColor: "#404040",
      textFillColor: "transparent",
      filter: "drop-shadow(4px 0 4px #000)",
    },
    sponsorship: {
      height: "50vh",
      width: "90vw",
      // backgroundImage: "linear-gradient(to bottom, #F2F2F2, #999999)",
      // filter: 'blur(4px)',
    },
    sponsor: {
      height: "50vh",
      width: "50vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      transition: "500ms ease-in-out",
      transform: "scale(0.9)",
    },
    sponsortrans: {
      height: "40vh",
      width: "50vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      transition: "500ms ease-in-out",
      transform: "scale(1.2)",
    },
    image: {
      maxHeight: "40vh",
      maxWidth: "25vw",
      margin: "auto",
      transform: "translateY(50px)",
      filter: "drop-shadow(7px 0 7px #000)",
      filter: "blur(0px)",
    },
  },
  "@media (max-width: 800px)": {
    container: {
      backgroundColor: "#12121C",
      height: "120vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
    title: {
      height: "5vh",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    h1: {
      fontFamily: "gotham",
      fontSize: "15vw",
      textStrokeWidth: "2px",
      textStrokeColor: "#8896BF",
      textFillColor: "transparent",
    },
    image: {
      margin: "1vh 2px 8vh 0",
    },
    imageSpark: {
      margin: "4vh 2px 0 0",
    },
    imageNvidia: {
      margin: "3vh 2px 0 0",
    },
    imageWheeleez: {
      margin: "6vh 2px 0 0",
    },
    imageAltium: {
      margin: "7.5vh 2px 0 0",
    },
    irobocom: {
      margin: "4.5vh 2px 0 0",
    },
    monster: {
      margin: "7.5vh 2px 0 0",
    },
    semikart: {
      margin: "9vh 2px 0 0",
    },
    button: {
      width: "100%",
      margin: "5vh 0 4vh 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    downvote: {
      marginTop: "5vh",
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
  },
});

// const params = {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// };

export default function SectionSponsorship(props) {
  const classes = useStyles();

  const sponsorship = [
    [
      nvidia,
      anet,
      sparkfun,
      wheeleez,
      solidworks,
      ansys,
      protocase,
      altium,
      divvela,
      basicmicro,
      omgvh,
    ],
    [unfynite, irobocom, semikart, monster, srmpedia],
  ];

  const [curridx, setcurridx] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    // adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    className: "sponsor",
  };

  var settingsm = {
    infinite: true,
    adaptiveWidth: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
  };

  var settingsmsp = {
    ...settingsm,
    beforeChange: (oldidx, newidx) => {
      setcurridx([newidx, curridx[1]]);
    },
  };
  var settingsmpa = {
    ...settingsm,
    beforeChange: (oldidx, newidx) => {
      setcurridx([curridx[0], newidx]);
    },
  };

  if (isMobile) {
    return (
      <div className={classes.container}>
        <br />
        <br />
        <div className={classes.title}>
          <h1 className={classes.h1}>Sponsors</h1>
        </div>
        <br />
        <br />
        <br />
        <Slider {...settings}>
          <img className={classes.imageNvidia} src={nvidia} width="100%"></img>
          <img className={classes.image} src={anet} width="100%"></img>
          <img className={classes.imageSpark} src={sparkfun} width="100%"></img>
          <img
            className={classes.imageWheeleez}
            src={wheeleez}
            width="100%"
          ></img>
          <img
            className={classes.imageAltium}
            src={solidworks}
            width="100%"
          ></img>
          <img className={classes.imageAltium} src={ansys} width="100%"></img>
          <img
            className={classes.imageSpark}
            src={protocase}
            width="100%"
          ></img>
          <img className={classes.imageAltium} src={altium} width="100%"></img>
          <img className={classes.imageAltium} src={divvela} width="100%"></img>
          <img
            className={classes.imageAltium}
            src={basicmicro}
            width="100%"
          ></img>
          <img className={classes.imageAltium} src={omgvh} width="100%"></img>
        </Slider>
        <br />
        <br />
        <div className={classes.title}>
          <h1 className={classes.h1}>Partners</h1>
        </div>
        <br />
        <br />
        <br />
        <Slider {...settings}>
          <img src={unfynite} width="100%"></img>
          <img className={classes.irobocom} src={irobocom} width="100%"></img>
          <img className={classes.semikart} src={semikart} width="100%"></img>
          <img className={classes.monster} src={monster} width="100%"></img>
          <img src={srmpedia} width="100%"></img>
        </Slider>
        <Link
          className={classes.downvote}
          to="patron"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <Arrowd id="pral" className={classes.arrow} />
        </Link>
      </div>
    );
  }
  return (
    <VizSensor
      onChange={(isVisible) => {
        setIsPlaying(isVisible);
      }}
    >
      <>
        {isPlaying ? (
          <Parallax
            blur={{ min: -70, max: 60 }}
            bgImage={bgImage}
            bgImageAlt="the cat"
            strength={1300}
          >
            <div className={classes.container}>
              <div>
                <h1 className={classes.title}>SPONSORS</h1>
              </div>
              <br />
              <div className={classes.sponsorship}>
                <Slider {...settingsmsp}>
                  {sponsorship[0].map((image, idx) => (
                    <div
                      className={
                        idx == curridx[0]
                          ? classes.sponsortrans
                          : classes.sponsor
                      }
                    >
                      <img className={classes.image} src={image} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div>
                <h1 className={classes.title}>PARTNERS</h1>
              </div>
              <br />
              <div className={classes.sponsorship}>
                <Slider {...settingsmpa}>
                  {sponsorship[1].map((image, idx) => (
                    <div
                      className={
                        idx == curridx[1]
                          ? classes.sponsortrans
                          : classes.sponsor
                      }
                    >
                      <img className={classes.image} src={image} />
                    </div>
                  ))}
                </Slider>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </Parallax>
        ) : null}
      </>
    </VizSensor>
  );
}
