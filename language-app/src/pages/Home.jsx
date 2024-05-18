import React from 'react';
import ChatBot from "../components/ChatBot";
import Noti from "../components/Noti";

function HomePage() {
	return (
        <main>
            <p>inicio</p>
            <div className="flex justify-center gap-16 ">
                <ChatBot />
                <Noti />
                <Noti msg={"este es un mensaje"} state={false}/>
            </div>
            
        </main>
    );
}

export default HomePage;
