import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {AppContext, AppState} from "../../App"

import Image from 'react-bootstrap/Image'

import logoT13 from "../Res/logoT13.svg";
import userIcon from "../Res/usericon.svg";

interface IPageHeaderProps {
    fixed:boolean
    transaprent:boolean
}

const PageHeader = ({fixed, transaprent}:IPageHeaderProps) => {

    let location = useLocation();
    const context:AppState = useContext(AppContext)
    
    var loginPage = location.pathname == "/Login"
    var mainPage = location.pathname == "/"
    var travelPage = location.pathname == "/Travel"
    var aboutPage = location.pathname == "/About"

    return <div className="d-block w-100 position-absolute" style={{paddingLeft:100, paddingRight:100, paddingTop:30, paddingBottom:30, zIndex:100}}>
        <div className={"d-flex align-items-center" + (!loginPage ? " justify-content-between" : " justify-content-center")}>
            <Link to={"/"}>
                <Image src={logoT13} alt="Team 13" style={{width:97, height:31}} />
            </Link>

            {!loginPage  ?
            <div className="menu">
                <Link to={"/"} className="DefLink" style={{fontWeight: mainPage ? "bold" : ""}}>ГЛАВНАЯ</Link>
                <Link to={"/Travel"} className="DefLink" style={{marginLeft:20, marginRight:20, fontWeight: travelPage ? "bold" : ""}}>ПУТЕШЕСТВИЯ</Link>
                {context.logged ? <Link to={"/Map"} className="DefLink" style={{marginLeft:20, marginRight:20}}>КАРТА</Link> : <></>}
                {context.logged ? <Link to={"/Reviews"} className="DefLink" style={{marginLeft:20, marginRight:20}}>ОБЗОРЫ</Link> : <></>}
                {context.logged ? <Link to={"/Team"} className="DefLink" style={{marginLeft:20, marginRight:20}}>КОМАНДА</Link> : <></>}
                {context.logged == false ? <Link to={"/About"} className="DefLink" style={{fontWeight: aboutPage ? "bold" : ""}}>О НАС</Link> : <></>}
            </div> : <></>}

            {!loginPage ? 
            <div className="d-flex justify-content-between align-items-center">
                {context.logged == false ? <>
                    <Image src={userIcon} alt="User" style={{width:24, height:24, marginRight: 10}} />
                    <Link to={"Login"} style={{color:"#FF5900", textDecoration:"none"}}>ВХОД</Link>
                </> : <></>}
            </div> : <></>}
        </div>
    </div>
}

export default PageHeader;