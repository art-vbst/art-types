import type { Payment } from './payment';
export type OrderPublic = {
  id: string;
  status: OrderStatus;
  created_at: string;
};

export type Order = {
  id: string;
  status: OrderStatus;
  stripe_session_id: string | null;
  created_at: string;
  shipping_detail?: ShippingDetail;
  payment_requirement?: PaymentRequirement;
  payments?: Payment[];
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

export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Shipped = 'shipped',
  Completed = 'completed',
  Failed = 'failed',
  Canceled = 'canceled',
}
