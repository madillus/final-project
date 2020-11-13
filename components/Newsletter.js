import { useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/newsletter', {email});
      setState('SUCCESS');
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };



  const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    padding: .5rem;
    border: .5rem;
    border-radius: 1rem;
  `
  const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
  `
  const Inner = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  margin-top: .5rem;
  flex-direction: column;
  `

  const Text = styled.p`
  margin-top: .5rem;
  font-weight: 300;
  text-align: center;
  `

  const InputBox = styled.input`
  border: 1px solid #000;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 15rem;
  box-sizing: border-box;
  margin-bottom: .5rem;
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px black;}
  `

  const StyledButton = styled.button`
  text-align: center;
  background: #c00c1a;
  color: #fff;
  padding: 10px;
  margin: 5px;
  width: 15rem;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  `

return (

  <Newsletter>

    <Heading>Sign up to our newsletter</Heading>
    <Text> Keep up to date with our latest mittags menu, beers and seasonal specials.</Text>
    <Inner>
    <InputBox
    className="row"
    autoFocus value={state.inputText}
    type='text'
    placeholder='Enter Email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />

    <StyledButton
    className={state=== 'LOADING' ? 'button-gradient-loading' : ''}
    type='button'

    disabled= {state === 'LOADING'}
    onClick= {subscribe}
    >Subscribe</StyledButton>
 </Inner>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </Newsletter>



)

}
export default Newsletter