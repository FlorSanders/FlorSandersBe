import React from 'react';
import { Link } from 'gatsby';
import { ImageProvider } from '../components';
import { getDateText } from '../constants';

export default function BlogPreview({ title, subtitle, image, excerpt, slug, tags, date }) {
    var dateText = getDateText(date)
    return (
        <div key={slug} className="columns">
            <Link to={`/posts/${slug}`} className='column is-two-fifth'>
                <ImageProvider name={image} style={{height: '250px', borderRadius: '0.25rem'}} />
            </Link>
            <div className="column">
                <div className="title is-4">
                    <Link to={`/posts/${slug}`} className='has-text-grey-darker' >
                        {title}
                    </Link>
                </div>
                <div className="subtitle is-5">
                    <Link to={`/posts/${slug}`} className='has-text-grey-dark' >
                        {subtitle}
                    </Link>
                </div>
                <div className="block">
                    {excerpt}
                </div>
                <div>
                    {tags.map((tag) => (
                        <div key={tag} className="tag is-light mr-2">
                            {tag}
                        </div>
                    ))}
                </div>
                <div>
                    Posted on {dateText}.
                </div>
            </div>
        </div>
    )
}
