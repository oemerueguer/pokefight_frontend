import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter backgroundColor='dark' className='YellowColor text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About Us</h5>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contributors</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              <a href='https://github.com/Jasmin262' target="_blank" rel="noreferrer" className='text-white'>
                  Jasmin - Github
                </a>
              </li>
              <li>
              <a href='https://github.com/ClemensDinkel' target="_blank" rel="noreferrer" className='text-white'>
                  Clemens - Github
                </a>
              </li>
              <li>
              <a href='https://github.com/bullgr-1926' target="_blank" rel="noreferrer" className='text-white'>
                  Ömer - Github
                </a>
              </li>
              <li>
                <a href='https://github.com/bullgr-1926' target="_blank" rel="noreferrer" className='text-white'>
                  Stavros - Github
                </a>
              </li>
              <li>
              <a href='https://github.com/jahanalem' target="_blank" rel="noreferrer" className='text-white'>
                  Said - Github
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright by:{' '}
        <a className='text-white' href='https://github.com/oemerueguer/pokefight_frontend'>
          Group 3
        </a>
      </div>
    </MDBFooter>
  );
}
