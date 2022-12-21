import React, { useState, useEffect } from "react";

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

import testimg from "../Components/Res/testimg.png";
import bike1 from "../Components/Res/bike1.png";
import chatIcon from "../Components/Res/chat.svg";
import clock from "../Components/Res/clock.svg";
import location from "../Components/Res/location.svg";
import close from "../Components/Res/close.svg";
import { ProfileItem } from "../Components/Models/profile";

const EventPage = () => {

  var [CurrentPhoto, SetCurrentPhoto] = useState(1);
  var [TotalPhotos, SetTotalPhotos] = useState(3);
  var [imageData, setImageData] = useState("")
  var [showAllUsers, SetShowAllUsers] = useState(false);
  var [usersList, SetUsersList] = useState<ProfileItem[]>([])

  var cards: EventItem[] = [
    {
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
    },
    {
      id: "3",
      title: "Заголовок события 3",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: false,
    },
    {
      id: "4",
      title: "Заголовок события 4",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: false,
    },
    {
      id: "5",
      title: "Заголовок события 5",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: true,
    },
    {
      id: "6",
      title: "Заголовок события 6",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: true,
    },
    {
      id: "7",
      title: "Заголовок события 7",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: false,
    },
    {
      id: "8",
      title: "Заголовок события 8",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: true,
    },
    {
      id: "9",
      title: "Заголовок события 9",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: false,
    },
    {
      id: "10",
      title: "Заголовок события 10",
      description: "Описание события",
      photos: ["testimg.png"],
      date: new Date(),
      address: "Спб Литейный пр. 7",
      done: true,
    },
  ];

  var cardsList: [JSX.Element] = [<></>];
  for (var i = 0; i < cards.length - 1; i += i == 0 ? 1 : 2) {
    cardsList.push(
      <div className="CardBkg" style={{ width: "440px" }}>
        <div>{CollapsedCard(cards[i], i)}</div>
      </div>
    );
  }

  useEffect(()=>{
    (async () => 
    {
        Resizer.imageFileResizer(
          await getFileFromUrl("https://softlevel.ru:8001/moto.jpg", "dd"),
          150,
          150,
          "JPEG",
          100,
          0,
          (data:any) => {
            setImageData(data)
          },
          "base64", 150, 150
          );
    })();

    SetUsersList([{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"},{id:"1"}])

  }, [])

  return (
    <div
      className="w-100 d-block"
      style={{ backgroundColor: "#201E1E", paddingTop: 100, paddingBottom: 100 }}
    >
      <Container>
        <Row>
          <Col md={12}>
            <Link to={"/"} style={{ textDecoration: "none", color: "gray" }}>
              Главная
            </Link>{" "}
            /{" "}
            <Link
              to={"/Event"}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              События
            </Link>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Col md={6}>
          <div className="CardBkg">
            <div>
            <Card
              className="EventCard shadow"
              style={{
                width: "100%",
                height: "580px",
                padding: 10,
                borderRadius: 10,
              }}
              key={"card_1"}
            >
              
              <Card.Body style={{ }} className="d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex justify-content-between align-items-center">
                     <h3>Организатор</h3>
                     <Link to={`Event/1`} className="DefLink UnderlineOnHover"   style={{ color: "rgba(255, 89, 0, 1)", textTransform: "uppercase" }}  >  РЕДАКТИРОВАТЬ  </Link>
                  </div>
                  <Image roundedCircle src={imageData} style={{width:50, height:50, marginTop:20}} />
                </div>

                <div>
                 <h3>Участники ({usersList?.length ?? 0})</h3>
                  <Stack direction="horizontal" gap={2} style={{marginBottom:20, marginTop:20}} >
                    <Image roundedCircle src={imageData} style={{width:50, height:50}} />
                    <Image roundedCircle src={imageData} style={{width:50, height:50}} />
                    <Image roundedCircle src={imageData} style={{width:50, height:50}} />
                    <Image roundedCircle src={imageData} style={{width:50, height:50}} />
                    <Image roundedCircle src={imageData} style={{width:50, height:50}} />
                    {(usersList?.length ?? 0)>5 ? <a href="javascript:void(0)" onClick={()=>SetShowAllUsers(true)} className="DefLink UnderlineOnHover" style={{ color: "rgba(255, 89, 0, 1)"}}>показать всех</a> : <></>}
                  </Stack>
                 <Link
                    to={"Event"}
                    className="btn btn-outline-warning px-4 hoverBtn"
                    style={{ color: "white", border:"1px solid rgba(255, 89, 0, 1)" }}
                  >
                    ДОБАВИТЬ УЧАСТНИКА
                  </Link>
                </div>

                <div>
                  <div  className="d-flex align-items-center justify-content-start">
                    <Image src={clock} style={{width:20, height:20, marginRight:15}} />  <span>16:00</span>
                  </div>
                  <div style={{marginTop:10}} className="d-flex align-items-center  justify-content-start">
                    <Image src={location} style={{width:20, height:20, marginRight:15}} /> <span>Спб Литейный пр. 7</span>
                  </div>
                  <Link
                    to={"Event"}
                    className="btn btn-outline-warning px-4"
                    style={{ color: "white", border:"1px solid white", marginTop:20, backgroundColor:"rgba(255, 89, 0, 1)" }}
                  >
                    ПРИНЯТЬ УЧАСТИЕ
                  </Link>
                </div>
              </Card.Body>
              <Card.Footer style={{ border: "none" }}>
                
              </Card.Footer>
            </Card>
            </div>
            </div>

          </Col>
          <Col md={6}>
          <div className="CarouselIndi" style={{position:"relative"}}>
            <Carousel controls={false} interval={3000} style={{display:"block", height:580, overflow:"hidden"}} indicators={false}>
            <Carousel.Item>
                <Image src={bike1} alt="Bike" style={{width: "auto", height: "100%", zIndex:0}} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={bike1} alt="Bike" style={{width: "auto", height: "100%", zIndex:0}} />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={bike1} alt="Bike" style={{width: "auto", height: "100%", zIndex:0}} />
            </Carousel.Item>
            </Carousel>

            <div style={{position:"absolute", bottom:30, left:"50%", marginLeft:"-55px"}}>
              <Arrows distance={60} leftClick={()=>SetCurrentPhoto(CurrentPhoto-1 <= 0 ? TotalPhotos : CurrentPhoto - 1)} rightClick={()=>SetCurrentPhoto(CurrentPhoto+1 > TotalPhotos ? 1 : CurrentPhoto + 1)} />
            </div>

            <div style={{position:"absolute", left:30, bottom: 30, fontSize:40}}>
            {CurrentPhoto} / {TotalPhotos}
            </div>
        </div>

          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Col md={12} style={{textAlign:"right"}}>
              <Link
              to={"Event"}
              className="btn btn-outline-warning px-4 hoverBtn"
              style={{ color: "white", border:"1px solid rgba(255, 89, 0, 1)" }}
            >
              <Image src={chatIcon} style={{width:15, height:15, marginRight:20}} />
              ОНЛАЙН ЧАТ
            </Link>
          </Col>
        </Row>

        <Row style={{ marginTop: 80 }}>
          <Col md={6}>
            <div className="text-muted">ПРОХВАТ</div>
            <h2>Просто катаемся</h2>
            <p className="pt-3">
              Одной из контрольных точек следующего трипа будет посещение
              Кургальского полуострова (недалеко от границы с Эстонией) и объезд
              его по периметру. Поедем по Петергофскому шоссе через г. Сосновый
              Бор (по 41А-007). Сразу после него трафика почти нет. На некоторых
              участках дороги есть доступ к воде.
            </p>
            <p className="pt-3">
              Одной из контрольных точек следующего трипа будет посещение
              Кургальского полуострова (недалеко от границы с Эстонией) и объезд
              его по периметру. Поедем по Петергофскому шоссе через г. Сосновый
              Бор (по 41А-007). Сразу после него трафика почти нет. На некоторых
              участках дороги есть доступ к воде.
            </p>

            <p className="pt-3">
              Одной из контрольных точек следующего трипа будет посещение
              Кургальского полуострова (недалеко от границы с Эстонией) и объезд
              его по периметру. Поедем по Петергофскому шоссе через г. Сосновый
              Бор (по 41А-007). Сразу после него трафика почти нет. На некоторых
              участках дороги есть доступ к воде.
            </p>

            <p className="pt-3">
              Одной из контрольных точек следующего трипа будет посещение
              Кургальского полуострова (недалеко от границы с Эстонией) и объезд
              его по периметру. Поедем по Петергофскому шоссе через г. Сосновый
              Бор (по 41А-007). Сразу после него трафика почти нет. На некоторых
              участках дороги есть доступ к воде.
            </p>

            
          </Col>
          <Col md={6} style={{paddingLeft:100}}>
            <div className="d-flex align-items-center justify-content-center overflow-hidden">
              <Image src={bike1} alt="Bike"  />
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: 80 }}>
          <Col md={12}>
            <h2>Ближайшие события</h2>
            <div
              style={{
                height: "250px",
                width: "100%",
                overflowX: "auto",
                marginTop: 20, marginBottom: 20
              }}
            >
              <Stack direction="horizontal" gap={4} style={{}}>
                {cardsList}
              </Stack>
            </div>

            <Arrows distance={60} />
          </Col>
        </Row>
      </Container>

      <Modal show={showAllUsers} onHide={()=>{SetShowAllUsers(false)}} size="lg" aria-labelledby="contained-modal-title-vcenter" className="custom-modal"  centered scrollable>
        <Modal.Header className="modalBackground custom-modal" >
          Все участники
          <a href="javascript:void(0)" onClick={()=>{SetShowAllUsers(false)}}>
            <Image src={close} style={{width:20, height:20, marginLeft:20}} />
          </a>
        </Modal.Header>
        <Modal.Body className="modalBackground">
            <Stack direction="vertical" gap={3} style={{marginBottom:20, marginTop:20}} >
              {usersList.map((user, index) => {
                  return <Stack direction="horizontal" gap={3} >
                  <span style={{width:10, height:10, backgroundColor:"green", borderRadius:5}}></span>
                  <Image roundedCircle src={imageData} style={{width:50, height:50}} />
                  <span>Призрак Эльпасо</span>
                </Stack>
              })}
            </Stack>
        </Modal.Body>
        <Modal.Footer className="modalBackground custom-modal">
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default EventPage;
