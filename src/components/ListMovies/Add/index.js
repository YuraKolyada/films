import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';
import cx from 'classnames';
import Input from './Input';
import InputActors from './InputActors';
import Select from './Select';



class Add extends React.Component {
  constructor(){
    super();
    this.state = {
      valueTitle: '',
      valueYear: '',
      valueFormat: 'DVD',
      valueNameActor: '',
      valueLastNameActor: '',
      actors: [],
    }
  }

  addActors = (firstName, lastName) => {
    if(firstName && lastName){
      this.setState({
        actors: [...this.state.actors, {firstName, lastName}], 
        valueNameActor: '',
        valueLastNameActor: '',
      })
    }
    return;
  }

  onChangeInput = (e, input) => {
    this.setState({[input]: e.target.value});
  }


  onSubmitAddMovie = (e) => {
    e.preventDefault();
    let {valueTitle, valueYear, valueFormat, actors} = this.state;
    if(valueTitle && valueYear){
      console.log('add');
      this.props.addMovieFunc({title: valueTitle, year: +valueYear, format: valueFormat, actors});
      alert('Фильм добавлен');
      this.setState({
        valueTitle: '',
        valueYear: '',
        valueFormat: 'DVD',
        valueNameActor: '',
        valueLastNameActor: '',
        actors: [],
      })
    }

    return;
  }

  render() {
    let { valueTitle, valueYear, valueFormat, valueNameActor, valueLastNameActor, actors } = this.state;
    let fields = [
      {
        component: Input,
        props: {
          id: 'valueTitle',
          type: 'text',
          label: 'Название',
          value: valueTitle,
        }
      },
      {
        component: Input,
        props: {
          id: 'valueYear',
          type: 'number',
          label: 'Год',
          value: valueYear,
        }
      },
      {
        component: Select,
        props: {
          id: 'valueFormat',
          label: 'Формат',
          value: valueFormat,
        }
      },
      {
        component: InputActors,
        props: {
          actors: actors,
          addActorsFunc: this.addActors,
          allProps: [
            {
              id: 'valueNameActor',
              label: 'Имя',
              value: valueNameActor,
            },
            {
              id: 'valueLastNameActor',
              label: 'Фамилия',
              value: valueLastNameActor,
            },
          ]
        }
      },
    ]
    return (
     <div className={s.add}>
      <h3 className={s.title}>Добавить фильм</h3>
      <form className={s.form} ref={(form) => this.form = form}>
        { 
          fields.map((field, index) => {
            const Component = field.component;
            return (
              <Component {...field.props} onChangeInput={this.onChangeInput} key={index} /> )
          })
        }
        <button 
          className={s.btn}
          onClick={this.onSubmitAddMovie}>
          <span className={s.btnName}>Добавить</span>
        </button>
      </form>
    </div>
    );
  }
}

export default withStyles(s)(Add);