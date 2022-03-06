import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MyLabel } from '../../components/MyLabel'

export default {
  title: 'Ui/MyLabel',
  component: MyLabel,
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
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Hola Mundo',
  size: 'normal',
  allCaps: false
}

export const AllCaps = Template.bind({})
AllCaps.args = {
  label: 'Hola Mundo',
  size: 'h2',
  allCaps: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Hola Mundo',
  size: 'h2',
  color: 'secondary'
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  label: 'Hola Mundo',
  size: 'h2',
  color: 'tertiary'
}