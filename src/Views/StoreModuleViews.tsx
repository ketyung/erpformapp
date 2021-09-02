import React from 'react';
import { useState } from 'react';
import { Item, ItemCategory } from '../Models/StoreModule';
import './StoreModule.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


interface ItemCategoryProps {

    categories : ItemCategory[];

    selected? : ItemCategory
    
}

export const ItemCategoryList : React.FC <ItemCategoryProps> = ({categories, selected}: ItemCategoryProps) => {

    const [open, setOpen] = useState(false);

    const openModal = () => setOpen(true);
    const closeModal = (category : ItemCategory) =>{

        setOpen(false);
        selected = category;

    } 

    const onCloseModal = () => setOpen(false);


    return <div><button onClick={openModal}>...</button>
         <Modal open={open} onClose={onCloseModal}>
        <div style={{"padding": "10px"}}>
        <table className="itemCategoryTable">   
        <tbody>
                <tr className="tableHeader">
                    <td style={{"width": "20%", "padding" : "5px", textAlign : 'left' }}>
                        <b>Code</b>
                    </td>
                    <td style={{"width": "80%", "padding" : "5px", textAlign : 'left' }}>
                        <b>Name</b>
                    </td>
                </tr>

                {categories.map (catgeory => {

                    return <tr className="tableRow" onClick={() => closeModal(catgeory)}>
                         <td style={{"width": "20%", "padding" : "5px", textAlign : 'left' }}>    
                            {catgeory.id}</td>
                                            
                            <td style={{"width": "80%", "padding" : "5px", textAlign : 'left' }}>
                            {catgeory.name}</td>
                    </tr>

                })}


            </tbody>

        </table></div>
        </Modal>
    </div>

};


interface ItemProps {

    item : Item;
}

export const ItemForm : React.FC <ItemProps> = ({item}: ItemProps) => {

    const codeOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
        item.code = e.currentTarget.value;
        console.log("item.code::"+ item.code);
    };

    const nameOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
        item.name = e.currentTarget.value;
    };


    const priceOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
        item.price = isNaN(e.currentTarget.valueAsNumber) ? Number(e.currentTarget.value) : 0; 
    };

    const qohOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
        item.qoh = isNaN(e.currentTarget.valueAsNumber) ? parseInt(e.currentTarget.value) : 0; 
    };

    const itemCats : Array<ItemCategory> = [
        { id : 1822, name : "Accessories"},
        { id : 1823, name : "Cables"},
        { id : 1825, name : "Projectors"},
        { id : 1826, name : "Gadgets"},
        { id : 1827, name : "Computers"},
        { id : 1830, name : "Smartphones"},
        { id : 1817, name : "Tablets"},
      ];
      

    return <div>

        <table className="itemTable">
            <tr>
                <td style={{"width":"20%"}}>
                    <b>Code</b>
                </td>
                <td style={{"width":"80%"}} colSpan={3}>
                    <input type="text" value={item.code} onChange={codeOnChange} />
                </td>
            </tr>

            <tr>
                <td style={{"width":"20%"}}>
                    <b>Name</b>
                </td>
                <td style={{"width":"80%"}} colSpan={3}>
                    <input type="text" style={{"width": "250px"}} value={item.name} onChange={nameOnChange} />
                </td>
            </tr>

            <tr>
                <td style={{"width":"20%"}}>
                    <b>Catgeory</b>
                </td>
                <td style={{"width":"30%"}}>
                    <ItemCategoryList categories={itemCats} selected={item.category}/>
                </td>
                <td style={{"width" : "50%"}} colSpan={2}>
                {item.category?.name}
                </td>
            </tr>

            <tr>
                <td style={{"width":"20%"}}>
                    <b>Price</b>
                </td>
                <td style={{"width":"30%"}}>
                    <input type="text" style={{"width": "30px"}} value={item.price} onChange={priceOnChange} />
                </td>
                <td style={{"width":"20%"}}>
                    <b>QOH</b>
                </td>
                <td style={{"width":"30%"}}>
                    <input type="text" style={{"width": "30px"}} value={item.qoh} onChange={qohOnChange} />
                </td>
        
            </tr>


        </table>


    </div>
}