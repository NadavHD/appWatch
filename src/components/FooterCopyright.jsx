import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function FooterCopyright() {
  return (
    <MDBFooter className='text-center text-white' >
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black',fontSize:"15px" }}>
      Copyright © 2023 Nadav Yonatanov. All Rights Reserved
        
      </div>
    </MDBFooter>
  );
}