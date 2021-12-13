import React, { useState } from 'react';
import { map } from 'lodash';
import { Icon, Button, Menu, Table } from 'semantic-ui-react';
import BasicModal from '../Modal'

export default function index(props) {
    
    const {data} = props;

    return (
        <Table celled>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Tittle</Table.HeaderCell>
                <Table.HeaderCell>Subtitle</Table.HeaderCell>
                <Table.HeaderCell>Isbn13</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Url</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            
            {
                map(data.books, (book)=>(
                    <Table.Row>
                        <Book key ={ book.isbn13 } book={ book }/>
                    </Table.Row>
                ))
            }

            </Table.Body>

            <Table.Footer>
            <Table.Row>
                <Table.HeaderCell>
                    <Button disabled size='small'>
                        Encontrados: {data.total}
                    </Button>
                </Table.HeaderCell>

                <Table.HeaderCell />

                {/* <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                    </Menu.Item>
                </Menu>
                </Table.HeaderCell> */}
            </Table.Row>
            </Table.Footer>
        </Table>
    )
}


function Book(props){
    const {book}=props;
    const [showModal, setShowModal] = useState(false);

    const onShowModal=()=> setShowModal(true);
    const onCloseModal=()=> setShowModal(false);
    
    return(
        <>
            <BasicModal show={showModal} setShow={setShowModal} book={book}/>
            <Table.Cell>{ book.title } <Button onClick={onShowModal}>Ver</Button></Table.Cell>
            <Table.Cell>{ book.subtitle }</Table.Cell>
            <Table.Cell>{ book.isbn13 }</Table.Cell>
            <Table.Cell>{ book.price }</Table.Cell>
            <Table.Cell><a href={ book.url }>{ book.url }</a></Table.Cell>
        </>
    )
}