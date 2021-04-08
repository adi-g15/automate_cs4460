import React, { useState } from "react";

export default function App() {
    const [topicName, setTopicName] = useState("");
    const [groupNumber, setgroupNumber] = useState(13);
    
    return (
        <>
            <div>
                <span>Topic Name: </span>
                <input type="text" value={topicName} onChange={(e) => setTopicName(e.target.value)} />
            </div>
            <div>
                <span>Group Number: </span>
                <input type="number" value={groupNumber} onChange={(e) => setgroupNumber(e.target.value)} />
            </div>
        </>
    );
}