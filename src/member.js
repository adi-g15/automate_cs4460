import React, { useState, useEffect } from "react";

function Member({member, setMembers}) {
	const [roll, setRoll] = useState( 19060 );
	const [name, setName] = useState( "" );
	const [mobile, setMobile] = useState( "" );

	function modifyRoll(value) {
        member[0] = value;
        setMembers(members => [...members]);
		setRoll(value);
	}

	function modifyName(name) {
        member[1] = name;
        setMembers(members => [...members]);
		setName(name);
	}

	function modifyMobile(value) {
        member[2] = name;
        setMembers(members => [...members]);
		setMobile(value);
	}

	return (
		<div className="field">
			<span className="input_span">
                <input placeholder="Roll" type="number" value={roll} onChange={e => modifyRoll(e.target.value)} required />
			</span>
			<span className="input_span">
				<input placeholder="Naam..." value={name} onChange={e => modifyName(e.target.value)} required />
			</span>
			<span className="input_span">
                <input placeholder="Phone" value={mobile} onChange={e => modifyMobile(e.target.value)} required />
			</span>
		</div>
	);
}

export default Member;