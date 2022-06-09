import mobileView from "../../Assets/videos/mobile view.gif";
import workHero from "../../Assets/images/work hero.jpg";
import productFlip from "../../Assets/images/productFlip.jpg";
import modal from "../../Assets/videos/modal.mp4";
import productFlipVideo from "../../Assets/videos/product flip and modal desktop.mp4";
import { FancyBox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <div className={styles.work_wrapper}>
      <h1>My Professional Work</h1>
      <h3>Wonderful Creative Agency</h3>
      <p>
        The following website was built during my time at Wonderful Creative
        Agency.
      </p>
      <p>
        The site is a landing page for a Father's Day promotion; a collaboration
        between a high-profile household name and a renowned BBC/Netflix TV
        series.
      </p>
      <p>
        <i>
          Please note that as this website was promotional for Father's Day
          2022, it may no longer be live after June 19th 2022.
        </i>
      </p>
      <p>
        <a target="blank_" href="https://www.wahl.co.uk/peaky-blinders-gifts">
          Click here to visit the site
        </a>
      </p>
      <img width="100%" src={workHero} alt="website hero section" />

      <h2>The Requirements</h2>
      <p>
        The site was intended a landing page for the collaboration between Wahl
        and The Peaky Blinders, allowing users to browse the products available
        in Wahl's promotional range before being sent to their main website for
        purchase.
      </p>
      <p>
        This meant the site needed to act as an advertising tool, enabling users
        to view information about the products available, whilst being visually
        appealing and intuitive.
      </p>
      <p>
        To this end, the designer did a wonderful job of creating a design that
        did both of these things with ease, so it was now up to me to build out
        their vision.
      </p>

      {/* Desktop Modal */}
      <section className={styles.section}>
        <div className={styles.section_div}>
          By using a modal for product videos hosted by Wahl on YouTube, the
          user can focus on product information they want.
        </div>
        <div className={styles.section_div}>
          <img
            data-fancybox
            data-src={modal}
            src={workHero}
            alt="a link to a video showcasing a modal video hosted on YouTube"
            width="100%"
          />
          <p className={styles.modal_click}>Click this image!</p>
        </div>
      </section>

      {/* Product Flip */}
      <section className={styles.section}>
        <div className={styles.section_div}>
          <img
            data-fancybox
            data-src={productFlipVideo}
            src={productFlip}
            alt="Product Flip video link"
            width="100%"
          />
          <p className={styles.modal_click}>Click this image!</p>
        </div>
        <div className={styles.section_div}>
          Rather than being overwhelmed by text and masses of information, the
          user is able to 'flip' a product that draws their eye, and focus
          entirely on information related to that product.
        </div>
      </section>

      {/* Mobile Carousel and Modal */}
      <section className={styles.section}>
        <div className={styles.section_div}>
          A mobile view, capable of displaying an infinite number of products,
          thanks to a carousel. Complete with their own image, description,
          price, modal video on YouTube and an external site link for purchase;
          the mobile view holds all the information without compromising on
          space.
        </div>
        <div id={styles.mobileView} className={styles.section_div}>
          <img src={mobileView} alt="animation of website's mobile view" />
        </div>
      </section>
      <section>
        <h1>What did I learn?</h1>
        <ul>
          <li>
            TailwindCSS - This was my first time using TailwindCSS, and it
            allowed me to maintain my flow by typing my CSS in class format on
            each HTML element rarely leaving the HTML document.
          </li>
          <li>
            Optimisations - These all had be to optimised in order to load the
            site as close to a single second or less. With as many images and
            videos as this website contained, the payload was initially quite
            large. With careful and considered optimisation, an example being
            compression, the entire website was able to load in under 1.1s at
            the time of launch. Not only that, but through methods such as
            prefetch, preload, lazy load and deferring scripts, I was able to
            further optimise the website to the best of my ability, allowing for
            rapid loads on all devices.
          </li>
          <li>
            Javascript libraries - This site used a couple of libraries that
            allowed me to achieve the features required. I had never used these
            libraries before, so I learned how to navigate their documentation,
            and how to implement them properly to fulfill my needs.
          </li>
          <li>
            Up-skill in HTML, CSS and JS - Through building this page, and the
            most complex design I had worked on personally, I improved my
            abilities in HTML, CSS and JS considerably.{" "}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Work;
