export default function Footer(){
    return(
    <div className="flex flex-col bottom-0 absolute min-w-full">
        <div className='text-center order-3 mb-4'>
            <div className="flex gap-2 mt-4 md:mt-4 justify-center">
              <a href='https://www.facebook.com/asernum' target='_blank' className="text-[#1B7AF5] bg-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
              <svg className="size-4" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.63888 2.56076H5.75369V0.858375C5.58044 0.858375 5.39968 0.820729 5.21136 0.805664H4.20951C3.70483 0.805664 3.20767 0.956306 2.79337 1.24255C2.33388 1.58151 2.02504 2.09374 1.94218 2.65868C1.90452 2.88466 1.88195 3.11064 1.87442 3.33662V4.66991H0.254883V6.56058H1.86688V11.3137H3.87053V6.53798H5.48253L5.67838 4.66237H3.80277V3.3291C3.78017 2.9148 4.10408 2.56076 4.51838 2.5457C4.55604 2.5457 4.60121 2.5457 4.63888 2.5457" fill="#1B7AF5"/>
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
          <footer className="footer  min-w-full order-4 flex flex-col">
            <div className="w-full mx-auto max-w-screen-xl p-2 md:p-4 text-center">
            <span className="text-sm md:text-md text-white font-aeonik-medium">Copyright © 2024 Asernum
            </span>
            </div>
        </footer>
    </div>

    );
}