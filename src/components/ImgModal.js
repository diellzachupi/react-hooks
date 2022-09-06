import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';


function ImgModal(props) {
const {image, show, handleClick} = props;
  

  return (
    <>

    <Modal show={show} onHide={handleClick} closeButton>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <img className="image-result" src={image} alt="" width={450} height={300}  />
      </Modal.Body>
    </Modal>
  </>
   
  )
}

export default ImgModal;