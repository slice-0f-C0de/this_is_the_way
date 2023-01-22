import React from "react";
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return <div className={c.dialogs}>
       <div className={c.dialogsItems}>
           <div className={c.dialog}>
               <NavLink to="/dialogs/1">Daniil</NavLink>
           </div>
           <div className={c.dialog}>
               <NavLink to="/dialogs/2">Ksenia</NavLink>
           </div>
           <div className={c.dialog}>
               <NavLink to="/dialogs/3">Kirill</NavLink>
           </div>
           <div className={c.dialog}>
               <NavLink to="/dialogs/4">Ruslan</NavLink>
           </div>
           <div className={c.dialog}>
               <NavLink to="/dialogs/5">Mom</NavLink>
           </div>
           <div className={c.dialog}>
               <NavLink to="/dialogs/6">Dad</NavLink>
           </div>
       </div>
           <div className={c.messages}>
               <div className={c.message}>Hi!</div>
               <div className={c.message}>How are you?</div>
               <div className={c.message}>How is your programming?</div>
       </div>
    </div>
}

export default Dialogs;