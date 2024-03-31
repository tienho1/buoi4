import React, { useState } from 'react';

const Hook7 = () => {
    const [menu,setMenu]= useState(false)
    const handle_menu=()=>{
        setMenu(!menu)
    }

    return (
        <div>
            <button onClick={handle_menu} className={menu?"main":"main active"}>Menu</button>
            {
                menu &&
                (
                    <div>
                        hienj menu
                    </div>
                )
            }
        </div>
    );
}

export default Hook7;
