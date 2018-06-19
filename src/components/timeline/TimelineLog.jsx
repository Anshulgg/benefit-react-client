import React, { Component } from 'react';
import { Table, Card } from 'antd';

const columns = [{
  title: 'Log Entry Date',
  dataIndex: 'date',
  key: 'date'
}, {
  title: 'Log Enterer',
  dataIndex: 'enterer',
  key: 'enterer'
}, {
  title: 'Log',
  dataIndex: 'log',
  key: 'log'
}]

const data = [{
  key: '1',
  date: 'Dec 26,2016',
  enterer: "Tariq Hasan",
  log: 'Fitness and Nutrition Coach( 1 Month )',
}, {
  key: '2',
  date: 'Dec 26,2016',
  enterer: "Tariq Hasan",
  log: 'Fitness and Nutrition Coach( 1 Month )',
}, {
  key: '3',
  date: 'Dec 26,2016',
  enterer: "Tariq Hasan",
  log: 'Fitness and Nutrition Coach( 1 Month )',
}, {
  key: '4',
  date: 'Dec 26,2016',
  enterer: "Tariq Hasan",
  log: 'Fitness and Nutrition Coach( 1 Month )'
}];

class TimelineLog extends Component {
	render() {
		return (
      <Card className='mx-2 my-4'>
  			<Table			
  				columns={columns} 
  				dataSource={data}
  				pagination={false}
  			/>
      </Card>
		);
	};
};

export default TimelineLog;