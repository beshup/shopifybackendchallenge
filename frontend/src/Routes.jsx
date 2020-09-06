import Index from './pages/Index'
import Show from './pages/Show'
import React from 'react';

const Routes = {
    '/': () => <Index page={0} />, 
    '/image/:id': ({id}) => <Show id={id} />,
    '/images': () => <Index page={0} />,
    '/images/:page': ({page}) => <Index page={page} />
}

export default Routes;