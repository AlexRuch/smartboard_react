import React from 'react';

export default class EntryPreview extends React.Component {
    render() {
        const SERVER_ADDRESS = 'http://85.95.146.73:8080'
        if(this.props.currentEntry !== undefined){
            if(this.props.currentEntry.contentType === 'TEXT'){
                return(
                    <div className='slide__text'>
                        {this.props.currentEntry.entryText}
                    </div>
                );
            } else if (this.props.currentEntry.contentType === 'IMAGE'){
                const imagePath = SERVER_ADDRESS + this.props.currentEntry.imagePath;
                return(
                    <div className='slide__img'>
                        <img src={imagePath} alt={this.props.currentEntry.name} width='600px'/>
                    </div>
                );
            } else if (this.props.currentEntry.contentType === 'TABLE'){
                const table = this.props.currentEntry.tableRowList.map(row => {
                    return(
                        <li>{row.rowText}</li>
                    );
                });
                return(
                    <div>
                        <style>{this.props.currentEntry.css}</style>
                        <ul className='slide__table'>
                            {table}
                        </ul>
                    </div>
                );
            }
            return(
                <div className="slide__img">
                {this.props.currentEntry.name}
            </div>
            );
        } else {
        return(
            <div className='slide__clear'>
                ВЫБЕРИТЕ СЛАЙД
            </div>
        );

        }
    }
}
