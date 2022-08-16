import { MarginGroup } from '../../../components/MarginGroup/MarginGroup';
import { Image } from '../../../components/Image/Image';
import clsx from 'clsx';
import './styles.scss';

export const TodoDetail = ({ todo }) => {
  const classes = clsx('todo-detail');
  return (
    <MarginGroup className={classes}>
      <Image src={todo.image} />
      <MarginGroup className='todo-detail-content' isColumn gap={20}>
        <MarginGroup className='todo-detail-info'>
          <span>Label:</span>
          {todo.label}
        </MarginGroup>
        <MarginGroup className='todo-detail-info'>
          <span>ID:</span>
          {todo.id}
        </MarginGroup>
        <MarginGroup className='todo-detail-info'>
          <span>Checked:</span>
          {`${todo.checked}`}
        </MarginGroup>
      </MarginGroup>
    </MarginGroup>
  );
};
