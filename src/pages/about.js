import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaCheck } from 'react-icons/fa';
import { Layout, Quote, ImageProvider } from '../components';

export default function About({ data }) {
    var image = data.file.childImageSharp.fluid;

    return (
        <Layout title='About' image={image}>
            <div className="section pb-0">
                <Quote attribution="André Gide">
                    Believe those who are seeking the truth; doubt those who find it.
                </Quote>
            </div>
            <div className="section pb-0">
                <div className="title is-3">
                    About me
                </div>
                <div className="columns">
                    <div className="column is-two-fifths">
                        <ImageProvider name='profile_picture1' style={{ borderRadius: '0.25rem' }} />
                    </div>
                    <div className="column">
                        <div className="block">
                            Hi! My name is Flor Sanders. <br/>
                            I am a {Math.floor((new Date() - new Date('1999-07-06')) / (31557600000))} year old engineering student at Ghent University. 
                            Ever since I was young(er) I've had a fascination with science and technology, starting to build websites and computers and experimenting with 3D printing and Arduino boards from secondary school onwards.
                        </div>

                        <div className="block">
                            Besides engineering I enjoy cooking, play the guitar, like reading and have a general interest in a broad range of other subjects, from economy and entrepreneurship to psychology and (armchair) philosophy.
                        </div>

                        <div className="block">
                            This website serves as my online home, my central hub for sharing things on the internet, either professionally or personally.
                        </div>
                    </div>
                </div>
            </div>

            <div className="section pb-0">
                <div className="title is-3">
                    What I'm working on
                </div>
                <div className="block">
                    <FaCheck /> Studying for my master's degree in electrical, electronics and communication engineering at <a href="https://www.ugent.be" target="_blank" rel="noopener noreferrer">UGent</a>. <br/>
                    <FaCheck /> Keeping track of the finances as a board member of the student council of the faculty of engineering and architecture: <a href="https://fris.ugent.be/" target="_blank" rel="noopener noreferrer">FRiS</a>. <br/>
                    <FaCheck /> Defending the interests of students as a student representative and a member of praesidium at <a href="https://vtk.ugent.be/" target="_blank" rel="noopener noreferrer">VTK Gent</a>. <br/>
                    <FaCheck /> <Link to="/blog">Writing</Link> about my experiences, projects and other subjects that interest me. <br/>
                    <FaCheck /> Freelance software development and IT consultancy. Read more on the <Link to="/services">services</Link> page. <br/> <br/>
                    Want to add something to this list? Feel free to <Link to="/contact">reach out</Link>!
                </div>
            </div>

            <div className="section">
                <div className="title is-3">
                    Spare time
                </div>

                <div className="block">
                    In my spare time I like to do creative things, explore my interests and of course spend time with friends and family.
                </div>

                <div className="columns">
                    <div className="column is-flex">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name="about_cooking" style={{ height: '12.5rem' }} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    Cooking
                                </div>
                                <div className="block">
                                    I absolutely love eating tasty food, which is exactly the reason I started cooking at 14 years old.
                                </div>
                                <div className="block">
                                    In the summer I volunteer as a cook and kitchen responsible at the camps of Clip Taalvakanties. <br />
                                    <Link to="/posts/cookingatclip">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name="about_travel" style={{ height: '12.5rem' }} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    Travel
                                </div>
                                <div className="block">
                                    Travelling not only covers my interest of seeing new places and having novel experiences, they also offer the perfect opportunity to spend quality time with friends and family.
                                </div>
                                <div className="block">
                                    Occasionally I share my experiences in a blog post. <br />
                                    <Link to="/posts/westhighlandway">Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-flex">
                        <div className="card">
                            <div className="card-image">
                                <ImageProvider name="about_guitar" style={{ height: '12.5rem' }} />
                            </div>
                            <div className="card-content">
                                <div className="subtitle is-4">
                                    Making music
                                </div>
                                <div className="block">
                                    I am an amateur guitarist and am learning to play the piano as well.
                                </div>
                                <div className="block">
                                    In the future I want to learn more about music theory and experiment with (digital) music production.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export const query = graphql`
    query {
        file(name: { eq: "about_background" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`