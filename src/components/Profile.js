import React from 'react'

const Profile = () => {
    return (
        <div className="profile-component">
            <h5>Account</h5>
            <div className="profile-container">
                <div className="profile-links">
                    <p className="profile-detail-link">Profile</p>
                    <hr />
                    <p className="profile-detail-link">Order</p>
                    <hr />
                    <p className="profile-detail-link">Address</p>
                    <hr />
                    <p className="profile-detail-link">Setting</p>
                    <hr />
                    <p className="profile-detail-link">Logout</p>
                </div>
                <div className="profile-details">
                    <h4>Profile Details</h4>
                    <div className="profile-row">
                        <p className="text-md-size row-heading">Name</p>
                        <p className="text-md-size">Bharti Gattani</p>
                    </div>
                    <div className="profile-row">
                        <p className="text-md-size row-heading">Email</p>
                        <p className="text-md-size">bhartigattani21@gmail.com</p>
                    </div>
                    <div className="profile-row">
                        <p className="text-md-size row-heading">Account ID</p>
                        <p className="text-md-size">Bharti_01</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile