const statusStyle = (status) => {
  switch (status) {
    case Status.ACTIVE:
      return "bg-green-100 text-green-700";
    case Status.INACTIVE:
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-white";
  }
};

const digitalSignatureCell = (digitalSignature) => `
  <span class="px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-xs">
    ${digitalSignature}
  </span>
`;

const expiryDateCell = (expiryDate) => `
  <div class="flex items-center gap-2 text-gray-500 text-xs border border-gray-200 rounded-full px-4 py-2 w-min">
      ${calendarIcon}
    ${expiryDate}
  </div>
`;

const statusCell = (status) => `
  <span class="px-4 py-2 rounded-full ${statusStyle(status)}">
    ${statusText(status)}
  </span>
`;

// TODO: Use the ID
const actionsCell = (data) => `
${createOptionsButton(data.deviceNumber)}
`;
