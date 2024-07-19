"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const newYear = "2024-09-19T00:00:00";

export default function Home() {
  useEffect(() => {
    const daysEl = document.querySelector('.day');
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');
    const bracket1 = document.getElementById('bracket-1');
    const bracketInner = bracket1.querySelector('div');
    const bracket2 = document.getElementById('bracket-2');
    const bracketInner2 = bracket2.querySelector('div');
    const hiddenImage = document.querySelector('.hidden-image');

    const newYearDate = new Date(newYear);
    const initialTotalSeconds = (newYearDate - new Date()) / 1000;
    const totalDays = Math.floor(initialTotalSeconds / 3600 / 24);
    const maxBracketWidth = 42; // Max width in pixels
    const maxInnerWidth = 40; // Max inner width in pixels
    const maxMarginRight = 40; // Max margin-right in pixels

    function timeCountDown() {
      const nowDate = new Date();
      const newYearDate = new Date(newYear);
      const totalSeconds = (newYearDate - nowDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      daysEl.innerHTML = formatTime(days);
      hourEl.innerHTML = formatTime(hours);
      minuteEl.innerHTML = formatTime(minutes);
      secondEl.innerHTML = formatTime(seconds);

      updateBracketSize(days);
    }

    function formatTime(time) {
      return time >= 10 ? time : `0${time}`;
    }

    function updateBracketSize(daysRemaining) {
      const daysElapsed = totalDays - daysRemaining;
      const bracketWidth = 24 + ((maxBracketWidth - 6) * (daysElapsed / totalDays));
      const innerWidth = 12 + ((maxInnerWidth - 10) * (daysElapsed / totalDays));
      const marginRight = (daysElapsed / totalDays) * maxMarginRight;

      bracket1.style.width = `${bracketWidth}px`;
      bracketInner.style.width = `${innerWidth}px`;
      bracket2.style.width = `${bracketWidth}px`;
      bracketInner2.style.width = `${innerWidth}px`;
      bracket1.style.marginRight = `${marginRight}px`;

      // Show or hide the image based on marginRight value
      if (marginRight >= maxMarginRight) {
        hiddenImage.classList.remove('hidden');
      } else {
        hiddenImage.classList.add('hidden');
      }
    }

    timeCountDown();
    const interval = setInterval(timeCountDown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex justify-center p-24">
        <div className="relative flex flex-col items-center m-auto">
          <div className="relative flex items-center bg-white justify-between mt-24 mb-16 shadow-[1px_1px_100px_100px_#ffffff63] rounded-3xl">
            <div className='absolute w-full z-10 flex justify-center'>
              <Image
                className="hidden hidden-image" // Apply hidden class initially
                src="/img/svg/letter.svg"
                alt="Next.js Logo"
                width={80}
                height={137}
                priority
              />
            </div>
            <div id='bracket-1' className="relative w-6 h-52 bg-[#202042] rounded-l-md flex">
              <div className="w-3 h-44 bg-white m-auto absolute inset-y-0 right-0"></div>
            </div>
            <div id='bracket-2' className="relative w-6 h-52 bg-[#202042] rounded-r-md flex">
              <div className="w-3 h-44 bg-white m-auto absolute inset-y-0 left-0"></div>
            </div>
          </div>
          <div className="text-[#C2E2FF] text-4xl font-aeonik-medium hidden"><span className="font-aeonik-bold text-white" >Le Futur</span> c'est <span className="font-aeonik-bold text-white">aujourd'hui</span></div>
          <div className="text-[#C2E2FF] text-4xl font-aeonik-medium hidden">Cliquez sur l'ecran pour le vivre</div>
          <div className="text-[#C2E2FF] text-3xl font-aeonik-medium">Le <span className="text-white">Futur</span> à vous dans...</div>
          <div className="cd_timer my-4 flex items-center text-white">
            <div className="cd_container">
              <div className="border-[1px] border-[#fff] px-2 py-6 mx-2 font-aeonik-bold rounded-lg text-4xl day">00</div>
              <span className="text-sm font-aeonik-medium">Jours</span>
            </div>
            <div className="cd_container pb-7">
              <div className="font-aeonik-medium text-4xl">:</div>
              <span className="text-sm font-aeonik-medium"></span>
            </div>
            <div className="cd_container">
              <div className="border-[1px] border-white px-2 py-6 mx-2 font-aeonik-bold rounded-lg text-4xl hour">00</div>
              <span className="text-sm font-aeonik-medium">Heures</span>
            </div>
            <div className="cd_container pb-7">
              <div className="font-aeonik-medium text-4xl">:</div>
              <span className="text-sm font-aeonik-medium"></span>
            </div>
            <div className="cd_container">
              <div className="border-[1px] border-white px-2 py-6 mx-2 font-aeonik-bold rounded-lg text-4xl minute">00</div>
              <span className="text-sm font-aeonik-medium">Minutes</span>
            </div>
            <div className="cd_container pb-7">
              <div className="font-aeonik-medium text-4xl">:</div>
              <span className="text-sm font-aeonik-medium"></span>
            </div>
            <div className="cd_container">
              <div className="border-[1px] border-white px-2 py-6 mx-2 font-aeonik-bold rounded-lg text-4xl second">00</div>
              <span className="text-sm font-aeonik-medium">Secondes</span>
            </div>
          </div>
          <div className="text-[#C2E2FF] text-3xl font-aeonik-medium mt-10">...Mais vous pouvez par contre le joindre au</div>
          <div className="text-[#C2E2FF] text-3xl font-aeonik-medium"><a className="font-aeonik-bold text-white" href='tel:+2250777404136'>+225 07 77 40 41 36</a> ou via <a className="font-aeonik-bold text-white" href='mailto:info@asernum.com'>info@asernum.com</a></div>
          <div className="flex gap-2 mt-10">
            <a type="button" className="text-[#1B7AF5] bg-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
              <svg className="size-4" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63888 2.56076H5.75369V0.858375C5.58044 0.858375 5.39968 0.820729 5.21136 0.805664H4.20951C3.70483 0.805664 3.20767 0.956306 2.79337 1.24255C2.33388 1.58151 2.02504 2.09374 1.94218 2.65868C1.90452 2.88466 1.88195 3.11064 1.87442 3.33662V4.66991H0.254883V6.56058H1.86688V11.3137H3.87053V6.53798H5.48253L5.67838 4.66237H3.80277V3.3291C3.78017 2.9148 4.10408 2.56076 4.51838 2.5457C4.55604 2.5457 4.60121 2.5457 4.63888 2.5457" fill="#1B7AF5"/>
              </svg>
            </a>
            <a type="button" className="text-[#1B7AF5] bg-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
              <svg className="size-4" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.719021 3.26332H2.63229V9.41747H0.719021V3.26332ZM1.68317 0.205078C2.29332 0.205078 2.79049 0.709749 2.78295 1.31989C2.78295 1.93003 2.27828 2.4272 1.66814 2.41967C1.058 2.41967 0.568359 1.92252 0.568359 1.31238C0.568359 0.702232 1.06554 0.205078 1.67568 0.205078" fill="#1B7AF5"/>
                <path d="M3.81491 3.27094H5.64534V4.10705C6.02197 3.46677 6.71499 3.0826 7.46072 3.11274C9.39661 3.11274 9.75817 4.38576 9.75817 6.04294V9.41754H7.89009V6.42709C7.89009 5.71149 7.89008 4.79252 6.89578 4.79252C5.90147 4.79252 5.74326 5.5759 5.74326 6.3367V9.38743H3.80737V3.2634L3.81491 3.27094Z" fill="#1B7AF5"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
