import { createFileRoute } from '@tanstack/react-router';
import { PaymentsPage } from '@/modules/payment';

export const Route = createFileRoute('/_auth/_auth/payment')({
  component: PaymentsPage,
});
