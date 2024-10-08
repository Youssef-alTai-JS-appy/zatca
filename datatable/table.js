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

$("#searchBar").on("keyup", function () {
  table.search(this.value).draw();
});
