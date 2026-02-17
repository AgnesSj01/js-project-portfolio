import styled from "styled-components";

/* Reusable tag style used in both the Projects section and My Words section */
export const Tag = styled.span`
  padding: 4px 12px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 6px 16px;
    font-size: 14px;
  }
`;
