export const usePayU = () => {
  const handlePayment = (amount: number, name: string) => {
    console.log("PayU payment for:", name, amount);
    alert("PayU is not integrated yet.");
  };
  return {
    handlePayment,
  };
};
