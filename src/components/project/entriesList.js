import React from 'react';

export default class EntriesList extends React.Component {

    constructor(props){
        super(props);
        this.editEntryPosition = this.editEntryPosition.bind(this);
    }

    editEntryPosition(e) {
        console.log(this.props.projectId + " | " + e.target.name + " | " + e.target.value);
        this.props.changePosition(this.props.project.projectId, e.target.name, e.target.value);
    }

    

    render() {
        const entriesList = this.props.entriesList;
        let entries = '';

        if(entriesList !== undefined && entriesList.length > 0) {
            entries = entriesList.map(entry =>{
                if(entry.entryPosition === 1){
                    return(
                        <div key={entry.entryId} className="slide__description slide__description--active">
                            <div className="slide__controls">
                                <button className="slide__arrow slide__arrow--down" name={ entry.entryPosition } value='DOWN' onClick={ this.editEntryPosition }>&#11015;</button>
                            </div>
                            <p className="slide__name">{ entry.name }</p>
                        </div>
                    );
                } else if(entry.entryPosition === entriesList.length){
                    return(
                        <div key={entry.entryId} className="slide__description">
                            <div className="slide__controls">
                                <button className="slide__arrow slide__arrow--up" name={ entry.entryPosition } value='UP' onClick={ this.editEntryPosition }>&#11014;</button>
                            </div>
                            <p className="slide__name">{ entry.name }</p>
                        </div>
                    );
                } else {
                    return(
                        <div key={entry.entryId} className="slide__description">
                            <div className="slide__controls">
                                <button className="slide__arrow slide__arrow--up" name={ entry.entryPosition } value='UP' onClick={ this.editEntryPosition }>&#11014;</button>
                                <button className="slide__arrow slide__arrow--down" name={ entry.entryPosition } value='DOWN' onClick={ this.editEntryPosition }>&#11015;</button>
                            </div>
                            <p className="slide__name">{ entry.name }</p>
                        </div>
                    );
                }
            }
            );
        }

        return (
            <div className="slide__list">
                { entries }
            </div>
        );
    }
}
