import styled from "styled-components";

export const ShareContainer = styled.div`
  margin-bottom: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  max-width: 528px;
`;

export const ImageCount = styled.p`
  font-size: 0.8rem;
`;

export const Notes = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const ImagesContainer = styled.div`
  margin: 16px 0px;
  padding: 24px;
  display: flex;
  overflow-x: auto;
  border: 1px solid #ccc;
  max-width: 528px;
`;

export const Image = styled.img`
  margin-right: 16px;
  width: 200px;
  height: 200px;
  object-fit: scale-down;
`;
