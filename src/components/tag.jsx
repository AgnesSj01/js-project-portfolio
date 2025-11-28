import styled from "styled-components";

/* Reusable tag style used in both the Projects section and My Words section */
export const Tag = styled.span`
  width: 60px;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  border: 2px solid black;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 130px;
    font-size: 15px;
  }
`;
