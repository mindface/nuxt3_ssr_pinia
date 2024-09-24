
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

export default defineEventHandler( async (event) => {
  if(event.node.req.method === "GET") {
    return list;
  }
  if(event.node.req.method === "POST") {
    const data = await readFormData(event);
    if(!data) return [];
    let _d = "";
    data.forEach((d) => {
      console.log(d);
      _d = d.toString();
    });

    return { _d };
  }  
})
