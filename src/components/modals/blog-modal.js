import React, { Component } from "react";
import ReactModal from "react-modal";
import BlogForm from "../blog/blog-form";

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%",
                width: "800px",
                borderRadius: "22px",
                background: "#86dc3d",
                outline: "2px dashed lightgreen"
            },
            overlay: {
                backgroundColor: "rgba(38, 88, 15, 0.8)"
            }
        };

        this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);

    }

    handleSuccessfulNewBlogSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog);
    }

    render() {
        return (

            <ReactModal 
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }} 
                isOpen={this.props.modalIsOpen}
            >
                <BlogForm handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission} 
                />
            </ReactModal>

        );
    }
}