import React from 'react';
import CourseHome from '../CourseHome/CourseHome';

const home = () => {
  return (
    <div >
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img style={{ objectFit: "none", height: '400px', width: '500px' }}
              src="https://i.pinimg.com/originals/82/01/5c/82015cb3e96b6bc7c4fb33235e9dd2a6.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "#ebe4e7", fontFamily: "Besley" }}>Elegance is good taste, plus a dash of daring.</h5>
              <p style={{ color: "#ebe4e7", fontFamily: "Besley" }}>"I don't design clothes. I design dreams." —Ralph Lauren</p>
              <button class="btn btn-danger">See More</button>
            </div>
          </div>
          <div class="carousel-item ">
            <img style={{ height: '400px', width: '500px', objectFit: "none" }} src="https://gorgeouslyflawed.com/wp-content/uploads/2020/02/pant-style-saree-for-bridesmaid-in-india-2020.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "#f5d5e4", fontFamily: "Besley" }}>Style is a way to say who you are without having to speak.</h5>
              <p style={{ color: "#f5d5e4", fontFamily: "Besley" }}>"Fashion is what you're offered four times a year by designers. And style is what you choose." —Lauren Hutton</p>
              <button class="btn btn-danger">See More</button>
            </div>
          </div>
          <div class="carousel-item">
            <img style={{ height: '400px', width: '500px', objectFit: "none" }} src="https://www.modelmanagement.com/_nuxt/images/homepage-2-768.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ color: "#ebe4e7", fontFamily: "Besley" }}>"the joy of dressing is an art."</h5>
              <p style={{ color: "#ebe4e7", fontFamily: "Besley" }}>"Fashion is about dressing according to what’s fashionable. Style is more about being yourself."</p>
              <button class="btn btn-danger">See More</button>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      <br /> <br />
      <div>

        <div className="row">
          <div className="col-6 text-center">
            <div className="m-4">
              <h2 style={{ fontFamily: "Besley" }}>What is fashion <span style={{ color: "rgb(214, 14, 114)", fontFamily: "Besley" }}>design</span> ?</h2>
              <div className="m-5">
                <p style={{ fontFamily: "Besley" }}>A fashion designer is a person who creates the ideas and concepts of new clothing styles and accessories, often by drawing and sketching. Today, fashion designers can also use computer-aided design (CAD) technology to finalize ideas</p>

              </div>
            </div>

          </div>
          <div className="col-4">
            <img className="img-fluid" style={{ height: '450px', width: '350px' }} src="https://www.lulus.com/images/product/xlarge/3303090_667892.jpg" class="d-block w-100" alt="..." />

          </div>
        </div>




      </div>
      <br /> <br /> <br />
      <div>

        <div className="row">

          <div className="col-4">
            <div className="ms-5 mt-3 ps-5">

              <img className="img-fluid" style={{ height: '450px', width: '350px', objectFit: "cover" }} src="https://ae01.alicdn.com/kf/HTB1Bf96RpXXXXb1XXXXq6xXFXXX3/2017-V.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="m-4">
              <h2 style={{ fontFamily: "Besley" }}>Why you need this  <span style={{ color: "rgb(214, 14, 114)", fontFamily: "Besley" }}>course</span> ??</h2>
              <div className="m-5">
                <p style={{ fontFamily: "Besley" }}>Pursuing a fashion designing course will extensively enable you to understand the working of the fashion industry collaboratively – fashion design history, clothing textiles, sketching and drawing of outfits, fashion events, managing a fashion house etc. Fashion is unfathomably an adorable art.</p>

              </div>
            </div>

          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6 text-center">
            <div className="m-4">
              <h2 style={{ fontFamily: "Besley" }}>What exactly does a fashion <span style={{ color: "rgb(214, 14, 114)", fontFamily: "Besley" }}> designer</span> do??</h2>
              <div className="m-5">
                <p style={{ fontFamily: "Besley" }}>A fashion designer designs and assists with the production of clothing, shoes and accessories, identifies trends, and selects styles, fabrics, colors, prints and trims for a collection. Fashion designers either design haute couture or ready-to-wear clothing.</p>

              </div>
            </div>

          </div>
          <div className="col-4">
            <img className="img-fluid" style={{ height: '450px', width: '350px' }} src="https://5.imimg.com/data5/SELLER/Default/2020/12/UM/XA/LF/112105390/4ea63bae-78aa-462c-b10f-865688771766-500x500.jpg" class="d-block w-100" alt="..." />

          </div>
        </div>
        <br />
        {/* <div className="row">

          <div className="col-4">
            <div className="ms-5 mt-3 ps-5">

              <img className="img-fluid" style={{ height: '450px', width: '450px', objectFit: "cover" }} src="https://i.pinimg.com/736x/c7/9c/f4/c79cf497db8a512ad4f6e24ac78753a0.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="m-4">
              <h2 style={{ fontFamily: "Besley" }}>How many types are there in fashion
                <span style={{ color: "rgb(214, 14, 114)", fontFamily: "Besley" }}> designer</span> ??</h2>
              <div className="m-5">
                <p style={{ fontFamily: "Besley" }}>Pursuing a fashion designing course will extensively enable you to understand the working of the fashion industry collaboratively – fashion design history, clothing textiles, sketching and drawing of outfits, fashion events, managing a fashion house etc. Fashion is unfathomably an adorable art.</p>

              </div>
            </div>


          </div>
          
        </div> */}




      </div>

      <CourseHome></CourseHome>





    </div>
  );
};

export default home;