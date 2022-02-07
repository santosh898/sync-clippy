import React, { useState } from "react";
import {
  ImageCount,
  ImagesContainer,
  Notes,
  ShareContainer,
  Image,
} from "./Share.style";

interface ShareDetails {
  images: string[];
  isRead: boolean;
  notes: string;
}

const Share: React.FC<{ shareDetails: ShareDetails }> = ({ shareDetails }) => {
  const [showingImages, setShowingImages] = useState(false);

  const onOpen = () => {
    setShowingImages((open) => !open);
  };

  return (
    <>
      <ShareContainer onClick={onOpen}>
        <Notes>{shareDetails.notes}</Notes>
        <ImageCount>{shareDetails.images.length} photos</ImageCount>
      </ShareContainer>
      {showingImages && <SharedImages images={shareDetails.images} />}
    </>
  );
};

export default Share;

const SharedImages: React.FC<{ images: string[] }> = ({ images }) => (
  <ImagesContainer>
    {images.map((image, key) => (
      <Image src={image} />
    ))}
  </ImagesContainer>
);
