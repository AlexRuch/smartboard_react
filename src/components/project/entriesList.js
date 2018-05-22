import React from 'react';

export default class EntriesList extends React.Component {
    render() {
        const entriesList = this.props.entriesList;
        let entries = '';

        if(entriesList !== undefined && entriesList.length > 0) {
            entries = entriesList.map(entry =>{
                if(entry.entryPosition === 1){
                    return(
                        <div class="slide__description slide__description--active">
                            <div class="slide__controls">
                                <button class="slide__arrow slide__arrow--down">&#11015;</button>
                            </div>
                            <p class="slide__name">{ entry.name }</p>
                        </div>
                    );
                } else if(entry.entryPosition === entriesList.length){
                    return(
                        <div class="slide__description">
                            <div class="slide__controls">
                                <button class="slide__arrow slide__arrow--up">&#11014;</button>
                            </div>
                            <p class="slide__name">{ entry.name }</p>
                        </div>
                    );
                } else {
                    return(
                        <div class="slide__description">
                            <div class="slide__controls">
                                <button class="slide__arrow slide__arrow--up">&#11014;</button>
                                <button class="slide__arrow slide__arrow--down">&#11015;</button>
                            </div>
                            <p class="slide__name">{ entry.name }</p>
                        </div>
                    );
                }
            }
            );
        }

        return (
            <div class="slide__list">
                { entries }
            </div>
        );
    }
}
