import './bootstrap';
import Alpine from 'alpinejs';
import {createRoot} from 'react-dom/client';
import {App} from "./Layouts/App.jsx";
import './components/Main.jsx';

const root = createRoot(document.getElementById('app'));
root.render(<App/>);
