import React from 'react';
import { createTheme, PageProvider, Page, Text, ThemeProvider } from 'madui';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageProvider>
        <div className="App">
          <Page footer={<Footer />} navbar={<Navbar />}>
            <Text variant="heading">Hello, world!</Text>
          </Page>
        </div>
      </PageProvider>
    </ThemeProvider>
  );
}

export default App;
