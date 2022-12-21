import React, { useEffect, useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import LoginBkg from "../Components/Res/loginbkg.png"
import leftArrow from "../Components/Res/leftArrow_white.svg"

const LoginPage = () =>
{
  var [sms, SetSms] = useState(false)
  var [code,  SetCode] = useState("")
  var [phone, SetPhone] = useState("")

  return <div style={{width:"100vw", display:"block", height:"100vh", overflow:"hidden", position:"relative"}}>
    <Image src={LoginBkg} style={{width:"100%", position:"absolute"}} />

    <Card className="EventCard shadow blured-block text-center"  style={{ width: "560px", height: "80vh", padding: 10, borderRadius: 10, position:"absolute", right:100, top:"10vh" }}  >
      {sms ? <Card.Header style={{borderBottom:"none", textAlign:"left"}}>
        <a href="javascript:void(0)" onClick={()=>SetSms(false)}><Image src={leftArrow} /></a>
      </Card.Header> :<></>}
      <Card.Body style={{paddingLeft:0, paddingRight:0}} className="d-flex flex-column justify-content-center align-items-center overflow-hidden">
        <div className="d-flex flex-column justify-content-between align-items-center">
              {sms ? <>
                <Card.Title style={{color:"white", fontSize:41, fontFamily: "Ubuntu Condensed"}} className="mb-5">Подтвердите номер</Card.Title>
                <Card.Subtitle style={{color:"white", fontSize:20, fontFamily: "Ubuntu Condensed"}} className="mb-5">{phone}</Card.Subtitle>

                <div className="mb-5" style={{width:"100%", textAlign:"left"}}>
                  <label className="text-white">Код из СМС</label>
                  <input className="form-control bg-transparent my-2" placeholder="" value={code} onChange={(e:any)=>SetCode(e.target.value)} name="Code"></input>
                  <div className="text-white mb-3">Код отправлен, запросить повторный<br/>можно через 19 секунд</div>
                </div>

                <a href="javascript:void(0)"
                  onClick={()=>SetSms(true)}
                  className="btn btn-outline-warning mb-3"
                  style={{ color: "white", border:"1px solid orange", width:"350px" }}>
                  ПОДТВЕРДИТЬ ТЕЛЕФОН
                </a>
              </> : <>
                <Card.Title style={{color:"white", fontSize:41, fontFamily: "Ubuntu Condensed"}} className="mb-5">Войти или<br/> зарегистрироваться</Card.Title>
                <Card.Subtitle style={{color:"white", fontSize:20, fontFamily: "Ubuntu Condensed"}} className="mb-5">Мы отправим на номер SMS-сообщение<br/> с кодом подтверждения</Card.Subtitle>

                
                  <input className="form-control bg-transparent mb-5" placeholder="+7 (___) ___ __ __" value={phone} onChange={(e:any)=>SetPhone(e.target.value)} name="Phone" style={{width:"80%"}}></input>
                  

                <a href="javascript:void(0)"
                  onClick={()=>SetSms(true)}
                  className="btn btn-outline-warning mb-3"
                  style={{ color: "white", border:"1px solid orange", width:"350px" }}>
                  ПОЛУЧИТЬ КОД
                </a>

                <div className="text-white mb-3">или</div>

                <a href="javascript:void(0)"
                  className="btn btn-outline-warning"
                  style={{ color: "white", border:"1px solid orange", textTransform:"uppercase", width:"350px" }}>
                  войти с помощью приложения
                </a>
            </>}
        </div>
      </Card.Body>
    </Card>
  </div>
}

export default LoginPage