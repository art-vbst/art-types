import type { Payment } from './payments';

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'completed'
  | 'failed'
  | 'canceled';

export interface Order {
  id: string;
  stripeSessionId?: string;
  status: OrderStatus;
  shippingDetail: ShippingDetail;
  paymentRequirement: PaymentRequirement;
  payments: Payment[];
  createdAt: Date;
}

export interface ShippingDetail {
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
}

export interface PaymentRequirement {
  id: string;
  orderId: string;
  subtotalCents: number;
  shippingCents: number;
  totalCents: number;
  currency: string;
}
