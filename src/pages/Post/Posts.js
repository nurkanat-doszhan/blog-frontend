import {Link} from "react-router-dom";
import './Posts.scss'

const Posts = ({data}) => {   

  return (
    <>
      <h1 className='text-center mb-5 mt-4'>Посты</h1>
      <div className="posts">
        <div className='row'>
        {
          data.map((item, i) => (
            <div key={i} className='col-md-6'>
              <div className="row post g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">Design</strong>
                  <h5 className="mb-1">{item.title}</h5>
                  <div className="mb-3 text-muted">{item.fullDate}</div>
                  <p className="mb-2 desc">{item.description}</p>
                  <Link to={`/${item._id}`} className="stretched-link">Continue reading</Link>
                  {/* <button className="btn btn-sm btn-outline-danger card-delete mt-4"
                    onClick={() => alert(item._id)}>
                    <i className="bi bi-x-lg"></i>
                  </button> */}
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img style={{width: '220px', height: '230px', objectFit: 'cover'}} src={item.img} alt="..." />
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default Posts