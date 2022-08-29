import { Button, Input, message, Modal } from 'antd';
import { useState } from 'react';
import { changeUsernamee } from '../../../../../features/userDataSlice';
import { useAppDispatch, useAppSelector } from '../../../../../hook';
import './UserProfile.css';

const UserProfile = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user.usersData);
    const currentUser = useAppSelector(state => state.user.usersData.find(user => user.permission));
    const firstname = currentUser?.firstName;
    const lastname = currentUser?.lastName;
    const username = currentUser?.username;
    const [isUsernameValid, setUsernameValid] = useState(true);
    const [newUsername, setNewUsername] = useState(username);
    const [isUsernameModalVisible, setIsUsernameModalVisible] = useState(false);

    const changeUsernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(e.target.value);
        users.map(user => {
            if (e.target.value === user.username) {
                message.warning(`Имя пользователя ${e.target.value} уже занято`);
                setUsernameValid(false);
            } else {
                setUsernameValid(true);
            }
            return user;
        });
    };
    
    const saveUsernameChangesHandler = () => {
        if (isUsernameValid) {
            dispatch(changeUsernamee({newUsername}));
            message.success('Имя пользователя успешно изменено!');
            setIsUsernameModalVisible(false);
        } else {
            message.error('Введите валидное значение имени пользователя');
        }
    }

    return (
        <div className='user_profile_info'>
            <h3>Информация о профиле</h3>
            <div className="profile_info_container">
                <div className="profile_name_data">
                    <span>Имя</span>
                    {firstname}
                </div>
                <div className="profile_name_data">
                    <span>Фамилия</span>
                    <span>{lastname}</span>
                </div>
                <div className="profile_name_data">
                    <span>Имя пользователя</span>
                    <span>{username}</span>
                </div>
            </div>
                <div className="profile_change_buttons">
                    <Button  onClick={() => {setIsUsernameModalVisible(true)}} type='primary'>Сменить имя пользователя</Button>
                    <Button type='primary'>Сменить пароль</Button>
                </div>
                <Modal okText='Изменить' cancelText='Отменить' closeIcon={<></>} width={1000} title="Смена имени пользователя" onOk={() => saveUsernameChangesHandler()} onCancel={() => setIsUsernameModalVisible(false)} visible={isUsernameModalVisible}>
                    <Input status={isUsernameValid ? '' : 'error'} onChange={(e) => {changeUsernameHandler(e)}} value={newUsername} type="text" placeholder='Новое имя пользователя' />
                </Modal>
        </div>
    )
}

export default UserProfile;