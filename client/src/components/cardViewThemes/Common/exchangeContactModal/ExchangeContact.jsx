import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { shareContacts } from '../../../../api/UserRequest';
import { Link } from 'react-router-dom';

function ExchangeContact({ customButton, details, cardId }) {
    const [open, setOpen] = useState(false);
    const [shared, setShared] = useState(false);
    const [loader, setLoader] = useState(false);

    const onUploadButtonHandleClick = (identifierClick) => {
        // document.getElementById(`file-image-input-${identifierClick}`).click();
        setOpen(true)
    };

    const handleCancelUploadModal = () => {
        setOpen(false);
        setShared(false)
        // fileInputRef.current.value = null
    };
    const onFinish = async (values) => {
        console.log('Success:', values);

        try {
            setLoader(true)
            const { data } = await shareContacts(cardId, values)
            if (data.success) {
                setShared(true)
                setLoader(false)
            }
        } catch (error) {
            console.log(error);
        }


    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <span onClick={onUploadButtonHandleClick} className='cursor-pointer'>
                {customButton}
            </span>
            <Modal open={open} onCancel={handleCancelUploadModal} maskClosable={false} destroyOnClose={false} footer={false} >

                <div className='mt-5 flex justify-center items-center min-h-[200px]'>
                    {shared ?
                        <div>
                            <h1 className='font-bold text-xl my-5'>{details.successMessage}</h1>
                            <div className='flex gap-3 justify-center '>
                                <Button onClick={handleCancelUploadModal}>close</Button>
                                <Link to={'https://zeeqr.com/'} target='_blank'>
                                    <Button className='bg-black text-white'>Buy ZEEQR</Button>
                                </Link>
                            </div>
                        </div>
                        :
                        <div className='w-full' >
                            <h1 className='font-bold text-xl'>{details.tittle}</h1>
                            <h3>{details.description}</h3>

                            <Form
                                name="basic"
                                className='mt-5'
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                {details.fields.map((obj, index) => (

                                    <Form.Item
                                        // label="Username"
                                        // className='w-full'
                                        key={index}
                                        name={obj}
                                        rules={[
                                            {
                                                required: true,
                                                message: `Please input your ${obj}!`,
                                            },
                                        ]}
                                    >
                                        <Input className='bg-[#F9F9F9] placeholder-[#A5A5A5]' placeholder={obj} />
                                    </Form.Item>

                                ))}



                                <Form.Item
                                    className='flex justify-center mt-8'
                                >
                                    <Button loading={loader} className='bg-[#1D1D1F] text-white ' type="none" htmlType="submit">
                                        {details?.submitButton}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    }

                </div>
            </Modal>

        </div>
    )
}

export default ExchangeContact