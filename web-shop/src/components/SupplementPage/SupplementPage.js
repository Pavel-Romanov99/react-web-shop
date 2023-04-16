import ItemCard from "../ItemCard/ItemCard";

import "./SupplementPage.css";

export default function SupplementPage({ supplements }) {
  return (
    <div className="supplements-container">
      <h1>Supplement page</h1>

      <div className="supplement-items">
        {supplements.map((x) => (
          <ItemCard className="item" key={x._id} {...x}></ItemCard>
        ))}
      </div>
    </div>
  );
}
