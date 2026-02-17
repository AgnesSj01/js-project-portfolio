// Reusable link-style button component
// Styled as a flexible, full-width button with icon + text support.
// src/components/LinkButton.jsx
import styled from "styled-components";

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;

  width: 100%;
  max-width: 280px;

  background-color: #111;
  color: #ffffff;
  border: none;

  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #333;
    transform: translateY(-1px);
  }
`;
