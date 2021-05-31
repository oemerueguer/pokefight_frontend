import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";
import './About.css';
import  Jasmin from '../Images/misty.png';
import  Clemens from '../Images/ash.png';
import  Stavros from '../Images/samuel_eich.png';
import  Said from '../Images/rocko.png';
import  Omer from '../Images/kiawe.png';

const About = () => {
  return (
    <MDBContainer className="p-4">
      <MDBRow>
        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2 mobile-opt' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid imgHeight"
              src={Jasmin}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Jasmin Mingers</MDBCardTitle>
              <MDBCardText className="posTitle">
               Full - Stack Developer
              </MDBCardText>
              <MDBBtn className="bg-danger" href="https://github.com/Jasmin262"><i class="fab fa-github"></i>GitHub</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2 mobile-opt' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid imgHeight"
              src={Clemens}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Clemens Dinkel</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
              <MDBBtn className="bg-danger" href="https://github.com/ClemensDinkel"><i class="fab fa-github"></i>GitHub</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2 mobile-opt' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid imgHeight"
              src={Stavros}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Stavros Temertzidis</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
              <MDBBtn className="bg-danger" href="https://github.com/bullgr-1926"><i class="fab fa-github"></i>GitHub</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2 mobile-opt' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid imgHeight"
              src={Said}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Said R. Allem</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
              <MDBBtn className="bg-danger" href="https://github.com/jahanalem"><i class="fab fa-github"></i>GitHub</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2 mobile-opt' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid imgHeight"
              src={Omer}
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Ömer Ügür</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
              <MDBBtn className="bg-danger" href="https://github.com/oemerueguer"><i class="fab fa-github"></i>GitHub</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
