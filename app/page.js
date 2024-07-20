"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const now = "2024-07-19T00:00:00";
const newYear = "2024-09-19T00:00:00";

export default function Home() {
  useEffect(() => {
    const daysEl = document.querySelector('.day');
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');
    const hiddenImage = document.querySelector('.hidden-image');
    const countText1 = document.querySelector('#count-text-1');
    const countText2 = document.querySelector('#count-text-2');
    const todayText = document.querySelector('#today-text');

    const newYearDate = new Date(newYear);
    const initialTotalSeconds = (newYearDate - new Date(now)) / 1000;
    const maxSpaceX = 40;

    function timeCountDown() {
      const nowDate = new Date();
      const newYearDate = new Date(newYear);
      const totalSeconds = (newYearDate - nowDate) / 1000;

      if (totalSeconds <= 0) {
        daysEl.innerHTML = '00';
        hourEl.innerHTML = '00';
        minuteEl.innerHTML = '00';
        secondEl.innerHTML = '00';
        
        countText1.classList.add('hidden');
        countText2.classList.add('hidden');
        todayText.classList.remove('hidden');
        updateSpacing(totalSeconds);
        return;
      }

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      daysEl.innerHTML = formatTime(days);
      hourEl.innerHTML = formatTime(hours);
      minuteEl.innerHTML = formatTime(minutes);
      secondEl.innerHTML = formatTime(seconds);

      updateSpacing(totalSeconds);
    }

    function formatTime(time) {
      return time >= 10 ? time : `0${time}`;
    }

    function updateSpacing(secondsRemaining) {
      const secondsElapsed = initialTotalSeconds - secondsRemaining;
      const spaceX = (secondsElapsed / initialTotalSeconds) * maxSpaceX;
      console.log(spaceX);

      const spaceContainer = document.querySelector('.space-container');
      spaceContainer.style.gap = spaceX >= 40 ? 'none' : `${spaceX}px`;

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
      <main className="flex flex-col px-6 md:px-8  items-center justify-center min-h-full">
        <div className="flex flex-col items-center mx-auto">
          <div className="order-2 md:order-1 relative flex my-2 md:my-8 lg:my-0  items-center bg-white justify-between shadow-[1px_1px_100px_100px_#ffffff63] rounded-3xl">

            <div className='space-container flex w-full space-x-0'>
              <div className="relative w-5 md:w-6 xl:w-7 h-20 md:h-[120px] lg:h-32 xl:h-52 bg-[#202042] rounded-l-md">
                <div className="w-[10px] md:w-3 h-16 md:h-24 lg:h-24 xl:h-44 bg-white my-auto absolute inset-y-0 right-0"></div>
              </div>
              <div className='bg-white h-full flex m-auto'>
                <Image
                  className="hidden hidden-image w-[30px] md:w-[40px] lg:w-[45px] xl:w-[70px]" // Apply hidden class initially
                  src="/img/svg/letter.svg"
                  alt="Next.js Logo"
                  width={0}
                  height={0}
                  priority
                />
              </div>
              <div className="relative w-5 md:w-6 xl:w-7 h-20 md:h-[120px] lg:h-32 xl:h-52 bg-[#202042] rounded-r-md flex">
                <div className="w-[10px] md:w-3 h-16 md:h-24 lg:h-24 xl:h-44 bg-white my-auto absolute inset-y-0 left-0"></div>
              </div>
            </div>
          </div>
          <div id='today-text' className='hidden order-1 md:order-2 text-center mt-16'>
              <div className="text-[#C2E2FF] text-lg md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-aeonik-medium"><span className="font-aeonik-bold text-white" >Le Futur</span> c'est <span className="font-aeonik-bold text-white">aujourd'hui</span></div>
              <div  className="text-[#C2E2FF] text-lg md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-aeonik-medium">Cliquez sur l'ecran pour le vivre</div>
            </div>
          <div id='count-text-1' className='text-center order-1 md:order-2 my-2 2xl:my-8'>
            <div className="text-[#C2E2FF] text-lg md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-aeonik-medium">Le <span className="text-white font-aeonik-bold">Futur</span> à vous dans...</div>
            <div className="cd_timer my-4 flex items-center text-white">
              <div className="">
                <div className="border-[1px] border-white py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl lg:text-xl 2xl:text-4xl w-12 md:w-16 lg:w-12 2xl:w-16 day">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Jours</span>
              </div>
              <div className=" pb-7">
                <div className="font-aeonik-medium text-lg md:text-4xl lg:text-xl">:</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium"></span>
              </div>
              <div className="">
                <div className="border-[1px] border-white py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl lg:text-xl 2xl:text-4xl w-12 md:w-16 lg:w-12 2xl:w-16 hour">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Heures</span>
              </div>
              <div className=" pb-7">
                <div className="font-aeonik-medium text-lg md:text-4xl lg:text-xl">:</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium"></span>
              </div>
              <div className="">
                <div className="border-[1px] border-white py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl lg:text-xl 2xl:text-4xl w-12 md:w-16 lg:w-12 2xl:w-16 minute">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Minutes</span>
              </div>
              <div className=" pb-7">
                <div className="font-aeonik-medium text-lg md:text-4xl lg:text-xl">:</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium"></span>
              </div>
              <div className="">
                <div className="border-[1px] border-white py-6 mx-1 md:mx-2 font-aeonik-bold rounded-lg text-lg md:text-4xl lg:text-xl 2xl:text-4xl w-12 md:w-16 lg:w-12 2xl:w-16 second">00</div>
                <span className="text-[10px] md:text-sm font-aeonik-medium">Secondes</span>
              </div>
            </div>
          </div>
          <div id='count-text-2' className='text-center order-3'>
            <div className="text-[#C2E2FF] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-aeonik-medium">...Mais vous pouvez le joindre au</div>
            <div className="text-[#C2E2FF] text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-aeonik-medium"><a className="font-aeonik-bold text-white" href='tel:+2250777404136'>+225 07 77 40 41 36</a> ou via <a className="font-aeonik-bold text-white" href='mailto:info@asernum.com'>info@asernum.com</a></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
