import { useAppDispatch } from '../../../../hook';
import './AdminAddProduct.css';
import React, { useState } from 'react';

const AdminAddProduct = () => {
    const inputt = React.useRef(null)
    const dispatch = useAppDispatch();
    const [source, setSource] = useState('');
    
    const fileUploadHandler = (input: any):any => {
        let file = input.target.files[0];
        setSource(URL.createObjectURL(file))
    }
    return (
        <div>
            <input ref={inputt} type="file" onChange={(e) => fileUploadHandler(e)} />
            <img src={source} alt="" />
        </div>
    )
}

export default AdminAddProduct;