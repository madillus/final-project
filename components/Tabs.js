import styled from "styled-components";
export const Tabs = styled.div`
  background: #fff;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: (auto-fit, minmax(240px, 1fr));
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  grid-template-rows: (auto-fit, minmax(60px, 1fr));
  @media(max-width: 768px) {
  display: grid;
  align-items: center;
  grid-auto-flow: column ;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3,auto );
  border-style: none;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}


`;

export const Tab = styled.button`

  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;


  position: static;

  font-size: 1em;
  border: ${props => (props.active ? "none" : "")};
  border-radius: ${props => (props.active ? "0.5rem 0.5rem 0.5rem 0.5rem" : "0.5rem 0.5rem 0.5rem 0.5rem")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "#c00c1a")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;

  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;
