import React from 'react'

const Items = ({menuItems}) => {
    // menuItems.map((item)=> {
        
    //     console.log(id);
    //     console.log(img);
    //     console.log(title);
    //     console.log(price);
    //     console.log(desc);
    // })
    return (
      <main>
        {menuItems.map((item) => {
            const {id,img,title,price,desc} = item;
            return (
                <section className="col-md-6" key={id}>
                    <img src={img} />
                    <div className="info-row">
                        <h3> {title} </h3>
                        <h3> ${price} </h3>
                    </div>
                    <p> {desc} </p>
                </section>
            );
        })}
      </main>
    );
}

export default Items
