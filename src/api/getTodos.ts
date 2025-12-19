import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { todoSchema, type Todo } from "./getTodo";

export const useGetTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const responseData = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      ).then((response) => response.json());
      const validatedData = await z.array(todoSchema).parseAsync(responseData);
      return validatedData;
    },
  });
};
