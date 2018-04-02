import DateTextField from './DateTextField';

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

describe('DateTextField', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
