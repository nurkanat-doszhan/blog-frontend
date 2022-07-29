import { useEffect, useState } from "react";
import axios from 'axios'

const Login = () => {
    let [data, setData] = useState([{login: '', password: ''}]);

    // useEffect(() => {
    //     axios.post('/get-user', {
    //         userName: "Joseph"
    //     }).then((response) => {
    //         console.log(response.data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })

        // axios.post('http://localhost:5000/login', {
        //     login: 'Lofo',
        //     password: 'laka'
        // })
        // .then((response) => {
        //     console.log(response.statusText)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    // })

    const change = (e) => {
        if (e.target.id === "login") {
            data.login = e.target.value
        } else if (e.target.id === "password") {
            data.password = e.target.value
        }
    }
    
    const log = () => {
        // fetch(u, /*{ method: 'GET', body: data }*/).then(res => {
        //     console.log(data.login)
        //     console.log(data.pass)
        //     console.log(res.bodyUsed)
        //     alert('Loso')
        // }).catch(error => console.error(error));
        axios.post('http://localhost:5000/login').then((response) => {
            console.log(response.status)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <h1 className='text-center mb-5 mt-4'>Login</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src="Startup_Monochromatic.png" className="float-end" alt="..." />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="login" className="form-label">Login</label>
                            <input onChange={ e => change(e) } require='true' className="form-control"
                                type="text" id="login" placeholder="Enter your login" name="login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={ e => change(e) } require='true' className="form-control"
                                type="text" id="password" placeholder="Enter your password" name="password" />
                        </div>
                        <div className="col-auto mb-3">
                            <input onClick={() => log()} type="button" value="Click" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login