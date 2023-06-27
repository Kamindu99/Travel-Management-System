import React, { Component } from "react";
import "../../Styles/Stylehome.css";
import Header from "../Header";
import Footer from "../Footer";

const data = [
  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Sri Lanka",
  },

  {
    src: 'https://www.hl.co.uk/__data/assets/image/0011/15985712/varieties/940.jpg',
    caption: "Unawatuna Beach",
  },

  {
    src: 'https://www.livemint.com/lm-img/img/2023/04/21/600x338/Air_travel_1682103021468_1682103021608.jpg',
    caption: "Dabulla Temple",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Nine Arch Bridge",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Yala National Park",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Jungle Beach",
  },

  {
    src: 'https://wwwnc.cdc.gov/travel/images/travel-industry-air.jpg',
    caption: "Sigiriya",
  },
];

function Dots(props) {
  const dots = data.map((data, index) => {
    return (
      <span
        key={index}
        className={index === props.slideIndex ? "dot activedot" : "dot"}
      ></span>
    );
  });

  return <div className="dot-container">{dots}</div>;
}

function Slider(props) {
  const slide = data.map((d, index) => {
    return (
      <div
        key={index}
        className={
          index === props.slideIndex ? "myslides fade" : "myslidesnone"
        }
      >
        <img className="imgxx" src={d.src} alt={d.caption} />

        <div className="textxx">{d.caption}</div>
      </div>
    );
  });

  return slide;
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      arrow: "right",
    };
  }
  prevSlide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? data.length - 1
          : this.state.slideIndex - 1,
      arrow: "left",
    });
  }

  nextSlide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === data.length - 1
          ? 0
          : this.state.slideIndex + 1,
      arrow: "right",
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.autoPlay(), 3000);
  }
  autoPlay() {
    if (this.state.arrow === "left") {
      this.setState({
        slideIndex:
          this.state.slideIndex === 0
            ? data.length - 1
            : this.state.slideIndex - 1,
      });
    } else {
      this.setState({
        slideIndex:
          this.state.slideIndex === data.length - 1
            ? 0
            : this.state.slideIndex + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />

        <div class="info">
          <div className="container-fluid " id="bodyhome">
            <div className="App">
              <div className="containerhome container">
                <br />
                <div className="slideshow-containerxx">
                  <Slider slideIndex={this.state.slideIndex} />
                  <span className="prev" onClick={() => this.prevSlide()}>
                    &#10094;
                  </span>
                  <span className="next" onClick={() => this.nextSlide()}>
                    &#10095;
                  </span>
                </div>

                <Dots slideIndex={this.state.slideIndex} />
              </div>
            </div>
            <br />
            <p className="parga">
              {" "}
              Man is a traveler by nature. He does not like to keep static at a
              place for a long time. So, people like to visit new places
              whenever they find time and opportunity. People travel for
              different purposes. Some travel for getting an education and some
              travel for pleasure. Many people also travel for business and
              employment. Travelling is, indeed, very pleasant. It is useful
              too. By traveling to new places we can know new people and learn
              many new things. Travelling opens new vistas of experience and
              understanding for us. When we go to a new place all of our senses
              and instincts become awake. In such circumstances, we can learn
              new things very easily. Everything seems beautiful and sterling in
              a new place. With new scientific inventions, the ways and means of
              traveling have changed dramatically. Now different types of
              vehicles are available to us. They include bus, truck, train,
              minibus, lorry, microbus, maxi, airplane, helicopter, spacecraft,
              submarine, launch, steamer, hovercraft etc. By these vehicles, we
              can cover a long distance within a short time. So, we should try
              to travel more and more.
              <br />
              <br />
              The benefits you can gain from using Dream travelers web app, to
              start with, your agent will help you choose the right places to
              go. It can be difficult if not misleading to read travel reviews
              posted online. A travel agent knows what is a truly good – and
              safe – place to go. He or she will possess the expertise necessary
              to book you where you want when you want. Your agent will also be
              able to help you decide what it is you want from a vacation if you
              are uncertain. A specialized travel agent can also book you for
              multiple stops for an excursion tour or for something like
              near-space flights, something online booking sites are usually not
              capable of handling. Complicated itineraries were made for travel
              agents, who get to flex their booking muscles and solve even your
              most complex travel situations. solve even your most complex
              travel situations.
              <br />
              <br />
              Some online holiday deals sites do enable you to book with a
              deposit and pay the balance in instalments but you are usually
              restricted. For example, you have to book a package or you can
              only pay in instalments for hotels but not flights etc. With
              travel agencies you can book the flight you want and the hotel you
              want separately and pay in instalments for both – and for cruises
              too! solve even your most complex travel situations. solve even
              your most complex travel situations. solve even your most.
              <br />
              <br />
              Traveling is a very crucial part of life as it is the best way to
              get out of the busy schedule. It is also to experience life in
              different ways . Traveling is actually a good remedy for stress,
              anxiety and depression. It also improves the mental and physical
              health.
              <br />
              <br />
              If you travel, you will not only learn about foreign cultures, but
              about your own as well. You will notice the cultural differences,
              and will find out what makes your culture unique. After retrurning
              from a long journey, you will see your country with new eyes.
            </p>

            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
