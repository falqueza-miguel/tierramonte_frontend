import React, { useState } from "react";

import SideNavBar from "../Layout/SideNavBar";
import AdminDisplayField from "./AdminDisplayField";
import styles from "./adminPageContainer.module.css";
function AdminPageContainer(props) {
   const focus = "third";
   const navBarItems = [
      { id: 1, title: "Profile", push: "/admin" },
      { id: 2, title: "Create", push: "/admin/AdminCreateUser" },
      { id: 3, title: "List of user", push: `/admin/AdminViewUser` },
   ];
   return (
      <div className={styles.adminPageContainer}>
         <SideNavBar
            className={styles.navbarContainer}
            items={navBarItems}
            highlighted={focus}
         />
         <AdminDisplayField
            className={styles.displayFieldContainer}
            data={props.data}
         />
      </div>
   );
}

export default AdminPageContainer;
