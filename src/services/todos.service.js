import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndepoint, {
      params: {
        _page: 1,
        _limit: 5,
      },
    });
    return data;
  },
  add: async () => {
    const { data } = await httpService.post(todosEndepoint, {
      userId: 1,
      title: "foo",
      completed: false,
    });
    return data;
  },
};
export default todosService;
