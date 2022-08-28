import { useAppSelector } from '../../../../../hook';
import './UserProfile.css';

const UserProfile = () => {
    const currentUser = useAppSelector(state => state.user.usersData.find(user => user.permission));
    const firstname = currentUser?.firstName;
    const lastName = currentUser?.lastName;
    const username = currentUser?.username;

    return (
        <div className='user_profile_info'>
            
        </div>
    )
}

export default UserProfile;