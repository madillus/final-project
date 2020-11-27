import styled from 'styled-components';
import Layout from '../components/Layout';
import landingImage from '../images/landingImage.jpg';
import singleBeer from '../images/singleBeer.png';

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
  border-radius: 0.5rem 0.5rem;
  opacity: 90%;
  margin-top: 12rem;
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
    margin-top: 6rem;
    margin-right: 15%;
    align-items: center;
    opacity: 80%;
    font-size: 1rem;
  }
`;

const CardText = styled.p`
  color: whitesmoke;
  text-align: left;
  padding: 1.7rem;
  margin-top: 2rem;
  opacity: 100%;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  line-height: 1.2rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 0;
  }
`;
const Heading = styled.h1`
  text-align: center;
  color: #c00c1a;
`;

function Brewery() {
  return (
    <Layout>
      <FirstSection>
        <FirstSectionText>
          <Heading>The Brewery</Heading>
          <CardText>
            All beer starts its life as crops on a field the grains are
            harvested and prepaired for brewing in a process called malting.
            1516 Brewing Company basically brews ales and beers from malted
            barley but also uses malted and unmalted wheat, rye and rice when
            the receipe calls for these. Caramelized malts, roasted malts and
            even smoked malts in the grain bill give the beers specific aromas,
            a robust body and a distinctive colour.
            <br />
            <br />
            Production in the brewery starts with the milling of the malt to
            produce the grist which goes into the brew kettle together with the
            liquor that is what a brewer calls the water used in brewing. This
            first part of the actual brewing process that takes place in the two
            copper-coated vessels behind the bar is called mashing. Natural
            enzymes in the malt break down the starch into sugars. After this
            step is completed the mash is pumped to the lautertun, where the
            spent grains are held back and a clear liquid called the wort runs
            off to the brew kettle: It contains the sugars and the other aromas
            of the malt and is now toroughly boiled.
            <br />
            <br /> During the boil hops are added. Hops are the cone-shaped
            blossoms of the female hop plant.After the boil is finished the hot
            wort is cooled down and yeast is added to ferment the sugar to
            alcohol and CO2. The strain of yeast used as well as the
            fermentation temperature determine if the finished product is a cold
            fermented lager or an ale which is fermented at room temperature.
            Enjoy! <br />
            <br />
            Bierpapst Conrad Seidl
          </CardText>
        </FirstSectionText>
        <FirstSectionImage src={landingImage} alt="logo" id="landingImage" />
        <FirstSectionMobileImage src={singleBeer} alt="logo" id="singleBeer" />
      </FirstSection>
    </Layout>
  );
}

export default Brewery;
