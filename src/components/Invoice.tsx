import { FC } from "react";

interface InvoiceProps {
  invoiceNumber: string;
  issueDate: string;
  paymentDate: string;
  companyDetails: {
    name: string;
    address: string[];
  };
  billingDetails: {
    name: string;
    address: string[];
    email: string;
  };
  items: Array<{
    description: string;
    details?: string[];
    quantity: number;
    unitPrice: number;
    amount: number;
  }>;
  totals: {
    subtotal: number;
    tax: number;
    total: number;
    amountPaid: number;
  };
  isPaid?: boolean;
}

const Invoice: FC<InvoiceProps> = ({
  invoiceNumber,
  issueDate,
  paymentDate,
  companyDetails,
  billingDetails,
  items,
  totals,
  isPaid = false,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm animate-fade-up">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-invoice-text">Invoice</h1>
            <img
              src="https://i.ibb.co/3wspdpZ/downloaded.png"
              alt="Maven"
              className="h-8 object-contain"
            />
          </div>

          {/* Invoice Meta */}
          <div className="mb-8 text-invoice-text">
            <div>Invoice number: {invoiceNumber}</div>
            <div>Date of issue: {issueDate}</div>
            <div>Payment date: {paymentDate}</div>
          </div>

          {/* Company & Billing Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="text-invoice-text">
                <div className="font-semibold mb-2">{companyDetails.name}</div>
                {companyDetails.address.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-invoice-text">Bill to</h3>
              <div className="text-invoice-text">
                <div className="font-semibold">{billingDetails.name}</div>
                {billingDetails.address.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
                <div className="mt-2">{billingDetails.email}</div>
              </div>
            </div>
          </div>

          {/* Paid Stamp */}
          {isPaid && (
            <div className="relative mb-8">
              <div className="absolute -rotate-12 text-green-600 border-4 border-green-600 rounded px-6 py-2 font-bold text-xl">
                PAID
              </div>
            </div>
          )}

          {/* Items Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 text-invoice-muted">Description</th>
                  <th className="text-left py-4 text-invoice-muted">Qty</th>
                  <th className="text-left py-4 text-invoice-muted">Unit price</th>
                  <th className="text-left py-4 text-invoice-muted">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4">
                      <div className="font-medium">{item.description}</div>
                      {item.details?.map((detail, idx) => (
                        <div key={idx} className="text-sm text-invoice-muted">
                          {detail}
                        </div>
                      ))}
                    </td>
                    <td className="py-4">{item.quantity}</td>
                    <td className="py-4">${item.unitPrice.toFixed(2)}</td>
                    <td className="py-4">${item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="ml-auto w-72">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-invoice-muted">Subtotal</td>
                  <td className="py-2 text-right">${totals.subtotal.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-invoice-muted">Tax (18%)</td>
                  <td className="py-2 text-right">${totals.tax.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-gray-200 font-semibold">
                  <td className="py-2">Total</td>
                  <td className="py-2 text-right">${totals.total.toFixed(2)}</td>
                </tr>
                <tr className="font-semibold text-invoice-primary">
                  <td className="py-2">Amount paid</td>
                  <td className="py-2 text-right">${totals.amountPaid.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;