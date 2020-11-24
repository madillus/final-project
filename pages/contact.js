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
justify-content: space-between;
font-size: 1rem;
border-radius: .5rem .5rem;
margin-top: 8rem;
margin-right: auto;
margin-left: auto;
letter-spacing: .5px;
width: 45%;
height: auto;
background-color: ghostwhite;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 70%;
  margin-left: auto;
  margin-top: 6rem;
  margin-right: 15%;
  margin-left: 15%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

}
`;
const CardMap = styled.div`
color: black;
text-align: left;
padding: 1.7rem;
margin-top: 1rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;

}
`;


const CardText = styled.h1`
color: black;
text-align: left;
padding: 1.7rem;
margin-top: 1rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;

}
`;


function Contact () {
return (
  <Layout>
    <FirstSection>

      <FirstSectionText>
        <CardText>
          Contact Us<br></br>
          1516 The Brewing Company
          Schwarzenbergstraße 2, 1010 Vienna
          Tel. + 43 1 961 1516
          Fax + 43 1 512 7118
          Please be aware of our “Covid regulation” opening times.
          Opening hours: Mo–So: 11 am – 10 am
          Daily non stop kitchen:
          first order 10:00 am, last order  9:40 am
          We are only ever closed on 24th December
          For Take Away orders just give us a call!
          01 9611516
          or WhatsApp  06643455488
          No Reservations for Drinks and Snacks!      No Reservations for Television or Sports!       No Reservations on the Terrace!
          Reservations are only ever made in the Restaurant when Full Dinner is included for Every Person.
          Large Groups can not be cashed individually. 1 Table = 1 Invoice<br></br>

          </CardText>
          <CardMap classname='google-map-code'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1329.6178038405844!2d16.3746737!3d48.2020776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079d7448871d%3A0x3247408377e4c1d2!2sGarage%20Palais%20Corso!5e0!3m2!1sen!2sat!4v1606213875199!5m2!1sen!2sat" width="480" height="360" frameborder="1" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></CardMap>
        BIP GARAGEN | BREITENEDER IMMOBILIEN PARKING
Um nur EUR 6,- für 6 Stunden Parken in unmittelbarer Nähe zu 1516 Brewing Company (18.00 – 24.00 Uhr)!




      </FirstSectionText>
    <Image src='/body-bg.jpg'
    alt='logo'
    id='landingImage'
    width={1920}
    height={1080}
    style={{objectFit:'fill', width: 'full', height: 'full'}}   />
    </FirstSection>
  </Layout>
  )
};

export default Contact;

{/* <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' /> */}