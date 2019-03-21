import moment from "moment";

export default [
  {
    id: '1',
    note: '',
    amount: '42000',
    description: 'Oh my',
    createdAt: 0
  }, 
  {
    id: '2',
    note: 'Hello again',
    amount: '3921190',
    createdAt: moment(0).subtract(2, 'days').valueOf(),
    description: 'Its a mechanical bull'
  }, 
  {
    id: '3',
    description: 'Automobile',
    note: 'real estate',
    amount: 850000000,
    createdAt: moment(0).add(4, 'months').valueOf()
  }
]