import React, { useState } from "react";
import { Image } from "react-bootstrap";
import styles from './ProfileSettings.module.css'
import CustomBTN from "../../global/components/CustomBTN/CustomBTN";
import { FaPencilAlt } from "react-icons/fa";

const ProfileSettings = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const image = process.env.PUBLIC_URL + "/images/user-04.jpg";

  //   <CustomBTN
  //   text="Join"
  //   textColor="text-light"
  //   bgColor="redBTNbg"
  //   icon={false}
  // />

  return (
    <div className="text-light">
      {isEditMode ? (
        <div>i am edit form</div>
      ) : (
        <div>
          <h4 className="mt-4">Profile Settings</h4>
          <div className="d-flex mt-4 gap-3">
            <Image src={image} height={110} width={110} roundedCircle />
            <div className="d-flex flex-column">
              <h5>Username: stacystacy19</h5>
              <small className={styles.subscriptionPlan}>Subscription plan: Premium</small>
              <div className="d-flex gap-2 mt-2">
              <CustomBTN
                text="Edit Profile"
                textColor="text-light"
                bgColor="redBTNbg"
                icon={<FaPencilAlt className="fs-6"/>}


              />
               <CustomBTN
                text="Join"
                textColor="text-dark"
               variant="light"
                
              />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
