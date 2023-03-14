import './app.css'
import App from '/src/App.svelte'
import Header from './header.svelte'
import Footer from './footer.svelte'

const app = new App({
    target: document.getElementById('app'),
})

const header = new Header({
    target: document.getElementById('header')
})

const footer = new Footer({
    target: document.getElementById('footer')
})


export default app