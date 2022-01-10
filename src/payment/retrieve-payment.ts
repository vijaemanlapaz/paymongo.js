import api from "../utils/api-base";
import { RetrievePaymentProps, PaymentResponse } from "./types";

/**
 * @module retrievePayment
 * @property {string} paymentId - The id of the payment.
 * @returns {PaymentResponse} - The payment data.
 *
 * @example
 * ```js
 * import PaymongoClient from "paymongo.js";
 *
 * const main = async () => {
 *  const client = PaymongoClient("pk_test_key");
 *  data = await client.retrievePayment({
 *    paymentId: "payment_id",
 *  });
 *  return data
 * }
 * ```
 */
export const retrievePayment = async ({
  paymentId,
}: RetrievePaymentProps): Promise<PaymentResponse> => {
  try {
    const res = await api.get<PaymentResponse>(`/payments/${paymentId}`);
    return res.data;
  } catch (err) {
    const error: any = err;
    return error.response.data;
  }
};
