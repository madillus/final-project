import styled from 'styled-components';
import Layout from '../components/Layout';
import landingImage from '../images/landingImage.jpg'
import singleBeer from '../images/singleBeer.png'
import Image from 'next/image';


const FirstSection = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: center;
`;


const FirstSectionText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
border-radius: .5rem .5rem;
opacity: 90%;
margin-top: 8rem;
margin-right: 20%;
margin-left: 20%;

width: 60%;
height: auto;
background-color: #2e2d26;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 90%;
  margin-left: 5%;
  margin-top: 7rem;
  margin-right: 5%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

}
`;
const CardMap = styled.div`
color: whitesmoke;
text-align: left;
padding: 1.7rem;
margin-top: 1rem;
opacity: 100%;
@media (max-width: 768px) {
  display: none;

}
`;


const CardText = styled.p`
color: whitesmoke;
text-align: left;
padding: 1.7rem;
margin-top: 2rem;
opacity: 100%;
font-size: 1rem;
letter-spacing: .05rem;
line-height: 1.2rem;
@media (max-width: 768px) {
  font-size: .75rem;
width: 90%;
margin-left: 5%;
margin-right: 5%;
  margin-top: 0;

}`

const Heading = styled.h1`
text-align: center;
color: #c00c1a;
`
const ContactGrid = styled.div`
   display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  ;
`
const GridCard = styled.div`
color: whitesmoke;
text-align: left;
padding: 1rem;

margin-right: 5rem;
margin-left:5rem;
opacity: 100%;
font-size: 1.3rem;
letter-spacing: .05rem;
line-height: 1.5rem;
@media (max-width: 768px) {
  font-size: .75rem;
width: 90%;
margin-left: 5%;
margin-right: 5%;
  margin-top: 0;

}`



function Contact () {
return (
  <Layout>
    <FirstSection>

      <FirstSectionText><Heading>Contact Us</Heading>
        <ContactGrid>

        <GridCard>
          Please be aware of our “Covid regulation” opening times.<br></br>
          Opening hours: Mo–So: 11 am – 10 pm<br></br>
          Daily non stop kitchen:<br></br>
          first order 10:00 am, last order  9:40 pm<br></br>
          We are only ever closed on 24th December</GridCard>
          <GridCard>For Take Away orders just give us a call!
          01 9611516
          or WhatsApp  06643455488</GridCard>
          <GridCard>No Reservations for Drinks and Snacks! <br></br>     No Reservations for Television or Sports!   <br></br>    No Reservations on the Terrace!<br></br>
          Reservations are only ever made in the Restaurant when Full Dinner is included for Every Person.<br></br>
          Large Groups can not be cashed individually. 1 Table = 1 Invoice</GridCard>

          </ContactGrid>
          <CardMap classname='google-map-code'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1962608828876!2d16.371274201336185!3d48.202835529126844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1980cfd30852a9e!2s1516%20Brewing%20Company!5e0!3m2!1sen!2sat!4v1606481056341!5m2!1sen!2sat"width="480" height="360" frameBorder="1" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe><GridCard>1516 The Brewing Company<br></br>
          Schwarzenbergstraße 2, 1010 Vienna<br></br>
          Tel. + 43 1 961 1516<br></br>
          Fax + 43 1 512 7118</GridCard></CardMap>
        <GridCard> BIP GARAGEN | BREITENEDER IMMOBILIEN PARKING
Um nur EUR 6,- für 6 Stunden Parken in unmittelbarer Nähe zu 1516 Brewing Company (18.00 – 24.00 Uhr)!</GridCard>






      </FirstSectionText>
    <Image src='/body-bg.jpg'
    alt='logo'
    id='landingImage'
    height={2200}
    width={2500}
    // layout='fill'
     />
    </FirstSection>
  </Layout>
  )
};

export default Contact;

{/* <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' /> */}

//       const FirstSectionImage = styled.img`
// padding: none;
// width: 100%;
// @media (max-width: 768px) {
//   display: none;
// }
// `;

// const FirstSectionMobileImage = styled.img`
// padding: none;
// width: 100%;
// @media (min-width: 768px) {
//   display: none;
// }
// `;