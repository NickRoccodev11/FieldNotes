import React from "react";

export default function Messages({ messages }) {
    return (
        <>
            {messages.errors
                ? messages.errors.map((el, i) =>
                    <div key={i} className=" alert alert-danger">{el.msg}</div>
                )
                : null
            }
            {messages.info
                ? messages.info.map((el, i) =>
                    <div key={i} className=" alert alert-danger">{el.msg}</div>
                )
                : null
            }
        </>
    )
}