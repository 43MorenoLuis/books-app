import React, { useEffect, useState } from 'react'
import {Modal, Header, Icon, Button, Image} from 'semantic-ui-react';
import { getBookId } from '../../api/book';

export default function BasicModal(props) {
    const {show, setShow, book }=props;

    const onClose=()=> setShow(false);
    

    return (
        <Modal className='basic-modal' open={show} onClose={onClose} centered={true}>
            <Modal.Header>{book.title}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={book.image} wrapped />
                <Modal.Description>
                <p>{book.subtitle}</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}