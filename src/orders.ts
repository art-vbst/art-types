import type { Payment } from './payments';

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'completed'
  | 'failed'
  | 'canceled';

export type Order = {
  id: string;
  stripeSessionId?: string;
  status: OrderStatus;
  shippingDetail: ShippingDetail;
  paymentRequirement: PaymentRequirement;
  payments: Payment[];
  createdAt: Date;
};

export type ShippingDetail = {
  id: string;
  orderId: string;
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
  orderId: string;
  subtotalCents: number;
  shippingCents: number;
  totalCents: number;
  currency: string;
};
