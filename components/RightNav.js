import styled from 'styled-components';
import Link from 'next/link'

const BlankLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: .1rem;
  line-height: 2rem;
  align-items: center;
  li {
    padding: .5rem .5rem  ;
    margin-right: 3rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #2e2d26;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -2rem;
    right: 0;
    height: 35vh;
    width: 15rem;
    padding-top: 3.5rem;
    border-radius: .5rem .5rem;
    opacity: 97%;
    transition: transform 0.3s ease-in-out;
    li {
      color: ghostwhite;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/">
          <BlankLink>HOME</BlankLink>
        </Link></li>
      <li>
        <Link href="/brewery">
          <BlankLink>BREWERY</BlankLink>
        </Link></li>
      <li>
        <Link href="/menu">
          <BlankLink>MENU</BlankLink>
        </Link></li>
      <li>
        <Link href="/beers/beer-list">
          <BlankLink>BEERS</BlankLink>
        </Link></li>
      <li>
        <Link href="/about">
          <BlankLink>ABOUT</BlankLink>
        </Link></li>
      <li>
        <Link href="/contact">
          <BlankLink>CONTACT</BlankLink>
        </Link></li>


    </Ul>
  )
}

export default RightNav