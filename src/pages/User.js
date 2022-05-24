import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/homepage/user.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
export default function UserDashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, navigate]);

  return (
    <>
      <Navbar />
      <main className="user-main">
        <div className="sidebar">
          <div class="user_sidebar-content">
            <div>Dashboard</div>
            <div>Account</div>
          </div>
          <div className="logout_container">
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <div className="info">
          <div>
            <p>Email :</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Name :</p>
            <p>{name}</p>
          </div>
        </div>
      </main>
    </>
  );
}
