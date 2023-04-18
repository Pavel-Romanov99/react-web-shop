import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import * as clothingService from "../../services/clothingService";
import "./ClothingDetails.css";

import CommentsSection from "../CommentsSection/CommentsSection";
import ClothingItem from "../ClothingItem/ClothingItem";

export default function ClothingDetails() {
  const [selectedClothing, setSelectedClothing] = useState({});
  const { id } = useParams();

  useEffect(() => {
    clothingService.getClothingById(id).then((res) => setSelectedClothing(res));
  }, [id]);

  return (
    <div className="item-main-container">
      <div className="clothing-item-container">
        <ClothingItem {...selectedClothing}></ClothingItem>
      </div>
      <div className="comments-section">
        <CommentsSection></CommentsSection>
      </div>
    </div>
  );
}
