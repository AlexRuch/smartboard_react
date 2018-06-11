import React from 'react';

export default class TextEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entryName: '',
            entryText: '',
        };
        this.addText = this.addText.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount(){
    }

    addText() {
        this.props.addText(this.props.project.projectId, this.state.entryName, this.state.entryText);
    }

    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <section className="add__content add__content--text">
                <form className="add__form form form--text">
                    <label className="form__item">
                        <span className="form__label">Название</span>
                        <input className="form__input" type="text" name="entryName" placeholder="Название текста" autoComplete="off" value={this.state.entryName} onChange={this.changeHandler}/>
                    </label>
                    <label className="form__item">
                        <span className="form__label">Текст</span>
                          <textarea className="form__textarea" name="entryText" rows="10" placeholder="Текст" value={this.state.entryText} onChange={this.changeHandler}></textarea>
                    </label>
                    <button className="form__submit" type="button" onClick={this.addText}>Отправить</button>
                </form>
            </section>
        );
    }
}
