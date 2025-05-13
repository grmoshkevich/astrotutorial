import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

    console.log('🌺',);
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);
    function banana() {
        console.log('🍌');
    }
    return (
        <div>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={banana}>
                New Greeting
            </button>
        </div>
    );
}