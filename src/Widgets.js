import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_article_left">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("First React project", "Pradeep built it.. using react,redux,firebase")}
            {newsArticle("India's Rising Photographer", "Famous for shooting moments, landscapes..")}
            {newsArticle("From being an Employee to a Photographer", "Dreams, don't just happen by sitting there right!!")}
            {newsArticle("React Developer Learning story", "From a Testing applications, to developing real world applications..")}
            {newsArticle("Dream Project", "Travel India, spend more time..! Create Memories, shoot moments...!")}

        </div>
    )
}

export default Widgets