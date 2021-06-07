import React,{useState} from 'react'
import {useTranslation} from 'react-i18next/dist/es/useTranslation'

function CreateTask({addTask}) {
    const [value, setValue] = useState("");
    const {t} = useTranslation()
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            placeholder={t("add_a_new_task")}
            onChange={e => setValue(e.target.value)}
        />
    </form>
    )
}

export default CreateTask
