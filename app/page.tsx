import Microscope from "@/components/microscope";
import styles from "./page.module.scss";
import Shredder from "@/components/shredder";
// import Curtain from "@/components/curtain";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Curtain /> */}
      <h1 className={styles.title}>The Science</h1>
      <Shredder
        title="Reverse engineered & reimagined!"
        content={
          <>
            <p>
              {`That's the LifeScientfic approach to bringing premium crop protection to farmers at a value driven, accessible price..`}
            </p>
            <p>{`OK, but what is reverse engineering?`}</p>
            <p>
              {`Reverse engineering in crop protection is the science of replicating high-quality branded products—like herbicides, insecticides, and fungicides—once their patents expire. At Life Scientific, we analyze every detail of the original product, from active ingredients to surfactants, to create cost-effective alternatives that perform identically in the field.`}
            </p>
            <p>
              {`This process cuts out the original R&D costs, making top-tier solutions more affordable for farmers while maintaining strict safety and efficacy standards. Sometimes, we even improve the formula to enhance application or environmental performance.`}
            </p>
            <p>
              {`In short, reverse engineering gives farmers access to reliable, innovative, and accessible crop protection tools without compromise. Our product range today is based on chemicals, but we are working on developing complementary biocontrol solutions.`}
            </p>
            <p>
              {`Are you a science buff who loves the details? Learn about our full reverse engineering process here.`}
            </p>
          </>
        }
      />
      <Microscope
        title="No Secrets, Just Science"
        content={
          <>
            <p>
              {`From the lab to the field, we want you to understand exactly what goes
              into our products and why it matters to your yield and your bottom
              line. Some companies hide their formulas like a secret recipe. We are
              here to put the science right on the table.`}
            </p>
            <p>
              {`At Life Scientific, we believe farmers deserve better — better
              products, better prices, and better transparency. When you choose us,
              you're choosing a partner who's honest, innovative, and relentlessly
              focused on helping you succeed.`}
            </p>
            <p>
              {`Do you have something you have always wanted to ask about crop
              protection, formulation, or production? Ask one of our scientists
              here!`}
            </p>
          </>
        }
      />
    </div>
  );
}
