import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import city from "../../assets/city.jpg";
import hero from "../../assets/hero.png";
import bookImage from "../../assets/Emoji_Image.jpg";

const Home = () => {
  return (
    <>
      <header className={classes["welcome-header"]}>
        <div className={classes["welcome-header-content"]}>
          <h1>Ready for a challenge?</h1>
          <Link className={classes["cta-link"]} to="/lists">
            Get Started
          </Link>
        </div>
        <img
          src={city}
          alt="A city skyline touched by sunlight"
          className={classes["city-image"]}
        />
        <img
          src={hero}
          alt="A superhero wearing a cape"
          className={classes["hero-image"]}
        />
      </header>
      {/* <img
        className={classes.backgroundImage}
        src={bookImage}
        alt="BookImage"
        id="emoji-image"
      /> */}
      <main className={classes["welcome-content"]}>
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
};

export default Home;
