import { useState, useEffect, useCallback } from "react";
import { Tooltip, notification, Popconfirm, Drawer } from "antd";
import {
  CheckOutlined,
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  SyncOutlined,
} from "@ant-design/icons";

import { patchActvitiy } from "./patchActivity";
import { patchStreak } from "./patchStreak";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";
import { ConditionalWrapper } from "../../helpers/ConditionnalWrapper";
import { streakStore } from "../../store/streakStore";
import { Logo } from "../Logo/Logo";
import { Streak } from "../Streak/Streak";
import Snowflake from "../Menu/ObstacleButton/snowflake.png";

import "./Activity.css";

const WIDTH_SMALL_DEVICE_PIXEL = 900;

export const Activity = (props) => {
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateLoadingError, setUpdateLoadingError] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [count, setCount] = useState(props.count);
  const [smallDevice, setSmallDevice] = useState(
    window.innerWidth < WIDTH_SMALL_DEVICE_PIXEL ? true : false
  );

  const id = props.id;
  const dayFromToday = props.dayFromToday;
  const activity = props.activity.name;
  const increment = props.activity.increment;
  const goal = props.activity.goal;
  const optional = props.activity.optional;

  const isSmallDevice = useCallback(() => {
    setSmallDevice(window.innerWidth < WIDTH_SMALL_DEVICE_PIXEL ? true : false);
  }, []);

  useEffect(() => {
    isSmallDevice();
    window.addEventListener("resize", isSmallDevice);
    return () => {
      window.removeEventListener("resize", isSmallDevice);
    };
  }, [isSmallDevice]);

  const done =
    count >= goal ? (goal ? true : count > goal ? true : false) : false;

  const wasCountedAsDone = () => {
    if (dayFromToday === 0 || props.isLoading) {
      return false;
    } else {
      try {
        if (streakStore.dailyStreaks.get(dayFromToday)[activity] > 0) {
          if (
            streakStore.dailyStreaks.get(dayFromToday)[activity] ===
            streakStore.dailyStreaks.get(dayFromToday - 1)[activity]
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  };

  const handleMouseOver = () => {
    if (dayFromToday < 2) {
      if (goal > 1) {
        document.getElementById(
          activity + dayFromToday + "_minus"
        ).style.display = "block";
        document.getElementById(
          activity + dayFromToday + "_plus"
        ).style.display = "block";
      } else {
        document.getElementById(
          activity + dayFromToday + "_check"
        ).style.display = "block";
      }
    }
  };

  const handleMouseLeave = () => {
    if (dayFromToday < 2) {
      if (goal > 1) {
        document.getElementById(
          activity + dayFromToday + "_minus"
        ).style.display = "none";
        document.getElementById(
          activity + dayFromToday + "_plus"
        ).style.display = "none";
      } else {
        document.getElementById(
          activity + dayFromToday + "_check"
        ).style.display = "none";
      }
    }
  };

  const handlePlusClick = async (yesterday = false) => {
    setUpdateLoading(true);
    setUpdateLoadingError(false);
    const newCount = count + increment;
    const resultPlus = await patchActvitiy(id, activity, newCount);
    if (yesterday) {
      await patchStreak(activity);
    }
    if (resultPlus.status === 200) {
      setCount(newCount);
      setUpdateLoading(false);
    } else {
      notification.error({
        message: resultPlus.message,
      });
      setUpdateLoadingError(true);
    }
  };

  const handleMinusClick = async (yesterday = false) => {
    setUpdateLoading(true);
    setUpdateLoadingError(false);
    const newCount = count >= increment ? count - increment : 0;
    const resultMinus = await patchActvitiy(id, activity, newCount);
    if (yesterday) {
      await patchStreak(activity);
    }
    if (resultMinus.status === 200) {
      setCount(newCount);
      setUpdateLoading(false);
    } else {
      notification.error({
        message: resultMinus.message,
      });
      setUpdateLoadingError(true);
    }
  };

  return (
    <>
      <Drawer
        title={
          <>
            {capitalizeFirstLetter(props.activity.name)}
            <span className="Drawer__title">
              {capitalizeFirstLetter(props.activity.desc)}
            </span>
            <Streak
              activity={props.activity}
              dayFromToday={dayFromToday}
              float={false}
            />
          </>
        }
        closable={true}
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        placement={"bottom"}
      >
        {goal > 1 ? (
          <div className="Activity__fullDrawerButton">
            <div
              className="Activity__drawerButton Activity__drawerActionButton"
              style={{ fontSize: "5em" }}
              id={activity + dayFromToday + "_minus"}
              onClick={handleMinusClick}
            >
              <MinusOutlined />
            </div>

            <div className="Activity__drawerButton" style={{ fontSize: "2em" }}>
              {updateLoading ? (
                <SyncOutlined spin style={{ color: "#999" }} />
              ) : (
                <span
                  className={
                    count < goal ? "" : count === goal ? "green" : "gold"
                  }
                >
                  {count}
                </span>
              )}
              <span className="transparentWhite">&nbsp;/ {goal}</span>
            </div>
            <div
              className="Activity__drawerButton Activity__drawerActionButton"
              style={{ fontSize: "5em" }}
              id={activity + dayFromToday + "_plus"}
              onClick={handlePlusClick}
            >
              <PlusOutlined />
            </div>
          </div>
        ) : !done ? (
          <div
            className="Activity__fullDrawerButton Activity__drawerActionButton"
            style={{ fontSize: "7em" }}
            id={activity + dayFromToday + "_check"}
            onClick={handlePlusClick}
          >
            <CheckOutlined />
          </div>
        ) : (
          <div
            className="Activity__fullDrawerButton Activity__drawerActionButton"
            style={{ fontSize: "7em" }}
            id={activity + dayFromToday + "_check"}
            onClick={handleMinusClick}
          >
            <CloseOutlined />
          </div>
        )}
      </Drawer>
      <ConditionalWrapper
        condition={!smallDevice}
        wrap={(children) => (
          <Tooltip
            placement="top"
            title={
              <>
                {props.activity.desc}{" "}
                <Streak activity={props.activity} dayFromToday={dayFromToday} />
              </>
            }
          >
            {children}
          </Tooltip>
        )}
      >
        <div className="Activity__item">
          {optional && !done && <div className="Activity__optional" />}
          {done && (
            <div className="Activity__doneContainer">
              <div className="Activity__done">
                <CheckOutlined />
              </div>
            </div>
          )}
          {wasCountedAsDone() && !done && (
            <div className="Activity__freezeContainer">
              <div className="Activity__freeze">
                <img src={Snowflake} alt="travel" className="snowflakeLogo" />
              </div>
            </div>
          )}
          {smallDevice ? (
            dayFromToday === 0 ? (
              <div
                className={`Activity__actionContainer`}
                onClick={() => setDrawerVisible(true)}
              ></div>
            ) : (
              dayFromToday === 1 && (
                <Popconfirm
                  title={
                    <>
                      Update this task from{" "}
                      <b>
                        <u>yesterday</u>
                      </b>
                      ?
                    </>
                  }
                  placement="bottom"
                  onConfirm={() => setDrawerVisible(true)}
                  okText="Yes"
                  cancelText="No"
                >
                  <div className={`Activity__actionContainer`}></div>
                </Popconfirm>
              )
            )
          ) : (
            <div
              className={`Activity__actionContainer ${
                goal === 0 ? "" : "Activity__actionContainerHover"
              }`}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              {goal > 1 ? (
                <>
                  <>
                    {dayFromToday === 0 ? (
                      <div
                        className="Activity__action"
                        id={activity + dayFromToday + "_minus"}
                        onClick={handleMinusClick}
                      >
                        <MinusOutlined />
                      </div>
                    ) : (
                      <Popconfirm
                        title={
                          <>
                            Update this task from{" "}
                            <b>
                              <u>yesterday</u>
                            </b>
                            ?
                          </>
                        }
                        placement="bottom"
                        onConfirm={handleMinusClick}
                        okText="Yes"
                        cancelText="No"
                      >
                        <div
                          className="Activity__action"
                          id={activity + dayFromToday + "_minus"}
                        >
                          <MinusOutlined />
                        </div>
                      </Popconfirm>
                    )}
                    {dayFromToday === 0 ? (
                      <div
                        className="Activity__action"
                        id={activity + dayFromToday + "_plus"}
                        onClick={handlePlusClick}
                      >
                        <PlusOutlined />
                      </div>
                    ) : (
                      <Popconfirm
                        title={
                          <>
                            Update this task from{" "}
                            <b>
                              <u>yesterday</u>
                            </b>
                            ?
                          </>
                        }
                        placement="bottom"
                        onConfirm={() => handlePlusClick(true)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <div
                          className="Activity__action"
                          id={activity + dayFromToday + "_plus"}
                        >
                          <PlusOutlined />
                        </div>
                      </Popconfirm>
                    )}
                  </>
                </>
              ) : !done ? (
                <>
                  {dayFromToday === 0 ? (
                    <div
                      className="Activity__action"
                      id={activity + dayFromToday + "_check"}
                      onClick={handlePlusClick}
                    >
                      <CheckOutlined />
                    </div>
                  ) : (
                    <Popconfirm
                      title={
                        <>
                          Update this task from{" "}
                          <b>
                            <u>yesterday</u>
                          </b>
                          ?
                        </>
                      }
                      placement="bottom"
                      onConfirm={() => handlePlusClick(true)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <div
                        className="Activity__action"
                        id={activity + dayFromToday + "_check"}
                      >
                        <CheckOutlined />
                      </div>
                    </Popconfirm>
                  )}
                </>
              ) : (
                <>
                  {dayFromToday === 0 ? (
                    <div
                      className="Activity__action"
                      id={activity + dayFromToday + "_check"}
                      onClick={handleMinusClick}
                    >
                      <CloseOutlined />
                    </div>
                  ) : (
                    <Popconfirm
                      title={
                        <>
                          Update this task from{" "}
                          <b>
                            <u>yesterday</u>
                          </b>
                          ?
                        </>
                      }
                      placement="bottom"
                      onConfirm={handleMinusClick}
                      okText="Yes"
                      cancelText="No"
                    >
                      <div
                        className="Activity__action"
                        id={activity + dayFromToday + "_check"}
                      >
                        <CloseOutlined />
                      </div>
                    </Popconfirm>
                  )}
                </>
              )}
            </div>
          )}

          <Logo image={props.activity.icon} />

          <div className={`Activity__text`}>
            {updateLoadingError ? (
              <CloseOutlined style={{ color: "#C70039" }} />
            ) : updateLoading ? (
              <>
                {goal > 1 ? (
                  <>
                    <SyncOutlined spin style={{ color: "#999" }} /> / {goal}{" "}
                  </>
                ) : (
                  <SyncOutlined spin style={{ color: "#999" }} />
                )}
                {goal > 1 && props.activity.unit}
              </>
            ) : (
              <>
                {goal > 1 ? `${count} / ${goal} ` : `${props.activity.unit}!`}
                {goal > 1 && props.activity.unit}
              </>
            )}
            {optional && (
              <div style={{ fontStyle: "italic", fontSize: ".7em" }}>
                <i>optional</i>
              </div>
            )}
          </div>
        </div>
      </ConditionalWrapper>
    </>
  );
};
