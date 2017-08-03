import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';
import cx from 'classnames';
import Input from './Input';
import Select from './Select';



class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      valueTitle: '',
      valueYear: '',
      valueFormat: 'DVD',
      valueNameActor: '',
      valueLastNameActor: ''
    }
  }

  render() {
    let { valueTitle, valueYear, valueFormat, valueNameActor, valueLastNameActor } = this.state;
    let fields = [
      {
        component: Input,
        props: {
          id: 'title',
          type: 'text',
          label: 'Название',
          value: valueTitle,
        }
      },
      {
        component: Input,
        props: {
          id: 'year',
          type: 'text',
          label: 'Год',
          value: valueYear,
        }
      },
      {
        component: Select,
        props: {
          id: 'format',
          label: 'Формат',
          value: valueFormat,
        }
      },
    ]
    return (
     <div className={s.add}>
      <h3 className={s.title}>Добавить фильм</h3>
      <form className={s.form}>
        { 
          fields.map((field) => {
            const Component = field.component;
            return (
              <Component {...field.props} /> )
          })
        }
        <button className={s.btn}><span className={s.btnName}>Добавить</span></button>
      </form>
    </div>
    );
  }
}

export default withStyles(s)(Add);