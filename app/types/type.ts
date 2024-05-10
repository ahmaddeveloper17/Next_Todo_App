export interface TodoItem {
  Email: string;
  id: string;
  ListName: string;
  bgColor: string;
  label: string;
  textColor: string;
  borderColor: string;
}
export interface ProtectedRootLayoutProps {
  children: React.ReactNode;
}
export interface AddCardProps {
  label: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  className: string;
  onClick: (e: any) => void;
}
export interface NextAuthSessionProviderProps {
  children: React.ReactNode;
}
export interface taskListProps {
  id: string;
  TaskName: string;
  TaskId: string;
}
export interface task {
  id: string;
  TaskName: string;
  TaskId: string;
}
export interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}
export type CounterState = {
  CounterState: any;
  value: number;
};

export type ListSlice = {
  labels: TodoItem[];
  loading: boolean;
  error: null | undefined | string;
};
export type TaskSlice = {
  tasks: taskListProps[];
  loading: boolean;
  error: null | undefined | string;
};
