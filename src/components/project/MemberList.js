import React, {PropTypes} from "react";

const MemberList = ({members}) => {
	let result = "";

	for(let i=0;i<members.length;i++) {
		result += members[i].username;
		if (i<members.length-1) {
			result += ", ";
		}
	}
	return <span>{result}</span>;
};

MemberList.propTypes = {
	members: PropTypes.array.isRequired
};

export default MemberList;