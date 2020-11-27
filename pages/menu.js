import { useState } from "react";
import { Tabs, Tab, Content } from "../components/Tabs";
import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

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
font-size: 1rem;
border-radius: .5rem .5rem;
margin-top: 8rem;
margin-right: auto;
margin-left: auto;
letter-spacing: .5px;
width: 50%;
height: auto;
background-color: ghostwhite;
margin-bottom: 10rem;
z-index: 8;
@media (max-width: 768px) {
  width: 90%;
  margin-left: auto;
  margin-top: 6rem;
  margin-right: 5%;
  margin-left: 5%;
  align-items: center;
  opacity: 80%;
  font-size: 1rem;

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

const Heading = styled.h2`
text-align: center;
`

const StyledItem = styled.p`
  display: flex;
  color:#c00c1a;
  font-size:1.25rem;
  font-style:bold;
  @media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;

}
  `;

const StyledDescription = styled.p`
display: flex;
justify-content: flex-start;
color:black;
font-size:1rem;
margin-top: -1rem;
@media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;

}
`;

const StyledAllergens = styled.p`
display: flex;
justify-content: flex-start;
color:black;
font-size:.8rem;
margin-top: -1rem;
@media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;

}
`;
const StyledPrice = styled.p`
display: grid;
color:black;
font-size:1.25rem;
text-align: end;
@media (max-width: 768px) {
  font-size: 1rem;
  letter-spacing: .05rem;

}

`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: (auto);
  grid-auto-flow: row;
  `


export default function Menu (props) {

  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (

    <Layout>
      <Head><title>Menu</title></Head>
      <FirstSection>
        <FirstSectionText>

      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}
        >BBQ
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Seasonal
        </Tab>
        <Tab onClick={handleClick} active={active === 2} id={2}>
          Classics
        </Tab>
        <Tab onClick={handleClick} active={active === 3} id={3}>
          Burgers
        </Tab>
        <Tab onClick={handleClick} active={active === 4} id={4}>
          Salads
        </Tab>
        <Tab onClick={handleClick} active={active === 5} id={5}>
          Sausages
        </Tab>
        <Tab onClick={handleClick} active={active === 6} id={6}>
          Soups
        </Tab>
        <Tab onClick={handleClick} active={active === 7} id={7}>
          Snacks
        </Tab>
        <Tab onClick={handleClick} active={active === 8} id={8}>
          Sides
        </Tab>
        <Tab onClick={handleClick} active={active === 9} id={9}>
          Desserts
        </Tab>
        <Tab onClick={handleClick} active={active === 10} id={10}>
          Mittags
        </Tab>

      </Tabs>
      <CardText>
        <Content active={active === 0}>

          <Heading>BBQ Low and slow from our Smoker</Heading>
      <ul>
          {props.bbq.map((bbq) => {
            return (
              <StyledGrid key={bbq.id}>
                <StyledItem>{bbq.name}| {bbq.germanName} </StyledItem>
                <StyledItem> </StyledItem>
                <StyledPrice>€ {bbq.price}0</StyledPrice>
                <StyledDescription>{bbq.description} </StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledDescription> {bbq.germanDescription} </StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledAllergens>{bbq.allergens}</StyledAllergens>
              </StyledGrid>
            )
          }
          )}
        </ul>

        </Content>
        <Content active={active === 1}>
        <Heading>Seasonal Specials</Heading>
      <ul>
          {props.seasonal.map((seasonal) => {
            return (
              <StyledGrid key={seasonal.id}>
                <StyledItem>{seasonal.name}| {seasonal.german_name} </StyledItem>
                <StyledItem> </StyledItem>
                <StyledPrice>€ {seasonal.price}0</StyledPrice>
                <StyledDescription>{seasonal.description} </StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledDescription> {seasonal.german_description} </StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledDescription></StyledDescription>
                <StyledAllergens>{seasonal.allergens}</StyledAllergens>
              </StyledGrid>
            )
          }
          )}
        </ul>
        </Content>
        <Content active={active === 2}>
        <Heading>1516 Classics</Heading>
<ul>
    {props.classics.map((classics) => {
      return (
        <StyledGrid key={classics.id}>
          <StyledItem>{classics.name}| {classics.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {classics.price}0</StyledPrice>
          <StyledDescription>{classics.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {classics.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{classics.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 3}>
        <Heading>1516 Burgers and Sandwiches</Heading>
<ul>
    {props.sandwiches.map((sandwiches) => {
      return (
        <StyledGrid key={sandwiches.id}>
          <StyledItem>{sandwiches.name}| {sandwiches.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {sandwiches.price}0</StyledPrice>
          <StyledDescription>{sandwiches.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {sandwiches.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{sandwiches.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 4}>
        <Heading>1516 Salads</Heading>
<ul>
    {props.salads.map((salads) => {
      return (
        <StyledGrid key={salads.id}>
          <StyledItem>{salads.name}| {salads.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {salads.price}0</StyledPrice>
          <StyledDescription>{salads.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {salads.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{salads.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 5}>
        <Heading>1516 Sausages</Heading>
<ul>
    {props.sausages.map((sausages) => {
      return (
        <StyledGrid key={sausages.id}>
          <StyledItem>{sausages.name}| {sausages.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {sausages.price}0</StyledPrice>
          <StyledDescription>{sausages.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {sausages.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{sausages.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 6}>
        <Heading>1516 Soups</Heading>
<ul>
    {props.soups.map((soups) => {
      return (
        <StyledGrid key={soups.id}>
          <StyledItem>{soups.name}| {soups.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {soups.price}0</StyledPrice>
          <StyledDescription>{soups.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {soups.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{soups.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 7}>
        <Heading>1516 Snacks</Heading>
<ul>
    {props.snacks.map((snacks) => {
      return (
        <StyledGrid key={snacks.id}>
          <StyledItem>{snacks.name}| {snacks.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {snacks.price}0</StyledPrice>
          <StyledDescription>{snacks.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {snacks.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{snacks.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 8}>
        <Heading>1516 Sides</Heading>
<ul>
    {props.sides.map((sides) => {
      return (
        <StyledGrid key={sides.id}>
          <StyledItem>{sides.name}| {sides.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {sides.price}0</StyledPrice>
          <StyledDescription>{sides.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {sides.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{sides.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 9}>
        <Heading>1516 Desserts</Heading>
<ul>
    {props.desserts.map((desserts) => {
      return (
        <StyledGrid key={desserts.id}>
          <StyledItem>{desserts.name}| {desserts.german_name} </StyledItem>
          <StyledItem> </StyledItem>
          <StyledPrice>€ {desserts.price}0</StyledPrice>
          <StyledDescription>{desserts.description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription> {desserts.german_description} </StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledDescription></StyledDescription>
          <StyledAllergens>{desserts.allergens}</StyledAllergens>
        </StyledGrid>
      )
    }
    )}
  </ul>
        </Content>
        <Content active={active === 10}></Content>
        <Content active={active === 11}></Content>



      </CardText>
      </FirstSectionText>
      </FirstSection>
      <Image src='/body-bg.jpg'
          alt='logo'
          id='landingImage'
          width={1920}
          height={9000}
          style={{objectFit:'fill', width: 'full', height: 'full' ,backgroundRepeat: 'repeat-y'}}   />
    </Layout>
  );
}
export async function getServerSideProps(context) {

  const { getBbq, getSeasonal, getClassics, getSandwiches, getSalads, getSausages, getSoups, getSnacks, getSides, getDesserts } = await import('../util/dbmenu');
  const bbq = await getBbq();
  const seasonal = await getSeasonal();
  const classics = await getClassics();
  const sandwiches = await getSandwiches();
  const salads = await getSalads();
  const sausages = await getSausages();
  const soups = await getSoups();
  const snacks = await getSnacks();
  const sides = await getSides();
  const desserts = await getDesserts();
  return {
    props: {bbq, seasonal, classics, sandwiches, salads, sausages, soups, snacks, sides, desserts}

  }
}
