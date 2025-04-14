// hooks/usePaymentGateway.ts
import { useRazorpay } from "./useRazorpay";
import { usePayU } from "./usePayU"

export const usePaymentGateway = () => {
  const provider = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER;
  const { handlePayment: handleRazorpay } = useRazorpay();
  const { handlePayment: handlePayU } = usePayU();

  const handlePayment = (amount: number, name: string) => {
    if (provider === "razorpay") {
      handleRazorpay(amount, name);
    } else if (provider === "payu") {
      handlePayU(amount, name);
    } else {
      alert("Payment provider not supported.");
    }
  };

  return { handlePayment };
};
