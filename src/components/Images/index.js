import './index.css'

const Images = props => {
  const {imageItem, onClickImage} = props
  const {imageUrl, id} = imageItem

  const onClickImg = () => {
    onClickImage(id)
  }
  return (
    <li>
      <button type="button">
        <img
          src={imageUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onClickImg}
        />
      </button>
    </li>
  )
}

export default Images
