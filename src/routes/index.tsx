
import { Routes, Route } from 'react-router-dom';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';


const RootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/following' element={<Following />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

export default RootRouter
