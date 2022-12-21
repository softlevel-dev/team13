import React from "react";
import {useLocation} from "react-router-dom"
import logoT13_big from "../Res/logoT13_big.svg";
import logoT13 from "../Res/logoT13.svg";
import iconVK from "../Res/iconVK.svg";
import iconTelegram from "../Res/iconTelegram.svg";
import iconYoutube from "../Res/iconYoutube.svg";
import Image from 'react-bootstrap/Image'
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";

interface IPageFooterProps {

}

const PageFooter = ({}:IPageFooterProps) => {
    let location = useLocation();
    var loginPage = location.pathname == "/Login"

    if (loginPage) return <></>

    return <div className="d-flex justify-content-center align-items-end position-relative" style={{height:320, overflow:"hidden", paddingBottom:30}}>
        <Image src={logoT13_big} className="position-absolute" style={{maxWidth: 980, bottom:0}} />
        

        <div className="d-flex justify-content-between w-100">
        <div>
            <Image src={logoT13} alt="Team 13" style={{width:145, height:45}} />
            <div className="w-100 d-block mt-3">
                <Stack direction="horizontal" gap={3}>
                    <a href="javascript:void(0);"><Image src={iconVK} alt="Team 13" style={{width:25, height:25}} /></a>
                    <a href="javascript:void(0);"><Image src={iconTelegram} alt="Team 13" style={{width:25, height:25}} /></a>
                    <a href="javascript:void(0);"><Image src={iconYoutube} alt="Team 13" style={{width:25, height:25}} /></a>
                    <a href="mailto: team-13@support.com" className="DefLink" style={{fontSize:12}}>team-13@support.com</a>
                </Stack>
            </div>
        </div>
        <div className="d-flex justify-content-between">
            <ul style={{marginRight:20, listStyleType:"none"}}>
                <li><Link className="DefLink" to={""}>КАЛЕНДАРЬ</Link></li>
                <li><Link className="DefLink" to={""}>КАРТА</Link></li>
                <li><Link className="DefLink" to={""}>ОБЗОРЫ</Link></li>
            </ul>

            <ul style={{listStyleType:"none"}}>
                <li><Link className="DefLink" to={""}>ПРОФИЛЬ</Link></li>
                <li><Link className="DefLink" to={""}>ПУТЕШЕСТВИЯ</Link></li>
                <li><Link className="DefLink" to={""}>РЕГИСТРАЦИЯ</Link></li>
            </ul>
            </div>
        </div>
    </div>
}

export default PageFooter;