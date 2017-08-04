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
      errorTitle: false,
      valueYear: '',
      errorYear: false,
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
    } else {
      alert('Введите полностью имя и фамилию актера');
    }
  }

  onChangeInput = (e, input) => {
    this.setState({[input]: e.target.value});
  }


  onSubmitAddMovie = (e) => {
    e.preventDefault();
    let {valueTitle, valueYear, valueFormat, actors} = this.state;
    if(valueTitle && valueYear){
      this.props.addMovieFunc({title: valueTitle, year: +valueYear, format: valueFormat, actors});
      alert('Фильм добавлен');
      this.setState({
        valueTitle: '',
        valueYear: '',
        valueFormat: 'DVD',
        errorTitle: false,
        errorYear: false,
        valueNameActor: '',
        valueLastNameActor: '',
        actors: [],
      })
    } else if(!valueTitle){
      this.setState({errorTitle: true});
    } else if(!valueYear){
      this.setState({errorYear: true});
    }

    return;
  }

  render() {
    let { valueTitle, 
      valueYear, 
      valueFormat, 
      valueNameActor, 
      valueLastNameActor, 
      actors, 
      errorYear,
      errorTitle,
    } = this.state;

    let fields = [
      {
        component: Input,
        props: {
          id: 'valueTitle',
          type: 'text',
          label: 'Название',
          value: valueTitle,
          error: errorTitle,
        }
      },
      {
        component: Input,
        props: {
          id: 'valueYear',
          type: 'number',
          label: 'Год',
          value: valueYear,
          error: errorYear,
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