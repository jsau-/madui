import React from 'react';
import { createTheme, PageProvider, Page, Text, ThemeProvider } from 'madui';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const theme = createTheme({
  overrides: {
    Page: {
      content: {
        flexDirection: 'column',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageProvider>
        <div className="App">
          <Page footer={<Footer />} navbar={<Navbar />} sidebar={<Sidebar />}>
            <Text variant="heading">Hello, world!</Text>
            <Text variant="heading">Hello, world!</Text>
            <Text variant="heading">Hello, world!</Text>
            <Text variant="heading">Hello, world!</Text>
            <Text variant="heading">Hello, world!</Text>
          </Page>
        </div>
      </PageProvider>
    </ThemeProvider>
  );
}

export default App;
