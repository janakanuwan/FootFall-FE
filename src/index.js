import React from 'react'
import ReactDOM from 'react-dom';
import CountChart from './dashboard/ui/basic/CountChart';
import UserLoginForm from "./auth/ui/UserLoginForm";
import UserMenu from "./dashboard/ui/UserMenu";
import ListSelect from "./dashboard/ui/basic/ListSelect";
import DayCount from "./dashboard/ui/DayCount";
import ButtonGroup from "./dashboard/ui/basic/ButtonGroup";
import ButtonSelectGroup from "./dashboard/ui/basic/ButtonSelectGroup";
import DateRangePicker from "./dashboard/ui/basic/DateRangePicker";

const userMenuData = {
  userName: 'Hello Test',
  userEmail: 'hellotest@gmail.com',
  onLogout: (data) => console.log("Loging out:", data)
};

const listSelectData = {
  data: [
    {
      id: 1,
      name: 'Test Merchant 1'
    },
    {
      id: 2,
      name: 'Test Merchant 2'
    }
  ],
  selectedIndex: 0,
  onSelect: (index) => console.log('Selected data: ', index)
};

const dayCountData = {
  dayName: 'Today',
  date: new Date(),
  count: 40
};

const buttonGroupData = {
  itemList: ['Button 1', 'Button 2', 'Button 3'],
  selectedIndex: 0,
  onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
  size: 'large'
};

const buttonSelectGroupData = [
  {
    itemList: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'],
    selectedIndex: 0,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
  },
  {
    itemList: ['Button 1', 'Button 2'],
    selectedIndex: 1,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
  },
  {
    itemList: ['Button 1', 'Button 2', 'Button 3', 'Button 4'],
    selectedIndex: 3,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
  },
  {
    itemList: ['Button 1', 'Button 2', 'Button 3'],
    selectedIndex: 2,
    maxButtonCount: 1,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
    size: 'small'
  },
  {
    itemList: ['Button 1', 'Button 2', 'Button 3'],
    selectedIndex: 2,
    maxButtonCount: 2,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
    size: 'large'
  },
];

const dateRangePickerData = {
  fromDate: new Date(),
  toDate: new Date(),
  onChange: (data) => console.log('DateRangePicker data:', data)
};

const countChartData = [
  {name: 'Page A', IN: 4000, OUT: 2400, PRESENCE: 2400},
  {name: 'Page B', IN: 3000, OUT: 1398, PRESENCE: 2210},
  {name: 'Page C', IN: 2000, OUT: 9800, PRESENCE: 2290},
  {name: 'Page D', IN: 2780, OUT: 3908, PRESENCE: 2000},
  {name: 'Page E', IN: 1890, OUT: 4800, PRESENCE: 2181},
  {name: 'Page F', IN: 2390, OUT: 3800, PRESENCE: 2500},
  {name: 'Page G', IN: 3490, OUT: 4300, PRESENCE: 2100},
];

ReactDOM.render(
  <div>
    <UserLoginForm/>
    <UserMenu {...userMenuData}/>
    <ListSelect {...listSelectData}/>
    <DayCount {...dayCountData}/>
    <ButtonGroup {...buttonGroupData}/>
    {buttonSelectGroupData.map((data, index) =>
      <ButtonSelectGroup key={index} {...data}/>
    )}
    <DateRangePicker {...dateRangePickerData}/>
    <CountChart data={countChartData}/>
  </div>,
  document.getElementById('root')
);

