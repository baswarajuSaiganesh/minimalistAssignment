import './index.css'

const PopupCard = props => { 
    const {name} = props
    return(
    <div className='card'>
        <div className='imgs-container'>
        <img src='./images/normal-image.jpg' className='popup-img' alt='product' />
        <div>
            <img src='./images/sm-img1.jpg' className='popup-sm-img' alt='img1' />
            <img src='./images/sm-img-2.jpg' className='popup-sm-img' alt='img2' />
            <img src='./images/sm-img-2.jpg' className='popup-sm-img' alt='img3' />
            <img src='./images/sm-img-2.jpg' className='popup-sm-img' alt='img4' />
        </div>
        </div>
        <div className='desc-container'>
            <p className='name'>{name}</p>
            <p className='mrp'>MRP:</p>
            <h1>Raju’s Dreams/-</h1>
            <hr />
            <p className='title'>Product Description:</p>
            <p className='description'>This product packs an extra punch, thanks to the literal blood, sweat and tears of a young boy.</p>
            <hr />
            <p className='title'>Product Contents:</p>
            <p className='description'>10 hand-hurting pieces of rassi bombs</p>
            <p className='description'>Jilled with great pain</p>
            <p className='description'>Raju’s hopes</p>
            <hr />
            <p className='title'>Shipping Time:</p>
            <p className='description'>Before Raju understands that his dreams do not matter.</p>
            <button type='button' className='choose-btn'>Choose Now</button>
        </div>
    </div>
)
}

export default PopupCard