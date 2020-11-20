import styled from 'styled-components';
import {useState} from 'react';
import Link from 'next/link';

const SideBar = styled.div`
max-width: 240px;
height: 100vh;
border: 1px solid rgba(0, 0, 0, 0.1);
`

const SideBarInnerItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const SideBarItemContent = styled.div`
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
display: flex;
align-items: center;
width: 100%;
`
const BlankLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column ;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: .1rem;
  line-height: 2rem;
  align-items: center;
  li {
    padding: .5rem .5rem  ;
    margin-right: 3rem;
  }
  `

const Sidebar = ({ open }) => {
  return (
    <SideBar>
    <Ul open={open}>
      <li>
        <Link href="/">
          <BlankLink>BEERS</BlankLink>
        </Link></li>
      <li>
        <Link href="/brewery">
          <BlankLink>BEERMENU</BlankLink>
        </Link></li>
      <li>
        <Link href="/menu">
          <BlankLink>WINES</BlankLink>
        </Link></li>
      <li>
        <Link href="/beers/beer-list">
          <BlankLink>MITTAGS</BlankLink>
        </Link></li>
      <li>
        <Link href="/about">
          <BlankLink>SEASONAL</BlankLink>
        </Link></li>
      <li>
        <Link href="/admin/bbqadmin">
          <BlankLink>BBQ</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>CLASSICS</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>DESSERTS</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>SALADS</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>SANDWICHES</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>SAUSAGES</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>SIDES</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>SNACKS</BlankLink>
        </Link></li>
        <li>
        <Link href="/">
          <BlankLink>SOUPS</BlankLink>
        </Link></li>

    </Ul>
    </SideBar>
  )
}

export default Sidebar