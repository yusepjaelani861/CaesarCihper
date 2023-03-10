const PreviewImages = ({url}) => {
    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <img src={url} className="modal-box cursor-pointer" />
            </label>
        </>
    )
}

export default PreviewImages