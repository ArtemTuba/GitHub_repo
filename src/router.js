import {createBrowserRouter} from 'react-router-dom';
import HomePage from './page/PageHome/HomePage';
import PopularPage from './page/PagePopular/PopularPage';
import BattlePage from './page/PageBattle/BattlePage';
import Nav from './page/Nav';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
                    <Nav/>
                </div>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/popular',
                element: <PopularPage/>
            },
            {
                path: '/battle',
                element: <BattlePage/>
            },
        ]
    }
    
])

export default router;