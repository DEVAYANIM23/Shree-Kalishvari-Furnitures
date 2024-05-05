// /* eslint-disable react/prop-types */
// import {
//     Button,
//     Dialog,
//     DialogBody,
// } from "@material-tailwind/react";
// import { useState } from "react";

// const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
//     const [open, setOpen] = useState(false);
//     async function checkoutHandler() {
    
//         const res = await loadScript(
//             "https://checkout.razorpay.com/v1/checkout.js"
//         );
    
//         if (!res) {
//             alert("Razorpay SDK failed to load. Are you online?");
//             return;
//         }
        
    
//         if (!result) {
//             alert("Server error. Are you online?");
//             return;
//         }
    
//         // Getting the order details back
//         const { amount, id: order_id, currency } = result.data;
    
//         const options = {
//             key: "rzp_test_zpcvSUNJXUqrLv", // Enter the Key ID generated from the Dashboard
//             currency: currency,
//             name: "SkyJet Bookings",
//             description: "Pay ",
//             order_id: order_id,
//             handler: async function (response) {
//                 const data = {
//                     orderCreationId: order_id,
//                     razorpayPaymentId: response.razorpay_payment_id,
//                     razorpayOrderId: response.razorpay_order_id,
//                     razorpaySignature: response.razorpay_signature,
//                 };
//             },
//             theme: {
//                 color: "red",
//             },
//         };
    
//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//     }

//     const handleOpen = () => {
       

//         setOpen(!open)};
        
//     return (
//         <>
//             <Button
//                 type="button"
//                 onClick={handleOpen}
//                 className="w-full px-4 py-3 text-center text-gray-200 bg-gray-800 border border-transparent dark:border-gray-700 hover:border-gray-700 hover:text-gray-900 hover:bg-gray-800 rounded-xl"
//             >
//                 Buy now
//             </Button>
//             <Dialog open={open} handler={handleOpen} className=" bg-gray-50">
//                 <DialogBody className="">
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="name"
//                             value={addressInfo.name}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     name: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your name'
//                             className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="address"
//                             value={addressInfo.address}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     address: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your address'
//                             className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="number"
//                             name="pincode"
//                             value={addressInfo.pincode}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     pincode: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your pincode'
//                             className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 text-gray-600 placeholder-gray-300'
//                         />
//                     </div>

//                     <div className="mb-3">
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             value={addressInfo.mobileNumber}
//                             onChange={(e) => {
//                                 setAddressInfo({
//                                     ...addressInfo,
//                                     mobileNumber: e.target.value
//                                 })
//                             }}
//                             placeholder='Enter your mobileNumber'
//                             className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
//                         />
//                     </div>

//                     <div className="">
//                         <Button

//                             type="button"
//                             onClick={() => {
//                                 handleOpen1()
//                                 buyNowFunction()
                                
//                             }}
//                             className="w-full px-4 py-3 text-center text-gray-200 bg-gray-900 border border-transparent dark:border-gray-700 rounded-lg"
//                         >
//                             Buy now
//                         </Button>
//                     </div>

//                 </DialogBody>
//             </Dialog>
//         </>
//     );
// }

// export default BuyNowModal;




/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import PaymentModal from "./PaymentModal";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction, openPaymentModal }) => {
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const handleOpen = () => {
        setOpen(!open);
        setErrors({}); // Reset errors when modal is opened
    };

    const validateForm = () => {
        const errors = {};
        // Validate pincode
        if (!/^\d{6}$/.test(addressInfo.pincode)) {
            errors.pincode = "Pincode must be 6 digits";
        }
        // Validate email
        if (!/\S+@\S+\.\S+/.test(addressInfo.email)) {
            errors.email = "Invalid email address";
        }
        // Validate phone number
        if (!/^\d{10}$/.test(addressInfo.mobileNumber)) {
            errors.mobileNumber = "Mobile number must be 10 digits";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            handleOpen();
            openPaymentModal();
        }
    };

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-200 bg-gray-900 border border-transparent dark:border-gray-700 hover:border-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl"
            >
                Buy now
            </Button>
            <Dialog open={open} handler={handleOpen} className=" bg-gray-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                });
                            }}
                            placeholder="Enter your name"
                            className="bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                });
                            }}
                            placeholder="Enter your address"
                            className="bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                });
                            }}
                            placeholder="Enter your pincode"
                            className={`bg-gray-50 border ${
                                errors.pincode ? "border-red-500" : "border-gray-800"
                            } px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300`}
                        />
                        {errors.pincode && (
                            <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="email"
                            value={addressInfo.email}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    email: e.target.value
                                });
                            }}
                            placeholder="Enter your email"
                            className={`bg-gray-50 border ${
                                errors.email ? "border-red-500" : "border-gray-800"
                            } px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                });
                            }}
                            placeholder="Enter your mobile number"
                            className={`bg-gray-50 border ${
                                errors.mobileNumber ? "border-red-500" : "border-gray-800"
                            } px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300`}
                        />
                        {errors.mobileNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
                        )}
                    </div>
                    <div>
                        <Button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full px-4 py-3 text-center text-gray-200 bg-gray-900 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
