import React, { useState, useEffect } from "react";

function Member({member, setMembers}) {
	const [roll, setRoll] = useState( member[0] ?? '19060' );
	const [name, setName] = useState( member[1] ?? "" );
	const [mobile, setMobile] = useState( member[2] ?? "" );

	function modifyRoll(value) {
        member[0] = value;
		setRoll(value);
	}

	function modifyName(value) {
        member[1] = value;
		setName(value);
	}

	function modifyMobile(value) {
        member[2] = value;
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