import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBButton,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdb-react-ui-kit";

const About = () => {
  return (
    <MDBContainer className="p-4 ">
      <MDBRow>
        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Jasmin Mingers</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Clemens Dinkel</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Stavros Temertzidis</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Said R. Allem</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='3' md='12' className='mb-4 mb-md-0 mt-2' style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Ömer Ügür</MDBCardTitle>
              <MDBCardText>
               Full - Stack Developer
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
