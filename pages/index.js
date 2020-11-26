import styled from 'styled-components';
import Image from 'next/image'
import Layout from '../components/Layout';
import landingImage from '../images/landingImage.jpg';
import singleBeer from '../images/singleBeer.png';
import darkBeer from '../images/darkBeer.jpg';
import singleGlass from '../images/singleGlass.png';
import tableRibs from '../images/tableRibs.png';
import Newsletter from '../components/Newsletter';
import Link from 'next/link';


const FirstSection = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: flex-end;
`;

const FirstSectionImage = styled.img`
padding: none;
width: 100%;
@media (max-width: 768px) {
  display: none;
}
`;

const FirstSectionMobileImage = styled.img`
padding: none;
width: 100%;
@media (min-width: 768px) {
  display: none;
}
`;
const FirstSectionText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 8rem;
margin-right: 10rem;
right: 0px;
width: 45%;
height: auto;
background-color: #2e2d26;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-top: 12rem;
  margin-right: 15%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

}
`;

const CardText = styled.h1`
color: whitesmoke;
text-align: center;
padding: 1.7rem;
margin-top: 2rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: 1.25rem;
  letter-spacing: .05rem;
  display: none;
}
`;

const MenuButton = styled.button`
align-items: center;
width: 10rem;
 color: ghostwhite ;
text-transform: uppercase;
text-decoration: none;
background: #c00c1a;
padding: 1rem;
border-radius: 5px;
margin-left:auto;
margin-right: auto;
margin-top: 2rem;
margin-bottom: 2rem;
border: none;
transition: all 0.4s ease 0s;
&:hover {
cursor: pointer;
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
`;



const SecondSection = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: flex-end;
width: auto;
`;

const SecondSectionText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 20rem;
margin-right: 60rem;
right: 0px;
width: 45%;
height: auto;
background-color: transparent;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-right: 15%;
  align-items: center;
  opacity: 80%;
  margin-top: 5rem;
}
`;
const ThirdSection = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: center;
width: auto;
`;

const NewsletterCard = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 6rem;
margin-right: 3rem;
right: 0px;
width: 30%;
height: auto;
background-color: #2e2d26;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-top: 6rem;
  margin-right: 15%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

}
`;


const ThirdSectionText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 20rem;
margin-right: 60rem;
right: 0px;
width: 45%;
height: auto;
background-color: transparent;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-right: 15%;
  align-items: center;
  opacity: 80%;
  margin-top: 5rem;
}
`;

const OuterNewsletter = styled.div`
padding: 2rem;
margin-top: 12rem;
margin-bottom: auto;

border-radius: .5rem .5rem;
position: absolute;
background-color: white;
color: ghostwhite;
fill: white;
max-height: 80%;
max-width: 80%;
width: 80%;
height: 40rem;
display: flex;
justify-content: center;

`;
const WelcomeText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 8rem;
margin-left: 10rem;
left: 0px;
width: 45%;
height: auto;
background-color: #2e2d26;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-top: 12rem;
  margin-right: 15%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

}
`;
const WelcomeCard = styled.div`
position: absolute;
display: flex;
flex-direction: column;
font-size: 1.5rem;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 6rem;
margin-left: 3rem;
left: 0px;
width: 60%;
height: 60%;
background-color: #2e2d26;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-top: 6rem;
  margin-right: 15%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

}
`;

const WelcomeCardText = styled.h1`
color: whitesmoke;
text-align: center;
padding: 3rem;
margin-top: 2rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: 1.25rem;
  letter-spacing: .05rem;
  display: none;
}
`;
const WelcomeTextStory = styled.p`
color: whitesmoke;
text-align: center;
padding: 3rem;

opacity: 100%;
@media (max-width: 768px) {
  font-size: 1.25rem;
  letter-spacing: .05rem;
  display: none;
}
`;



function App() {
  return (
    <div>
      <Layout>
    <FirstSection>
      <FirstSectionText>
      <CardText>1516 BREWING COMPANY</CardText>
        <CardText>REAL BEER STRAIGHT FROM THE HEART OF VIENNA</CardText>
        <Link href="/menu">
        <MenuButton>MENU</MenuButton>
        </Link>
        <MenuButton>MITTAGS</MenuButton>
        <Link href='/beers' >
        <MenuButton>BEERS</MenuButton>
        </Link>
        </FirstSectionText>
      <FirstSectionImage src='/landingImage.jpg' alt='logo' id='landingImage'  />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' />
    </FirstSection>
    <ThirdSection>
    <FirstSectionImage src={tableRibs} alt='ribs' id='tableRibs' />
      <OuterNewsletter>
      <WelcomeCard>
        <WelcomeCardText>
      1516 Brewing Company est.1999
      </WelcomeCardText>
      <br></br>
      <WelcomeTextStory>Brewpub in the heart of Vienna. Fresh craft beer brewed on the premises. Open daily, hot food served till late. Kitchen hours from 11:30am until 2am. <br></br></WelcomeTextStory></WelcomeCard>
      <NewsletterCard>
      <Newsletter />
      </NewsletterCard>

      </OuterNewsletter>

    </ThirdSection>
    </Layout>
    </div>
  );
}

export default App;


{/* <FirstSectionImage src={tableRibs} alt='ribs' id='tableRibs' /> */}
{/* <SecondSection>
      <SecondSectionText>
      <CardText>"24 hours in a day. 24 beers in a case. Coincidence? I think not." ~ H.L. Mencken</CardText>

      </SecondSectionText>

      <FirstSectionImage src={darkBeer} alt='beer' id='darkBeer' />
      <FirstSectionMobileImage src={singleGlass} alt='logo' id='singleGlass' />
    </SecondSection> */}