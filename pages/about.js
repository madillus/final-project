import styled from 'styled-components';
import Layout from '../components/Layout';
import landingImage from '../images/landingImage.jpg'
import singleBeer from '../images/singleBeer.png'

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


function About () {
return (
  <Layout>
    <FirstSection>
      <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' />
    </FirstSection>
  </Layout>
  )
};

export default About;