import { useState, useEffect } from "react";

const SignUp = () => {

    const [inp, setInp] = useState({ name: '', login: '', password: '' })
    const [btnDisable, setBtnDisable] = useState(true)
    const [progressWidth, setProgressWidth] = useState(0)
    const progressbar25 = 25
    const inputChangedHandler = (e) => {
        setInp({...inp, [e.target.id]: e.target.value})
    }

    useEffect(() => {
        if (inp.name !== '' && inp.login !== '' && inp.password !== '') {
            setBtnDisable(false)
            console.error(inp.login)
        } else {
            setBtnDisable(true)
        }
        if (inp.name !== '') {
            console.log(progressWidth)
            setProgressWidth(progressWidth+progressbar25)
        } else {
            setProgressWidth(progressWidth-progressbar25)
        }
        if (inp.login !== '') {
            console.log(progressWidth)
            setProgressWidth(progressWidth+progressbar25)
        } else {
            setProgressWidth(progressWidth-progressbar25)
        }
        if (inp.password !== '') {
            console.log(progressWidth)
            setProgressWidth(progressWidth+progressbar25)
        } else {
            setProgressWidth(progressWidth-progressbar25)
        }
    }, [inp])
    
    return (
        <>
            <h1 className='text-center mb-5 mt-4'>Sign up</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="Watermelon_Monochromatic.png" className="float-end" alt="..." />
                </div>
                <div className="col-md-6">
                    <form method="post" action="http://localhost:5000/set-user">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={(e)=>inputChangedHandler(e)} require='true' name="userName"
                                className="form-control" type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Login</label>
                            <input onChange={(e)=>inputChangedHandler(e)} require='true' name="login"
                                className="form-control" type="text" id="login" placeholder="Enter your login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={(e)=>inputChangedHandler(e)} require='true' name="password"
                                className="form-control" type="text" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Choose your photo</label>
                            <input onChange={(e)=>inputChangedHandler(e)} className="form-control" name="userPhoto"
                                type="file" id="formFile" />
                        </div>
                        <div className="mb-3">
                            <div className="progress" style={{ height: '10px' }}>
                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progressWidth}%`}}></div>
                            </div>
                        </div>
                        <div className="col-auto mb-3">
                            <input disabled={btnDisable} type="submit" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp