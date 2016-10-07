import Message from './Message.component';
import defaultProps from 'recompose/defaultProps';

export default defaultProps({ style: { color: 'red' } })(Message);
