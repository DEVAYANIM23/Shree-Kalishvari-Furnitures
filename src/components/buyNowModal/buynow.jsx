/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction, openPaymentModal, clearCart }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const handleBuyNow = () => {
        // Call the buyNowFunction to handle the purchase
        buyNowFunction();

        // Call the function to open the payment modal
        openPaymentModal();

        // Clear the cart after the purchase
        clearCart(); // You need to define the clearCart function
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
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
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
                                })
                            }}
                            placeholder='Enter your address'
                            className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
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
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
                        />
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
                                })
                            }}
                            placeholder='Enter your mobileNumber'
                            className='bg-gray-50 border border-gray-800 px-2 py-2 w-full rounded-md outline-none text-gray-600 placeholder-gray-300'
                        />
                    </div>

                    <div className="">
                        <Button
                            type="button"
                            onClick={handleBuyNow}
                            className="w-full px-4 py-3 text-center text-gray-200 bg-gray-900 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Buy now
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;
