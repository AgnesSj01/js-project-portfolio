import styled from "styled-components";

/* Wrapper for a single skill category:
   Contains the category label + list of items.
   Alignment changes depending on screen size. */
const TagRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    align-items: flex-start;
    max-width: 200px;
  }
`;

/* Label/title for the skill category */
const SkillTag = styled.h3`
  display: flex;
  justify-content: center;
  width: 150px;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #fff;
  font-size: 16px;
  font-weight: 600;
  align-items: flex-start;
  text-align: left;
`;

/* List of items inside each skill category */
const ItemsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: left;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    text-align: left;
    align-items: flex-start;
  }
`;

/* Single skill item inside the list */
const Item = styled.li`
  font-size: 18px;
`;

/* Component displaying a skill category with label + items */
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
