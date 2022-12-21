import React, { useCallback, useEffect, useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { EventItem } from "../Models/Event";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Moment from "react-moment";
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Arrows from "../Components/Arrows/Arrows";
import Resizer from "react-image-file-resizer";

import { CollapsedCard, ExpandedCard, getFileFromUrl } from "../Components/Events/Events";

const TravelPage = () => {

  var [cards, SetCards] = useState<EventItem[]>([{
    id: "1",
    title: "Заголовок события 1",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: false,
  },
  {
    id: "2",
    title: "Заголовок события 2",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: true,
  },{
    id: "1",
    title: "Заголовок события 1",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: false,
  },
  {
    id: "2",
    title: "Заголовок события 2",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: true,
  },{
    id: "1",
    title: "Заголовок события 1",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: false,
  },
  {
    id: "2",
    title: "Заголовок события 2",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: true,
  },{
    id: "1",
    title: "Заголовок события 1",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: false,
  },
  {
    id: "2",
    title: "Заголовок события 2",
    description: "Описание события",
    photos: ["testimg.png"],
    date: new Date(),
    address: "Спб Литейный пр. 7",
    done: true,
  }]);

  var cardRender = useCallback(() => CollapsedCard(cards[0], 1, "100%", "400px"), [])

    return <div className="w-100 d-block" style={{ backgroundColor: "#201E1E", paddingTop: 100, paddingBottom: 100 }}
  ><Container>
      <Row style={{ marginTop: 0, marginBottom:20 }}>
      <Col md={12}>
        <h1>Путешествия </h1>
      </Col>
    </Row>

    {cards.map((card, index) => {
        return <Row style={{marginBottom:20}}>
            <Col md={6}>
                {cardRender()}
            </Col>
            <Col md={6}>
                {cardRender()}
            </Col>
        </Row>
      })}

     <Row>
        <Col md={12} className="d-flex justify-content-center">
            <a href="javascript:void(0)" className="btn btn-outline-warning px-4" onClick={()=>
            {
              var newcards = [...cards]

              newcards.push({ id: "1",
              title: "Заголовок события 1",
              description: "Описание события",
              photos: ["testimg.png"],
              date: new Date(),
              address: "Спб Литейный пр. 7",
              done: false})

              //SetCards(newcards)
            }}
              style={{ color: "white", border:"1px solid white", marginTop:20, backgroundColor:"rgba(255, 89, 0, 1)" }}                 >
                ЗАГРУЗИТЬ ЕЩЕ
            </a>
        </Col>
     </Row>
    
  </Container></div>
  }

  
  export default TravelPage