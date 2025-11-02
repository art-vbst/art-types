export type PaymentStatus = 'success' | 'failed' | 'refunded';

export type Payment = {
  id: string;
  order_id: string;
  stripe_payment_intent_id: string;
  status: PaymentStatus;
  total_cents: number;
  currency: string;
  created_at: string;
  paid_at: string;
};
