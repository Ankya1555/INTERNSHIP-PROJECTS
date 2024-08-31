import React from 'react';
import Home1 from '../Home1';
import Home2 from '../Home2';
import Home3 from '../Home3';

function Home() {
  return (
    <div>


       {/* Header Section */}
      <Home1/>

        {/* Main Content Section */}
      <Home2/>
      
        {/* Footer Section */}
      <Home3/>
    </div>
  );
}

export default Home;
