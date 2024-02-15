import { createInput } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Example/Input',
    tags: ['autodocs'],
    render: ({ name, ...args }) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${name}</div>`;
        return createInput({ name, ...args });
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        name: { control: 'text' },
        id: { control: 'text' },
        type: {
            control: { type: 'select' },
            options: ['text', 'radio', 'checkbox']
        },
        project: {
            control:{type: 'select'},
            options: ['DIG-0','DIG-1']
        },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        name: 'Button',
    },
};

// export const DIG1 = {
//   args: {
//     name: `${type.options}`,
//   }
// }
