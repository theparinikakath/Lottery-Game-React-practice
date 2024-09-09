import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    return errors;
  };

export default function CommentsForm({addNewComment}){
    // let [formData,setFormData]=useState({
    //     username:"",
    //     rem:"",
    //     rating:5,
    // });

    const formik = useFormik({
        initialValues:{
            username:"",
            rem:"",
            rating:5,   
        },
        validate,
        onSubmit: values=>{
            alert(JSON.stringify(values,null,2));
        },
    });

    // let handleInputChange=(event)=>{
    //     setFormData((currData)=>{
    //         return {...currData,[event.target.name]:event.target.value}
    //     });
    // };

    // let [isValid,SetIsValid] = useState(true);

    // let handleSubmit = (event)=>{
    //         console.log(formData);
    //         addNewComment(formData);
        
    //     setFormData({
    //         username:"",
    //         rem:"",
    //         rating:5,
    //     });
    // };

    return(
        <div>
            <h4>comments</h4>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input 
                name="username"
                placeholder="username" 
                id="username" 
                type="text" 
                value={formik.values.username} 
                onChange={formik.handleChange}
                />
                <br/>
                <br/>
                {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
                <label htmlFor="rem">Remarks: </label>
                <textarea 
                name="rem"
                id="rem" 
                value={formik.values.rem}
                placeholder="add few remarks" 
                onChange={formik.handleChange}
                >
                    Remarks
                    </textarea>
                <br/>
                <br/>

                <label htmlFor="rating">Rating: </label>
                <input 
                name="rating"
                id="rating" 
                placeholder="rating" 
                type="number"  
                value={formik.values.rating} min={1} max={5} 
                onChange={formik.handleChange}
                />
                <br/>
                <br/>

                <button type="submit">Add comment</button>

            </form>
        </div>
    );
}
