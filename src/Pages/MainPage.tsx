import React, { useEffect, useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import FilterIcon from "../Components/Res/filter.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Slider from "../Components/Slider/Slider";
import Calendar from "../Components/Calendar/Calendar";
import Events from "../Components/Events/Events";
import Map from "../Components/Map/Map";
import Arrows from "../Components/Arrows/Arrows";

const MainPage = () => {
    return (
      <>
        <section style={{ padding: 0 }} className="position-relative">
          <Slider />
  
          <div
            className="d-flex justify-content-center flex-column align-items-center position-absolute blured-block"
            style={{
              height: "100%",
              width: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
              left: 0,
              top: 0,
            }}
          >
            <div style={{ width: "80%", height: "auto" }}>
              <p className="d-block siteTitle" style={{ marginBottom: 30 }}>
                <b>Team 13</b> -{" "}
                <span style={{ color: "orange" }}>Стань частью Команды</span>{" "}
                самого крутого мотосообщества России
              </p>
              <p className="d-block siteSubTitle">
                Находи с кем покататься и не только. Общайтесь, дружите, делитесь
                опытом. участвуй с нами в наших активностях на мото и не только.
                Войди в экологичные сообщество, которое занимается популяризацией
                мотокультуры России и объединяет все регионы!{" "}
              </p>
            </div>
          </div>
  
          <div
            className="d-flex justify-content-center flex-column align-items-center position-absolute"
            style={{
              height: "auto",
              width: "auto",
              backgroundColor: "transparent",
              right: 100,
              top: 100,
            }}
          >
            <a
              href="javascript:void"
              className="btn btn-danger"
              style={{
                backgroundColor: "rgba(255, 0, 41, 0.4)",
                width: "110px",
                marginBottom: 10,
                border: "none",
                fontWeight: "bold",
              }}
            >
              SOS
            </a>
            <a
              href="javascript:void"
              className="btn btn-primary"
              style={{
                backgroundColor: "rgba(0, 146, 255, 0.3)",
                width: "110px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              ДТП
            </a>
          </div>
        </section>
        <section
          style={{
            paddingLeft: 80,
            paddingRight: 80,
            paddingBottom: 100,
            paddingTop: 100,
            height: 850,
          }}
        >
          <Container fluid>
            <Row style={{ marginBottom: 30 }}>
              <Col xs={12}>
                <h2>
                  Календарь <span style={{ color: "orange" }}>событий</span>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col xxl={3}>
                <div className="w-100 d-flex justify-content-between">
                  <a
                    href=""
                    className="btn w-100 btn-outline-warning"
                    style={{
                      color: "white",
                      marginRight: 10,
                      border: "1px solid orange",
                    }}
                  >
                    {" "}
                    СОЗДАТЬ{" "}
                  </a>
                  <a
                    href=""
                    className="btn btn-outline-warning"
                    style={{
                      color: "white",
                      border: "1px solid white",
                      borderRadius: 0,
                    }}
                  >
                    {" "}
                    <Image
                      src={FilterIcon}
                      style={{ width: 22, height: 22 }}
                    />{" "}
                  </a>
                </div>
  
                <Calendar
                  monthcontrol
                  small
                  noborder
                  StartDate={new Date()}
                  OnDaySelect={(ddd: Date) => {}}
                />
              </Col>
              <Col xxl={9}>
                <Events />
                <Arrows distance={50} leftClick={()=>{}} rightClick={()=>{}} />
              </Col>
            </Row>
          </Container>
        </section>
        <section style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Map />
        </section>
      </>
    );
  };

  export default MainPage