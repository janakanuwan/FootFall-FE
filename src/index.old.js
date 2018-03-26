import React from 'react'
import ReactDOM from 'react-dom';
import CountChart from './dashboard/common-ui/CountChart';
import UserLoginForm from "./auth/ui/UserLoginForm";
import UserMenu from "./dashboard/userMenu/ui/UserMenu";
import ListSelect from "./dashboard/common-ui/ListSelect";
import DayCount from "./dashboard/dayCount/ui/DayCount";
import ButtonGroup from "./dashboard/common-ui/ButtonGroup";
import ButtonSelectGroup from "./dashboard/common-ui/ButtonSelectGroup";
import DateRangePicker from "./dashboard/common-ui/DateRangePicker";
import ButtonMultipleGroup from './dashboard/common-ui/ButtonMultipleGroup';
import MerchantOverview from './dashboard/merchant/ui/MerchantOverview';
import MerchantLocation from './dashboard/location/ui/MerchantLocation';

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
    onSelect: (data) => console.log('Selected data: ', data)
};

const dayCountData = {
    dayName: 'Today',
    date: new Date(),
    count: 40
};

const buttonGroupData = {
    data: [
        {
            id: 1,
            name: 'Button 1'
        },
        {
            id: 2,
            name: 'Button 2'
        },
        {
            id: 3,
            name: 'Button 3'
        }
    ],
    selectedIndex: 0,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
    size: 'large'
};

const buttonSelectGroupData = [
    {
        data: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map((item, index) => ({
            id: index,
            name: item
        })),
        selectedIndex: 0,
        onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
    },
    {
        data: ['Button 1', 'Button 2'].map((item, index) => ({id: index, name: item})),
        selectedIndex: 1,
        onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
    },
    {
        data: ['Button 1', 'Button 2', 'Button 3', 'Button 4'].map((item, index) => ({id: index, name: item})),
        selectedIndex: 3,
        onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
    },
    {
        data: ['Button 1', 'Button 2', 'Button 3'].map((item, index) => ({id: index, name: item})),
        selectedIndex: 2,
        maxButtonCount: 1,
        onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
        size: 'small'
    },
    {
        data: ['Button 1', 'Button 2', 'Button 3'].map((item, index) => ({id: index, name: item})),
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


const buttonMultipleGroupData = {
    data: ['Button 1', 'Button 2', 'Button 3'].map((item, index) => ({id: index, name: item})),
    selectedIndices: [0],
    onClick: (index) => console.log('ButtonMultipleGroup selectedIndices:', index),
    size: 'large'
};

const merchantOverviewData = {
    merchantList: [
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
    onSelect: (index) => console.log('Selected merchant index: ', index)
};

const merchantLocationData = {
    locationList: [
        {
            id: 1,
            name: 'Location 1'
        },
        {
            id: 2,
            name: 'Location 2'
        },
        {
            id: 3,
            name: 'Location 3'
        },
        {
            id: 4,
            name: 'Location 4'
        },
        // {
        //   id: 5,
        //   name: 'Location 5'
        // }
    ],
    selectedIndex: 0,
    onClick: (clickedData) => console.log('Selected location data: ', clickedData)
};


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
        <ButtonMultipleGroup {...buttonMultipleGroupData}/>
        <MerchantOverview {...merchantOverviewData}/>
        <MerchantLocation {...merchantLocationData}/>
        <DayCount {...dayCountData}/>

    </div>,
    document.getElementById('root')
);

