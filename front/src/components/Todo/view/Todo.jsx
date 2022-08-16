import './styles.scss';

export const Todo = ({
  style,
  className,
  avatar,
  label,
  id,
  onClick,
  ...inputProps
}) => {
  return (
    <div className={`todo ${className || ''}`} style={style}>
      <div className='todo_content' onClick={onClick}>
        <img className='todo_avatar' src={avatar} alt='todo_iamge' />
        <p className='todo_label'>{label}</p>
      </div>
      <input
        {...inputProps}
        className='todo_input'
        type='checkbox'
        id={`todo_input-${id}`}
      />
    </div>
  );
};
