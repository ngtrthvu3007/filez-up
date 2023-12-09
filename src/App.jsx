import useRouters from "./routes/useRouters";

export default function App() {
  const routerElements = useRouters();
  return <div>{routerElements}</div>;
}
