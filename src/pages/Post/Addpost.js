// import {useState} from 'react'

export default Addpost => {
    
    let month = new Date().getMonth()
    let monthName = [
        "январь", "февраль",
        "март", "апрель", "май",
        "июнь", "июль", "август",
        "сентябрь", "окрябрь",
        "ноябрь", "декабрь"]
    let day = new Date().getDate()
    let year = new Date().getFullYear() + ',';
    let time = new Date().toLocaleTimeString().slice(0, 5);
    let fullDate = [day, monthName[month], year, time]
    // 14 июля 2022, 15:00

    const inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
        // May be call for search result
    }

    return (
        <>
            <h1 className='text-center mb-5 mt-4'>Add new post</h1>
            <form method="post" action="http://localhost:5000/add-post">
                <div className="mb-3">
                    <label htmlFor="addTitle" className="form-label">Add title</label>
                    <input onChange={e => inputChangedHandler(e)} name="title" type="text" className="form-control" id="addTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="addDescription" className="form-label">Add description</label>
                    <textarea onChange={e => inputChangedHandler(e)} required style={{ whiteSpace: 'pre' }} name="description" className="form-control" id="addDescription" rows="3">
                    </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="addImgUrl" className="form-label">Image URL</label>
                    <input onChange={e => inputChangedHandler(e)} name="img" type="text" className="form-control" id="addImgUrl" />
                </div>
                <div className="mb-3">
                    <span>{fullDate.join(' ').toString()}</span>
                    <input onChange={e => inputChangedHandler(e)} style={{ display: 'none' }} name="fullDate"
                        type="text" className="form-control" value={fullDate.join(' ').toString()} />
                </div>
                <div className="col-auto mb-3">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </>
    )
}