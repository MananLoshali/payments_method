export const useRazorpay = () => {
  const handlePayment = (amount: number, name: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: amount,
      currency: "INR",
      name: "Demo Store",
      description: `Payment for ${name}`,
      image: "https://img.icons8.com/ios-filled/100/buy.png",
      handler: function (response: any) {
        console.log(response, "response---------");
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3182ce",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };
  return {
    handlePayment,
  };
};
