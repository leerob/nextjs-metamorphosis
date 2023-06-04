export enum Icon {
  Revenue = 'revenue',
  Subscriptions = 'subscriptions',
  Sales = 'sales',
  ActiveNow = 'active-now',
}

export type Card = {
  id: number;
  title: string;
  icon: Icon;
  value: string;
  description: string;
};

export async function getCardData(delay?: number) {
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  return [
    {
      id: 1,
      title: 'Total Revenue',
      icon: Icon.Revenue,
      value: '$45,231.89',
      description: '+20.1% from last month',
    },
    {
      id: 2,
      title: 'Subscriptions',
      icon: Icon.Subscriptions,
      value: '+2350',
      description: '+180.1% from last month',
    },
    {
      id: 3,
      title: 'Sales',
      icon: Icon.Sales,
      value: '+12,234',
      description: '+19% from last month',
    },
    {
      id: 4,
      title: 'Active Now',
      icon: Icon.ActiveNow,
      value: '+573',
      description: '+201 since last hour',
    },
  ];
}

export function getPlaceholderCardData() {
  return [
    {
      id: 1,
      title: '—',
      icon: Icon.Revenue,
      value: '?',
      description: ' ',
    },
    {
      id: 2,
      title: '—',
      icon: Icon.Subscriptions,
      value: '?',
      description: ' ',
    },
    {
      id: 3,
      title: '—',
      icon: Icon.Sales,
      value: '?',
      description: ' ',
    },
    {
      id: 4,
      title: '—',
      icon: Icon.ActiveNow,
      value: '?',
      description: ' ',
    },
  ];
}

export enum Status {
  PENDING = 'PENDING',
  UNPAID = 'UNPAID',
  PAID = 'PAID',
}

export function getTableData() {
  return [
    {
      invoice: 'INV001',
      status: Status.PAID,
      method: 'Credit Card',
      amount: '$250.00',
    },
    {
      invoice: 'INV002',
      status: Status.PENDING,
      method: 'PayPal',
      amount: '$150.00',
    },
    {
      invoice: 'INV003',
      status: Status.UNPAID,
      method: 'Bank Transfer',
      amount: '$350.00',
    },
    {
      invoice: 'INV004',
      status: Status.PAID,
      method: 'Credit Card',
      amount: '$450.00',
    },
    {
      invoice: 'INV005',
      status: Status.PAID,
      method: 'PayPal',
      amount: '$550.00',
    },
    {
      invoice: 'INV006',
      status: Status.PENDING,
      method: 'Bank Transfer',
      amount: '$200.00',
    },
    {
      invoice: 'INV007',
      status: Status.UNPAID,
      method: 'Credit Card',
      amount: '$300.00',
    },
  ];
}
