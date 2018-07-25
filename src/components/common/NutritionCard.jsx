import React, {Component} from 'react';

import EditableTable from './EditableTable';
import {Card, Row, Col, Form, Button, Select, Table, Input, Divider, AutoComplete} from 'antd' ;
import {
    addNutritionPlan,
    addNutritionPlanUser,
    fetchUserNutritionPlan,
    searchFood
} from "../../actions/nutritionPlanAction";

import uuid from "uuid/v1";
import {message} from "antd/lib/index";

const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;


const columnsNutrition = [{
    title: 'Calories',
    dataIndex: 'calories',
    key: 'calories',
}, {
    title: 'Carbs',
    dataIndex: 'carbs',
    key: 'carbs',
}, {
    title: 'Protein',
    dataIndex: 'proteins',
    key: 'proteins',
}, {
    title: 'Fat',
    dataIndex: 'fats',
    key: 'fats',
}];


const columnsInfo = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
}, {
    title: 'Calories',
    dataIndex: 'calories',
    key: 'calories',
}, {
    title: 'Carbs',
    dataIndex: 'carbs',
    key: 'carbs',
}, {
    title: 'Protein',
    dataIndex: 'protein',
    key: 'protein',
}, {
    title: 'Fat',
    dataIndex: 'fat',
    key: 'fat',
}, {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    editable: true
}, {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit'
}];

let DataSourceInfo = [{
    calories: 0,
    fats: 0,
    proteins: 0,
    carbs: 0,
    key: 0
}];

class NutritionCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            source: [],
            selectedFoods: [],
            nutrition_plan_id: '',
        };
    }

    handleFetch = (e) => {
        e.preventDefault();
        const data = {
            client: this.props.clientId,
            date: this.props.date,
            type: 0
        };
        fetchUserNutritionPlan(data).then(result => {
            console.log(result);
            this.props.form.setFieldsValue({
                nutritionName: result.nutrition.name,
                planDescription: result.nutrition.description,
                // workoutSearchName: result.workout.search_name
            });
            let formattedExercise = [];
            let selectedFormattedFoods = [];
            result.nutrition.foods.forEach(foodItem => {
                // formattedExercise.push(exercise.exercise);
                console.log(foodItem);
                selectedFormattedFoods.push({
                    calories: foodItem.food.calories,
                    carbs: foodItem.food.carbs,
                    protein: foodItem.food.proteins,
                    fat: foodItem.food.fats,
                    quantity: 1,
                    unit: foodItem.food.unit,
                    name: foodItem.food.name,
                    food: foodItem.food._id,
                    key: uuid()
                });
            });

            this.setState({
                selectedFoods: selectedFormattedFoods,
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
            "type" : 0 ,
            "nutrition": this.state.nutrition_plan_id
        };
        if (this.state.nutrition_plan_id === '') {
            message.error('Plan Not Saved. Please Save Plan First.');
            return;
        }

        addNutritionPlanUser(data).then(result => {
            console.log(result);
            message.success("Saved Plan for User.");
        }).catch(errorMessage => {
            message.error(errorMessage);
        });


    };

    handleSave = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (this.state.selectedFoods.length < 1) {
                    message.error("Food List can't be empty");
                    return;
                }
                const data = {
                    "name": values.nutritionName,
                    "search_name": values.nutritionSearchName,
                    "description": values.planDescription,
                    "food": this.state.selectedFood
                };
                addNutritionPlan(data).then(id => {
                    this.setState({
                        nutrition_plan_id: id
                    });
                    message.success("Workout Saved");
                }).catch(errorMessage => {
                    message.error(errorMessage);
                });
            }
        });
    };

    handleExerciseSearch = (input) => {
        searchFood(input).then(items => {
            this.setState({
                source: items.map(items => items.name),
                foods: items
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
        let food = input;
        let index = this.state.source.indexOf(food);
        food = this.state.foods[index];

        DataSourceInfo = [{
            calories: DataSourceInfo[0].calories + food.calories,
            fats: DataSourceInfo[0].fats + food.fats,
            proteins: DataSourceInfo[0].proteins + food.proteins,
            carbs: DataSourceInfo[0].carbs + food.carbs,
            key: 0
        }];

        food = {
            calories: food.calories,
            carbs: food.carbs,
            protein: food.proteins,
            fat: food.fats,
            quantity: 1,
            unit: food.unit,
            name: food.name,
            food: food._id,
            key: uuid()
        };
        this.setState({
            selectedFoods: [...this.state.selectedFoods, food]
        });


        // this.props.form.setFieldsValue({'selectExercise': input});
        // console.log("Value : ", this.props.form.getFieldValue('selectExercise'));
        // this.props.form.setFieldsValue({'selectExercise': ''});
        // console.log("Value : ", this.props.form.getFieldValue('selectExercise'));
        console.log(this.state.foods);
        console.log(this.state.selectedFoods);


    };

    handleChange = (newAdditions) => {
        this.setState({
            dataSource: [...this.state.dataSource, ...newAdditions],
        });
    };

    onSave = (newData) => {
        this.setState({
            dataSource: newData,
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Card className="my-4">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={8}>
                            <h4>{this.props.date}</h4>
                            <h5>{this.props.type}</h5>
                        </Col>
                        <Col span={12} offset={4}>
                            <div className="float-right">
                                <FormItem>
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

                                </FormItem>
                            </div>
                        </Col>
                    </Row>

                    <hr/>

                    <Row>
                        <Col span={12}>
                            <FormItem
                                label="Nutrition Plan Name(visible to user)"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('nutritionName', {
                                    rules: [{required: true, message: 'Please input Plan name!'}],
                                })(
                                    <Input placeholder="Nutrition Plan Name"/>
                                )}
                            </FormItem>
                        </Col>


                        <Col span={12}>
                            <FormItem
                                label="Nutrition Plan search name(invisible to user)"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('nutritionSearchName', {
                                    rules: [{required: true, message: 'Please enter unique search name!'}],
                                })(
                                    <Input placeholder="Plan Search Name"/>
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
                                {getFieldDecorator('planDescription', {
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
                        <Col span={12}>
                            <FormItem
                                label="Select Exercise"
                                colon={false}
                                wrapperCol={{span: 24}}
                            >
                                {getFieldDecorator('selectFood', {})(
                                    <AutoComplete
                                        onSearch={this.handleExerciseSearch}
                                        onSelect={this.handleExerciseSelect}
                                        dataSource={this.state.source}>
                                    </AutoComplete>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
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

                </Form>
                <Divider/>
                <Row>
                    <Col span={24}>
                        <Table
                            columns={columnsNutrition}
                            dataSource={DataSourceInfo}
                            pagination={false}
                        />
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span={24}>
                        <EditableTable
                            columns={columnsInfo}
                            dataSource={this.state.selectedFoods}
                            pagination={false}
                            onChange={this.handleChange}
                            onSave={this.onSave}
                        />
                    </Col>
                </Row>
            </Card>
        );
    }
};

const WrappedNNutritionForm = Form.create()(NutritionCard);

export default WrappedNNutritionForm;