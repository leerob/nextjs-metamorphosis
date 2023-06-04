import { getPlaceholderCardData, getCardData, Card, Icon } from 'lib/db';

export default function Cards({
  data,
  loading,
  slow,
}: {
  data?: Card[];
  loading?: boolean;
  slow?: boolean;
}) {
  if (data === undefined) {
    data = getPlaceholderCardData();
  }
  if (slow === true) {
    // data = await getCardData(2000);
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((card) => (
        <Card key={card.id} card={card} isLoading={loading} />
      ))}
    </div>
  );
}

function Card({ card, isLoading }: { card: any; isLoading?: boolean }) {
  const getIcon = (icon: Icon) => {
    switch (icon) {
      case Icon.Revenue:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <line x1={12} x2={12} y1={2} y2={22} />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case Icon.Subscriptions:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx={9} cy={7} r={4} />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case Icon.Sales:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width={20} height={14} x={2} y={5} rx={2} />
            <line x1={2} x2={22} y1={10} y2={10} />
          </svg>
        );
      case Icon.ActiveNow:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-muted-foreground"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-32 rounded-lg border bg-card text-card-foreground shadow-sm animate-pulse'">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        {isLoading ? (
          <div className="animate-pulse h-4 bg-gray-200 rounded w-1/3" />
        ) : (
          <>
            <h3 className="tracking-tight text-sm font-medium">{card.title}</h3>
            {getIcon(card.icon)}
          </>
        )}
      </div>
      <div className="p-6 pt-0">
        {isLoading ? (
          <>
            <div className="animate-pulse h-8 bg-gray-200 rounded w-2/3" />
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/3 mt-2" />
          </>
        ) : (
          <>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
