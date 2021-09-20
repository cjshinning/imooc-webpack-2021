import $ from 'jquery';
import _ from 'lodash';
import { ui } from './jquery.ui.js';

ui();

const dom = $('div');
dom.html(_.join(['Jenny', 'Chan'], '---'));
document.appendChild(dom);