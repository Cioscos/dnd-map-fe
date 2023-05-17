import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerInstance } from "./routes";
import AuthContextProvider from "./context/AuthContext";
import AppContextProvider from "./context/AppContext";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <AuthContextProvider>
        <AppContextProvider>
            <RouterProvider router={routerInstance} />
        </AppContextProvider>
    </AuthContextProvider>
);
