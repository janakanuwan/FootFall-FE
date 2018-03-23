import React from 'react'
import ReactDOM from 'react-dom';

import UserLoginForm from './auth/UserLoginForm';

import UserMenu from './dashboard/UserMenu';

const userMenuData = {
  userName: 'Hello Test',
  userEmail: 'hellotest@gmail.com',
  onLogout: (data) => console.log("Loging out:", data)
};

import MerchantSelect from './dashboard/MerchantSelect';

const merchantSelectData = {
  merchants: [
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
  onSelect: (index) => console.log('MerchantSelect selectedIndex: ', index)
};

import DayCount from './dashboard/DayCount';

const dayCountData = {
  dayName: 'Today',
  date: new Date(),
  count: 40
};

import ButtonGroup from './dashboard/ButtonGroup';

const buttonGroupData = {
  itemList: ['Button 1', 'Button 2', 'Button 3'],
  selectedIndex: 0,
  onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
  size: 'large'
};

import ButtonSelectGroup from './dashboard/ButtonSelectGroup';

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

import DateRangePicker from './dashboard/DateRangePicker';

const dateRangePickerData = {
  fromDate: new Date(),
  toDate: new Date(),
  onChange: (data) => console.log('DateRangePicker data:', data)
};

ReactDOM.render(
  <div>
    <UserLoginForm/>
    <UserMenu {...userMenuData}/>
    <MerchantSelect {...merchantSelectData}/>
    <DayCount {...dayCountData}/>
    <ButtonGroup {...buttonGroupData}/>
    {buttonSelectGroupData.map((data, index) =>
      <ButtonSelectGroup key={index} {...data}/>
    )}
    <DateRangePicker {...dateRangePickerData}/>
  </div>,
  document.getElementById('root')
);

