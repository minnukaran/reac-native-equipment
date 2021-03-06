/**
 * reducer是描述action如何改变状态树
 *
 * Reducer只是纯函数，它接受先前的state和action，返回新的state.
 */
'use strict';

// combineReducers可以把一个由多个reducer函数作为value的对象，合并成一个最终的reducer函数
import { combineReducers } from 'redux';

import application from './application';
import aichoose from './aichoose';
import equipment from './equipment';
import utils from './utils';
import about from './about';

const reducer = combineReducers({
    application,
    aichoose,
    equipment,
    utils,
    about
});
export default reducer;
