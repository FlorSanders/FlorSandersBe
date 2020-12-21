import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export default function BlogPreview({title, subtitle, image, excerpt, slug, tags, date}) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateObject = new Date(date);
    var day = dateObject.getDate();
    var month = monthNames[dateObject.getMonth()];
    var year = dateObject.getFullYear();
    return(
        <div key={slug} className="columns">
            <Link to={`/posts/${slug}`} className='column is-two-fifth'>
                <Img fluid={image} />
            </Link>
            <div className="column">
                <div className="title is-4">
                    <Link to={`/posts/${slug}` } className='has-text-grey-darker' >
                        {title}
                    </Link>
                </div>
                <div className="subtitle is-5">
                    <Link to={`/posts/${slug}` } className='has-text-grey-dark' >
                        {subtitle}
                    </Link>
                </div>
                <div className="block">
                    {excerpt}
                </div>
                <div>
                    {tags.map((tag) => (
                        <div key="tag" className="tag is-light mr-2">
                            {tag}
                        </div>
                    ))}
                </div>
                <div>
                    Posted on {month} {day}{day===1?'st':(day===2?'nd':(day===3?'rd':'th'))}, {year}.
                </div>
            </div>
        </div>
    )
}
