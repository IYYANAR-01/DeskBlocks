import App from './App.svelte'
import 'deskblocks/globalStyles';
import '../common/global.css';

const app = new App({
  target: document.getElementById('app')!,
})

export default app
