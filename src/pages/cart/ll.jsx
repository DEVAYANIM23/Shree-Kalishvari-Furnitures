const addressInfo = {
    name,
    address,
    pincode,
    phoneNumber,
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  }

  var options = {
    key: "rzp_test_Nua4QlRCFVytjF",
    key_secret: "ergr2A5wrB8n8bIUVSybzrKe",
    amount: parseInt(grandTotal * 100),
    currency: "INR",
    order_receipt: 'order_rcptid_' + name,
    name: "Kalishvari Furniture",
    description: "for testing purpose",
    handler: function (response) {
      console.log(response)
      toast.success('Payment Successful')

      const paymentId = response.razorpay_payment_id;

      const orderInfo = {
        cartItems,
        addressInfo,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        ),
        email: JSON.parse(localStorage.getItem("user")).user.email,
        userid: JSON.parse(localStorage.getItem("user")).user.uid,
        paymentId
      }

      try {

        const orderRef = collection(fireDB, 'order');
        addDoc(orderRef, orderInfo);

      } catch (error) {
        console.log(error)
      }
    },

    theme: {
      color: "#3399cc"
    }
  };

  var pay = new window.Razorpay(options);
  pay.open();
  console.log(pay)

