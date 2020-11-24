import styled from 'styled-components';
import Menu from './Menu';
import headerImage from '../images/headerImage.png'
import Link from 'next/link';

const Nav = styled.nav`
width: 100%;
height: 5rem;
position: fixed;
z-index: 9;
padding: 0 1rem;
display: flex;
color: whitesmoke;
background: linear-gradient(to bottom, rgb(46,45,38,1), rgb(46,45,38,0.5));
justify-content: space-between;
.logo {
  padding: 15px 0;
}
`
const Img = styled.img`
margin-left: 3rem;
height: 3rem;
margin-top: 1rem;
text-align: center;
padding: 0;
`;

const Navbar = () => {
return (
  <Nav>
    <Link href='/'>
    <Img src={headerImage} alt='logo' id='headerImage' />
    </Link>


    <Menu />
  </Nav>
)
}

export default Navbar;