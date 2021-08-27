import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextField} from "@material-ui/core";

const AddCategory = ({setCategories }) => {
    const [inputValue , setInputValue] = useState('');

    const hanndleInputChange = (e) =>{
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(inputValue.trim().length > 2){
            setCategories( (categories) => [inputValue , ...categories] )
            setInputValue('')
        }
    }

    return (
        <div className="search-container">
            <h2>GifExpertApp</h2>
            <form className="add-category" onSubmit={handleSubmit}>
                <div className="form-input-material">
                    <TextField id="filled-basic" label="Search Gif" onChange={ hanndleInputChange } autoComplete="off"/>
                </div>
            </form>
        </div>
    );
};


export default AddCategory;
AddCategory.propTypes ={
    setCategories : PropTypes.func.isRequired
}