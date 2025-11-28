// src/components/LinkButton.jsx
import styled from "styled-components";

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  padding: 10px 20px;
  border-radius: 12px; /* rundade hörn som i Figma */
  font-size: 18px;
  text-decoration: none;

  width: 100%; /* fyller bredden i sin container */
  max-width: 330px; /* så de inte blir FÖR breda */

  background-color: #000000; /* mörk brun/svart lik Figma */
  color: #ffffff;
  border: none;

  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
