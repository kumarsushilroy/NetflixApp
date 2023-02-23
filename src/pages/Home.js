import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row'
import requests from '../components/Requests';

const Home = () => {
  return (
   <>
   
   <Main/>
   <Row title='Upcoming' className='overflow-hidden' fetchUrl={requests.upcoming} />
   <Row title='Popular' fetchUrl={requests.popular} />
   <Row title='Toprated' fetchUrl={requests.toprated} />
   {/* <Row title='Latest' fetchUrl={requests.latest} /> */}
   <Row title='Now Playing' fetchUrl={requests.nowplaying} />
   </>
  )
}

export default Home