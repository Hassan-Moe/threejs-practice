import React from "react";
import BlurText from "../BlurText";

export const DummyContent = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section
          className=""
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BlurText
            text="The Blades of the Witcher?!"
            delay={150}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="mb-8 text-6xl"
          />
        </section>

        {/* Section 2 */}
        <section
          className=""
          style={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "24px", maxWidth: "600px", textAlign: "left" }}>
            Forged by ancient smiths and enchanted by mages, each sword carried
            by Geralt of Rivia tells a story of blood, destiny, and survival.
            The silver blade glints with moonlight, honed to cut through
            monsters of the night, while the steel sings in the clash against
            mortal foes.
          </p>
        </section>

        {/* Section 3 */}
        <section
          className=""
          style={{
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <p
            style={{ fontSize: "24px", maxWidth: "600px", textAlign: "right" }}
          >
            Between battles and silence, the swords rest — reminders of the thin
            line between man and monster. Their weight is not just of steel, but
            of every soul they’ve claimed, every promise they’ve protected, and
            every curse they’ve lifted.
          </p>
        </section>

        {/* Section 4 */}
        <section
          style={{
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h2 className="text-4xl mb-4 font-semibold">Craft of Legends</h2>
          <p
            style={{ fontSize: "22px", maxWidth: "700px", textAlign: "center" }}
          >
            In the forges beneath Kaer Morhen, echoes of the past still linger.
            Blades quenched in oil and blood alike whisper stories of witchers
            who came before — bound by the same destiny, hardened by the same
            trials.
          </p>
        </section>

        {/* Section 5 */}
        <section
          style={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h2 className="text-5xl mb-6">The Path Never Ends</h2>
          <p style={{ fontSize: "22px", maxWidth: "800px" }}>
            As long as monsters roam and contracts are written, the Path
            endures. Every swing of the sword is a dance with fate — a test of
            precision, strength, and restraint. The world changes, but a
            Witcher’s burden remains eternal.
          </p>
        </section>

        {/* Section 6 */}
        <section
          className="rounded-2xl"
          style={{
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{ fontSize: "20px", maxWidth: "600px", textAlign: "center" }}
          >
            Through storm and silence, steel gleams. Through loss and legend,
            purpose endures.
          </p>
        </section>
      </div>
    </div>
  );
};
