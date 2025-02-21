import React from 'react';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';
import Footer from '../components/Home/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Home;