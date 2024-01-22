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
  const [userPassword1, setUserPassword1] = useState('');
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
  
   
    const handleUpdate = async (updatedUserName, updatedUserPseudo, updatedUserPassword) => {
      try {
        const result = await axios.put(`http://localhost:3000/api/sarbini/admin/${id}`, {
          admin_name: updatedUserName,
          admin_Pseudo: updatedUserPseudo,
          admin_password: updatedUserPassword,
        });
        console.log(result.data);
        alert("User updated");
      } catch (error) {
        console.error(error);
        alert("Error updating user");
      }
    };

    const updateCont = async () => {
      const updatedUserName = userName === "" ? admin.admin_name : userName;
      const updatedUserPseudo = userPseudo === "" ? admin.admin_Pseudo : userPseudo;
      const updatedUserPassword = userPassword === "" ? admin.admin_password : userPassword;
    
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].admin_Pseudo === userPseudo) {
          return alert("User Pseudo Exists");
        }
      }
    
      if (userPassword !== userPassword1) {
        return alert("Unmatched Password");
      }
    
      if (userPassword.length < 8 && userPassword.length !==0 ) {
        return alert("Your Password Should Have At Least 8 Characters");
      }
    
      await handleUpdate(updatedUserName, updatedUserPseudo, updatedUserPassword);
      setRefresh(!refresh);
    };
    
    
    const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setIsEditing(false);
        updateCont()

        
      }
    };
    const handleDoubleClick = () => {
      setIsEditing(true);
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
              className="inputProfile"
                type="text"
                name="userName"
                placeholder="update Name..."
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
                placeholder="update Pseudo..."
                name="userPseudo"
                className="inputProfile"
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
               className="inputProfile"
               placeholder="update Password..."
                type="text"
                name="userPassword"
                value={userPassword1}
                onChange={(e)=>{setUserPassword1(e.target.value)}}
                onKeyPress={handleKeyPress}
              />
              <br />
              <input
               className="inputProfile"
               placeholder="Confirm Password..."
                type="text"
                name="userPassword"
                value={userPassword}
                onChange={(e)=>{setUserPassword(e.target.value)}}
                
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