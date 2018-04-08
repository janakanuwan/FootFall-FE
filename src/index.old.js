import React from 'react'
import ReactDOM from 'react-dom';
import CountChart from './dashboard/common-ui/CountChart';
import UserLoginForm from "./auth/ui/UserLoginForm";
import UserMenu from "./dashboard/userMenu/ui/UserMenu";
import ListSelect from "./dashboard/common-ui/ListSelect";
import DayCount from "./dashboard/dayCount/ui/DayCount";
import ButtonSelectGroup from "./dashboard/common-ui/ButtonSelectGroup";
import MerchantOverview from './dashboard/merchant/ui/MerchantOverview';
import MerchantLocation from './dashboard/location/ui/MerchantLocation';
import DateTextField from './dashboard/common-ui/DateTextField';
import GraphCount from './dashboard/graphCount/ui/GraphCount';

const userMenuData = {
  user: {userName: 'Hello Test', userEmail: 'hellotest@gmail.com'},
  onLogout: (user) => console.log("Loging out:", user)
};


const listItems = [
  {
    id: 1,
    name: 'Test Merchant 1'
  },
  {
    id: 2,
    name: 'Test Merchant 2'
  }
];

const listSelectData = [
  {
    items: listItems,
    selectedItem: listItems[0],
    onSelect: (item) => console.log('Selected item: ', item)
  },
  {
    items: listItems,
    selectedItem: null,
    onSelect: (item) => console.log('Selected item: ', item)
  },
  {
    items: [],
    selectedItem: null,
    onSelect: (item) => console.log('Selected item: ', item)
  },
  {
    items: listItems,
    selectedItem: listItems[1],
    onSelect: (item) => console.log('Selected item: ', item)
  },
  {
    items: listItems,
    selectedItem: {id: 3, name: 'Test Merchant 3'},
    onSelect: (item) => console.log('Selected item: ', item)
  },
];


const dayCountData = [{
  dayName: 'Today',
  date: new Date(),
  count: 40
},
  {
    dayName: 'Yesterday',
    date: '2018-04-01',
    count: 50
  },
];

const buttonSelectItems = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map((item, index) => ({
  id: index,
  name: item
}));

const buttonSelectGroupData = [
  {
    items: buttonSelectItems,
    selectedItem: buttonSelectItems[0],
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem)
  },
  {
    items: buttonSelectItems.slice(0, 2),
    selectedItem: buttonSelectItems[1],
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem)
  },
  {
    items: buttonSelectItems.slice(0, 4),
    selectedItem: buttonSelectItems[3],
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem)
  },
  {
    items: buttonSelectItems.slice(0, 3),
    selectedItem: buttonSelectItems[2],
    maxButtonCount: 1,
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem),
    size: 'small'
  },
  {
    items: buttonSelectItems.slice(0, 3),
    selectedItem: buttonSelectItems[2],
    maxButtonCount: 2,
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem),
    size: 'large'
  },
  {
    items: [],
    selectedItem: null,
  },
  {
    items: buttonSelectItems,
    selectedItem: {id: 6, name: 'Button 6'},
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem),
  },
];

const countChartData = [
  {NAME: 'Page A', IN: 4000, OUT: 2400, PRESENCE: 2400},
  {NAME: 'Page B', IN: 3000, OUT: 1398, PRESENCE: 2210},
  {NAME: 'Page C', IN: 2000, OUT: 9800, PRESENCE: 2290},
  {NAME: 'Page D', IN: 2780, OUT: 3908, PRESENCE: 2000},
  {NAME: 'Page E', IN: 1890, OUT: 4800, PRESENCE: 2181},
  {NAME: 'Page F', IN: 2390, OUT: 3800, PRESENCE: 2500},
  {NAME: 'Page G', IN: 3490, OUT: 4300, PRESENCE: 2100},
];


const merchants = [1, 2].map((item) => ({id: item, name: `Test Merchant ${item}`}));
const merchantOverviewData = [
  {
    merchantList: merchants,
    selectedMerchant: merchants[0],
    onSelect: (merchant) => console.log('Selected merchant: ', merchant)
  },
  {
    merchantList: merchants,
    selectedMerchant: null,
    onSelect: (merchant) => console.log('Selected merchant: ', merchant)
  },
  {
    merchantList: [],
    selectedMerchant: null,
    onSelect: (merchant) => console.log('Selected merchant: ', merchant)
  },
  {
    merchantList: merchants,
    selectedMerchant: merchants[1]
  },
];

const locationItems = [1, 2, 3, 4, 5].map((item) => ({id: item, name: `Location ${item}`}));
const merchantLocationData = [
  {
    locationList: locationItems,
    selectedLocation: locationItems[0],
    onClick: (location) => console.log('Selected location : ', location)
  },
  {
    locationList: locationItems,
    selectedLocation: {id: 6, name: 'Location 6'},
    onClick: (location) => console.log('Selected location : ', location)
  },
  {
    locationList: [],
    selectedLocation: null,
  }
];

const dateTextFieldData = [
  {
    label: 'From',
    date: '2010-02-20',
    min: '2010-02-01',
    max: '2010-02-28T05:04:42',
    onChange: (value) => console.log("Date: ", value)
  },
  {
    label: 'From',
    date: '2010-02',
    onChange: (value) => console.log("Date: ", value)
  },
  {
    label: 'From',
    onChange: (value) => console.log("Date: ", value)
  },
  {
    label: 'From',
    date: null
  },
  {
    label: 'From',
    date: "2018-01-01",
    max: null,
    onChange: (value) => console.log("Date: ", value)
  },
];

const graphDisplayOptions = [
  {
    id: 1,
    name: 'Hourly'
  },
  {
    id: 2,
    name: 'Day'
  },
  {
    id: 3,
    name: 'Month'
  }
];

const graphCountData = {
  graphData: countChartData,

  displayTypeData: {in: true, out: true, presence: true},
  onClickDisplayType: (event) => console.log('Type: ', event),

  displayOptions: graphDisplayOptions,
  selectedDisplayOption: graphDisplayOptions[0],
  onClickDisplayOption: (option) => console.log('Option: ', option),

  dateRange: {
    fromDate: '2018-03-01',
    fromDateMax: '2018-04-02',
    toDate: '2018-04-02',
    toDateMin: '2018-03-01',
  },
  onChangeDate: (data) => console.log('Date change: ', data),

};

ReactDOM.render(
  <div>
    <UserLoginForm/>
    <UserMenu {...userMenuData}/>
    {listSelectData.map((data, index) =>
      <ListSelect key={index} {...data}/>
    )}
    {dayCountData.map((data, index) =>
      <DayCount key={index} {...data}/>
    )}
    {buttonSelectGroupData.map((data, index) =>
      <ButtonSelectGroup key={index} {...data}/>
    )}
    {dateTextFieldData.map((data, index) =>
      <DateTextField key={index} {...data}/>
    )}
    <CountChart data={countChartData}/>
    {merchantOverviewData.map((data, index) =>
      <MerchantOverview key={index} {...data}/>
    )}
    {merchantLocationData.map((data, index) =>
      <MerchantLocation key={index} {...data}/>
    )}

    <GraphCount {...graphCountData}/>

  </div>,
  document.getElementById('root')
);

