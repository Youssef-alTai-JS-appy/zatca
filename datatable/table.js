const table = $("#example").DataTable({
  language: {
    url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/ar.json",
  },

  data: data,

  layout: {
    topStart: null,
    topEnd: null,
    bottomStart: null,
    bottomEnd: null,
    bottom: "paging",
  },

  columnDefs: [
    {
      targets: 1,
      render: (data) => digitalSignatureCell(data),
    },
    {
      targets: 2,
      render: (data) =>
        expiryDateCell(
          DataTable.render.datetime("D MMMM YYYY (h:mm a)", "ar-EG")(data)
        ),
    },
    {
      targets: 3,
      render: (data) => statusCell(data),
    },
    {
      targets: 4,
      render: (data) => actionsCell(data),
    },
  ],
  columns: [
    {
      title: "رقم الجهاز",
      data: "deviceNumber",
    },
    {
      title: "التوقيع الالكتروني",
      data: "digitalSignature",
    },
    {
      title: "تاريخ الانتهاء",
      data: "expiryDate",
    },
    {
      title: "حالة الجهاز",
      data: "deviceStatus",
    },
    {
      data: null,
      orderable: false,
    },
  ],
});

const documentsTable = $("#documentsTable").DataTable({
  language: {
    url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/ar.json",
  },

  data: documents,

  layout: {
    topStart: null,
    topEnd: null,
    bottomStart: null,
    bottomEnd: null,
    bottom: "paging",
  },

  columnDefs: [
    {
      targets: 2,
      render: (data) =>
        expiryDateCell(
          DataTable.render.datetime("D MMMM YYYY (h:mm a)", "ar-EG")(data)
        ),
    },
    {
      targets: 9,
      render: (data) => documentStatusCell(data),
    },
    {
      targets: 10,
      render: (data) => actionsCell(data),
    },
  ],
  columns: [
    {
      title: "رقم الفاتورة",
      data: "invoiceNo",
    },
    {
      title: "رقم الفاتورة بالنظام",
      data: "systemInvoiceNo",
    },
    {
      title: "تاريخ الفاتورة",
      data: "invoiceDate",
    },
    {
      title: "نوع الفاتورة",
      data: "invoiceType",
    },
    {
      title: "المبلغ المدفوع",
      data: "payed",
    },
    {
      title: "الخصم",
      data: "discount",
    },
    {
      title: "صافي الفاتورة",
      data: "invoiceNet",
    },
    {
      title: "ضريبة الفاتورة",
      data: "invoiceTax",
    },
    {
      title: "إجمالي الفاتورة مع الضريبة",
      data: "subnetTotalPlusTax",
    },
    {
      title: "حالة الفاتورة",
      data: "invoiceStatus",
    },
    {
      data: null,
      orderable: false,
    },
  ],
});

$("#searchBar").on("keyup", function () {
  table.search(this.value).draw();
});
