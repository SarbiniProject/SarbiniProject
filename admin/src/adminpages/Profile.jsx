import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import axios from "axios";

const Profile = ({data}) => {
  const [admin, setAdmin] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('Double click to edit');
  const [userPseudo, setUserPseudo] = useState('Double click to edit');
  const [userPassword, setUserPassword] = useState('Double click to edit');

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "userPseudo":
        setUserPseudo(value);
        break;
      case "userPassword":
        setUserPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="profilebigwidget">
      <div className="profile_wrapper">
        <div className="profile_profileWidget">
          <h4>Admin Profile</h4>
          <div className="profile_profileBanner">
            <div className="profile_profileThumb"><img src="https://i.ibb.co/J2tyTzV/profile.jpg" alt="" /></div>
          </div><br /><br /><br />
          <div className="divprofile0">
            <div className="divprofile1">
              <div className="profile_p">userName:</div>
              <div className="profile_p">user pseudo:</div>
              <div className="profile_p">user password:</div>
            </div>
            <div className="divprofile2">
              <div className="profile_p" onDoubleClick={handleDoubleClick}>
                {isEditing ? (
                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={() => setIsEditing(false)}
                  />
                ) : (
                  <span> {data.admin_name}</span>
                )}
              </div>
              <div className="profile_p" onDoubleClick={handleDoubleClick}>
                {isEditing ? (
                  <input
                    type="text"
                    name="userPseudo"
                    value={userPseudo}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={() => setIsEditing(false)}
                  />
                ) : (
                  <span> {data.admin_pseudo}</span>
                )}
              </div>
              <div className="profile_p" onDoubleClick={handleDoubleClick}>
                {isEditing ? (
                  <input
                    type="text"
                    name="userPassword"
                    value={userPassword}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    onBlur={() => setIsEditing(false)}
                  />
                ) : (
                  <span> {data.admin_Password}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
