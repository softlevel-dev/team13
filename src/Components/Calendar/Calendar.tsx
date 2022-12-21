import React, {useContext, useEffect, useState} from "react";
import { CSSTransition } from "react-transition-group";
import { Link, useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";

import leftArrow from "../Res/leftArrow.svg";
import rightArrow from "../Res/rightArrow.svg";

function DaysInMonth(dt: Date) {
    return 33 - new Date(dt.getFullYear(), dt.getMonth(), 33).getDate();
  }
  
  function EqualsDate(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  interface IDateQueue {
    StartDate: Date;
    noborder?: boolean;
    small?: boolean;
    monthcontrol?: boolean;
    time?: boolean;
    date?: boolean;
    OnDaySelect: (day: Date) => void;
    OnDayRender?: (day: Date) => JSX.Element;
  }
  
  interface IMonthSwitcher {
    currentDate: Date;
    OnMonthSwitch: (month: number) => void;
    OnDateChange: (date: Date) => void;
  }

  const MonthSwitcher = (props: IMonthSwitcher) => {
    var monthes = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var [currentDate, setCurrentDate] = useState(props.currentDate);
    var [currentMonth, setCurrentMonth] = useState(props.currentDate.getMonth());
  
    const BackOnMonth = () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      setCurrentDate(currentDate);
      setCurrentMonth(currentDate.getMonth());
      props.OnDateChange(currentDate);
    };
  
    const FrontOnMonth = () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      setCurrentDate(currentDate);
      setCurrentMonth(currentDate.getMonth());
      props.OnDateChange(currentDate);
    };
  
    return (
      <div className="d-flex justify-content-between my-3 align-items-center">
        <a
          onClick={() => BackOnMonth()}
          href="javascript:void(0)"
          style={{
            color: "white",
            marginTop: 4,
          }}
          className=""
        >
          <img src={leftArrow} />
        </a>
        <a
          href="javascript:void(0)"
          style={{ color: "white" }}
          onClick={() =>
            props.OnMonthSwitch(
              currentMonth - 1 >= 0 ? currentMonth - 1 : monthes.length - 1
            )
          }
          className="text-decoration-none"
        >
          {monthes[currentMonth - 1 >= 0 ? currentMonth - 1 : monthes.length - 1]}
        </a>
        <a
          href="javascript:void(0)"
          style={{ color: "white" }}
          onClick={() => props.OnMonthSwitch(currentMonth)}
          className="text-decoration-none"
        >
          {monthes[currentMonth]}
        </a>
        <a
          href="javascript:void(0)"
          style={{ color: "white" }}
          onClick={() =>
            props.OnMonthSwitch(
              currentMonth + 1 < monthes.length ? currentMonth + 1 : 0
            )
          }
          className="text-decoration-none"
        >
          {monthes[currentMonth + 1 < monthes.length ? currentMonth + 1 : 0]}
        </a>
        <a
          onClick={() => FrontOnMonth()}
          href="javascript:void(0)"
          style={{ color: "white" }}
        >
          <img src={rightArrow} />
        </a>
      </div>
    );
  };  

