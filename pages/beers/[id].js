// import { beers } from '../../util/database';
import Layout from '../../components/Layout';
import landingImage from '../../images/landingImage.jpg'
import singleBeer from '../../images/singleBeer.png'
import styled from 'styled-components';


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
const BeerImage = styled.img`
padding: none;
width: 20%;
@media (max-width: 768px) {
  display: none;
}
`;


export default function Beer(props) {
  // const beer = beer.find((currentBeer) => {
  //   if (currentBeer.id === props.id) {
  //     return true;
  //   }
  //   return false;
  // });

return (
  <Layout>
    <FirstSection>
      <FirstSectionText>
        <CardText>

            {props.beer.name}
              <br />
            {props.beer.description}
              <br />
              <BeerImage src={props.beer.slug}  />

        </CardText>
      </FirstSectionText>
        <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
        <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' />
    </FirstSection>
  </Layout>
  )
};





export async function getServerSideProps(context) {
  const id = context.query.id;
  const { getBeerById } = await import('../../util/dbbeers');
  const beer = await getBeerById(id);




  const props = {};
  if (beer) props.beer = beer;

  return {
    props: props,
  };
}
