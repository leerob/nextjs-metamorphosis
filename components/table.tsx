import { getTableData, Status } from 'lib/db';

export default function Table() {
  const tableData = getTableData();

  return (
    <table className="w-full text-sm">
      <thead className="[&_tr]:border-b">
        <tr className="border-b transition-colors hover:bg-gray-100/50">
          <th className="h-12 px-4 text-left align-middle font-medium w-[100px]">
            Invoice
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium">
            Status
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium">
            Method
          </th>
          <th className="h-12 px-4 align-middle font-medium text-right">
            Amount
          </th>
        </tr>
      </thead>
      <tbody className="[&_tr:last-child]:border-0">
        {tableData.map((rowData, index) => (
          <TableRow key={index} {...rowData} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow({
  invoice,
  status,
  method,
  amount,
}: {
  invoice: string;
  status: Status;
  method: string;
  amount: string;
}) {
  let statusBadge;
  switch (status) {
    case Status.PENDING:
      statusBadge = <PendingBadge />;
      break;
    case Status.UNPAID:
      statusBadge = <UnpaidBadge />;
      break;
    case Status.PAID:
      statusBadge = <PaidBadge />;
      break;
    default:
      statusBadge = null;
      break;
  }

  return (
    <tr className="border-b transition-colors hover:bg-gray-100/50">
      <td className="p-4 align-middle font-medium">{invoice}</td>
      <td className="p-4 align-middle">{statusBadge}</td>
      <td className="p-4 align-middle">{method}</td>
      <td className="p-4 align-middle text-right text-gray-800">{amount}</td>
    </tr>
  );
}

function PendingBadge() {
  return (
    <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors text-yellow-800 bg-yellow-50/50">
      Pending
    </div>
  );
}

function UnpaidBadge() {
  return (
    <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors text-red-800 bg-red-50/50">
      Unpaid
    </div>
  );
}

function PaidBadge() {
  return (
    <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors text-green-800 bg-green-50/50">
      Paid
    </div>
  );
}
