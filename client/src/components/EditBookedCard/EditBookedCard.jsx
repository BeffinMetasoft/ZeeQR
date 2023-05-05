import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getSigleCardData, UpdateBookedCard } from '../../api/UserRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseSpinner from '../../hooks/UseSpinner';
import { SketchPicker } from 'react-color'

function EditBookedCard({ cardId }) {
    useEffect(() => {
        const singleCardData = async () => {
            try {
                const { data } = await getSigleCardData(cardId)
                console.log(data);
                if (data.success) {
                    console.log('qwerty');
                    setUserData(data.card)

                }
            } catch (error) {
                console.log(error);
            }
        }
        singleCardData()
    }, [cardId])

    // const initialValues = {
    //     name: "", companyName: "", companyDesignation: "", phone: "",
    //     about: "", facebook: "", instagram: "", twitter: "", skype: "", linkedIn: "", youtube: "", email: "", address: "",
    //     country: "", state: "", websiteName: "", websiteUrl: ""
    // }
    const [userData, setUserData] = useState('')
    const [error, setError] = useState({});
    const [backgroundImage, setBackgroundImage] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [companyLogo, setCompanyLogo] = useState('')
    const [websiteImage, setWebsiteImage] = useState('')
    const [hightlightPhotos, setHightlightPhotos] = useState([])
    const navigate = useNavigate()
    const [showBg, setShowBg] = useState('')
    const [showPf, setShowPf] = useState('')
    const [showLg, setShowLg] = useState('')
    const [showWb, setShowWb] = useState('')
    const [showHg, setShowHg] = useState([])

    const [currentColor, setCurrentColor] = useState('')
    // const defCheck= userData?.checkLogo
    // const defHg= userData?.checkHighlight
    // console.log(defHg,'1st check');
    const [checked, setChecked] = useState()
    const [checkHg, setcheckHg] = useState()
    const [checkProfile, setcheckProfile] = useState()
    const [checkPfCard, setCheckPfCard] = useState()



    const [loader, showLoader, hideLoder] = UseSpinner()


    const allData = {
        ...userData
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
        // console.log(userData, "qwerty");
        // console.log(checked, "123");

    }
    const handleCheckbox = (e) => {

        if (e.target.checked) {
            // console.log('✅ Checkbox is checked');
            setChecked(true)
            // console.log(checked,'456456');
        } else {
            // console.log('⛔️ Checkbox is NOT checked');
            setChecked(false)
            // console.log(checked,'456456');
        }

    }

    const handleCheckHighlight = (e) => {
        if (e.target.checked) {
            // console.log('✅ Checkbox is checked');
            setcheckHg(true)
        } else {
            // console.log('⛔️ Checkbox is NOT checked');
            setcheckHg(false)
        }
    }
    const handleCheckProfile = (e) => {
        if (e.target.checked) {
            // console.log('✅ Checkbox is checked');
            setcheckProfile(true)
        } else {
            // console.log('⛔️ Checkbox is NOT checked');
            setcheckProfile(false)
        }
    }
    const handleCheckPfCard = (e) => {
        if (e.target.checked) {
            // console.log('✅ Checkbox is checked');
            setCheckPfCard(true)
        } else {
            // console.log('⛔️ Checkbox is NOT checked');
            setCheckPfCard(false)
        }
    }


    const handleBg = (e) => {
        setShowBg(URL.createObjectURL(e.target.files[0]))
        setBackgroundImage(e.target.files[0])
    }
    const handlePf = (e) => {
        setShowPf(URL.createObjectURL(e.target.files[0]))
        setProfileImage(e.target.files[0])
    }
    const handleLg = (e) => {
        setShowLg(URL.createObjectURL(e.target.files[0]))
        setCompanyLogo(e.target.files[0])
    }
    const handleWb = (e) => {
        setShowWb(URL.createObjectURL(e.target.files[0]))
        setWebsiteImage(e.target.files[0])
    }
    const handleHg = (e) => {
        const array = []
        for (let i = 0; i < e.target.files.length; i++) {
            array.push(URL.createObjectURL(e.target.files[i]))
        }
        setShowHg(array)
        setHightlightPhotos(e.target.files)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const errors = validateForm(allData, websiteImage)
        console.log(Object.keys(errors).length);
        setError(errors)
        userData.colorCode = currentColor

        if (Object.keys(errors).length === 0) {

            showLoader()
            console.log(checkHg, 'checkhggggggggg');

            const datas = new FormData();
            datas.append('bgImage', backgroundImage)
            datas.append('pfImage', profileImage)
            datas.append('companyLg', companyLogo)
            datas.append('wbImage', websiteImage)
            datas.append('checkLogo', checked)
            datas.append('checkHighlight', checkHg)
            datas.append('checkProfile', checkProfile)
            datas.append('checkPfCard', checkPfCard)
            for (let i = 0; i < hightlightPhotos.length; i++) {
                datas.append('hgPhotos', hightlightPhotos[i])
            }

            for (const keys in userData) {
                datas.append(`${keys}`, `${userData[keys]}`)
            }

            // datas.append('colorCode', currentColor)

            try {
                const { data } = await UpdateBookedCard(cardId, datas)
                console.log(data, 'result');

                if (data.success) {
                    hideLoder()
                    // const details = data.newCard
                    navigate('/booked-cards')
                }
            } catch (error) {
                console.log(error);
                hideLoder()
                toast(error.message)
                if (error.response.data.message.message) {
                    toast(error.response.data.message.message)
                }

            }
        }
    }



    const validateForm = (data, websiteImage) => {
        const error = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        // if (!bg) {
        //     error.backgroundImage = "backgroundImage required"
        // }
        // if (!data.profileImage) {
        //     error.profileImage = "profileImage required"
        // }
        // if (!data.companyLogo) {
        //     error.companyLogo = "companyLogo required"
        // }
        if (!data.name) {
            error.name = "name required"
        }
        if (!data.companyName) {
            error.companyName = "companyName required"
        }
        if (!data.companyDesignation) {
            error.companyDesignation = "companyDesignation required"
        }
        if (!data.phone) {
            error.phone = "phone required"
        }
        // if (!data.about) {
        //     error.about = "about required"
        // }

        if (!data.address) {
            error.address = "address required"
        }
        if (!data.country) {
            error.country = "country required"
        }
        if (!data.state) {
            error.state = "state required"
        }
        if (!data.email) {
            error.email = "email required"
        } else if (!regex.test(data.email)) {
            error.email = "email address"
        }
        // if (!data.locationUrl) {
        //     error.locationUrl = "locationUrl required"
        // }
        if (data.websiteName) {
            if (!data.websiteUrl) {
                error.websiteUrl = "websiteUrl required"
            }
            // if (!websiteImage) {
            //     error.websiteImage = "websiteImage required"
            // }
        }
        if (data.websiteUrl) {
            if (!data.websiteName) {
                error.websiteName = "websiteName required"
            }
            // if (!websiteImage) {
            //     error.websiteImage = "websiteImage required"
            // }
        }
        if (websiteImage) {
            if (!data.websiteName) {
                error.websiteName = "websiteName required"
            }
            if (!data.websiteUrl) {
                error.websiteUrl = "websiteUrl required"
            }
        }
        // if (!backgroundImage) {
        //     error.backgroundImage = "backgroundImage required"
        // }
        // if (!profileImage) {
        //     error.profileImage = "profileImage required"
        // }

        // if (!data.websiteImage) {
        //     error.websiteImage = "websiteImage required"
        // }
        // if (!data.hightlightPhotos) {
        //     error.hightlightPhotos = "hightlightPhotos required"
        // }

        return error;
    }
    // const [imgError, setImgError] = useState('')

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file && file.size > MAX_IMAGE_SIZE) {
    //         toast('The file size exceeds the limit of 1MB.')
    //         return;
    //     }
    //     setBackgroundImage(file)
    // };

    const handleChangeColor = (color) => {
        setCurrentColor(color.hex)
        console.log(color.hex);

    }




    return (
        <div >

            <div className='flex justify-center pt-5 py-5'>
                <form className='w-3/6' onSubmit={handleSubmit}  >

                    <h1 className='my-3'>Themes</h1>
                    <div className="grid xl:grid-cols-2 xl:gap-6" >
                        <div className="relative z-0 mb-6 w-full group">
                            <select class="py-3 mt-4 px-4 pr-9 block border border-xl w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" id='theme' name="theme" onChange={handleChange} value={userData["theme"] || ""}  >
                                <option selected>Open this select menu</option>
                                <option value="standard" >Standard</option>
                                <option value="classic" >Classic</option>
                                <option value="modern" >Modern</option>
                                <option value="minimal">Minimal</option>
                                <option value="standardDark">Standard Dark</option>
                            </select>
                            <label htmlFor="theme" className="absolute text-sm text-gray-500  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"   >Select the theme </label>

                        </div>
                    </div>
                    <h1 className='my-3'>Images</h1>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="file" name="backgroundImage" id='backgroundImage' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleBg} />
                            <img className='w-28' src={showBg ? showBg : userData.backgroundImage} alt="" />
                            {/* <input type="file" name="backgroundImage" id='backgroundImage' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleImageChange} /> */}
                            <label htmlFor="backgroundImage" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload Background Image</label>
                            <p className='text-red-500'>{error.backgroundImage}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="file" name="profileImage" id='profileImage' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handlePf} />
                            <label>
                                <input type="checkbox" defaultChecked={userData?.checkProfile} onClick={handleCheckProfile} />
                                Show Profile
                            </label>
                            <img className='w-28' src={showPf ? showPf : userData.profileImage} alt="" />
                            <label htmlFor="profileImage" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload profile Picture</label>
                            <p className='text-red-500'>{error.profileImage}</p>
                        </div>

                        <div className="relative z-0 mb-6 w-full group">

                            <input type="file" name="companyLogo" id='companyLogo' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleLg} />
                            <label>
                                <input type="checkbox" defaultChecked={userData?.checkLogo} onClick={handleCheckbox} />
                                Show Logo
                            </label>
                            <img className='w-28' src={showLg ? showLg : userData.companyLogo} alt="" />
                            <label htmlFor="companyLogo" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload your logo</label>
                            <p className='text-red-500'>{error.companyLogo}</p>
                        </div>

                    </div>
                    <div className='flex gap-5'>

                        <h1 className='my-3'>Basic info</h1>
                        <label className='mt-3 ml-3'>
                            <input type="checkbox" defaultChecked={userData?.checkPfCard} onClick={handleCheckPfCard} />
                            Show Profile Card
                        </label>
                    </div>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["name"] || ""} />
                            <label htmlFor="floating_name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                            <p className='text-red-500'>{error.name}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="companyName" id="floating_companyName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["companyName"] || ""} />
                            <label htmlFor="floating_companyName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name (Ex. Google)</label>
                            <p className='text-red-500'>{error.companyName}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="companyDesignation" id="floating_companyDesignation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["companyDesignation"] || ""} />
                            <label htmlFor="floating_companyDesignation" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">company Designation (Ex. developer)</label>
                            <p className='text-red-500'>{error.companyDesignation}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="about" id="about" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["about"] || ""} />
                            <label htmlFor="about" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">About</label>
                            <p className='text-red-500'>{error.about}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="number" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["phone"] || ""} />
                            <label htmlFor="floating_phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                            <p className='text-red-500'>{error.phone}</p>
                        </div>

                    </div>
                    <h1 className='my-3'>social media</h1>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="number" name="whatsappNumber" id="whatsappNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["whatsappNumber"] || ""} />
                            <label htmlFor="whatsappNumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp Number</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="facebook" id="floating_facebook" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["facebook"] || ""} />
                            <label htmlFor="floating_facebook" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Facebook</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="instagram" id="floating_instagram" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["instagram"] || ""} />
                            <label htmlFor="floating_instagram" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="skype" id="floating_skype" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["skype"] || ""} />
                            <label htmlFor="floating_skype" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skype</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="twitter" id='floating_twitter' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["twitter"] || ""} />
                            <label htmlFor="floating_twitter" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Twitter</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="linkedIn" id="floating_linkedIn" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["linkedIn"] || ""} />
                            <label htmlFor="floating_linkedIn" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">linkedIn</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="youtube" id="youtube" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["youtube"] || ""} />
                            <label htmlFor="youtube" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">youtube</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="tiktok" id="youtube" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["tiktok"] || ""} />
                            <label htmlFor="tiktok" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tiktok</label>
                        </div>
                    </div>


                    <h1 className='my-3'>contact info</h1>

                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["address"] || ""} />
                            <label htmlFor="floating_address" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                            <p className='text-red-500'>{error.address}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="country" id="floating_country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["country"] || ""} />
                            <label htmlFor="floating_country" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                            <p className='text-red-500'>{error.country}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="state" id='floating_state' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["state"] || ""} />
                            <label htmlFor="floating_state" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                            <p className='text-red-500'>{error.state}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["email"] || ""} />
                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            <p className='text-red-500'>{error.email}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="locationUrl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["locationUrl"] || ""} />
                            <label htmlFor="locationUrl" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Google Map Location Url</label>
                            <p className='text-red-500'>{error.locationUrl}</p>
                        </div>


                    </div>
                    <h1 className='my-3'>website</h1>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="file" name="websiteImage" id='websiteImage' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleWb} />
                            <img className='w-28' src={showWb ? showWb : userData.websiteImage} alt="" />
                            <label htmlFor="websiteImage" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload website Image</label>
                            <p className='text-red-500'>{error.websiteImage}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="websiteName" id="websiteName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["websiteName"] || ""} />
                            <label htmlFor="websiteName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website Name</label>
                            <p className='text-red-500'>{error.websiteName}</p>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="websiteUrl" id="floating_website" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["websiteUrl"] || ""} />
                            <label htmlFor="floating_website" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website Url</label>
                            <p className='text-red-500'>{error.websiteUrl}</p>
                        </div>
                    </div>
                    <h1 className='my-3'>Company Profile</h1>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="companyProfile" id="companyProfile" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleChange} value={userData["companyProfile"] || ""} />
                            <label htmlFor="companyProfile" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Profile Link</label>
                        </div>
                    </div>
                    <h1 className='my-3'>Highlight</h1>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="file" multiple name="hightlightPhotos" id="hightlightPhotos" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={handleHg} />
                            <label>
                                <input type="checkbox" defaultChecked={userData?.checkHighlight} onClick={handleCheckHighlight} />
                                Show Highlight Images
                            </label>
                            <div className='flex gap-2'>
                                {showHg.length === 0 ?
                                    <div>
                                        {userData?.highlightPhotos?.map((img) => (
                                            <img className='w-28' src={img} alt="" />
                                        ))}
                                    </div> :
                                    <div>
                                        {showHg.map((obj) => (
                                            <img className='w-28' src={obj} alt="" />
                                        ))}
                                    </div>

                                }


                            </div>
                            <label htmlFor="hightlightPhotos" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hightlight Photos</label>
                            <p className='text-red-500'>{error.hightlightPhotos}</p>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <SketchPicker
                            color={currentColor}
                            onChangeComplete={handleChangeColor}
                        />
                        <p>{currentColor ? currentColor : userData.colorCode}</p>

                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                <ToastContainer />
                {loader}
            </div>


        </div>

    )
}

export default EditBookedCard