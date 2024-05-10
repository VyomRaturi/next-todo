import { todoType } from "@/types/todoTypes";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      className="w-full  flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      <span>{todo.title}</span>
      <EditTodo todo={todo} />
    </div>
  );
};

export default Todo;
