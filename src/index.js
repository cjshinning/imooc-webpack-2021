import $ from 'jquery';
import _ from 'lodash';

const dom = $('div');
dom.html(_.join(['Jenny', 'Chan'], '---'));
document.appendChild(dom);