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
