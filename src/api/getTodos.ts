import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { todoSchema, type Todo } from "./getTodo";

export const useGetTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const responseJson = await response.json();
      const validatedData = await z.array(todoSchema).parseAsync(responseJson);
      return validatedData.slice(0, 5);
    },
  });
};

// export const useUpdateTodo = (id: string) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (updates: Partial<Todo>) => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify(updates),
//         }
//       );
//       const responseJson = await response.json();
//       const validatedData = await todoSchema.parseAsync(responseJson);
//       return validatedData;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["todos"] });
//     },
//   });
// };
