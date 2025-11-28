// Reusable link-style button component
// Styled as a flexible, full-width button with icon + text support.
// src/components/LinkButton.jsx
import styled from "styled-components";

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  padding: 10px 20px;
  border-radius: 12px;
  font-size: 18px;
  text-decoration: none;

  width: 100%;
  max-width: 300px;

  background-color: #000000;
  color: #ffffff;
  border: none;

  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
