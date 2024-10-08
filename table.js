const trashIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="stroke-inherit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
`;
const pencilIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="stroke-inherit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
`;

const buttonStyle = (color) => `
  class="p-2 bg-${color}-50 stroke-${color}-500 rounded-full hover:shadow-lg transition-shadow duration-300"
`;

const deleteButton = `
<button ${buttonStyle("red")}>
  ${trashIcon}  
</button>
`;

const editButton = `
<button ${buttonStyle("blue")}>
  ${pencilIcon}
</button>
`;

const table = $("#example").DataTable({
  language: {
    url: "https://cdn.datatables.net/plug-ins/2.1.8/i18n/ar.json",
  },

  scrollX: true,
  data: data,

  columnDefs: [
    {
      targets: 2,
      render: DataTable.render.datetime("D MMMM YYYY (h:mm a)", "ar-EG"),
    },
    {
      targets: 3,
      render: (data) => statusText(data),
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
      title: "الإجراءات",
      data: null,
      defaultContent: `
        ${editButton}
        ${deleteButton}
      `,
      orderable: false,
    },
  ],
});

table.on("mouseenter", "td", function () {
  var rowIdx = table.cell(this).index().row;
  table
    .rows(rowIdx)
    .nodes()
    .to$()
    .addClass("hover:bg-gray-100 transition-colors duration-300");
});

table.on("click", "td", function () {
  var rowIdx = table.cell(this).index().row;
  var rowData = table.row(rowIdx).data();
  console.log(rowData);
});
