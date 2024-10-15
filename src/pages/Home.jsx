import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import mainimg from "../../public/mainimg.png";
import location from "../../public/location.svg";
import { useTranslation } from "react-i18next";
import { createContext } from "react";
export const MoodeContext = createContext()
function Home() {



const [mood, setMood] = useState(() => {
    return localStorage.getItem("darkmode") === "true";
  });

useEffect(()=>{
localStorage.setItem('darkmode', mood)
},[mood])


  const { t, i18n } = useTranslation();
  return (

 <MoodeContext.Provider value={{mood , setMood}}>
       <div className={mood ? "dark": ""}>

<Header />
<div className="flex justify-center pt-6 dark:bg-black ">
  <div className="flex mb-16 bg-[#E4F7FF] w-[1388.33px] h-[560px] drop-shadow-xl  rounded-[50px]  items-center justify-around dark:bg-[#161616]">
    <div className="flex flex-col w-[500px] gap-[23px]">
      <p className="font-sans font-normal dark:text-[#999999]">
        {t("firstext")}
      </p>
      <div className="">
        <h2 className="font-extrabold text-4xl text-[#00085E] dark:text-[#A1A9FF]">
          {t("keep")}
        </h2>
      </div>
      <div className="flex gap-5 ">
        <img src={location} alt="" />
        <p className="text-1xl font-sans font-bold dark:text-[#878787]">
          {t("desc")}
        </p>
      </div>
      <h2 className="font-bold text-3xl font-sans dark:text-white">
        {t("our")}
      </h2>
      <p className="font-sans text-lg text-[#00085E] dark:[#999999] dark:text-[#999999]">
        {t("lasttext")}
      </p>
      <b className="p-[5px]  rounded-[30px] bg-white flex justify-between shadow-md dark:bg-[#0D0D0D]">
        <input
          type="text"
          placeholder="Your email address"
          className="outline-none p-3 rounded-[30px] dark:bg-[#0D0D0D] dark:text-white"
        />
        <button className="   pt-3 pb-3 border rounded-3xl pl-6 pr-6 text-white font-sans  font-medium bg-blue-500">
          JOIN LIST!
        </button>
      </b>
    </div>
    <div className="flex items-center">
      <img className="w-[450px]" src={mainimg} alt="" />
    </div>
  </div>
</div>
</div>
 </MoodeContext.Provider>
  );
}

export default Home;
