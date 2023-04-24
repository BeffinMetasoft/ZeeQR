import { Modal } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginAndRegister from '../loginAndRegisterModal/LoginAndRegister';

function Landing() {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className='pt-[150px] text-center bg-slate-200 h-screen'>
      <h1 className='text-6xl font-bold '>Ready to get start</h1>
      <p className='mt-3 text-lg' >Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Ea quibusdam a porro reprehenderit.</p>
      <Link onClick={() => { setModal2Open(true) }} className="inline-block text-sm px-5  py-4 leading-none border rounded text-white border-white border-transparent  bg-black mt-4 ">get start</Link>
      {/* <Modal
        // title="Vertically centered modal dialog"

        width={1000}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <LoginAndRegister />
      </Modal> */}


      {modal2Open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">

                {/*body*/}
                <div className="justify-center  items-center p-5 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none" id="modal"  >
                  <div className='bg-black md:w-5/6 mt-10 relative p-10 '>
                  <button className="cursor-pointer absolute top-0 right-0 mt-8   mr-5 text-white hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={() => setModal2Open(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                    <LoginAndRegister />
                  </div>

                  

                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

      ) : null}

    </div>
  )
}

export default Landing