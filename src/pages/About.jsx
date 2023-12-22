import React from "react";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="bio">
                <h1>
                  <b>about gime</b>
                </h1>
                <hr />
                <h5>
                  <b>Corporate Headquarters</b>
                </h5>
                <h6>
                  <b>Palembang, Indonesia</b>
                </h6>
                <p>
                  Founded in 2023, Gime is an Indonesian company founded by CEO
                  Joni. The company is headquartered in Rajawali, Palembang and
                  has more than 40 offices worldwide. Today Gime is a leading
                  interactive entertainment company and provider of 3D engine
                  technology.
                </p>
              </div>
              <div className="contact">
                <hr />
                <h5>
                  <b>Contact</b>
                </h5>
                <h6>
                  <b>Gime Inc</b>
                </h6>
                <p>Street Rajawali. Palembang, Indonesia, Tel +1 234 567</p>
              </div>
              <div className="faq">
                <hr />
                <h5>
                  <b>Frequently Ask Question</b>
                </h5>
                <div
                  className="accordion mt-3"
                  data-bs-theme="dark"
                  id="accordionExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Does Gime have any job opening?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Yes! Our current openings will be posted on our career
                        portal. Once registered, you may apply for open
                        positions and/or submit your resume.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        I am having trouble with my game. Where do I go for
                        support?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Please Contact us at email support@gime.com for support
                        on all of our current products.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Does the Gime Games Store support regional pricing?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>
                        Yes, we do support regional pricing in more than 190
                        countries and over 30 territories. We also provide
                        suggested regional prices for developers based on
                        regional exchange rates, local purchasing power, and
                        industry experience.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
