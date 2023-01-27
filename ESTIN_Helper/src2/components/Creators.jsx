import {Creator} from "../constants";
import styles from "../style";
import CreatorCard from "./CreatorCard.jsx";

const Creators = () => (
  <section id="Creators" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <center>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
         <h2 className={styles.heading2}>
        Creators
         </h2>
    </div>
    <div className="flex flex-wrap items-center sm:justify-start justify-center w-full Creator-container relative z-[1]">
      {Creator.map((card) => <CreatorCard key={card.id} {...card} />)}
    </div>
      </center>
  </section>
);

export default Creators;
