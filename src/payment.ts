export type PaymentStatus = 'success' | 'failed' | 'refunded';

export type Payment = {
  id: string;
  orderId: string;
  stripePaymentIntentId: string;
  status: PaymentStatus;
  totalCents: number;
  currency: string;
  createdAt: Date;
  paidAt: Date;
};
