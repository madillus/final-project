import styled from 'styled-components';
import Layout from '../../components/Layout';
import landingImage from '../../images/landingImage.jpg'
import singleBeer from '../../images/singleBeer.png'
import Link from 'next/link';

import darkBeer from '../../images/darkBeer.jpg'
import singleGlass from '../../images/singleGlass.png'
import tableRibs from '../../images/tableRibs.png'
// import { beers } from '../../util/database';


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
const BlankLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`
const BeerImage = styled.img`
padding: none;
width: 30%;
@media (max-width: 768px) {
  display: none;
}
`
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
justify-content: flex-end;
width: auto;
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
const ListBeer = styled.li`
list-style-type:none;`


export default function BeerList (props) {
return (
  <Layout>
    <FirstSection>
      <FirstSectionText>
        <CardText>
    <ul>
        {props.beers.map((beer) => {
          return (
            <ListBeer key={beer.id}>
              <Link href={`/beers/${beer.id}`}>
                <BlankLink>
              {beer.name}< br/> <BeerImage src={beer.slug}  />< br/>{beer.description}
              </BlankLink>

              </Link>
            </ListBeer>
          )
        }
        )}
      </ul>
      </CardText>
      </FirstSectionText>
  <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' />


  </FirstSection>
  <SecondSection>
      <SecondSectionText>
      <CardText>"24 hours in a day. 24 beers in a case. Coincidence? I think not." ~ H.L. Mencken</CardText>

      </SecondSectionText>

      <FirstSectionImage src={darkBeer} alt='beer' id='darkBeer' />
      <FirstSectionMobileImage src={singleGlass} alt='logo' id='singleGlass' />
    </SecondSection>
    <ThirdSection>
    <FirstSectionImage src={tableRibs} alt='ribs' id='tableRibs' />
    </ThirdSection>
  </Layout>
  )
};

export async function getServerSideProps(context) {

  const { getBeers } = await import('../../util/database');
  const beers = await getBeers();
  return {
    props: {beers}
  }
}