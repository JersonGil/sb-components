"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'Ui/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        label: {
            control: 'text'
        },
        size: {
            control: 'select',
            options: ['normal', 'h1', 'h2', 'h3']
        },
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary']
        },
        fontColor: {
            control: 'color'
        }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Hola Mundo',
    size: 'normal',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'Hola Mundo',
    size: 'h2',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Hola Mundo',
    size: 'h2',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Hola Mundo',
    size: 'h2',
    color: 'tertiary'
};
