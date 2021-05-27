import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import '../Footer/Footer.css';

export default function App() {
  return (
    <MDBFooter backgroundColor='' className='text-center text-lg-left bg-danger mt-5'>
      <MDBContainer className='p-4 Footer bg-danger'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-warning'>Contact</h5>
            <p className="text-warning text-center footerParagraph"><i class="fas fa-map-pin mr"></i>
            Weiskopffstraße 16, 12459 Berlin
            </p>
            <p className="text-warning text-center footerParagraph"><i class="fas fa-phone mr"></i>
            030 123456789
            </p>
            <p className="text-warning text-center footerParagraph"><i class="fas fa-envelope mr"></i>
            lorem@ipsum.com
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-warning'>Contributors</h5>

            <ul className='list-unstyled mb-0 text-left'>
              <li>
              <a href='https://github.com/Jasmin262' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Jasmin Mingers
                </a>
              </li>
              <li>
              <a href='https://github.com/ClemensDinkel' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Clemens Dinkel
                </a>
              </li>
              <li>
              <a href='https://github.com/oemerueguer' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Ömer Ügür
                </a>
              </li>
              <li>
                <a href='https://github.com/bullgr-1926' target="_blank" rel="noreferrer" className='text-warning text-left'>
                <i class="fab fa-github"></i>
                  Stavros Temertzidis
                </a>
              </li>
              <li>
              <a href='https://github.com/jahanalem' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Said R. Allem
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 text-warning Footer bg-danger' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright by{' '}
        <a className='text-warning' href='https://github.com/oemerueguer/pokefight_frontend'>
          Group 3
        </a>
      </div>
    </MDBFooter>
  );
}
