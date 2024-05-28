import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layout/AdminLayout/AdminLayout';
import UserSelection from '../../ComponenetsAdminDashboard/UserSelection';


function SelectUserAdminPage() {
    const [username, setUsername] = useState("");
  return (
    <AdminLayout>
        <UserSelection />
    </AdminLayout>
  )
}

export default SelectUserAdminPage
