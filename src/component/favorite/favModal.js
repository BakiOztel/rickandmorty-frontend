import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteToList } from '../../store/favorite/favbasket.js';

function FavModal({ show, setShow, id, name }) {

    const dispatch = useDispatch();
    const handleClose = () => setShow(false);

    const deleteItem = (id) => {
        dispatch(deleteToList(id))
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Are you sure you want to remove the character named {name} from favorites?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={() => { deleteItem(id) }} variant="danger">
                    Yes
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FavModal;