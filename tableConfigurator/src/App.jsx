import { Routing } from "./components/routing/Routing";
import { TableContextProvider } from "./context/TableContextProvider";

function App() {
  return (
    <TableContextProvider>
      <Routing />
    </TableContextProvider>
  );
}

export default App;
