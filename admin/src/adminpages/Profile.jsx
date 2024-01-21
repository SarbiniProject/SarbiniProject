import React, { useEffect, useState, KeyboardEvent, ChangeEvent } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Profile = () => {
  const [admin, setAdmin] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPseudo, setUserPseudo] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName1, setUserName1] = useState(userName);
  const[userPseudo1,setUserPseudo1]=useState(userPseudo)
  const [userPassword1, setUserPassword1] = useState(userPassword);
  const id=localStorage.getItem('id');
  const navigate=useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
      const result = await axios.get(`http://localhost:3000/api/sarbini/admin/${id}`);
      console.log("AdminData",result.data);
      setAdmin(result.data);
      setRefresh(false);
      
      
      } catch (error) {
      console.error(error);
      setError("Error fetching data");
      setRefresh(false);
      }
    };
    fetchAdminData();
    }, [refresh]);
  
   
    const handleUpdate = () => {
      try {
      const result = axios.put(`http://localhost:3000/api/sarbini/admin/${id}`,{ admin_name: userName,
      admin_Pseudo: userPseudo,
      admin_password: userPassword})
      setRefresh(!refresh)
      } catch (error) {
      console.error(error);
      
          }
        }


  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
  
      const updatedUserName = userName === "" ? userName1 : userName;
      const updatedUserPseudo = userPseudo === "" ? userPseudo1 : userPseudo;
      const updatedUserPassword = userPassword === "" ? userPassword1 : userPassword;
  
  
      handleUpdate(updatedUserName, updatedUserPseudo, updatedUserPassword);
  
      setRefresh(!refresh);
      alert("User updated");
    }
  };
  


  return(
<div className="container">
  <div className="card">
    <div className="returnToDashboard" onClick={()=>{navigate("/Dashboard")}}>return to Dashboard</div>
  <p className="grid-child-posts">My Profile</p>
    <div>
    <img src="https://lh3.googleusercontent.com/oUUiPB9sq3ACq4bUaRmo8pgvC4FUpRRrQKcGIBSOsafawZfRpF1vruFeYt6uCfL6wGDQyvOi6Ez9Bpf1Fb7APKjIyVsft7FLGR6QqdRFTiceNQBm1In9aZyrXp33cZi9pUNqjHASdA=s170-no" alt="Person" className="card__image" />
    </div><br /><br /><br />
        <div className="grid-container">
          <div className="grid-child-posts">
            Name:
          </div>
          <div className="grid-child-followers" onDoubleClick={handleDoubleClick}>
            {isEditing ? (
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e)=>{setUserName(e.target.value)}}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span>{admin.admin_name}</span>
            )}
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-child-posts">
            Pseudo:
          </div>
          <div className="grid-child-followers" onDoubleClick={handleDoubleClick}>
            {isEditing ? (
              <input
                type="text"
                name="userPseudo"
                value={userPseudo}
                onChange={(e)=>{setUserPseudo(e.target.value)}}
                onKeyPress={handleKeyPress}
              />
            ) : (
              <span>{admin.admin_Pseudo}</span>
            )}
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-child-posts">
            Password:
          </div>
          <div className="grid-child-followers" onDoubleClick={handleDoubleClick}>
            {isEditing ? (
              <div>
              <input
                type="text"
                name="userPassword"
                value={userPassword}
                onChange={(e)=>{setUserPassword(e.target.value)}}
                onKeyPress={handleKeyPress}
              />
              </div>

            ) : (<div>
              <span>{admin.admin_password}</span>
              </div>
            )}
          </div>
          <div className="grid-child-followers" onDoubleClick={handleDoubleClick}>

          </div>
        </div>
        {isEditing ? (
              <div>
              <div className="commentprofile">Press "Enter" To Update Your Profile</div>
              </div>

            ) : (<div>
              <div className="commentprofile">Double Click To Update Your Profile</div>
              </div>
            )}
      </div>
      
    </div>
  );
};

export default Profile;