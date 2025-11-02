import type { Payment } from './payment';

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'completed'
  | 'failed'
  | 'canceled';

export type Order = {
  id: string;
  stripe_session_id?: string;
  status: OrderStatus;
  shipping_detail: ShippingDetail;
  payment_requirement: PaymentRequirement;
  payments: Payment[];
  created_at: string;
};

export type ShippingDetail = {
  id: string;
  order_id: string;
  email: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal: string;
  country: string;
};

export type PaymentRequirement = {
  id: string;
  order_id: string;
  subtotal_cents: number;
  shipping_cents: number;
  total_cents: number;
  currency: string;
};
