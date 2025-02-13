import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { FaBootstrap, FaCss3Alt, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbCircleLetterMFilled } from "react-icons/tb";
import { SiWebpack } from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>💡"Below is a list of technologies and programming languages I have mastered. I have experience with each of them and can apply them in real-world projects."</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div className="icon"><FaHtml5 /></div>
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><FaCss3Alt /></div>
                                <h5>Css</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><FaSass />
                                </div>
                                <h5>Sass</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><RiTailwindCssFill /></div>
                                <h5>Tailwind css</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><FaBootstrap /></div>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><IoLogoJavascript /></div>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><FaReact /></div>
                                <h5>React js</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><TbCircleLetterMFilled /></div>
                                <h5>Material UI</h5>
                            </div>
                            <div className="item">
                                <div className="icon"><SiWebpack /></div>
                                <h5>Webpack</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
