import React, { useEffect, useState } from "react"
import UamuziLogo from "../../images/uamuzi-favlogo.png"
import playstore from "../../images/playstore-dark.png"
import phone from "../../images/phone22.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mobile() {

  return (
    <section className="container py-5 px-5 mobile-section position-relative">
      <ToastContainer />
      <div className="vector-wave position-absolute d-none d-md-block d-lg-block"></div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 col-sm-12 mobile-text-col">
          <img src={UamuziLogo} alt="uamuzi logo" width={70} height={80} />
          <p className="h3 fw-bold py-3">Uamuzi mobile app</p>
          <p>
            Get connected with your leaders and friends and create a community
            where everyone matters. Anywhere, anytime on your phone. The app
            features include:
          </p>
          <ul className="landing-goals m-0 p-0">
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                {" "}
                <b>Uongozi</b> (leadership)
              </p>
            </li>
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                {/* <b>Baraza</b> (assembly) */}
                <b>Ubunifu</b> (creativity)
              </p>
            </li>
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                <b>Tubonge</b> (private chat)
              </p>
            </li>
            <li className="goals d-flex gap-2">
              <span className="check-icon">
                <box-icon
                  name="check-circle"
                  size="sm"
                  color="#8067AD"
                ></box-icon>
              </span>
              <p>
                <b>Mulika</b> (peacebuilding)
              </p>
            </li>
            <a lassName="cursor-pointer hover: border-2 border-red-500"
              href="https://play.google.com/store/apps/details?id=com.uamuzi.android&pcampaignid=web_share">
              <img
                className=""
                src={playstore}
                alt="Uamuzi-playstore-logo"
                width={130}
                height={45}
              /></a>

          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center position-relative">
          <div className="big-purple-mobile-circle position-absolute"></div>
          <img
            src={phone}
            className="phone-mobile"
            alt="mobile phone"
            height={500}
          />
          <div className="strokes stroke-1 position-absolute "></div>
          <div className="strokes stroke-2 position-absolute "></div>
          <div className="strokes stroke-3 position-absolute "></div>
        </div>
      </div>
    </section>
  )
}

export default Mobile
