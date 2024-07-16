/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Link from "next/link";
import React, { useState } from "react";
import Loader from "@/components/elements/Loader";
import Image, { StaticImageData } from "next/image";


const Button = ({
  type,
  text,
  onBtnClick,
  iconName,
  imgPath,
  btnStyle,
  imgStyle,
  loading,
  btn_type,
}) => {
  return (
    <>
      {type == "outline" ? (
        <button
          //type={btn_type}
          className={`border-2 flex items-center justify-center btn p-2 font-[500] gap-1 border-black text-black 2xl:text-[24px] md:text-[20px] text-[14px] rounded-lg ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <Image
                      className={`${imgStyle}`}
                      width={24}
                      height={24}
                      src={imgPath}
                      alt=""
                    />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      ) : (
        <button
          //type={btn_type}
          style={{background: 'linear-gradient(90deg, #22A1FE 0%, #FD18EF 100%)'}}
          className={`flex items-center justify-center btn gap-1 p-2 font-[500] text-center 2xl:text-[24px] md:text-[20px] text-[14px] rounded-lg ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <Image src={imgPath} width={24} height={24} alt="" />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
