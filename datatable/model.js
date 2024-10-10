class Device {
  constructor(deviceNumber, digitalSignature, expiryDate, deviceStatus) {
    this.deviceNumber = deviceNumber;
    this.digitalSignature = digitalSignature;
    this.expiryDate = expiryDate;
    this.deviceStatus = deviceStatus;
  }
}

const Status = {
  ACTIVE: 0,
  INACTIVE: 1,
};

const statusText = (status) => {
  switch (status) {
    case Status.ACTIVE:
      return "نشط";
    case Status.INACTIVE:
      return "غير نشط";
    default:
      return "غير معروف";
  }
};

const documentStatusText = (status) => {
  switch (status) {
    case "Returned":
      return "مرتجع";
    default:
      return "غير معروف";
  }
};

// Invoice No,	System Invoice No,	Invoice Date,	        Invoice Type,	Payed,          Discount,    	Invoice Net,	Invoice Tax,	Subnet Total plus tax,	Invoice Status
// 97	          161               	2024-10-08 19:59:15	  B2B	          138.00	        0.00	        120.00	      18.00	        138.00	                [Returned]
class ZatcaDocument {
  constructor(
    invoiceNo,
    systemInvoiceNo,
    invoiceDate,
    invoiceType,
    payed,
    discount,
    invoiceNet,
    invoiceTax,
    subnetTotalPlusTax,
    invoiceStatus
  ) {
    this.invoiceNo = invoiceNo;
    this.systemInvoiceNo = systemInvoiceNo;
    this.invoiceDate = invoiceDate;
    this.invoiceType = invoiceType;
    this.payed = payed;
    this.discount = discount;
    this.invoiceNet = invoiceNet;
    this.invoiceTax = invoiceTax;
    this.subnetTotalPlusTax = subnetTotalPlusTax;
    this.invoiceStatus = invoiceStatus;
  }
}
