import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Merci pour votre visite!</h3>
            <button id="greeting-button" onClick={() => setGreeting(randomMessage())}>
                Salutation, terrien !
            </button>
        </div>
    );

}