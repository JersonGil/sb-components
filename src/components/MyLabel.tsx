import './myLabel.css'

export interface MyLabelProps {
  /**
   * label
   */
  label: string;
  /**
   * tamano label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * caps lavel
   */
  allCaps: boolean;
  /**
   * label theme
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
  * What background color to use
  */
  fontColor?: string;
}

const MyLabel = ({
  allCaps = false,
  color = 'primary',
  fontColor,
  label = 'label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label.toLowerCase()}
    </span>
  )
}

export default MyLabel
