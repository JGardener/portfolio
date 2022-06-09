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
    <div>
      <h1>My Professional Work</h1>
      <h3>Wonderful Creative Agency</h3>
      <p>
        The following website was built during my time at Wonderful Creative
        Agency.
      </p>
      <img width="100%" src={workHero} alt="website hero section" />

      {/* Desktop Modal */}
      <section className={styles.section}>
        <div className={styles.section_div}>
          By using a modal for product videos hosted on YouTube, the user can
          focus on what matters to them.
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
          entirely on information related to it.
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
    </div>
  );
};

export default Work;
