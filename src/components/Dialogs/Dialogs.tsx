import React from "react";
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    id: string
    name: string
}

const DialogItem = (props: DialogPropsType) => {

    let path = "/dialogs/" + props.id // 1. Объявляем переменную в которую выносим наши данные

    return <div className={c.dialog}>
        <NavLink to={path}>{props.name}</NavLink> {/* 2. Вставляем переменную в путь */}
    </div>
}

const Dialogs = () => {
    return <div className={c.dialogs}>
       <div className={c.dialogsItems}>
           <div className={c.dialog}>
               <DialogItem id={"1"} name={"Daniil"}/> {/* 3. Используем компоненту с нашими данными */}
           </div>
           <div className={c.dialog}>
               <DialogItem id={"2"} name={"Ksenia"}/>
           </div>
           <div className={c.dialog}>
               <DialogItem id={"3"} name={"Mom"}/>
           </div>
           <div className={c.dialog}>
               <DialogItem id={"4"} name={"Dad"}/>
           </div>
           <div className={c.dialog}>
               <DialogItem id={"5"} name={"Kirill"}/>
           </div>
           <div className={c.dialog}>
               <DialogItem id={"6"} name={"Ruslan"}/>
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