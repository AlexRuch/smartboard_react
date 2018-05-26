import React from 'react';

export default class ImageEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entryName: ''
        };
        this.addImage = this.addImage.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    addImage(){
        this.props.addImage(this.props.project.projectId, this.state.entryName, document.querySelector('.input__image').files[0]);
    }

    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return(
            <section className="add__content add__content--img">
                <form className="add__form form form--table">
                    <label className="form__item">
                        <span className="form__label">Название</span>
                        <input className="form__input" type="text" name="entryName" placeholder="Название изображения" autoComplete="off" value={this.state.entryName} onChange={this.changeHandler}/>
                    </label>
                    <input className="form__input input__image" type="file" name="image" placeholder="Выберите файл" autoComplete="off" />
                    <button className="form__submit" type="button" onClick={this.addImage}>Отправить</button>
                </form>
            </section>
        );
    }
}
