import styled from 'styled-components';
import Layout from '../../components/Layout';
import landingImage from '../../images/landingImage.jpg'
import singleBeer from '../../images/singleBeer.png'
import Link from 'next/link';

import darkBeer from '../../images/darkBeer.jpg'
import singleGlass from '../../images/singleGlass.png'
import tableRibs from '../../images/tableRibs.png'
import Image from 'next/image'


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
width: 80%;
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

const CardText = styled.h3`
color: whitesmoke;
text-align: left;
margin-top: -.5rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: 1.25rem;
  letter-spacing: .05rem;
  display: none;
}
`;

const BeerImage = styled.img`
display: flex;
justify-content: right;
padding: none;
width: 20%;
align-content: flex-end;
@media (max-width: 768px) {
  display: none;
}`

const ListBeer = styled.li`
list-style-type:none;`

const BeerGrid =styled.div`
  display: grid;
  grid-template-columns: 1fr 0.4fr ;
  grid-template-rows: 0.05fr 0.9fr;
  gap: 0px 0px;

`

const CardTextDescription = styled.p`
color: whitesmoke;
text-align: left;
margin-top: -1rem;
font-size: 1rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: .75rem;
  letter-spacing: .05rem;
  display: none;
}
`;
const Heading = styled.h1`
text-align: center;
color: #c00c1a;
`



export default function BeerList (props) {
return (
  <Layout>
    <FirstSection>
      <FirstSectionText>
        <Heading>1516 Beers</Heading>

    <ul>
        {props.beers.map((beer) => {
          return (
            <BeerGrid key={beer.id}>
                <CardText>
              {beer.name}
              </CardText>
              <div></div>
                <CardTextDescription>
                  {beer.description}
              </CardTextDescription>




            </BeerGrid>
          )
        }
        )}
      </ul>

      </FirstSectionText>
  <FirstSectionImage src={landingImage} alt='logo' id='landingImage' />
      <FirstSectionMobileImage src={singleBeer} alt='logo' id='singleBeer' />


  </FirstSection>

  </Layout>
  )
};

export async function getServerSideProps(context) {

  const { getBeers } = await import('../../util/dbmenu');
  const beers = await getBeers();
  return {
    props: {beers}
  }
}




// const SecondSection = styled.div`
// height: auto;
// width: auto;
// display: flex;
// justify-content: flex-end;
// width: auto;
// `;

// const SecondSectionText = styled.div`
// position: absolute;
// display: flex;
// flex-direction: column;
// align-items: center;
// border-radius: .5rem .5rem;
// opacity: 90%;
// margin-top: 20rem;
// margin-right: 60rem;
// right: 0px;
// width: 45%;
// height: auto;
// background-color: transparent;
// margin-bottom: 10rem;
// z-index: 8;
// @media (max-width: 768px) {
//   width: 70%;
//   margin-left: auto;
//   margin-right: 15%;
//   align-items: center;
//   opacity: 80%;
//   margin-top: 5rem;
// }
// `;
// const ThirdSection = styled.div`
// height: auto;
// width: auto;
// display: flex;
// justify-content: flex-end;
// width: auto;
// `;

// const ThirdSectionText = styled.div`
// position: absolute;
// display: flex;
// flex-direction: column;
// align-items: center;
// border-radius: .5rem .5rem;
// opacity: 90%;
// margin-top: 20rem;
// margin-right: 60rem;
// right: 0px;
// width: 45%;
// height: auto;
// background-color: transparent;
// margin-bottom: 10rem;
// z-index: 8;
// @media (max-width: 768px) {
//   width: 70%;
//   margin-left: auto;
//   margin-right: 15%;
//   align-items: center;
//   opacity: 80%;
//   margin-top: 5rem;
// }
// `;