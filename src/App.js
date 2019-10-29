import React from 'react';
import CardCollection from './Components/Cards/CardsCollectionComponent'
import './App.css';
import { ThemeProvider } from 'styled-components'
import { theme } from './Commons/theme'
import MenuComponent from './Components/Menu/MenuComponent';
import Header from './Components/Header/Header'
import { ContentSection, ContentImage, ContentImageContainer } from './Commons/MainStyle'
import MainImg from './images/dashboard-image.jpg'

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <MenuComponent />
        <ContentSection className="content-right">
          <CardCollection />
          <ContentImageContainer>
            <ContentImage src={MainImg} />

          </ContentImageContainer>
        </ContentSection>


      </ThemeProvider>
    </div>
  );
}

export default App;
