import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import Controls from "./components/controls/Controls";
import { useForm, Form } from './components/useForm';
import * as taskService from "./services/taskService";


const taskCategoryItems = [
    { id: "2", title: 'Dynamic' },
    { id: "1", title: 'Fixed' },
    { id: "3", title: 'Optional' },
]

const initialFValues = {
    _id: "0",
    taskName: '',
    taskDesc: '',
    taskDuration: 0,
    taskCategory: "2",  // 1: fixed task, 2: dynamic task, 3: optional task, 4: meeting
    taskPriority: -1, // -1: optional default, 0: low, 1: medium, 2: high
    taskDeadline: new Date(new Date().getTime() + 60000),
    taskStatus: 0,
}

export default function TaskForm(props) {
    const { addOrEdit, taskForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('taskName' in fieldValues)
            temp.taskName = fieldValues.taskName ? "" : "This field is required!!!"
        if ('taskDuration' in fieldValues)
            temp.taskDuration = fieldValues.taskDuration < 100 && fieldValues.taskDuration >= 0.25 ? "" : "Enter the value between 0.25 to 99 (hr)"
        if ('taskPriority' in fieldValues)
            temp.taskPriority = fieldValues.taskPriority.length != 0 ? "" : "This field is required!!!"
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (taskForEdit != null)
            setValues({
                ...taskForEdit
            })
    }, [taskForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="taskName"
                        label="Task Title"
                        value={values.taskName}
                        onChange={handleInputChange}
                        error={errors.taskName}
                    />
                    <Controls.Multiline
                        name="taskDesc"
                        label="Description"
                        value={values.taskDesc}
                        onChange={handleInputChange}
                        error={errors.taskDesc}
                    />
                    <Controls.Input
                        name="taskDuration"
                        label="Task Duration"
                        value={values.taskDuration}
                        onChange={handleInputChange}
                        error={errors.taskDuration}
                    />
                   
                </Grid>
                <Grid item xs={6}>

                <Controls.BasicDateTimePicker
                        name="taskDeadline"
                        label="Deadline"
                        value={values.taskDeadline}
                        onChange={handleInputChange}
                    />
                    <Controls.RadioGroup
                        name="taskCategory"
                        label="Type"
                        value={values.taskCategory.toString()}
                        onChange={handleInputChange}
                        items={taskCategoryItems}
                    />
                    
                    <Controls.Select
                        name="taskPriority"
                        label="Priority"
                        value={values.taskPriority}
                        onChange={handleInputChange}
                        options={taskService.getPriority()}
                        error={errors.taskPriority}
                    />
                    
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Done" />
                        {/* <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} /> */}
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
