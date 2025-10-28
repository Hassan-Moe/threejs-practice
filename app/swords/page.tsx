import Swords from "@/components/swords-model/Swords";
import React from "react";

const WitcherSwordsPage = () => {
  return (
    <div className="  ">
      <div className="   container mx-auto">
        {/* 3D Swords Scene */}
        <div className="fixed inset-0  border">
          <Swords />
        </div>
        {/* Hero Section */}
        <section
          className=""
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "60px", textAlign: "center" }}>
            The Blades of the Witcher
          </h1>
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
      </div>
    </div>
  );
};

export default WitcherSwordsPage;
