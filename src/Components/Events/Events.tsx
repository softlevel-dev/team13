import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Stack from "react-bootstrap/Stack";
import Image from 'react-bootstrap/Image'
import Moment from "react-moment";
import testimg from "../Res/testimg.png";
import cross from "../Res/cross.svg";
import Resizer from "react-image-file-resizer";

import  {EventItem} from '../Models/Event'

async function getFileFromUrl(url:string, name:string, defaultType = 'image/jpeg'){
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], name, {
    type: data.type || defaultType,
  });
}

const ExpandedCard = (card:EventItem, index:number):JSX.Element =>{
  
  var [imageData, setImageData] = useState("")

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
        "base64", 180, 220
        );
    })();

  }, [])

   return <Card className="EventCard shadow"  style={{ width: "440px", height: "500px", padding: 10, borderRadius: 10 }} key={"card_"+index} >
    <Image roundedCircle src={imageData} style={{width:50, height:50, position:"absolute", left: 15, top:15}} />    
   <Card.Img variant="top" src={testimg} />
   <Card.Body style={{paddingLeft:0, paddingRight:0}}>
     <Card.Subtitle
       style={{ fontSize: 15 }}
       className="text-muted"
     >
       ПРОХВАТ
     </Card.Subtitle>
     <Card.Title style={{ fontSize: 24 }}>
       {card.title}
     </Card.Title>
     <Card.Text>
       <ul>
         <li><Moment format="DD.MM.YYYY HH:mm">{card.date}</Moment></li>
         <li>{card.address}</li>
       </ul>
     </Card.Text>
   </Card.Body>
   <Card.Footer style={{ border: "none" }}>
   <Link
      to={`Event/${card.id}`}
       className="DefLink UnderlineOnHover"
       style={{ color: "orange", textTransform: "uppercase" }}
     >
       Подробнее
     </Link>
   </Card.Footer>
 </Card>
}

interface CollapsedCardProps
{
  card:EventItem, 
  index: number, 
  width:string, 
  height:string
}


const CollapsedCard = (card:EventItem, index: number, width:string = "", height:string = ""):JSX.Element =>{

  var [imageData, setImageData] = useState("")
  var [avatarData, setAvatarData] = useState("")

  useEffect(()=>{
    (async () => 
    {
      Resizer.imageFileResizer(
        await getFileFromUrl("https://softlevel.ru:8001/moto.jpg", "dd"),
        180,
        220,
        "JPEG",
        100,
        0,
        (data:any) => {
            setImageData(data)
        },
        "base64", 180, 220
        );

        Resizer.imageFileResizer(
          await getFileFromUrl("https://softlevel.ru:8001/moto.jpg", "dd"),
          150,
          150,
          "JPEG",
          100,
          0,
          (data:any) => {
            setAvatarData(data)
          },
          "base64", 150, 150
          );
    })();

  }, [])

  return <Card className="EventCard shadow" style={{ width: width == "" ? "440px" : width, height: height == "" ? "241px" : height, padding: 10, borderRadius: 10 }}  key={"card_"+index} >
    <Image roundedCircle src={avatarData} style={{width:50, height:50, position:"absolute", left: 15, top:15}} />
    {card.done == true ? <Image src={cross} style={{width:"95%", height:"95%", position:"absolute", left: 10, top:10, zIndex:100, pointerEvents:"none"}} />  : <></>}
  <Card.Body className="d-flex justify-content-start p-0">
    <Image src={imageData} style={{width: width == "" ? 180 : "50%", height: height == "" ? 220 : parseInt(height) - 21}} />    
    <div className="d-flex flex-column justify-content-between" style={{paddingLeft:10}}>
      <div>
      <Card.Subtitle
        style={{ fontSize: 15 }}
        className="text-muted"
      >
        ПРОХВАТ
      </Card.Subtitle>
      <Card.Title style={{ fontSize: 24 }}>
        {card.title}
      </Card.Title>
      <Card.Text>
        <ul className="" style={{paddingLeft:15}}>
          <li><Moment format="DD.MM.YYYY HH:mm">{card.date}</Moment></li>
          <li>{card.address}</li>
        </ul>
      </Card.Text>
      </div>

      <Link
      to={`Event/${card.id}`}
      className="DefLink UnderlineOnHover"
      style={{ color: "orange", textTransform: "uppercase" }}
    >
      Подробнее
    </Link>
    </div>
  </Card.Body>
</Card>
}

const Events = () => {
  var cards:EventItem[] = [{id: "1", title: "Заголовок события 1", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: false},
  {id: "2", title: "Заголовок события 2", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: true},
  {id: "3", title: "Заголовок события 3", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: false},
  {id: "4", title: "Заголовок события 4", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: false},
  {id: "5", title: "Заголовок события 5", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: true},
  {id: "6", title: "Заголовок события 6", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: true},
  {id: "7", title: "Заголовок события 7", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: false},
  {id: "8", title: "Заголовок события 8", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: true},
  {id: "9", title: "Заголовок события 9", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: false},
  {id: "10", title: "Заголовок события 10", description: "Описание события", photos: ["testimg.png"], date: new Date(), address: "Спб Литейный пр. 7", done: true}];

  var cardsList:[JSX.Element] = [<></>]
  for (var i = 0; i<cards.length-1; i += (i==0 ? 1 : 2))
  {      
    cardsList.push(i == 0 ? (<div className="CardBkg" style={{width: "440px"}}>
        <div>{ExpandedCard(cards[i], i)}</div></div>) : 
        (<Stack direction="vertical" gap={3} style={{width: "440px"}}>
               <div className="CardBkg" style={{width: "440px"}}><div>{CollapsedCard(cards[i], i)}</div></div>
               <div className="CardBkg" style={{width: "440px"}}><div>{CollapsedCard(cards[i+1], i+1)}</div></div></Stack>))
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3>
          Ближайшее событие состоится:{" "}
          <span style={{ color: "orange" }}>12.12.2022</span>
        </h3>
        <Link
          to={"Event"}
          className="btn btn-outline-warning"
          style={{ color: "white", border:"1px solid orange" }}
        >
          ПОСМОТРЕТЬ ВСЕ
        </Link>
      </div>
      <div
        style={{
          height: "520px",
          width: "100%",
          overflowX: "auto",
          marginTop: 20,
        }}
      >
        <Stack direction="horizontal" gap={3} style={{  }}>
            {cardsList}
        </Stack>
      </div>
    </div>
  );
};

export default Events;
export {CollapsedCard, ExpandedCard, getFileFromUrl}