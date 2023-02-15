import React from "react"

export default function Item() {
    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Price"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Title"
                    className="form--input"
                />
                
            </form>
        </main>
    )
}