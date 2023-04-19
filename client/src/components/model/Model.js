import { Button, Modal } from 'antd';
import { useState } from 'react';
import LoginPage from '../login/Login2'
const App = ({modal2Open,setModal2Open}) => {


  return (
    <>
     
    
      <Modal
        // title="Vertically centered modal dialog"
        
        width={1120}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <LoginPage/>
      </Modal>
    </>
  );
};
export default App;