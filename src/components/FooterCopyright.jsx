import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

export default function FooterCopyright() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0F0F0F' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Nadav Yona
        
      </div>
    </MDBFooter>
  );
}