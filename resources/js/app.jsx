import './bootstrap';
import '../css/app.css';
import Layout from './Layouts/Layout';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    title:title => title?`${title} -laravel Inertia React`:'',
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page= pages[`./Pages/${name}.jsx`];
    page.default.layout=page.default.layout||((page)=><Layout children={page}/>);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
