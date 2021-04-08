import React, { useState } from "react";
import Member from "./member"
import create_pdf from "./func"

export default function App() {
    const [topicName, setTopicName] = useState(localStorage.getItem('cs4460topic') ?? "");
    const [groupNumber, setgroupNumber] = useState(localStorage.getItem('cs4460gn') ?? '13');
    const [members, setMembers] = useState(localStorage.getItem('cs4460members') !== null ? JSON.parse(localStorage.getItem('cs4460members')): [['19060', '', ''],['19060', '', ''],['19060', '', ''],['19060', '', ''],['19060', '', ''],['19060', '', ''],['19060', '', ''],['19060', '', '']]);

    function addNewMember() {
        setMembers(members => [...members, ['19060', '', '']]);
    }

    function downloadPDF() {
        const pdf = create_pdf(groupNumber, topicName, members)
        pdf.save(`group_${groupNumber}.pdf`);
        localStorage.setItem('cs4460members', JSON.stringify(members))
        localStorage.setItem('cs4460topic', topicName)
        localStorage.setItem('cs4460gn', groupNumber)
    }

    return (
        <>
            <div style={{padding: '6px', margin: '6px'}}>
                <div style={{padding: '6px', margin: '6px'}}>
                    <span>Topic Name: </span>
                    <input type="text" value={topicName} onChange={(e) => setTopicName(e.target.value)} />
                </div>
                <div style={{padding: '6px', margin: '6px'}}>
                    <span>Group Number: </span>
                    <input type="number" value={groupNumber} onChange={(e) => setgroupNumber(e.target.value)} />
                </div>
                <button
                    className="add_filter_btn"
                    onClick={downloadPDF}
                >
                    Download PDF
                </button>
            </div>
            <div className="all_filter">
				{
					members.map((member, index) => (
						<Member
                            member={member}
                            setMembers={setMembers}
							key={index}	/**Since say you removed the last-1th component, but still when last component takes its place */
						/>
					))
				}
			</div>
			<button
				className="add_filter_btn"
				onClick={addNewMember}
			>
				➕ Add
			</button>
        </>
    );
}