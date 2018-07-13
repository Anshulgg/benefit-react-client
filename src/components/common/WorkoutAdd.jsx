import React, {Component} from 'react';
import { Card, Row, Col, Form, Input, Button, AutoComplete, Select, Table, InputNumber, Popconfirm, message} from 'antd' ;
import { addWorkout, addUserWorkout } from "../../actions/workoutAction";
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
*/

let columns = [
    {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
        editable: false,
        inputType : 'text'
    },
    {
        title: 'reps',
        dataIndex: 'reps',
        width: '20%',
        editable: true,
        inputType : 'number'
    },
    {
        title: 'rest',
        dataIndex: 'rest',
        width: '20%',
        editable: true,
        inputType : 'number'
    },
    {
        title: 'sets',
        dataIndex: 'sets',
        width: '20%',
        editable: true,
        inputType: 'number'
    }
]

class WorkoutAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercises: [],
            source: [],
            selectedExercises: [],
            exerciseValue: '',
            date: '',
            workout_id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "client": this.props.clientId,
            "date": this.props.date,
            "workout": this.state.workout_id
        }
        if (this.state.workout_id !== '') {
            addUserWorkout(data)
            message.success('This is a message of success');           
        }
        else {
            message.error('This is a message of error');
        }

                
    };

    handleSave = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const data = {
                    "name": values.workoutName,
                    "search_name": values.workoutSearchName,
                    "description": values.workoutDescription,
                    "exercises": this.state.selectedExercises
                }
                addWorkout(data).then(res => {                    
                    this.setState({
                        workout_id:  res
                    }) 
                })   
            }
        });
    }

    handleExerciseSearch = (input) => {
        searchExercises(input).then(exercises => {
            this.setState({
                source: exercises.map(exercise => exercise.name),
                exercises: exercises
            });
        })
    };

    handleExerciseSelect = (input , option) => {
        console.log(option);
        // option.props.children = ''
        console.log(input);
        if(!input){
            return
        }
        let exercise = input;
        let index = this.state.source.indexOf(exercise);
        exercise = this.state.exercises[index];
        exercise = {
            reps : 10 ,
            rest : 10 ,
            sets : 1,
            name : exercise.name,
            exercise : exercise._id ,
            key : uuid()
        }
        this.setState({
            selectedExercises: [...this.state.selectedExercises, exercise]
        })
        this.props.form.setFieldsValue({'selectExercise' : input})
        console.log("Value : " , this.props.form.getFieldValue('selectExercise'));
        this.props.form.setFieldsValue({'selectExercise' : ''})
        console.log("Value : " , this.props.form.getFieldValue('selectExercise'));
        console.log(this.state.exercises);
        console.log(this.state.selectedExercises);
        

    };

    handleChange = (newAdditions) => {
        this.setState({
            selectedExercises: [...this.state.selectedExercises, ...newAdditions],
            exerciseValue : ''
        })
    }

    onSave = (newData) => {
        this.setState({
            selectedExercises:newData,
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Card className="my-4">
                <Form layout="inline">
                    <Row>
                        <Col span={8}>
                            <h4>{this.props.date}</h4>
                        </Col>
                        <Col span={8} offset={8}>
                            <div className="float-right">
                                <FormItem>
                                    <Button
                                        style={{ marginRight: '1.2rem' }}
                                        type="primary"
                                        htmlType="submit"
                                        onClick={this.handleSave}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        style={{ marginRight: '1.2rem' }}
                                        type="primary"
                                        htmlType="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        type="danger"
                                        htmlType="submit"
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
                                wrapperCol={{ span: 24 }}
                            >
                                {getFieldDecorator('workoutName', {
                                    rules: [{ required: true, message: 'Please input workout name!' }],
                                })(
                                    <Input placeholder="Workout Name" />
                                )}
                            </FormItem>
                        </Col>
                        

                        <Col span={8}>
                            <FormItem
                                label="Workout search name(invisible to user)"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('workoutSearchName')(
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
                <EditableTable dataSource={this.state.selectedExercises} rowKey='key' columns={columns} onSave={this.onSave} onChange={this.handleChange}/>
            </Card>
        );
    };
};

const WrappedHorizontalLoginForm = Form.create()(WorkoutAdd);

export default WrappedHorizontalLoginForm;