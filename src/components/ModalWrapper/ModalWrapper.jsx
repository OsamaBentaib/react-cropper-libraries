import ReactAvatarEditor from "../Croppers/ReactAvatarEditor/ReactAvatarEditor";
import ReactCropper from "../Croppers/ReactCropper/ReactCropper";
import ReactEazyCrop from "../Croppers/ReactEazyCrop/ReactEazyCrop";
import ReactImageCrop from "../Croppers/ReactImageCrop/ReactImageCrop";

const ModalWrapper = ({
  modal,
  showModal,
  onModalClose,
  imgURL,
  onSaveHandler,
}) => {
  switch (modal) {
    case 1:
      return (
        <ReactCropper
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case 2:
      return (
        <ReactImageCrop
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case 3:
      return (
        <ReactEazyCrop
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    case 4:
      return (
        <ReactAvatarEditor
          showModal={showModal}
          onModalClose={onModalClose}
          imgURL={imgURL}
          onSaveHandler={onSaveHandler}
        />
      );
    default:
      return 0;
  }
};

export default ModalWrapper;
