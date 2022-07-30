import React from "react";
import {ProfileBG, ProfileSectionBG} from "../../Components/ProfileInfo/ProfileDesign";
import styles from "./Profile.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { UserData } from "../../Components/ProfileInfo/UserData";


function Profile(){

    return (
        <div className={styles.profileContainer}>
            <ProfileBG>
                <RiUser3Fill/>
            </ProfileBG>
            <ProfileSectionBG>
                <UserData/>
            </ProfileSectionBG>
        </div>      
    )
}

export default Profile;