import React from 'react';
import Main from './components/Main.jsx'
import Messages from './components/messages.jsx'


export default function SignUp({ messages }) {
    return (
        <Main>
        <main className="container">
            <div className="row justify-content-center">
                <section className="col-6 mt-5">
                <Messages messages = {messages} />
                    <form action="/signup" method="POST">
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="userName" name="userName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </section>
            </div>
        </main>
        </Main>
    )
}

