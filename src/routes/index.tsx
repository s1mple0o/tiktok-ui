
import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '~/Layout/DefaultLayout';
import FreeLayout from '~/Layout/FreeLayout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';


const RootRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path='/following' element={<Following />} />
                <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/upload' element={<FreeLayout />}>
                <Route index element={<Upload />} />
            </Route>

        </Routes>
    )
}

export default RootRouter
