import App from './app';
import './database'
import './models';

const PORT = 3000
const listening = () => {
    console.log(`Example app listening on port ${PORT}`)
}

App.listen(PORT, listening)