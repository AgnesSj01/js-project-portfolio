import styled from "styled-components";

const TagRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  /* MOBIL: allt vänster */
  align-items: flex-start;

  /* TABLET: centrera hela kolumnen */
  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }

  /* DESKTOP: kolumnen centreras horisontellt,
     listan styr sin egen align */
  @media (min-width: 1024px) {
    align-items: flex-start;
    max-width: 200px;
  }
`;

const SkillTag = styled.h3`
  display: flex;
  justify-content: center; /* texten i taggen centreras */
  width: 200px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid #fff;
  font-size: 16px;
  font-weight: 600;
  align-items: flex-start;
  text-align: left;
`;

const ItemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;

  /* MOBIL: vänster */
  text-align: left;
  align-items: flex-start;

  /* TABLET: centrerad text */
  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    align-items: center;
  }

  /* DESKTOP: vänstertext igen */
  @media (min-width: 1024px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const Item = styled.li`
  font-size: 14px;
`;

export default function SkillCategory({ label, items }) {
  return (
    <TagRow>
      <SkillTag>{label}</SkillTag>
      <ItemsList>
        {items.map((item) => (
          <Item key={`${label}-${item}`}>{item}</Item>
        ))}
      </ItemsList>
    </TagRow>
  );
}
