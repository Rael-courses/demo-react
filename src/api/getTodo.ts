import { useQuery } from "@tanstack/react-query";
import z from "zod";

export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  userId: z.number(),
});

export type Todo = z.infer<typeof todoSchema>;

export const useGetTodo = (id: string | undefined) => {
  return useQuery<Todo, Error>({
    queryKey: ["todos", id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const responseData = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      ).then((response) => response.json());
      const validatedData = await todoSchema.parseAsync(responseData);
      return validatedData;
    },
  });
};
