import React, {useState} from 'react';
import data from "./data";
import './styles.css'

const Accordion = () => {
    const [selected, setSelected] = useState<string | null>(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState<Array<string>>([])


    const handleSingleSelection = (id:string) => {
        setSelected(id === selected ? null: id)
    }

    const handleMultiSelection = (id:string) => {
        let copyMultiple = [...multiple]
        if(!copyMultiple.includes(id)) copyMultiple.push(id)
        else copyMultiple=  copyMultiple.filter(item => item !== id)

        setMultiple(copyMultiple)
    }

    const buttonText = enableMultiSelection ? "Disable multi selection" : "Enable multi selection"

    return (
        <div className="wrapper">
            <button onClick={()=>{
                setSelected(null)
                setMultiple([])
                setEnableMultiSelection(!enableMultiSelection)
            }}>{buttonText}</button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map(dataItem =>{
                            const {id, question,answer} = dataItem
                            return (
                                <div className="item">
                                    <div onClick={
                                        ()=> enableMultiSelection ? handleMultiSelection(id): handleSingleSelection(id)
                                    }
                                         className="title">
                                        <h3>{question}</h3>
                                        <span>+</span>
                                    </div>
                                    {selected === id || multiple.indexOf(id) !== -1 ? <div className="content">{answer}</div> : null}
                                </div>
                            )
                        })
                        :<div>No data found</div>
                }
            </div>
        </div>
    );
};

export default Accordion;