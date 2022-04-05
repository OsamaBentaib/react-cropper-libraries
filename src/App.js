import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button/Button";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper";

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedModal, setSelectedModal] = useState(1);
	const [image, setImage] = useState(null);
	const [croppedImg, setCroppedImg] = useState(null);
	const handleFileSelect = async (e, modal) => {
		try {
			e.preventDefault();
			let files;

			if (e.dataTransfer) {
				files = e.dataTransfer.files;
			} else if (e.target) {
				files = e.target.files;
			}

			const reader = new FileReader();

			if (!reader) return;

			reader.onload = () => {
				setSelectedModal(modal);
				setImage(reader.result?.toString());
				e.target.value = null;
				setShowModal(true);
			};

			reader.readAsDataURL(files[0]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
    <Wrapper>
      <main>
        <section className="mt-8">
          <article className="relative flex flex-col items-center mt-10">
            {croppedImg && <img src={croppedImg} alt="uploaded pic" />}
          </article>
          <div>
            <p>Crop image with a change able size with (react-cropper)</p>
            <article className="relative flex flex-col mt-10">
              <input
                className="opacity-0 cursor-pointer absolute w-48"
                style={{
                  height: 45,
                  display: !selectedModal ? "none" : "block",
                }}
                type="file"
                onChange={(e) => handleFileSelect(e, 1)}
              />
              <Button
                disabled={!selectedModal}
                className="w-48"
              >
                React Cropper
              </Button>
            </article>
          </div>
          <div className="mt-10">
            <p>
              Crop image with change able size but without changing the shape
              with (react-image-crop)
            </p>
            <article className="relative flex flex-col mt-10">
              <input
                className="opacity-0 cursor-pointer absolute w-48"
                style={{
                  height: 45,
                  display: !selectedModal ? "none" : "block",
                }}
                type="file"
                onChange={(e) => handleFileSelect(e, 2)}
              />
              <Button disabled={!selectedModal} className="w-48">
                React Image Crop
              </Button>
            </article>
          </div>
          <div className="mt-10">
            <p>
              Crop image with Image move able in the background Using
              (react-easy-crop)
            </p>
            <article className="relative flex flex-col mt-10">
              <input
                className="opacity-0 cursor-pointer absolute w-48"
                style={{
                  height: 45,
                  display: !selectedModal ? "none" : "block",
                }}
                type="file"
                onChange={(e) => handleFileSelect(e, 3)}
              />
              <Button disabled={!selectedModal} className="w-48">
                React Easy Crop
              </Button>
            </article>
          </div>
          <div className="mt-10">
            <p>Crop profile avatar (react-avatar-editor)</p>
            <article className="relative flex flex-col mt-10">
              <input
                className="opacity-0 cursor-pointer absolute w-48"
                style={{
                  height: 45,
                  display: !selectedModal ? "none" : "block",
                }}
                type="file"
                onChange={(e) => handleFileSelect(e, 4)}
              />
              <Button disabled={!selectedModal} className="w-48">
                React Avatar Editor
              </Button>
            </article>
          </div>
        </section>
      </main>

      <div className="absolute">
        {selectedModal && (
          <ModalWrapper
            showModal={showModal}
            modal={selectedModal}
            imgURL={image}
            onSaveHandler={setCroppedImg}
            onModalClose={() => {
              setShowModal(false);
              setImage(null);
            }}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
	width: 80%;
	margin: auto;
`;

export default App;
