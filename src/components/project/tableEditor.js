import React from 'react';

export default class TeableEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entryName: '',
            tableCSS: ''
        };
        this.addRow = this.addRow.bind(this);
        this.addTable = this.addTable.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }


    addRow() {
        const table = document.querySelector('.row__wrapper');
        const row = document.createElement('input');
        row.type = 'text';
        row.className = 'form__input';
        row.name = 'row';
        row.placeholder = 'Введите текст';
        table.appendChild(row);
    }

    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    addTable() {
        const rowWrapper = document.querySelector('.row__wrapper').children;
        let rowList = [];
        for(let i = 0; i < rowWrapper.length; i++){
            rowList.push(rowWrapper[i].value);
        }

        this.props.addTable(this.props.project.projectId, this.state.entryName, this.state.tableCSS, rowList);
        this.setState({entryName: ''});
        this.setState({tableCSS: ''});
        const wrapper  = document.querySelector('.row__wrapper');
        while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);

        }
    }
    render() {
        return(
             <section className="add__content add__content--table">
                 <form className="add__form form form--table">
                     <label className="form__item">
                        <span className="form__label">Название</span>
                        <input className="form__input" type="text" name="entryName" placeholder="Название таблицы" autoComplete="off" onChange={this.changeHandler} value={this.state.entryName}/>
                    </label>
                    <label className="form__item">
                        <span className="form__label">CSS</span>
                        <textarea className="form__textarea" name="tableCSS" rows="10" placeholder="ul class = slide__table" onChange={this.changeHandler} value={this.state.tableCSS}></textarea>
                    </label>
                    <div className='row__wrapper'></div>
                    <button className="form__add-row" type="button" onClick={this.addRow}>Добавить строку</button>
                    <button className="form__submit" type="button" onClick={this.addTable}>Отправить</button>
                 </form>
             </section>

        );
    }
}
