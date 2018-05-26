import React from 'react';

export default class EntriesList extends React.Component {

    constructor(props){
        super(props);
        this.editEntryPosition = this.editEntryPosition.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }

    editEntryPosition(e) {
        console.log(this.props.projectId + " | " + e.target.name + " | " + e.target.value);
        this.props.changePosition(this.props.project.projectId, e.target.name, e.target.value);
    }

    deleteEntry(e){
        console.log(e.target);
        this.props.deleteEntry(e.target.id);
    }

    

    render() {
        const entriesList = this.props.entriesList;
        let entries = '';

        if(entriesList !== undefined && entriesList.length > 0) {
            entries = entriesList.map(entry =>{
                if(entry.entryPosition === 1){
                    if(entriesList.length === 1){
                        return(
                            <div key={entry.entryId} className="slide__description slide__description--active">
                                <p className="slide__name">{ entry.name }</p>
                                <button id={entry.entryId} className="slide__arrow slide__arrow--delete" name={ entry.entryPosition } value='DELETE' onClick={ this.deleteEntry }>X</button>
                            </div>
                        );
                    } else {
                    return(
                            <div key={entry.entryId} className="slide__description slide__description--active">
                                <div className="slide__controls">
                                    <button className="slide__arrow slide__arrow--down" name={ entry.entryPosition } value='DOWN' onClick={ this.editEntryPosition }>&#11015;</button>
                                </div>
                                <p className="slide__name">{ entry.name }</p>
                                <button id={entry.entryId} className="slide__arrow slide__arrow--delete" name={ entry.entryPosition } value='DELETE' onClick={ this.deleteEntry }>X</button>
                            </div>
                        );
                    }
                } else if(entry.entryPosition === entriesList.length){
                    return(
                        <div key={entry.entryId} className="slide__description">
                            <div className="slide__controls">
                                <button className="slide__arrow slide__arrow--up" name={ entry.entryPosition } value='UP' onClick={ this.editEntryPosition }>&#11014;</button>
                            </div>
                            <p className="slide__name">{ entry.name }</p>
                            <button id={entry.entryId} className="slide__arrow slide__arrow--delete" name={ entry.entryPosition } value='DELETE' onClick={ this.deleteEntry }>X</button>
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
                            <button id={entry.entryId} className="slide__arrow slide__arrow--delete" name={ entry.entryPosition } value='DELETE' onClick={ this.deleteEntry }>X</button>
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
