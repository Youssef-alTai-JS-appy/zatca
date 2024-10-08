const Status = {
  INACTIVE: 0,
  ACTIVE: 1,
};

function statusText(data) {
  return data === Status.ACTIVE ? "نشط" : "غير نشط";
}

const data = [
  new Device(
    1,
    "123e4567-e89b-12d3-a456-426614174000",
    new Date("2023-01-01T10:00:00"),
    Status.ACTIVE
  ),
  new Device(
    2,
    "123e4567-e89b-12d3-a456-426614174001",
    new Date("2024-05-15T15:30:00"),
    Status.INACTIVE
  ),
  new Device(
    3,
    "70ef916b-eb30-4ea7-b768-b6bb32a2f945",
    new Date("2028-09-11T23:38:00"),
    Status.ACTIVE
  ),
  ...Array.from(
    { length: 50 },
    (_, i) =>
      new Device(
        i + 4,
        `123e4567-e89b-12d3-a456-4266141740${(i + 2)
          .toString()
          .padStart(2, "0")}`,
        new Date(Date.now() + i * 1000 * 60 * 60 * 24),
        i % 2 === 0 ? Status.ACTIVE : Status.INACTIVE
      )
  ),
];
