import API from 'api';

export default () => API().then(data => data.filter(item => item.completed));