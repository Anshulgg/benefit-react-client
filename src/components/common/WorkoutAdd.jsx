import React, {Component} from 'react';
import {
    Card,
    Row,
    Col,
    Form,
    Input,
    Button,
    AutoComplete,
    Select,
    message
} from 'antd' ;

import {addWorkout, addUserWorkout, fetchUserWorkout} from "../../actions/workoutAction";
import {searchExercises} from "../../actions/exerciseAction";
import EditableTable from './EditableTable';
import uuid from 'uuid/v1' ;
import serverConfig from '../../actions/server.config';

const FormItem = Form.Item;
const OptionAuto = AutoComplete.Option;
const Option = Select.Option;
const {TextArea} = Input;


/* 
TODO: FIX WIDTH OF TEXT AREA 
TODO: FIX WIDTH OF SELECT INPUT 
TODO: ADD TABLE
TODO: FETCH MUST BE CORRECTED WRT TO SEARCH_NAME
*/

let columns = [
    {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: false,
        inputType: 'text'
    },
    {
        title: 'reps',
        dataIndex: 'reps',
        width: '20%',
        editable: true,
        inputType: 'number'
    },
    {
        title: 'rest',
        dataIndex: 'rest',
        width: '20%',
        editable: true,
        inputType: 'number'
    },
    {
        title: 'sets',
        dataIndex: 'sets',
        width: '20%',
        editable: true,
        inputType: 'number'
    }
];

class WorkoutAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            source: [],
            selectedExercises: [],
            exerciseValue: '',
            date: '',
            workout_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillMount = () => {

    };


    handleFetch = (e) => {
        e.preventDefault();
        const data = {
            client: this.props.clientId,
            date: this.props.date
        };
        fetchUserWorkout(data).then(result => {
            console.log(result);
            this.props.form.setFieldsValue({
                workoutName: result.workout.name,
                workoutDescription: result.workout.description,
                // workoutSearchName: result.workout.search_name
            });
            let formattedExercise = [];
            let formattedSelectedExercise = [];
            result.workout.exercises.forEach(exercise => {
                formattedExercise.push(exercise.exercise);
                formattedSelectedExercise.push({
                    reps: exercise.reps,
                    rest: exercise.rest,
                    sets: exercise.sets,
                    name: exercise.exercise.name,
                    exercise: exercise.exercise._id,
                    key: uuid()
                });
            });

            this.setState({
                selectedExercises: formattedSelectedExercise,
                // exercises: formattedExercise
            });


            message.success("Fetched Workout for User.");
        }).catch(errorMessage => {
            message.error(errorMessage);
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "client": this.props.clientId,
            "date": this.props.date,
            "workout": this.state.workout_id
        };
        if (this.state.workout_id === '') {
            message.error('Workout Not Saved. Please Save Workout First.');
            return;
        }

        addUserWorkout(data).then(result => {
            console.log(result);
            message.success("Saved Workout for User.");
        }).catch(errorMessage => {
            message.error(errorMessage);
        });


    };

    handleSave = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.selectedExercises.length < 1) {
                    message.error("Exercise List can't be empty");
                    return;
                }
                const data = {
                    "name": values.workoutName,
                    "search_name": values.workoutSearchName,
                    "description": values.workoutDescription,
                    "exercises": this.state.selectedExercises
                };
                addWorkout(data).then(id => {
                    this.setState({
                        workout_id: id
                    });
                    message.success("Workout Saved");
                }).catch(errorMessage => {
                    message.error(errorMessage);
                });
            }
        });
    };

    handleExerciseSearch = (input) => {
        searchExercises(input).then(exercises => {
            this.setState({
                source: exercises.map(exercise => exercise.name),
                exercises: exercises
            });
        });
    };

    handleExerciseSelect = (input, option) => {
        console.log(option);
        // option.props.children = ''
        console.log(input);
        if (!input) {
            return;
        }
        let exercise = input;
        let index = this.state.source.indexOf(exercise);
        exercise = this.state.exercises[index];
        exercise = {
            reps: 10,
            rest: 10,
            sets: 1,
            name: exercise.name,
            exercise: exercise._id,
            key: uuid()
        };
        this.setState({
            selectedExercises: [...this.state.selectedExercises, exercise]
        });
        this.props.form.setFieldsValue({'selectExercise': input});
        console.log("Value : ", this.props.form.getFieldValue('selectExercise'));
        this.props.form.setFieldsValue({'selectExercise': ''});
        console.log("Value : ", this.props.form.getFieldValue('selectExercise'));
        console.log(this.state.exercises);
        console.log(this.state.selectedExercises);


    };

    handleChange = (newAdditions) => {
        this.setState({
            selectedExercises: [...this.state.selectedExercises, ...newAdditions],
            exerciseValue: ''
        });
    };

    onSave = (newData) => {
        this.setState({
            selectedExercises: newData,
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Card className="my-4">
                <Form layout="inline">
                    <Row>
                        <Col span={8}>
                            <h4>{this.props.date}</h4>
                        </Col>
                        <Col span={12} offset={4}>
                            <div className="float-right">
                                <FormItem>
                                    <Button
                                        style={{marginRight: '1.2rem'}}
                                        type="primary"
                                        onClick={this.handleFetch}
                                    >
                                        Get Workout
                                    </Button>
                                    <Button
                                        style={{marginRight: '1.2rem'}}
                                        type="primary"
                                        onClick={this.handleSave}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        style={{marginRight: '1.2rem'}}
                                        type="primary"
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        type="danger"
                                    >
                                        Delete
                                    </Button>
                                </FormItem>
                            </div>

                        </Col>
                    </Row>

                    <hr/>

                    <Row>
                        <Col span={8}>
                            <FormItem
                                label="Workout name(visible to user)"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('workoutName', {
                                    rules: [{required: true, message: 'Please input workout name!'}],
                                })(
                                    <Input placeholder="Workout Name"/>
                                )}
                            </FormItem>
                        </Col>


                        <Col span={8}>
                            <FormItem
                                label="Workout search name(invisible to user)"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('workoutSearchName' , {
                                    rules: [{required: true, message: 'Please enter unique search name!'}],
                                })(
                                    <Input placeholder="Workout Search Name"/>
                                )}
                            </FormItem>
                        </Col>

                        <Col span={8}>
                            <FormItem
                                label="Welcome audio message"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('audioMessage')(
                                    <Input placeholder="Message"/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <hr/>

                    <Row>


                        <Col span={24}>
                            <FormItem
                                label="Workout description"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('workoutDescription', {
                                    rules: [{required: true, message: 'Please input workout description!'}],
                                })(
                                    <TextArea placeholder="Description" autosize={{minRows: 1, maxRows: 6}}
                                              style={{width: '100%'}}/>
                                )}
                            </FormItem>
                        </Col>

                    </Row>

                    <hr/>

                    <Row>

                        <Col span={8}>
                            <FormItem
                                label="Select sport"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('selectSport', {
                                    initialValue: "Running",
                                    rules: [{required: true, message: "Please select a sport"}]
                                })(
                                    <Select>
                                        <Option value="Football">Football</Option>
                                        <Option value="Cricket">Cricket</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem
                                label="Select Exercise"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('selectExercise', {})(
                                    <AutoComplete
                                        onSearch={this.handleExerciseSearch}
                                        onSelect={this.handleExerciseSelect}
                                        dataSource={this.state.source}>
                                    </AutoComplete>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem
                                label="Add from workout"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('selectWorkout', {
                                    initialValue: "Workout",
                                    rules: [{required: true, message: "Please select a workout"}]
                                })(
                                    <Select>
                                        <Option value="Football">Football</Option>
                                        <Option value="Cricket">Cricket</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>

                    </Row>
                    <p className="text-left font-weight-bold">
                        Total Expected Calories Burn: <span>{}</span>
                    </p>

                </Form>
                <EditableTable dataSource={this.state.selectedExercises} rowKey='key' columns={columns}
                               onSave={this.onSave} onChange={this.handleChange}/>
            </Card>
        );
    };
};

const WrappedHorizontalLoginForm = Form.create()(WorkoutAdd);

export default WrappedHorizontalLoginForm;