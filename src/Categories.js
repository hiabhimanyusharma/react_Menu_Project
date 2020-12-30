import React from 'react'

const Categories = ({categories,change}) => {
    return (
        <div className="btn-container">
            <div className="button-group">
                {categories.map((item)=>{
                    return (
                        <button
                        className="btn btn-default" 
                        onClick={
                            ()=> change(item)
                        }>{item}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
