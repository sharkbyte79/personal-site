import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import BackgroundWave from './components/Wave';

function App() {
    //const [count, setCount] = useState(0);

    return (
        <div>
            <div id="link-cards" className="flex items-stretch [&>*]:p-2">
                <div>
                    <Card
                        label="GitHub"
                        imgPath="src/assets/github-mark/github-mark-white.svg"
                        clickable={false}
                    ></Card>
                </div>
                <div>
                    <Card
                        label="Email"
                        imgPath="src/assets/mail.svg"
                        clickable={false}
                    ></Card>
                </div>
                <div>
                    <Card
                        label="LinkedIn"
                        imgPath="src/assets/linkedin.svg"
                        clickable={false}
                    ></Card>
                </div>
            </div>

            <BackgroundWave paused={false} />
        </div>
    );
}

export default App;
