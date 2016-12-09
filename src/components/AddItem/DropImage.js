var React = require('react');
var Dropzone = require('react-dropzone');
import styles from './AddItem.css'
import {uploadedimage} from 'actions/AppActions.js'

class DropImage extends React.Component {
  // state = {files: []}

  onDrop = (acceptedFiles) => {
    var data = new FormData();
    data.append('image', acceptedFiles[0])
    this.props.onUpload(data)
    // $.ajax({
    //   url: 'http://localhost:8080/RentersCircle/item/uploadImage',
    //   data: data,
    //   processData: false,
    //   contentType: false,
    //   type: 'POST',
    //   success: function(imageId){
    //     dispatch(uploadedimage{imageId});
    //   } 
    // });
    // this.setState({
    //   files: acceptedFiles
    // });
  }

  render() {
    const props = this.props.fields[field.name];

    return (
    <input
      type="file"
      onDrop={props.onDrop}
    />
    );
    // return (
    //   <div>
    //     <Dropzone ref={(node) => { this.dropzone = node; }} multiple onDrop={this.onDrop}>
    //       <div>Try dropping some files here, or click to select files to upload.</div>
    //     </Dropzone>
    //   </div>
    // );
  }
};

export default DropImage
        // {this.state.files.length > 0 ? <div>
        //   <div>{this.state.files.map((file) => <img className={styles.img} key={file.preview} src={file.preview} /> )}</div>
        // </div> : null}
