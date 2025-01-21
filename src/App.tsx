import React from "react";
import Groups from "./components/groups";
import Settings from "./components/settings";
import { DataProvider } from "./context/DataContext";
import Image from "./components/image";

function App () {
    return(
        <DataProvider>
            <div className="flex h-[100vh] justify-center items-center bg-[#151013] ">
                <Groups/>
                <Settings/>
            </div>
        </DataProvider>
    )
}

export default App
