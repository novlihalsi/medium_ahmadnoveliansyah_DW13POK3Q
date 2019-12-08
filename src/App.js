import React, {Component} from 'react';
import ButtonAppBar from './components/navbar'
import { Container } from '@material-ui/core';



class App extends Component {
  render () {
    return (
    <Container maxWidth='lg'>
      <div>
      <ButtonAppBar/>
      </div>
    </Container>
      

    );
  }
}
  
export default App;