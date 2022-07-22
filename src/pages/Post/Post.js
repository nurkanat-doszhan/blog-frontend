import './Post.scss'

const Post = ({data}) => {
    return (
        <>
            {
                data.map((item, i) => {
                    if (window.location.pathname === `/${item._id}`) {
                        return (
                            <div key={i}>
                                <div className={'post-bg'} style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div style={{ paddingTop: '25vh' }}>
                                    {/* <img src={item.img} /> */}
                                    <h1 className='text-center mt-4 mb-5'>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default Post