import { useAppSelector } from '../../../hook';
import AdminError from '../AdminError/AdminError';
import AdminMainPage from '../AdminMainPage/AdminMainPage';
import './AdminSwitcher.css';

const AdminSwitcher = () => {
    const adminPermission = useAppSelector(state => state.admin.permission);
    return (
        <div className="switcher">
            {adminPermission ? <AdminMainPage /> : <AdminError />}
        </div>
    )
}

export default AdminSwitcher;