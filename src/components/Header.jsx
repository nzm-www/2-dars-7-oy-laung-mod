import React, { useEffect, useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const [lang, setLange] = useState("uz");

  function handleChange(e) {
    setLange(e.target.value);
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="drop-shadow-xl  bg-white">
      <div className="container w-[1430px] m-auto  items-center p-5 ">
        <div className="flex justify-between">
          <div className="font-serif text-3xl font-bold">
            <h2>YOUR LOGO</h2>
          </div>
          <nav className="flex gap-8 font-sans text-lg cursor-pointer ">
            <p>{t("assets")}</p>
            <p>{t('Creators')}</p>
            <p>{t('Careers')}</p>
            <p>{t('Go Pro')}</p>
          </nav>
          <div className="flex items-center gap-20">
            <form class="max-w-sm mx-auto">
              <label for="underline_select" class="sr-only">
                Underline select
              </label>
              <select onChange={handleChange} value={lang}
                id="underline_select"
                class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option  selected>
                  Choose a Launge
                </option>
                <option value="uz">Uzbbekistan</option>
                <option value="ru">Russiya</option>
                <option value="en">England</option>
              </select>
            </form>
            <div>
              <label class="relative inline-block h-7 w-[48px] cursor-pointer rounded-full bg-gray-900 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#1976D2]">
                <input
                  type="checkbox"
                  id="AcceptConditions"
                  class="peer sr-only"
                />
                <span class="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-gray-300 ring-[5px] ring-inset ring-white transition-all peer-checked:start-7 bg-gray-900 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
