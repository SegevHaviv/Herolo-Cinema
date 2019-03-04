import React from 'react'
import { Button } from 'react-bootstrap'
import * as Yup from 'yup';
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Strings from '../constants/Strings'
import withStyles from 'react-jss'

const styles = {
    formField: {
        width: "80%",
        marginBottom: 20,
    },
    form: {
        textAlign: "center"
    },
    buttonsContainer: {
        display: "flex",
    },
    submitButton: {
        flex: "0.3",
        marginRight: "auto",

    },
    cancelButton: {
        flex: "0.3"
    }
}

const MovieForm = (props) => {
    const { handleClose, classes } = props
    return (
        <Form className={classes.form}>

            <div><ErrorMessage name="title" /></div>
            <Field className={classes.formField} type="text" name="title" placeholder={Strings.FORM_TITLE_PLACEHOLDER} />

            <div><ErrorMessage name="director" /></div>
            <Field className={classes.formField} type="text" name="director" placeholder={Strings.FORM_DIRECTOR_PLACEHOLDER} />

            <div><ErrorMessage name="genre" /></div>
            <Field className={classes.formField} type="text" name="genre" placeholder={Strings.FORM_GENRE_PLACEHOLDER} />

            <div><ErrorMessage name="year" /></div>
            <Field className={classes.formField} type="number" name="year" placeholder={Strings.FORM_YEAR_PLACEHOLDER} />

            <div><ErrorMessage name="runtime" /></div>
            <Field className={classes.formField} type="number" name="runtime" placeholder={Strings.FORM_RUNTIME_PLACEHOLDER} />

            <div className={classes.buttonsContainer}>
                <Button className={classes.submitButton} name="submit" type="submit"> Submit </Button>
                <Button className={classes.cancelButton} onClick={() => handleClose()}>Cancel</Button>
            </div>
        </Form>
    )
}


const FormikApp = withFormik({
    mapPropsToValues({ selectedMovieToEdit }) {
        return {
            title: selectedMovieToEdit.title || '',
            director: selectedMovieToEdit.director || '',
            genre: selectedMovieToEdit.genre || '',
            year: selectedMovieToEdit.year || '',
            runtime: selectedMovieToEdit.runtime || '',
        }
    },

    handleSubmit(values, bag) {
        const { selectedMovieToEdit, handleClose, updateMovie, addMovie, items } = bag.props
        const { setErrors } = bag

        const movie = {
            title: formatSentence(values.title),
            director: values.director,
            genre: values.genre,
            year: values.year,
            runtime: values.runtime,
        }

        if (movie.title === '') { // incase title isn't valid after formatted            
            setErrors({ title: "Only alphabetic letters and numbers are allowed." })
            return;
        }


        if (selectedMovieToEdit) {
            if (items.find(x => x.title === movie.title && x.id !== selectedMovieToEdit.id)) {
                setErrors({ title: "This movie is already in the list." })
                return;
            }
        } else {
            if (items.find(x => x.title === movie.title)) {
                setErrors({ title: "This movie is already in the list." })
                return;
            }
        }

        if (selectedMovieToEdit) {
            movie.id = selectedMovieToEdit.id;
            updateMovie(movie);
        } else {
            addMovie(movie);
        }
        handleClose();
    },
    validationSchema: Yup.object().shape({
        title: Yup
            .string()
            .required("Title - Required"),

        director: Yup
            .string()
            .required("Director - Required"),

        genre: Yup
            .string()
            .required("Genre - Required"),

        year: Yup
            .number("Invalid Year!")
            .required("Year - Required")
            .min(1895)
            .max(new Date().getFullYear())
            .integer()
        ,

        runtime: Yup
            .number()
            .positive("Invalid Runtime")
            .required("Runtime - Required"),
    })
}
)(MovieForm)

function formatSentence(sentence) {
    return sentence.split(' ').map(function (element) {
        element = element.replace(/[^\w\s]/gi, '')
        element = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
        return element;
    }).join(' ');
}


export default withStyles(styles)(FormikApp)