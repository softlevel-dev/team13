import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Stack from "react-bootstrap/Stack";
import Image from 'react-bootstrap/Image'
import Moment from "react-moment";
import leftArrowW from "../Res/leftArrow_white.svg";
import rightArrowW from "../Res/rightArrow_white.svg";
import leftArrow from "../Res/leftArrow.svg";
import rightArrow from "../Res/rightArrow.svg";
import Resizer from "react-image-file-resizer";

interface IArrowsProps
{
    distance?: number;
    leftClick?: () => void;
    rightClick?: () => void;
    styles?: React.StyleHTMLAttributes<HTMLDivElement>;
}

const Arrows = ({distance, leftClick, rightClick, styles}:IArrowsProps) => {
    
    var [btn1Active, SetBtn1Active] = useState(false);
    var [btn2Active, SetBtn2Active] = useState(false);

    var btn1Ref = React.createRef<HTMLAnchorElement>();
    var btn2Ref = React.createRef<HTMLAnchorElement>();

    const MouseIn = (e:any) => {

        e.target.id == "btn1" && SetBtn1Active(true);
        e.target.id == "btn2" && SetBtn2Active(true);
    }

    const MouseOut = (e:any) => {
        
        e.target.id == "btn1" && SetBtn1Active(false);
        e.target.id == "btn2" && SetBtn2Active(false);
    }

    useEffect(() => {
        btn1Ref?.current?.addEventListener("mouseenter", MouseIn);
        btn2Ref?.current?.addEventListener("mouseenter", MouseIn);
        btn1Ref?.current?.addEventListener("mouseleave", MouseOut);
        btn2Ref?.current?.addEventListener("mouseleave", MouseOut);

        return ()=>{
            btn1Ref?.current?.removeEventListener("mouseenter", MouseIn);
            btn2Ref?.current?.removeEventListener("mouseenter", MouseIn);
            btn1Ref?.current?.removeEventListener("mouseleave", MouseOut);
            btn2Ref?.current?.removeEventListener("mouseleave", MouseOut);
        }

    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height:30}}>
          <a href="javascript:void(0);" ref={btn1Ref} onClick={leftClick} id="btn1" style={{width:30}}>
            <Image src={btn1Active ? leftArrow : leftArrowW} style={{pointerEvents:"none", width:(btn1Active ? 30 : 20), height:(btn1Active ? 30 : 20)}}  />
          </a>
          <div style={{width:(distance ?? 80)}}></div>
          <a href="javascript:void(0);" ref={btn2Ref} onClick={rightClick} id="btn2" style={{width:30}}>
            <Image src={btn2Active ? rightArrow : rightArrowW} style={{pointerEvents:"none", width:(btn2Active ? 30 : 20), height:(btn2Active ? 30 : 20)}}  />
          </a>
        </div>
    );
  };
  
  export default Arrows;
  
