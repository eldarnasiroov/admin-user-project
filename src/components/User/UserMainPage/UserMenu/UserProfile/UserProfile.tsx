import { Button, Input, message, Modal } from 'antd';
import { useState } from 'react';
import { changePassword, changeUsernamee } from '../../../../../features/userDataSlice';
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
    const [currentPassword, setCurrentPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isUsernameModalVisible, setIsUsernameModalVisible] = useState(false);
    const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
    const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(true);
    const [isNewPasswordValid, setIsNewPasswordValid] = useState(true);
    const [isConfirmNewPasswordValid, setIsConfirmNewPasswordValid] = useState(true);

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
    };

    const currentPasswordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(e.target.value);
        setIsCurrentPasswordValid(true);
    };
    const newPasswordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
        setIsNewPasswordValid(true);
    };
    const newConfirmPasswordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmNewPassword(e.target.value);
        setIsConfirmNewPasswordValid(true);
    };

    const savePasswordChangesHandler = () => {
        if (currentPassword && newPassword && confirmNewPassword) {
            if (currentPassword !== currentUser?.password) {
                setIsCurrentPasswordValid(false);
                message.error('Вы ввели неверный текущий пароль');
            } else if (newPassword !== confirmNewPassword) {
                setIsNewPasswordValid(false);
                setIsConfirmNewPasswordValid(false);
                message.error('Ваши пароли не совпадают');
            } else {
                dispatch(changePassword({newPassword}));
                message.success('Пароль успешно изменен!');
                setIsPasswordModalVisible(false);
            }
        } else {
            message.error('Необходимо заполнить все поля')
        }
    };


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
                    <Button onClick={() => setIsPasswordModalVisible(true)} type='primary'>Сменить пароль</Button>
                </div>
                <Modal okText='Изменить' cancelText='Отменить' closeIcon={<></>} width={1000} title="Смена имени пользователя" onOk={() => saveUsernameChangesHandler()} onCancel={() => setIsUsernameModalVisible(false)} visible={isUsernameModalVisible}>
                    <div className="user_profile_change_input">
                        <h3>Введите новое имя пользователя</h3>
                        <Input style={{width: '300px'}} status={isUsernameValid ? '' : 'error'} onChange={(e) => {changeUsernameHandler(e)}} value={newUsername} type="text" placeholder='Новое имя пользователя' />
                    </div>
                </Modal>
                <Modal okText='Изменить' cancelText='Отменить' closeIcon={<></>} width={1000} title="Смена пароля" onOk={() => {savePasswordChangesHandler()}} onCancel={() => setIsPasswordModalVisible(false)} visible={isPasswordModalVisible}>
                    <div className="user_profile_change_input">
                        <h3>Введите текущий пароль</h3>
                        <Input style={{width: '300px'}} status={isCurrentPasswordValid ? '' : 'error'} onChange={(e) => {currentPasswordInputHandler(e)}} value={currentPassword} type="password" placeholder='Текущий пароль' />
                        <h3>Введите новый пароль</h3>
                        <Input style={{width: '300px'}} status={isNewPasswordValid ? '' : 'error'} onChange={(e) => {newPasswordInputHandler(e)}} value={newPassword} type="password" placeholder='Новый пароль' />
                        <Input style={{width: '300px'}} status={isConfirmNewPasswordValid ? '' : 'error'} onChange={(e) => {newConfirmPasswordInputHandler(e)}} value={confirmNewPassword} type="password" placeholder='Повторите новый пароль' />
                    </div>
                </Modal>
        </div>
    )
}

export default UserProfile;