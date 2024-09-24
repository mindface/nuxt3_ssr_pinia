
const list = [
  {
    id: 1,
    title: "test 001",
    body: "test 001",
  },
  {
    id: 2,
    title: "test 002",
    body: "test 002",
  },
  {
    id: 3,
    title: "test 003",
    body: "test 003",
  },
];

export default defineEventHandler((event) => {
  console.log(event);
  return list;
});
