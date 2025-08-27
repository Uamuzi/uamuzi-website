import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

function LandingTeam() {
  return (
    <div className="container py-5 px-2">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 pt-3">
          <p className="p text-uppercase fs-6 py-2 sdg-top fw-bold">
            Our amazing team
          </p>
          <h4 className="h4 sdg-title fw-bold py-2 text-capitalize">
            Meet the team
          </h4>
          <p className="p sdg-paragraph fw-light py-2 pr-3">
            Our leadership team drives the strategy and direction of our work to
            deliver impact at scale for the most vulnerable.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex gap-5 justify-content-center align-items-center flex-wrap pt-3">
          <div className="team-inner m-0 p-0 position-relative">
            <StaticImage
              className="team-img"
              src="../../images/team/ElvisSitati.jpg"
              placeholder="blurred"
            />
            <div className="long-purple-line position-absolute"></div>
            <div className="short-grey-line position-absolute"></div>

            <br />
            <div className="team-member-info text-center py-2">
              <p className="text-capitalize fw-bold text-red-500">
                Elvis Sitati
              </p>
              <p className="primary-color text-capitalize">
                Founder & Chief Executive Officer
              </p>
              <span className="primary-color d-flex gap-3 flex-nowrap justify-content-center align-items-center">
                <a
                  href="https://www.linkedin.com/in/elvis-sitati-2a282b79"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <box-icon
                    name="linkedin-square"
                    type="logo"
                    color="#8067AD"
                  ></box-icon>
                </a>
              </span>
            </div>
          </div>
          <div className="team-inner m-0 p-0 position-relative">
            <StaticImage
              className="team-img"
              src="../../images/team/MaxmillanOchango.png"
              placeholder="blurred"
            />
            <div className="long-purple-line position-absolute"></div>
            <div className="short-grey-line position-absolute"></div>

            <div className="team-member-info text-center py-2">
              <p className="text-capitalize fw-bold">Maxmillan Ochango</p>
              <p className="primary-color text-capitalize">
                Chief Operations Officer
              </p>
              <span className="primary-color">
                <a
                  href="https://www.linkedin.com/in/maxmillan-ochango-5000/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <box-icon
                    name="linkedin-square"
                    type="logo"
                    color="#8067AD"
                  ></box-icon>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex gap-5 justify-content-center align-items-center flex-wrap pt-5 ">
          <div className="team-inner m-0 p-0 position-relative mb-4">
            <StaticImage
              className="team-img"
              src="../../images/team/AntonyGakuru.jpeg"
              placeholder="blurred"
            />
            <div className="long-purple-line position-absolute"></div>
            <div className="short-grey-line position-absolute"></div>

            <div className="team-member-info text-center py-2">
              <p className="text-capitalize fw-bold">Antony Gakuru</p>
              <p className="primary-color text-capitalize">
                Chief Technology Officer{" "}
              </p>
              <span className="primary-color">
                <a
                  href="https://www.linkedin.com/in/muriithigakuru/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <box-icon
                    name="linkedin-square"
                    type="logo"
                    color="#8067AD"
                  ></box-icon>
                </a>
              </span>
            </div>
          </div>
          <div className="team-inner m-0 p-0 position-relative">
            <StaticImage
              className="team-img"
              src="../../images/team/SharonWangui.jpg"
              placeholder="blurred"
              alt="Sharon Wangui"
            />
            <div className="long-purple-line position-absolute"></div>
            <div className="short-grey-line position-absolute"></div>

            <div className="team-member-info text-center py-2">
              <p className="text-capitalize fw-bold">Sharon Wangui</p>
              <p className="primary-color text-capitalize">
                Administration and Programs
              </p>
              <span className="primary-color">
                <a
                  href="https://www.linkedin.com/in/sharon-wangui-799a67209/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <box-icon
                    name="linkedin-square"
                    type="logo"
                    color="#8067AD"
                  ></box-icon>
                </a>
              </span>
            </div>
          </div>
          <div className="team-inner m-0 p-0 position-relative">
            <StaticImage
              className="team-img"
              src="../../images/team/TimothyMabango.jpg"
              placeholder="blurred"
              alt="Timothy Mabango"
            />
            <div className="long-purple-line position-absolute"></div>
            <div className="short-grey-line position-absolute"></div>

            <div className="team-member-info text-center py-2">
              <p className="text-capitalize fw-bold">Timothy Mabango</p>
              <p className="primary-color text-capitalize">Partnerships</p>
              <span className="primary-color">
                <a
                  href="https://www.linkedin.com/in/mabango-timothy-capm/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <box-icon
                    name="linkedin-square"
                    type="logo"
                    color="#8067AD"
                  ></box-icon>
                </a>
              </span>
            </div>
          </div>

          <Link
            to="/team"
            className="see-all members align-items-center fw-bold text-capitalize d-flex justify-content-center align-items-center"
          >
            {" "}
            See all members{" "}
            <div className="top-right">
              <box-icon
                name="right-arrow-alt"
                color="#8067AD"
                className="rogue top-right"
              ></box-icon>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingTeam
