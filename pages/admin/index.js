import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPageContainer from '../../components/AdminPageComponent/AdminPageContainer';
function AdminPage(props) {
      const [allUsers, setAllUsers] = useState();
      const DUMMY_DATA = [
            { name: 'ABCD', role: 0 },
            { name: 'HEKTOR', role: 1 },
            { name: 'ALDAB', role: 2 },
            { name: 'XD', role: 3 },
            { name: 'JOBERT', role: 4 },
      ];
      const getAllUsers = async () => {
            try {
                  const response = await axios.get(
                        'http://localhost:4000/api/admin/users'
                  );
                  setAllUsers(response.data);
                  console.log(response.data);
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getAllUsers();
      }, []);
      return (
            <div>
                  <AdminPageContainer data={allUsers} />
            </div>
      );
}
// export const getStaticProps = async () => {
//       const response = await axios.get('http://localhost:4000/api/admin/users');
//       const data = response.data;

//       return {
//             props: data,
//       };
// };
export default AdminPage;
