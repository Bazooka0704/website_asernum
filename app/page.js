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
    const hiddenImage = document.querySelector('.hidden-image');

    const newYearDate = new Date(newYear);
    const initialTotalSeconds = (newYearDate - new Date()) / 1000;
    const totalDays = Math.floor(initialTotalSeconds / 3600 / 24);
    const maxSpaceX = 40;

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

      updateSpacing(days);
    }

    function formatTime(time) {
      return time >= 10 ? time : `0${time}`;
    }

    function updateSpacing(daysRemaining) {
      const daysElapsed = totalDays - daysRemaining;
      const spaceX = (daysElapsed / totalDays) * maxSpaceX;
      
      const spaceContainer = document.querySelector('.space-container');

      if (spaceX === 40) {
        spaceContainer.style.gap = `none`;
      } else {
        spaceContainer.style.gap = `${spaceX}px`;
      }

      // Show or hide the image based on spaceX value
      if (spaceX >= maxSpaceX) {
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
      <main className="flex justify-center px-8 md:px-8 h-full max-h-full">
        <div className="flex flex-col items-center m-auto">
          <div className="order-2 md:order-1 relative flex my-8  items-center bg-white justify-between shadow-[1px_1px_100px_100px_#ffffff63] rounded-3xl">
            {/* <div className='absolute w-full z-10 flex justify-center'>
              <Image
                className="hidden hidden-image w-[55px] md:w-[85px]" // Apply hidden class initially
                src="/img/svg/letter.svg"
                alt="Next.js Logo"
                width={0}
                height={0}
                priority
              />
            </div> */}
            <div className='space-container flex w-full space-x-0'>
              <div className="relative w-7 md:w-8 h-[120px] md:h-52 bg-[#202042] rounded-l-md">
                <div className="w-[18px] h-[100px] md:h-44 bg-white my-auto absolute inset-y-0 right-0"></div>
              </div>
              <div className='bg-white h-full flex m-auto'>
                <Image
                  className="hidden hidden-image w-[40px] md:w-[85px]" // Apply hidden class initially
                  src="/img/svg/letter.svg"
                  alt="Next.js Logo"
                  width={0}
                  height={0}
                  priority
                />
              </div>
              <div className="relative w-7 md:w-8 h-[120px] md:h-52 bg-[#202042] rounded-r-md flex">
                <div className="w-[18px] h-[100px] md:h-44 bg-white my-auto absolute inset-y-0 left-0"></div>
              </div>
            </div>
          </div>
          <div className='text-center order-1 md:order-2'>
            <div className="text-[#C2E2FF] text-sm md:text-4xl font-aeonik-medium hidden"><span className="font-aeonik-bold text-white" >Le Futur</span> c'est <span className="font-aeonik-bold text-white">aujourd'hui</span></div>
            <div className="text-[#C2E2FF] text-4xl font-aeonik-medium hidden">Cliquez sur l'ecran pour le vivre</div>
            <div className="text-[#C2E2FF] text-lg md:text-3xl font-aeonik-medium">Le <span className="text-white">Futur</span> à vous dans...</div>
            <div className="cd_timer my-4 flex items-center text-white">
              <div className="">
                <div className="border-[1px] border-white px-2 py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl w-12 md:w-16 day">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Jours</span>
              </div>
              <div className=" pb-7">
                <div className="font-aeonik-medium text-lg md:text-4xl">:</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium"></span>
              </div>
              <div className="">
                <div className="border-[1px] border-white px-2 py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl w-12 md:w-16 hour">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Heures</span>
              </div>
              <div className=" pb-7">
                <div className="font-aeonik-medium text-lg md:text-4xl">:</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium"></span>
              </div>
              <div className="">
                <div className="border-[1px] border-white px-2 py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl w-12 md:w-16 minute">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Minutes</span>
              </div>
              <div className=" pb-7">
                <div className="font-aeonik-medium text-lg md:text-4xl">:</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium"></span>
              </div>
              <div className="">
                <div className="border-[1px] border-white px-2 py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl w-12 md:w-16 second">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Secondes</span>
              </div>
            </div>
          </div>
          <div className='text-center order-3 md:my-6'>
            <div className="text-[#C2E2FF] text-lg md:text-xl lg:text-3xl font-aeonik-medium">...Mais vous pouvez par contre le joindre au</div>
            <div className="text-[#C2E2FF] text-lg md:text-xl lg:text-3xl font-aeonik-medium"><a className="font-aeonik-bold text-white" href='tel:+2250777404136'>+225 07 77 40 41 36</a> ou via <a className="font-aeonik-bold text-white" href='mailto:info@asernum.com'>info@asernum.com</a></div>
            <div className="flex gap-2 mt-10 md:mt-4 justify-center">
              <a href='https://www.facebook.com/asernum' target='_blank' className="text-[#1B7AF5] bg-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
              <svg className="size-4" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63888 2.56076H5.75369V0.858375C5.58044 0.858375 5.39968 0.820729 5.21136 0.805664H4.20951C3.70483 0.805664 3.20767 0.956306 2.79337 1.24255C2.33388 1.58151 2.02504 2.09374 1.94218 2.65868C1.90452 2.88466 1.88195 3.11064 1.87442 3.33662V4.66991H0.254883V6.56058H1.86688V11.3137H3.87053V6.53798H5.48253L5.67838 4.66237H3.80277V3.3291C3.78017 2.9148 4.10408 2.56076 4.51838 2.5457C4.55604 2.5457 4.60121 2.5457 4.63888 2.5457" fill="#1B7AF5"/>
                </svg>
              </a>
              <a href='https://www.linkedin.com/company/asernum/' target='_blank' className="text-[#1B7AF5] bg-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                <svg className="size-4" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.719021 3.26332H2.63229V9.41747H0.719021V3.26332ZM1.68317 0.205078C2.29332 0.205078 2.79049 0.709749 2.78295 1.31989C2.78295 1.93003 2.27828 2.4272 1.66814 2.41967C1.058 2.41967 0.568359 1.92252 0.568359 1.31238C0.568359 0.702232 1.06554 0.205078 1.67568 0.205078" fill="#1B7AF5"/>
                  <path d="M3.81491 3.27094H5.64534V4.10705C6.02197 3.46677 6.71499 3.0826 7.46072 3.11274C9.39661 3.11274 9.75817 4.38576 9.75817 6.04294V9.41754H7.89009V6.42709C7.89009 5.71149 7.89008 4.79252 6.89578 4.79252C5.90147 4.79252 5.74326 5.5759 5.74326 6.3367V9.38743H3.80737V3.2634L3.81491 3.27094Z" fill="#1B7AF5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
