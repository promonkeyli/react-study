import Aside from "./component/layout/Aside";
import {useRoutes} from "react-router-dom";
import router from "./router";
import { Suspense } from 'react'
import Loading from "./component/layout/Loading";

function App() {
    const element = useRoutes(router)
    return (
        <div className='page-container'>
            <aside>
                <Aside/>
            </aside>
            <main>
                <Suspense fallback={<Loading/>}>
                    {element}
                </Suspense>
            </main>
        </div>
    )
}

export default App;