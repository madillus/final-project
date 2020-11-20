import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from 'next/link'
import landingImage from '../images/landingImage.jpg'
import singleBeer from '../images/singleBeer.png'
// import Upload from '../components/Upload'

const FirstSection = styled.div`
height: auto;
width: auto;
display: flex;
justify-content: center;
margin: auto;
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
`
const FirstSectionText = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
font-size: 1rem;
border-radius: .5rem .5rem;

margin-top: 12rem;
margin-right: auto;
margin-left: auto;
letter-spacing: .5px;

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
text-align: left;
padding: 1.7rem;
margin-top: 2rem;
opacity: 100%;
@media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;
  display: none;
}
`;

const Heading = styled.h2`
text-align: center;
`

const BlankLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`

  const ListBeer = styled.li`
  list-style-type:none;
  font-size: 1rem;`


  export default function BbqList (props) {
  return (
    <Layout>
      <FirstSection>
        <FirstSectionText>
          <CardText>
          <Heading>BBQ Low and slow from our Smoker</Heading>
      <ul>
          {props.bbq.map((bbq) => {
            return (
              <ListBeer key={bbq.id}>

                  <BlankLink>< br/>
                {bbq.name}|  {bbq.german_name}< br/> < br/>{bbq.description} < br/> {bbq.german_description} {bbq.allergens}< br/> € {bbq.price}0
                </BlankLink>


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
    </Layout>
  )
        }


export async function getServerSideProps(context) {

  const { getBbq } = await import('../util/dbmenu');
  const bbq = await getBbq();
  return {
    props: {bbq}
  }
}