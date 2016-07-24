import React, {PropTypes} from "react";

const MemberList = ({members}) => {
  return (
    <ul className="avatar-list">
      {members.map(member => (
          <li key={member.username} className="avatar-list-item">
            <img className="img-circle" src={member.avatar}/>
          </li>
        )
      )}
    </ul>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired
};

export default MemberList;
