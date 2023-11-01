import React from "react";
import Form from "./elements/Form";
import App from "./App";
import {createBrowserRouter,} from "react-router-dom";

const base = "/lista-de-tarefas"//só uso isso pra dar deploy


const routes = createBrowserRouter([

    {
        path: base+"/",
        element: <App />,
    },
    {
        path: base+"/form",
        element: <div> <App/> <Form /></div>,
    },
    {  path:"/lista-de-tarefas/teste",
         element: <div>teste</div>
    }

])

export default routes
export{base}