import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';
import cx from 'classnames';


let InputActors = ({onChangeInput, allProps, actors, addActorsFunc}) => (
  <div className={s.labelActors}>
  	<p className={s.nameActors}>Актеры</p>
  	<div className={s.actorsAdd}>
  		<span className={s.mark}>добавлены: </span>
  		{!actors.length ? <span>нету</span> : 
  		    <span className={s.list}>
  		    	{ actors.map((actor, id) => `${actor.firstName} ${actor.lastName}, `)}
  		    </span>
  		}
  	</div> 
  	<div className={s.wrapActor}> 
	  { allProps.map((input, index) => 
		  <label className={cx(s.label, s.other)} key={index}>
		  	{input.label}
			<input 
		      className={s.input}
		      ref={(field) => this[input.id] = field}
		      type='text'
		      value={input.value}
		      onChange={(e) => onChangeInput(e, input.id)} />
		  </label>) 
	  }
	</div>   
      <div className={s.btnActor} 
      	onClick={() => addActorsFunc(this.valueNameActor.value, this.valueLastNameActor.value)}>
      	Добавить актера
      </div>
  </div>
);

export default withStyles(s)(InputActors);


