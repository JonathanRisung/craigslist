import { Modal } from "react-bootstrap";
import React, { useState } from "react";

function CreatePost() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    function hideModal() {
        setIsModalVisible(false);
    }
    function showModal() {
        setIsModalVisible(true);
    }

    return (
        <div>
            <button className="createPostBtn" onClick={showModal}>Create post</button>

            <Modal
                show={isModalVisible}
                onHide={hideModal}
                backdrop="static"
                keyboard={false}
                className="modals"
            >
                <Modal.Header>
                    <Modal.Title><h2>Create Post</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <input type="text" placeholder="Post title" /> <br /> <br />
                        <textarea className="postDesc" rows="10" type="text" placeholder="Post description" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modalBtns">
                        <button onClick={hideModal}>Post</button>
                        <button onClick={hideModal}>Discard</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreatePost;