import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const Logo = styled.a`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  letter-spacing: -0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 767px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    padding: 24px;
    gap: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.3px;

  &:hover {
    color: #000;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 767px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <Nav>
      <NavInner>
        <Logo href="#hero">Agnes S.</Logo>
        <Hamburger onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </Hamburger>
        <NavLinks open={open}>
          <NavLink href="#projects" onClick={handleClick}>Projects</NavLink>
          <NavLink href="#skills" onClick={handleClick}>Skills</NavLink>
          <NavLink href="#words" onClick={handleClick}>Words</NavLink>
          <NavLink href="#contact" onClick={handleClick}>Contact</NavLink>
        </NavLinks>
      </NavInner>
    </Nav>
  );
}