const Calendar = (props: IDateQueue): JSX.Element => {
  
  var houers = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  var minutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];

  var [currentDate, setCurrentDate] = useState(props.StartDate);
  var [dateedit, SetDateEdit] = useState(true);
  var daysLang: any = [];

  var daynames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  var calendarContainer = React.createRef<HTMLDivElement>();
  var days = DaysInMonth(currentDate);
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var chouers = currentDate.getHours();
  var cminutes = currentDate.getMinutes();

  var prevmonth = new Date(currentDate);
  prevmonth.setMonth(currentDate.getMonth() - 1);
  var prevmonthdays = DaysInMonth(prevmonth);

  var cellwidth = 100 / 7;
  var cellindex = 1;
  var nextdaycount = 0;
  var prevmonthday = 0;

  var firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  var startindex = firstDayOfMonth.getDay();
  //props.OnDaySelect(date)

  const setCurrentHTime = (h: number) => {
    var d1 = new Date(currentDate);
    d1.setHours(h);
    setCurrentDate(d1);
  };

  const setCurrentMTime = (m: number) => {
    var d1 = new Date(currentDate);
    d1.setMinutes(m);
    setCurrentDate(d1);
  };

  useEffect(() => {
    var correctcellwidth = calendarContainer.current
      ? calendarContainer.current?.clientWidth / 7
      : 0;
    var list: HTMLCollectionOf<Element> =
      document.getElementsByClassName("cell");

    for (var element in list) {
      if (list[element] instanceof HTMLDivElement) {
        (
          list[element] as HTMLDivElement
        ).style.height = `${correctcellwidth}px`;
      }
    }
  });

  useEffect(()=>
  {
    setCurrentDate(props.StartDate)
  }, [props.StartDate])

  useEffect(()=>
  {
      props.OnDaySelect(currentDate);
  }, [currentDate])

  return (
    <>
      <div style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
      
      {props.time ? (
        <span
          onClick={() => {
            SetDateEdit(true);
          }}
          style={{ cursor: "pointer" }}
          className={dateedit ? "text-underline" : ""}
        >
          <Moment format="DD.MM.YYYY">{currentDate}</Moment>
        </span>
        ) : (<></>)}

        &nbsp;
      
        {props.time ? (
        <span
          onClick={() => {
            SetDateEdit(false);
          }}
          style={{ cursor: "pointer" }}
          className={dateedit == false ? "text-underline" : ""}
        >
          <Moment format="HH:mm">{currentDate}</Moment>
        </span>
        ) : (<></>)}
      </div>

      <div className="d-block py-2"  style={{position:"relative"}}>
        <CSSTransition in={dateedit} unmountOnExit timeout={300} classNames="alert" style={{position:"absolute", height: 420, width:"100%"}}>
          <div className="">
            {props.monthcontrol ? (
              <MonthSwitcher
                currentDate={currentDate}
                OnDateChange={(newdate) => setCurrentDate(newdate)}
                OnMonthSwitch={(month: number) => {
                  var newdate = new Date(
                    currentDate.getFullYear(),
                    month,
                    currentDate.getDate(),
                    currentDate.getHours(),
                    currentDate.getMinutes(),
                    0
                  );
                  setCurrentDate(newdate);
                  props.OnDaySelect(currentDate);
                }}
              ></MonthSwitcher>
            ) : (
              <></>
            )}
            <div
              style={{ border: props.noborder ? "" : "1px solid #DEEEFD" }}
              className="my-4 clearfix d-block"
              ref={calendarContainer}
            >
              {daynames.map((item: any, index: number) => {
                return (
                  <div
                    style={{
                      display: "inline-block",
                      width: cellwidth + "%",
                      border: props.noborder ? "" : "1px solid #DEEEFD",
                      color: "white",
                      textAlign: props.small ? "center" : "center",
                      boxSizing: "border-box",
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                  >
                    {item}
                  </div>
                );
              })}
              {[1, 2, 3, 4, 5, 6].map((item, masterindex) => {
                return [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                  cellindex++;
                  if (cellindex > days + startindex) {
                    nextdaycount++;
                    month = currentDate.getMonth() + 1;
                  }
                  if (cellindex <= startindex) {
                    prevmonthday++;
                    month = currentDate.getMonth() - 1;
                  }
                  if (
                    cellindex > startindex &&
                    cellindex <= days + startindex
                  ) {
                    month = currentDate.getMonth();
                  }
                  var day =
                    cellindex <= days + startindex && cellindex > startindex
                      ? (cellindex - startindex).toString().padStart(2, "0")
                      : (cellindex <= startindex
                          ? prevmonthdays - startindex + 1 + prevmonthday
                          : nextdaycount
                        )
                          .toString()
                          .padStart(2, "0");
                  var date = new Date(
                    year,
                    month,
                    parseInt(day),
                    chouers,
                    cminutes,
                    0
                  );

                  return (
                    <div
                      className="cell"
                      onClick={() => {
                        setCurrentDate(date);
                        props.OnDaySelect(currentDate);
                      }}
                      style={{
                        display: "inline-block",
                        textAlign: "left",
                        padding: 15,
                        fontSize: 18,
                        verticalAlign: "top",
                        height: 110,
                        width: cellwidth + "%",
                        border: props.noborder ? "" : "1px solid #DEEEFD",
                        color: "#777E90",
                        boxSizing: "border-box",
                        paddingTop: 10,
                        paddingBottom: 10,
                        backgroundColor: EqualsDate(date, currentDate)
                          ? "red"
                          : "",
                      }}
                    >
                      <span
                        className={
                          cellindex <= days + startindex &&
                          cellindex > startindex
                            ? "text-white" : "text-dark"
                        }
                      >
                        {props.OnDayRender ? props.OnDayRender(date) : day}
                      </span>
                    </div>
                  );
                });
              })}
            </div>
          </div>
        </CSSTransition>
        {props.time ? (
        <CSSTransition in={dateedit == false} unmountOnExit timeout={300} classNames="alert" style={{position:"absolute", height: 420, width:"100%"}}>
          <div
            className="d-flex justify-content-center"
            style={{ maxHeight: 400 }}
          >
            <div className="overflow-auto w-25">
              {houers.map((item: string, index) => (
                <div
                  className={
                    "timelabel " +
                    (currentDate.getHours() == parseInt(item)
                      ? "selectedtime"
                      : "")
                  }
                  onClick={() => setCurrentHTime(parseInt(item))}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="overflow-auto w-25">
              {minutes.map((item: string, index) => (
                <div
                  className={
                    "timelabel " +
                    (currentDate.getMinutes() == parseInt(item)
                      ? "selectedtime"
                      : "")
                  }
                  onClick={() => setCurrentMTime(parseInt(item))}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CSSTransition>) : (<></>)}
      </div>
    </>
  );
};

export default Calendar;