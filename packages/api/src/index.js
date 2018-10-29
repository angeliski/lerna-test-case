import { get } from 'axios';

export default () => get('https://jsonplaceholder.typicode.com/todos');