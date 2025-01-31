import Invoice from "../components/Invoice";

const Index = () => {
  const invoiceData = {
    invoiceNumber: "20241210-0567",
    issueDate: "December 10, 2024",
    paymentDate: "December 10, 2024",
    companyDetails: {
      name: "Maven",
      address: [
        "10900 Research Blvd Ste 160C",
        "PMB 3086",
        "Austin, TX 78759",
        "United States",
      ],
    },
    billingDetails: {
      name: "Aravinth Kumar PK",
      address: [
        "201 Himachal Residency",
        "23rd Cross Road",
        "Banashankari Stage 2",
        "Bangalore - 560070",
        "India",
      ],
      email: "aravinthkumarpk@gmail.com",
    },
    items: [
      {
        description: "Cohort Based Course - Uplevel Your Product Thinking",
        details: ["By Satish Mummareddy", "December 1-10, 2024"],
        quantity: 1,
        unitPrice: 750.00,
        amount: 750.00,
      },
    ],
    totals: {
      subtotal: 750.00,
      tax: 135.00,
      total: 885.00,
      amountPaid: 885.00,
    },
    isPaid: true,
  };

  return <Invoice {...invoiceData} />;
};

export default Index;