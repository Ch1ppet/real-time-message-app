import React, { useState, useEffect } from "react";
import axios from "axios";

const LongPullling = () => {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        subscribe();
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/get-messages');
            setMessages(prev => [data, ...prev]);
            await subscribe();
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500);
        }
    };

    const sendMessage = async () => {
        await axios.post('http://localhost:5000/new-messages', {
            message: value,
            id: Date.now(),
        });
    };

    return (
        <div className="center">
            <div className="chat-wrapper">
                <div className="messages">
                    {messages.map(mess => {
                        <div className="message" key={mess.id}>
                            {mess.message}
                        </div>
                    })}
                </div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" className="text" />
                    <button onClick={sendMessage} className="btn">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default LongPullling;