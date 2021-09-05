import React from "react";
import SidePanelItem from "./SidePanelItem";

function SidePanel(props) {
  return (
    <div className="sidePanel">
      <SidePanelItem
        title="Ingredients"
        options={["Olive Oil", "Coconut Oil", "Bergamot", "Rosemary"]}
      />
      <SidePanelItem
        title="Price"
        options={["$5 - $10", "$10 - $20", "$20-$50"]}
      />
      <SidePanelItem
        title="Features"
        options={["Exfoliation", "Baby-Safe", "Moisturizing"]}
      />
      <SidePanelItem
        title="Ratings"
        options={["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]}
      />
    </div>
  );
}

export default SidePanel;
